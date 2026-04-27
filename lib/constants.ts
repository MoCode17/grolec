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
