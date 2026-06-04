export const STATS = [
  { value: 50, suffix: "+", label: "Jobs Completed" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: 100, suffix: "%", label: "Licensed & Insured" },
] as const;

export const PROJECTS = [
  {
    title: "Modern Kitchen Renovation",
    category: "Residential",
    image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
    description:
      "Complete electrical fit-out including under-cabinet LED lighting and smart switches.",
  },
  {
    title: "Boutique Café Lighting",
    category: "Commercial",
    image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg",
    description:
      "Custom pendant and track lighting design for a Brunswick café.",
  },
  {
    title: "Heritage Home Rewire",
    category: "Residential",
    image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
    description:
      "Full rewire of a Victorian-era home preserving heritage character.",
  },
  {
    title: "Office Fit-Out",
    category: "Commercial",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    description:
      "Data cabling, power distribution, and lighting for a Southbank office.",
  },
  {
    title: "Outdoor Entertainment Area",
    category: "Residential",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    description:
      "Weatherproof outdoor lighting and power for an alfresco entertaining space.",
  },
  {
    title: "Switchboard Upgrade",
    category: "Safety",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    description:
      "Modern safety switch installation replacing an outdated ceramic fuse board.",
  },
] as const;

// Richer dataset used by the dedicated /projects showcase page.
// First entry is featured; the remainder fill the gallery grid.
export const PROJECT_SHOWCASE = [
  {
    title: "Fitzroy Warehouse Conversion",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    description:
      "A full electrical fit-out of a heritage brick warehouse turned creative studio — exposed conduit runs, three-phase distribution, and a layered lighting scheme that keeps the raw character intact while meeting every compliance standard.",
    location: "Fitzroy, VIC",
    year: "2025",
    scope: ["Three-phase power", "Architectural lighting", "Data & comms"],
  },
  {
    title: "Modern Kitchen Renovation",
    category: "Residential",
    image:
      "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
    description:
      "Complete electrical fit-out with under-cabinet LED lighting and smart switches.",
    location: "Carlton, VIC",
    year: "2025",
    scope: ["LED lighting", "Smart switches", "Appliance circuits"],
  },
  {
    title: "Boutique Café Lighting",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg",
    description:
      "Custom pendant and track lighting design for a bustling Brunswick café.",
    location: "Brunswick, VIC",
    year: "2024",
    scope: ["Pendant design", "Track lighting", "Dimming control"],
  },
  {
    title: "Heritage Home Rewire",
    category: "Residential",
    image:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
    description:
      "Full rewire of a Victorian-era home, preserving its period character throughout.",
    location: "Fitzroy North, VIC",
    year: "2024",
    scope: ["Full rewire", "Heritage care", "Switchboard upgrade"],
  },
  {
    title: "Southbank Office Fit-Out",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    description:
      "Data cabling, power distribution, and energy-efficient lighting for a corporate tenancy.",
    location: "Southbank, VIC",
    year: "2024",
    scope: ["Structured cabling", "Power distribution", "LED retrofit"],
  },
  {
    title: "Alfresco Entertainment Area",
    category: "Residential",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    description:
      "Weatherproof outdoor lighting and power for a year-round alfresco entertaining space.",
    location: "Hawthorn, VIC",
    year: "2024",
    scope: ["Weatherproof power", "Garden lighting", "Outdoor heating"],
  },
  {
    title: "Switchboard Safety Upgrade",
    category: "Safety",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    description:
      "Replacing an outdated ceramic fuse board with modern circuit breakers and RCDs.",
    location: "Richmond, VIC",
    year: "2025",
    scope: ["Safety switches", "Circuit breakers", "Compliance testing"],
  },
  {
    title: "After-Hours Fault Restoration",
    category: "Emergency",
    image:
      "https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg",
    description:
      "Rapid 2am callout to diagnose and restore power to a Collingwood restaurant before service.",
    location: "Collingwood, VIC",
    year: "2025",
    scope: ["24/7 callout", "Fault finding", "Power restoration"],
  },
  {
    title: "Retail Shopfit Lighting",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg",
    description:
      "Feature display lighting and clean power layout for a new Chapel Street boutique.",
    location: "South Yarra, VIC",
    year: "2024",
    scope: ["Display lighting", "Shopfit power", "Emergency lighting"],
  },
] as const;
