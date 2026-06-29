/**
 * One-time content seed for Sanity.
 *
 * Populates the dataset with the site's CURRENT content so the Studio opens
 * already filled in (and so Phase 2 produces no visible change to the live
 * site). Safe to re-run: it uses fixed document IDs with `createOrReplace`,
 * and uploads each image only once.
 *
 * Run with:
 *   npm run seed
 * which is:
 *   node --env-file=.env.local scripts/seed.mjs
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 *   NEXT_PUBLIC_SANITY_API_VERSION, and
 *   SANITY_API_WRITE_TOKEN  (an "Editor" token from sanity.io/manage -> API -> Tokens)
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "\n✗ Missing config. Add these to .env.local:\n" +
      "    NEXT_PUBLIC_SANITY_PROJECT_ID\n" +
      "    SANITY_API_WRITE_TOKEN  (an Editor token from sanity.io/manage -> API -> Tokens)\n",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

// --- image upload (cached by URL so duplicates upload once) ---
const imageCache = new Map();

function filenameFromUrl(url) {
  const base = new URL(url).pathname.split("/").filter(Boolean).pop() || "image";
  return base.includes(".") ? base : `${base}.jpg`;
}

async function uploadImage(url, alt) {
  if (!imageCache.has(url)) {
    process.stdout.write(`  ↑ uploading ${url.slice(0, 60)}... `);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`fetch failed (${res.status}) for ${url}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload("image", buffer, {
      filename: filenameFromUrl(url),
    });
    imageCache.set(url, asset._id);
    console.log("done");
  }
  return {
    _type: "image",
    asset: { _type: "reference", _ref: imageCache.get(url) },
    ...(alt ? { alt } : {}),
  };
}

// ------------------------------------------------------------------
// Content (mirrors the current hardcoded site copy)
// ------------------------------------------------------------------

const HERO_SUB =
  "Melbourne's trusted electrical contractors. Residential, commercial, and emergency electrical work — done right, on time, and without surprises.";

const services = [
  {
    _id: "service-residential",
    _type: "service",
    title: "Residential",
    slug: { _type: "slug", current: "residential" },
    icon: "residential",
    tagline: "Your home, done right.",
    shortDescription:
      "From power points to full home rewires — reliable electrical solutions for your home, done cleanly and on schedule.",
    homepageFeatures: [
      "Power points & lighting",
      "Safety switches & switchboards",
      "Renovation & new builds",
      "Outdoor & garden lighting",
    ],
    detailItems: [
      { label: "Power Points & Switches", desc: "New installations, relocations, and upgrades to modern standards." },
      { label: "Lighting", desc: "LED downlight installations, feature lighting, outdoor, and sensor lighting." },
      { label: "Safety Switches (RCDs)", desc: "Mandatory compliance testing, upgrades, and new installations." },
      { label: "Switchboard Upgrades", desc: "Upgrade old fuse boards to modern circuit breakers for safety and capacity." },
      { label: "Renovations & New Builds", desc: "Full electrical fit-outs for extensions, kitchens, bathrooms, and new homes." },
      { label: "Outdoor & Garden", desc: "Pergola power, garden lighting, shed connections, and more." },
    ],
    order: 1,
  },
  {
    _id: "service-commercial",
    _type: "service",
    title: "Commercial",
    slug: { _type: "slug", current: "commercial" },
    icon: "commercial",
    tagline: "Built for business.",
    shortDescription:
      "Trusted by Melbourne businesses for fit-outs, maintenance, and data cabling. We work around your schedule.",
    homepageFeatures: [
      "Office & retail fit-outs",
      "Preventative maintenance",
      "Data & communications cabling",
      "Lighting upgrades & controls",
    ],
    detailItems: [
      { label: "Office & Retail Fit-Outs", desc: "Full electrical for new tenancies, shopfits, and office builds." },
      { label: "Preventative Maintenance", desc: "Scheduled inspections and testing to keep your business compliant." },
      { label: "Data & Communications", desc: "Structured cabling, NBN, and data point installations." },
      { label: "Lighting Upgrades", desc: "LED replacements, emergency lighting, and sensor systems." },
      { label: "Three-Phase Power", desc: "Industrial and commercial three-phase installations and upgrades." },
      { label: "Exit & Emergency Lighting", desc: "Compliant AS/NZS 2293 testing and installation." },
    ],
    order: 2,
  },
  {
    _id: "service-emergency",
    _type: "service",
    title: "Emergency",
    slug: { _type: "slug", current: "emergency" },
    icon: "emergency",
    tagline: "When it can't wait.",
    shortDescription:
      "When the power goes out, we respond fast. 24/7 emergency callouts across Melbourne — no job too urgent.",
    homepageFeatures: [
      "24/7 emergency callouts",
      "Fault finding & diagnosis",
      "Switchboard issues",
      "Power outage restoration",
    ],
    detailItems: [
      { label: "24/7 Emergency Callouts", desc: "Available any time of day or night across greater Melbourne." },
      { label: "Fault Finding", desc: "Rapid diagnosis of tripped circuits, shorts, and intermittent faults." },
      { label: "Power Outage Restoration", desc: "Fast-track restoration of power to your home or business." },
      { label: "Switchboard Issues", desc: "Blown fuses, tripping breakers, and damaged switchboard components." },
      { label: "Storm Damage", desc: "Assessing and repairing electrical damage after severe weather." },
      { label: "Burning Smells / Sparking", desc: "Urgent investigation of potential fire hazards — don't wait." },
    ],
    order: 3,
  },
];

const testimonials = [
  {
    _id: "testimonial-1",
    _type: "testimonial",
    quote:
      "Grolec did a full switchboard upgrade and rewire on our 1970s home. Clean, professional, and finished exactly on budget. Wouldn't use anyone else.",
    name: "Michael T.",
    suburb: "Hawthorn",
    rating: 5,
    order: 1,
  },
  {
    _id: "testimonial-2",
    _type: "testimonial",
    quote:
      "We needed an emergency callout at 9pm for a tripped switchboard. They were there in under an hour, sorted it, and didn't overcharge. Genuinely impressive.",
    name: "Sarah K.",
    suburb: "Fitzroy",
    rating: 5,
    order: 2,
  },
  {
    _id: "testimonial-3",
    _type: "testimonial",
    quote:
      "Fitted out our new café in South Yarra. Everything was done to spec, on time, and the team was respectful of our space. Highly recommend for commercial work.",
    name: "James P.",
    suburb: "South Yarra",
    rating: 5,
    order: 3,
  },
];

// Richer showcase set — first item is featured.
const projectShowcase = [
  { title: "Fitzroy Warehouse Conversion", category: "Commercial", image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg", description: "A full electrical fit-out of a heritage brick warehouse turned creative studio — exposed conduit runs, three-phase distribution, and a layered lighting scheme that keeps the raw character intact while meeting every compliance standard.", location: "Fitzroy, VIC", year: "2025", scope: ["Three-phase power", "Architectural lighting", "Data & comms"] },
  { title: "Modern Kitchen Renovation", category: "Residential", image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg", description: "Complete electrical fit-out with under-cabinet LED lighting and smart switches.", location: "Carlton, VIC", year: "2025", scope: ["LED lighting", "Smart switches", "Appliance circuits"] },
  { title: "Boutique Café Lighting", category: "Commercial", image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg", description: "Custom pendant and track lighting design for a bustling Brunswick café.", location: "Brunswick, VIC", year: "2024", scope: ["Pendant design", "Track lighting", "Dimming control"] },
  { title: "Heritage Home Rewire", category: "Residential", image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg", description: "Full rewire of a Victorian-era home, preserving its period character throughout.", location: "Fitzroy North, VIC", year: "2024", scope: ["Full rewire", "Heritage care", "Switchboard upgrade"] },
  { title: "Southbank Office Fit-Out", category: "Commercial", image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg", description: "Data cabling, power distribution, and energy-efficient lighting for a corporate tenancy.", location: "Southbank, VIC", year: "2024", scope: ["Structured cabling", "Power distribution", "LED retrofit"] },
  { title: "Alfresco Entertainment Area", category: "Residential", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg", description: "Weatherproof outdoor lighting and power for a year-round alfresco entertaining space.", location: "Hawthorn, VIC", year: "2024", scope: ["Weatherproof power", "Garden lighting", "Outdoor heating"] },
  { title: "Switchboard Safety Upgrade", category: "Safety", image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg", description: "Replacing an outdated ceramic fuse board with modern circuit breakers and RCDs.", location: "Richmond, VIC", year: "2025", scope: ["Safety switches", "Circuit breakers", "Compliance testing"] },
  { title: "After-Hours Fault Restoration", category: "Emergency", image: "https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg", description: "Rapid 2am callout to diagnose and restore power to a Collingwood restaurant before service.", location: "Collingwood, VIC", year: "2025", scope: ["24/7 callout", "Fault finding", "Power restoration"] },
  { title: "Retail Shopfit Lighting", category: "Commercial", image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg", description: "Feature display lighting and clean power layout for a new Chapel Street boutique.", location: "South Yarra, VIC", year: "2024", scope: ["Display lighting", "Shopfit power", "Emergency lighting"] },
];

async function run() {
  console.log(`\nSeeding dataset "${dataset}" on project ${projectId}...\n`);

  // 1. Singletons that need no image uploads first.
  console.log("• Site settings & contact");
  const siteSettings = {
    _id: "siteSettings",
    _type: "siteSettings",
    phone: "0412 345 678",
    phoneHref: "+61412345678",
    email: "info@grolec.com.au",
    address: "Melbourne, VIC 3000",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345897473!2d144.9537353153167!3d-37.81720797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1621234567890!5m2!1sen!2sau",
    emergencyText: "Emergency line open 24/7",
    businessHours: [
      { day: "Monday – Friday", time: "7:00am – 6:00pm" },
      { day: "Saturday", time: "8:00am – 4:00pm" },
      { day: "Sunday", time: "Emergency only" },
      { day: "Public Holidays", time: "Emergency only" },
    ],
    stats: [
      { value: 50, suffix: "+", label: "Jobs Completed", decimals: 0 },
      { value: 5, suffix: "+", label: "Years Experience", decimals: 0 },
      { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
      { value: 100, suffix: "%", label: "Licensed & Insured", decimals: 0 },
    ],
  };

  console.log("• Home page (uploading Why-Grolec image)");
  const whyImage = await uploadImage(
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    "Grolec electrician at work",
  );
  const homePage = {
    _id: "homePage",
    _type: "homePage",
    hero: {
      eyebrow: "Melbourne Electricians",
      headingLine1: "Powering",
      headingLine2: "Your Ideas.",
      subheading: HERO_SUB,
      trustBadges: ["Licensed & Insured", "Melbourne Local", "Fast Response"],
    },
    trustBar: [
      { title: "Licensed & Insured", subtitle: "Fully compliant & covered" },
      { title: "Melbourne Local", subtitle: "Servicing all suburbs" },
      { title: "Residential & Commercial", subtitle: "All job types covered" },
      { title: "Fast Response", subtitle: "Emergency availability" },
    ],
    why: {
      eyebrow: "Why Grolec",
      heading: "No Surprises. Just Solid Electrical Work.",
      image: whyImage,
      badgeText: "Melbourne Based — Licensed & insured since day one.",
      valuePoints: [
        { title: "Quality Workmanship", desc: "We don't cut corners. Every installation is done to Australian standards, inspected, and left clean." },
        { title: "Upfront Pricing", desc: "No surprise invoices. You'll know the cost before we start — always." },
        { title: "No Fuss, No Drama", desc: "We show up on time, get the job done, and leave your place cleaner than we found it." },
        { title: "Local Melbourne Know-How", desc: "We know Melbourne's housing stock, council requirements, and infrastructure inside out." },
      ],
    },
    servicesIntro: { eyebrow: "What We Do", heading: "Electrical Services Built for Melbourne" },
    projectsIntro: { eyebrow: "Projects", heading: "Our Recent Work" },
    testimonialsIntro: { eyebrow: "Testimonials", heading: "What Clients Say", ratingValue: 4.9, reviewCount: 87 },
  };

  console.log("• About page (uploading story image)");
  const aboutImage = await uploadImage(
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    "Grolec electrician working",
  );
  const aboutPage = {
    _id: "aboutPage",
    _type: "aboutPage",
    hero: {
      _type: "pageHero",
      eyebrow: "Who We Are",
      heading: "About Grolec",
      subtext: "Melbourne's trusted sparky. Built on quality workmanship and old-fashioned reliability.",
    },
    story: {
      eyebrow: "Our Story",
      heading: "Melbourne Born, Trade Proven.",
      paragraphs: [
        "Grolec Electrical Group was founded with a straightforward mission: deliver quality electrical work at honest prices, every time. No shortcuts, no hidden costs, no excuses.",
        "We're Melbourne locals. We know the city's housing stock — from the terraces of Fitzroy to the new builds in Werribee — and we understand what it takes to work in both established homes and commercial environments.",
        "Every job we take on, whether it's a single power point or a full commercial fit-out, gets the same level of attention. We're licensed, fully insured, and committed to workmanship that lasts.",
      ],
      image: aboutImage,
    },
    values: [
      { title: "Quality", desc: "We don't do quick fixes. Every job is done to Australian standards with quality materials and clean finishes." },
      { title: "Reliability", desc: "We show up when we say we will, communicate clearly, and follow through on every commitment." },
      { title: "Value", desc: "Fair, upfront pricing. You'll know exactly what you're paying before we start — no surprises on invoice day." },
    ],
    credentialsHeading: "Licensed & Insured.",
    credentials: [
      "Licensed Electrical Contractor — Victoria",
      "Fully Insured (Public Liability & PI)",
      "Registered with Energy Safe Victoria",
      "Victorian Electrical Worker Licence",
    ],
    coverageArea: "We service metropolitan Melbourne, inner suburbs, and surrounding regions. Not sure if we cover your area? Give us a call.",
    emergencyService: "Electrical emergencies don't wait for business hours. We're available around the clock for urgent callouts.",
    cta: { _type: "ctaBanner", heading: "Work with a Team You Can Trust", text: "Get a free, no-obligation quote today." },
  };

  const servicesPage = {
    _id: "servicesPage",
    _type: "servicesPage",
    hero: { _type: "pageHero", eyebrow: "What We Do", heading: "Our Services", subtext: "From single-room renovations to full commercial fit-outs — licensed, insured, and built on Melbourne know-how." },
    introEyebrow: "What We Offer",
    introHeading: "Three areas of expertise.",
    cta: { _type: "ctaBanner", heading: "Ready to Get Started?", text: "No obligation quote, usually within 24 hours." },
  };

  const projectsPage = {
    _id: "projectsPage",
    _type: "projectsPage",
    hero: { _type: "pageHero", eyebrow: "Our Work", heading: "Proof in Every Connection.", subtext: "From heritage rewires to commercial fit-outs and 2am emergency callouts — a look at the work Melbourne trusts us with, done right and built to last." },
    featuredEyebrow: "Featured Project",
    galleryEyebrow: "The Portfolio",
    galleryHeading: "More of Our Work",
    galleryText: "Residential, commercial, safety, and emergency jobs delivered across greater Melbourne.",
    cta: { _type: "ctaBanner", heading: "Got a Project in Mind?", text: "No obligation quote, usually within 24 hours." },
  };

  const contactPage = {
    _id: "contactPage",
    _type: "contactPage",
    hero: { _type: "pageHero", eyebrow: "Get in Touch", heading: "Contact Us", subtext: "Free quotes, fast responses. We typically reply within 24 hours on business days." },
    findUsHeading: "Find Us",
    findUsText: "Based in Melbourne CBD, servicing all suburbs.",
    formHeading: "Get a Free Quote",
    formSubtext: "Tell us what you need and we'll get back to you within 24 hours on business days.",
  };

  // 2. Projects (upload each image, dedup by URL).
  console.log("• Projects (uploading images)");
  const projectDocs = [];
  for (let i = 0; i < projectShowcase.length; i++) {
    const p = projectShowcase[i];
    const image = await uploadImage(p.image, p.title);
    projectDocs.push({
      _id: `project-${i + 1}`,
      _type: "project",
      title: p.title,
      category: p.category,
      image,
      description: p.description,
      location: p.location,
      year: p.year,
      scope: p.scope,
      featured: i === 0,
      order: i + 1,
    });
  }

  // 3. Write everything in one transaction.
  console.log("\n• Committing all documents...");
  const tx = client.transaction();
  [
    siteSettings,
    homePage,
    aboutPage,
    servicesPage,
    projectsPage,
    contactPage,
    ...services,
    ...testimonials,
    ...projectDocs,
  ].forEach((doc) => tx.createOrReplace(doc));
  await tx.commit();

  console.log(
    `\n✓ Seeded ${6} pages, ${services.length} services, ${testimonials.length} testimonials, ${projectDocs.length} projects.\n` +
      "  Open /studio to review.\n",
  );
}

run().catch((err) => {
  console.error("\n✗ Seed failed:", err.message);
  process.exit(1);
});
