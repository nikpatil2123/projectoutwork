export type HeroSlide = {
  name: string;
  href: string;
  stories: string[];
};

export const heroSlides: HeroSlide[] = [
  {
    name: "Sayian Drinks",
    href: "/project/sayian-drinks",
    stories: [
      "/images/sayian-drinks-cover-post.avif",
      "/images/sayian-drinks-product-page-mockup.avif",
      "/images/sayian-drinks-desktop-mockup.avif",
      "/images/sayian-drinks-cover.avif",
    ],
  },
  {
    name: "Snaxx",
    href: "/project/snaxx",
    stories: [
      "/images/snaxx-cover.avif",
      "/images/snaxx-product-page-layout.avif",
    ],
  },
  {
    name: "Maison Salva",
    href: "/project/maison-salva",
    stories: [
      "/images/maison-salva-poster.avif",
      "/images/maison-salva-homepage-layout.avif",
      "/images/maison-salva-cover-03.avif",
    ],
  },
  {
    name: "Vendibean",
    href: "/project/vendibean",
    stories: [
      "/images/vendibean-cover-poster.png",
      "/images/vendibean-homepage-layout.avif",
    ],
  },
  {
    name: "Perico",
    href: "/project/perico",
    stories: [
      "/images/perico-cover.avif",
      "/images/perico-product-layout.avif",
    ],
  },
];

export const heroExploreLinks = [
  { label: "Custom Websites", href: "/services/website-design" },
  { label: "Visual Identity", href: "/services/branding" },
  { label: "Ecommerce", href: "/services/ecommerce" },
  { label: "Templates", href: "https://www.silvtemplates.com/" },
  { label: "SEO", href: "/services/search-engine-optimization" },
];

export type Service = {
  title: string;
  href: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Web Design",
    href: "/services/website-design",
    description:
      "We specialize in developing interactive, scalable, brand-oriented, and business-ready customized web design.",
    image: "/images/Frame-427322603.avif",
  },
  {
    title: "Ecommerce",
    href: "/services/ecommerce",
    description:
      "Be it static, customized, or dynamic, we follow industry best practices to develop attractive and highly functional websites.",
    image: "/images/poster-9cbd6156.jpg",
  },
  {
    title: "Visual identity",
    href: "/services/branding",
    description:
      "From brand strategy, naming, and logo design to guidelines, campaigns, and content, we build brands that connect with your target audience.",
    image: "/images/poster-9987ef9f.jpg",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Be it static, customized, or dynamic, we follow industry best practices to develop attractive and highly functional websites.",
    image: "/images/poster-e3489c5b.jpg",
  },
  {
    title: "SEO",
    href: "/services/search-engine-optimization",
    description:
      "Our carefully crafted SEO strategies are designed to increase visibility within the algorithmic search results to deliver relevant, targeted traffic to your website.",
    image: "/images/poster-1e3d34ea.jpg",
  },
];

export const clientLogos = [
  "marley-medical-logo.svg",
  "pms-club-logo.svg",
  "dorell-logo.svg",
  "ceres-cereal-logo.svg",
  "hopscotch-girls-logo.svg",
  "besnugg-logo.svg",
  "couple-and-pie-logo.svg",
  "boxbot-logo.svg",
  "newsette-logo.svg",
  "one-schema-logo.svg",
  "suntiva-cbd-logo.svg",
  "rolli-shades-logo.svg",
  "yuno-botanicals-logo.svg",
  "sunspoken-logo.svg",
  "4am-logo.svg",
  "vendibean-logo.svg",
  "gemini-skincare-logo.svg",
  "doctor-nicks-logo.svg",
  "alset-auto-logo.svg",
  "better-u-logo.svg",
  "newland-logo.svg",
  "inspir-logo.svg",
  "angle-brewery-logo.svg",
  "global-purusit-logo.svg",
  "mystery-hype-logo.svg",
].map((f) => `/images/${f}`);

export type Project = {
  name: string;
  href: string;
  image: string;
  categories: ("web" | "branding" | "ecommerce" | "seo")[];
};

export const projects: Project[] = [
  {
    name: "Snaxx",
    href: "/project/snaxx",
    image: "/images/snaxx-cover.avif",
    categories: ["branding", "ecommerce", "web"],
  },
  {
    name: "Perico",
    href: "/project/perico",
    image: "/images/perico-cover.avif",
    categories: ["ecommerce", "web"],
  },
  {
    name: "Silber AI",
    href: "/project/silber-ai",
    image: "/images/silber-ai-cover.avif",
    categories: ["branding", "web"],
  },
  {
    name: "Sayian Drinks",
    href: "/project/sayian-drinks",
    image: "/images/sayian-drinks-cover.avif",
    categories: ["branding", "ecommerce", "web"],
  },
  {
    name: "Tigris Drinks",
    href: "/project/tigris-drinks",
    image: "/images/tigris-drinks-cover.avif",
    categories: ["web", "ecommerce", "branding"],
  },
  {
    name: "Mystery Hype",
    href: "/project/mystery-hype",
    image: "/images/mystery-hype-cover.avif",
    categories: ["ecommerce", "web"],
  },
  {
    name: "Gray Labs",
    href: "/project/gray-labs",
    image: "/images/gray-labs-cover.avif",
    categories: ["branding", "web", "seo"],
  },
  {
    name: "Cyclone Studio",
    href: "/project/cyclone-studio",
    image: "/images/cyclone-studio-cover.avif",
    categories: ["web", "branding", "seo"],
  },
  {
    name: "Whisper Brush",
    href: "/project/whisper-brush",
    image: "/images/whisper-brush-cover.avif",
    categories: ["ecommerce", "branding", "web"],
  },
  {
    name: "Rayleigh's Burgers",
    href: "/project/rayleighs-burgers",
    image: "/images/rayleighs-burgers-cover.avif",
    categories: ["web", "ecommerce", "branding"],
  },
  {
    name: "Olipop",
    href: "/project/olipop-brand",
    image: "/images/olipop-cover.avif",
    categories: ["web", "ecommerce"],
  },
  {
    name: "Loop Ring",
    href: "/project/loop-ring",
    image: "/images/loop-ring-cover.avif",
    categories: ["web", "branding", "ecommerce", "seo"],
  },
  {
    name: "Kaskade Dental",
    href: "/project/kaskade-dental",
    image: "/images/kaskade-dental-cover.avif",
    categories: ["web", "branding", "ecommerce"],
  },
  {
    name: "Constint App",
    href: "/project/constint-app",
    image: "/images/constint-app-cover.avif",
    categories: ["web", "branding", "seo"],
  },
  {
    name: "Genix Medical",
    href: "/project/genix-medical",
    image: "/images/genix-medical-cover.avif",
    categories: ["web", "branding"],
  },
];

export const pullOutProjects = [
  { name: "Tigris Drinks", href: "/project/tigris-drinks", image: "/images/tigris-drinks-cover.avif" },
  { name: "Mystery Hype", href: "/project/mystery-hype", image: "/images/mystery-hype-cover.avif" },
  { name: "Loop Ring", href: "/project/loop-ring", image: "/images/loop-ring-cover.avif" },
  { name: "Kurama Tennis", href: "/project/kurama-tennis", image: "/images/kurama-tennis-cover.avif" },
  { name: "Lucario AI", href: "/project/lucario-ai", image: "/images/lucario-ai-cover.avif" },
  { name: "Constint App", href: "/project/constint-app", image: "/images/constint-app-cover.avif" },
  { name: "Eros Agency", href: "/project/eros-agency", image: "/images/eros-agency-cover.avif" },
  { name: "Chillcat Drinks", href: "/project/chillcat-drinks", image: "/images/chillcat-drinks-cover.avif" },
  { name: "Sayian Drinks", href: "/project/sayian-drinks", image: "/images/sayian-drinks-cover.avif" },
  { name: "Donutland", href: "/project/donutland", image: "/images/donutland-cover.avif" },
  { name: "Vendibean", href: "/project/vendibean", image: "/images/vendibean-cover-poster.png" },
  { name: "Perico", href: "/project/perico", image: "/images/perico-cover.avif" },
  { name: "Snaxx", href: "/project/snaxx", image: "/images/snaxx-cover.avif" },
];

export type Review = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

export const reviews: Review[] = [
  {
    quote:
      "\"We had the pleasure of working with Silv Studio for the last 2 websites we've built. We are obsessed with our website. His team crushed it! Their creativity is unmatched and they did an excellent job at understanding our objectives to meet our goals.\"",
    name: "Teal Cooper",
    title: "Co-Founder, Vendibean",
    image: "/images/teal-cooper-vendibean.avif",
  },
  {
    quote:
      "\"I was very satisfied with my decision to work with Silv Studio on building the website for my brand, Gemini Skincare. They did a great job putting the site together in a timely fashion. Jon & team are extremely detail-oriented and were open to the feedback I provided them.\"",
    name: "Chris Hughes",
    title: "Founder, Gemini Skincare",
    image: "/images/chris-hughes-gemini-skincare.avif",
  },
  {
    quote:
      "\"Nothing but good things to say about Silv and his team, they were patient and stuck by us throughout the whole website build. They over delivered and this won't be the last time we work with them.\"",
    name: "Shawn Thomas",
    title: "Co-Founder, Elevate Impact",
    image: "/images/shawn-thomas-elevate-impact.avif",
  },
  {
    quote:
      "\"I had a fantastic experience redesigning my website with Silv Studio. Jon did a great job bringing my ideas of aesthetics and functionality to life. I was especially happy that my redesigned site was both visually more impressive and faster than the previous version. Jon was very responsive and completed my edits in a timely manner.\"",
    name: "Samuel Marsh",
    title: "Director of E-Commerce, Global Pursuit",
    image: "/images/samuel-marsh-global-pursuit.avif",
  },
  {
    quote:
      "\"I came to Jon with a vision that was technically complex and outside my own expertise, and he guided the entire process with exceptional patience and clarity. He was consistently communicative, took all of my feedback on board, and translated my ideas into a site that truly reflects my concept. At no point did I feel alone in the process, and that support made all the difference as I brought my project to life.\"",
    name: "Angelle Frett",
    title: "Founder, Stowit",
    image: "/images/angelle-frett-stowit.avif",
  },
  {
    quote:
      "\"I came to Jon with a vision that was technically complex and outside my own expertise, and he guided the entire process with exceptional patience and clarity. He was consistently communicative, took all of my feedback on board, and translated my ideas into a site that truly reflects my concept. At no point did I feel alone in the process, and that support made all the difference as I brought my project to life.\"",
    name: "Justin Mcdonald",
    title: "Head of Operations, Boxbot",
    image: "/images/justin-mcdonald-boxbot.avif",
  },
];

export type AwardBlock = {
  logo: string;
  count: string;
  label: string;
  small?: boolean;
};

export const awardBlocks: AwardBlock[] = [
  { logo: "/images/awwwards-logo.svg", count: "[5]", label: "Honorable Mention award (5)" },
  { logo: "/images/css-winner-logo.svg", count: "[6]", label: "Star award & Site of the Day (7)" },
  { logo: "/images/webflow-logo.svg", count: "[5]", label: "Made in Webflow Selection (8)" },
  { logo: "/images/lapa-logo.svg", count: "[1]", label: "Site Selection (1)", small: true },
  { logo: "/images/cssnectar-logo.svg", count: "[2]", label: "Site of the day (2)" },
  { logo: "/images/orpetron-logo.svg", count: "[2]", label: "Site Selection (2)" },
];

export type AwardAccordionRow = {
  site: string;
  award: string;
  href: string;
};

export type AwardAccordion = {
  title: string;
  rows: AwardAccordionRow[];
};

export const awardAccordions: AwardAccordion[] = [
  {
    title: "Awwwards",
    rows: [
      { site: "Silvs Peanut Butter", award: "Honorable Mention", href: "https://getsilvs.webflow.io/" },
      { site: "Gambit Resort", award: "Honorable Mention", href: "https://gambitresort.webflow.io/" },
      { site: "Angle Brewery", award: "Honorable Mention", href: "https://anglebrewerycompany.webflow.io/" },
      { site: "Silv Studio", award: "Honorable Mention", href: "#" },
      { site: "Gemini Skincare", award: "Honorable Mention", href: "https://gemini-skincare-ecom.webflow.io/" },
    ],
  },
  {
    title: "CSS Winner",
    rows: [
      { site: "Silvs Peanut Butter", award: "Star Selection", href: "https://getsilvs.webflow.io/" },
      { site: "Gambit Resort", award: "Star Selection", href: "https://gambitresort.webflow.io/" },
      { site: "Angle Brewery", award: "Star Selection", href: "https://anglebrewerycompany.webflow.io/" },
      { site: "MZ Banking", award: "Star Selection", href: "https://mzbanking.webflow.io/" },
      { site: "Zura Banking", award: "Star Selection", href: "https://zurabanking.webflow.io/home/home-01" },
      { site: "Sayian Drinks", award: "Star Selection", href: "https://sayian-drinks.webflow.io/homepage/home-01" },
      { site: "Perico Energy", award: "Site of the day", href: "https://pericoenergydrinks.webflow.io/" },
      { site: "Snaxx Foods", award: "Site of the day", href: "https://www.csswinner.com/details/snaxx-chips/19106" },
    ],
  },
  {
    title: "Made in Webflow",
    rows: [
      { site: "Goodroot Pizza", award: "Site Selection", href: "https://goodrootpizza.webflow.io/" },
      { site: "Rogue & Rosy", award: "Site Selection", href: "https://rogue-rosy.webflow.io/" },
      { site: "Wildfox Squad NFT Site Remake", award: "Site Selection", href: "https://wildfox-remake.webflow.io/" },
      { site: "Crossfit Attack Classic", award: "Site Selection", href: "https://crossfitattackclassic.webflow.io/" },
      { site: "Silv Studio", award: "Site Selection", href: "#" },
    ],
  },
  {
    title: "Inspovault",
    rows: [{ site: "Silv Studio", award: "Site Selection", href: "#" }],
  },
  {
    title: "CSS Nectar",
    rows: [
      { site: "Zura Banking", award: "Site of the day", href: "https://zurabanking.webflow.io/home/home-01" },
      { site: "Sayian Drinks", award: "Site of the day", href: "https://sayian-drinks.webflow.io/homepage/home-01" },
    ],
  },
  {
    title: "Orpetron",
    rows: [
      { site: "Zura Banking", award: "Site Selection", href: "https://zurabanking.webflow.io/home/home-01" },
      { site: "Sayian Drinks", award: "Site Selection", href: "https://sayian-drinks.webflow.io/homepage/home-01" },
    ],
  },
  {
    title: "Lapa",
    rows: [{ site: "Silv Studio", award: "Site Selection", href: "https://www.silvstudio.co/" }],
  },
];

export const footerColumns = [
  {
    title: "Menu",
    links: [
      { label: "Projects", href: "/portfolio-projects" },
      { label: "All Services", href: "/services" },
      { label: "About", href: "/about-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "/services/website-design" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Visual Identity", href: "/services/branding" },
      { label: "SEO", href: "/services/search-engine-optimization" },
      { label: "Ecommerce", href: "/services/ecommerce" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Reviews", href: "/testimonials" },
      { label: "Blog Insights", href: "/blog" },
      { label: "Awards", href: "/awards" },
    ],
  },
  {
    title: "Support",
    links: [{ label: "Contact", href: "/contact-us" }],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/silvstudio.co/" },
  { label: "Instagram", href: "https://www.instagram.com/silvstudio.co" },
  { label: "Tiktok", href: "https://www.tiktok.com/@silvstudio" },
  { label: "Youtube", href: "https://www.youtube.com/channel/UCvu9JYUhKCH_IqpcFpS_wGQ" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/silvstudio/" },
  { label: "Dribbble", href: "https://dribbble.com/silvstudio" },
  { label: "Behance", href: "https://www.behance.net/silvstudio" },
  { label: "X", href: "https://x.com/silvstudioco" },
];

export const showreelVideoId = "e27239ee260462163fa8407c08fb8097";
export const streamCustomer = "customer-m1xhyr3uvrl6nmzk";
