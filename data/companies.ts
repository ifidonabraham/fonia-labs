export type Tier =
  | "Core Company"
  | "Featured Company"
  | "Growth Venture"
  | "Community Product"
  | "Labs Product";

export type Company = {
  slug: string;
  name: string;
  category: string;
  status: string;
  badge: string;
  tagline: string;
  description: string;
  url?: string;
  tier: Tier;
  problem: string;
  solution: string;
  users: string[];
  features: string[];
  roadmap: string[];
  collaboration: string;
  screenshotSlots: string[];
  note?: string;
};

export const companies: Company[] = [
  {
    slug: "fontech",
    name: "FonTech",
    category: "Software Production & Digital Services",
    status: "Active Company",
    badge: "A Fonia Labs Company",
    tagline: "Building websites, apps, platforms, and digital products for businesses.",
    description:
      "FonTech is the software production and digital services company under Fonia Labs. It builds premium websites, mobile applications, web platforms, dashboards, product designs, and digital systems for businesses, organizations, brands, and institutions.",
    url: "https://fontech-site.vercel.app",
    tier: "Core Company",
    problem:
      "Many businesses need a stronger digital presence, better websites, custom platforms, dashboards, or product designs, but they do not always have the structure or technical support to build them properly.",
    solution:
      "FonTech helps businesses move from scattered ideas to professional digital products by combining software development, product design, and business-focused digital execution.",
    users: [
      "Businesses",
      "Startups",
      "Organizations",
      "Schools",
      "Churches",
      "Real estate brands",
      "Health brands",
      "Service providers",
      "SMEs"
    ],
    features: [
      "Premium website development",
      "Landing pages",
      "Web applications",
      "Mobile app interfaces",
      "Dashboards",
      "Product design",
      "Brand visuals",
      "3D and interactive web sections",
      "Forms, authentication, maps, APIs",
      "Responsive UI",
      "Documentation",
      "Vercel deployment"
    ],
    roadmap: [
      "Improve client onboarding",
      "Add stronger case studies",
      "Build reusable service packages"
    ],
    collaboration:
      "Websites, apps, platforms, design, client projects, and digital systems built for businesses and organizations.",
    screenshotSlots: ["Homepage", "Portfolio website", "Client project mockup", "Dashboard", "Mobile view"],
    note: "Built by FonTech — A Fonia Labs Company."
  },
  {
    slug: "omegaestate",
    name: "OmegaEstate",
    category: "Property Technology",
    status: "Featured Company",
    badge: "A Fonia Labs Company",
    tagline: "Property discovery and real estate technology.",
    description:
      "OmegaEstate is a property technology company focused on making real estate discovery, property listings, and property management more organized and accessible.",
    url: "https://omegaestate.vercel.app",
    tier: "Featured Company",
    problem: "Finding property, managing listings, and connecting buyers or renters with agents is often scattered, slow, and unstructured.",
    solution:
      "OmegaEstate provides a digital property platform where users can explore listings, view property details, and connect with real estate opportunities through a cleaner, more organized experience.",
    users: [
      "Property seekers",
      "Tenants",
      "Buyers",
      "Agents",
      "Landlords",
      "Property managers",
      "Estate developers"
    ],
    features: [
      "Property listings",
      "Search and discovery",
      "Property details",
      "Real estate contact flow",
      "Map/location support",
      "Agent visibility",
      "Responsive experience"
    ],
    roadmap: ["Improve listings", "Strengthen filters", "Add stronger agent tools"],
    collaboration:
      "Property discovery, listings, agents, landlords, and real estate onboarding.",
    screenshotSlots: ["Homepage", "Property listing", "Property details", "Agent dashboard", "Map view"]
  },
  {
    slug: "smaid",
    name: "SMaid",
    category: "Retail, Queue & Logistics Support",
    status: "Featured Company",
    badge: "A Fonia Labs Company",
    tagline: "Making supermarket shopping, queueing, and delivery support easier.",
    description:
      "SMaid is built to support supermarkets, shoppers, and delivery workflows by improving how people queue, shop, request support, and manage logistics around retail experiences.",
    url: "https://smaid.vercel.app",
    tier: "Featured Company",
    problem:
      "Supermarket shopping can become inefficient because of long queues, crowded spaces, poor service coordination, and limited delivery support.",
    solution:
      "SMaid provides digital support for supermarket and retail experiences, including queue support, shopping assistance, delivery coordination, and workflow support.",
    users: [
      "Supermarket customers",
      "Retail shoppers",
      "Supermarket owners",
      "Retail managers",
      "Store assistants",
      "Delivery partners",
      "Logistics teams"
    ],
    features: [
      "Queue support",
      "Shopping assistance",
      "Delivery coordination",
      "Customer requests",
      "Retail workflow support",
      "Business support",
      "Mobile-friendly experience"
    ],
    roadmap: ["Improve queue flow", "Add supermarket onboarding", "Improve delivery coordination"],
    collaboration:
      "Supermarket shopping, queue support, delivery support, retail operations, and logistics.",
    screenshotSlots: ["Homepage", "Customer interface", "Queue support flow", "Delivery flow", "Admin dashboard"]
  },
  {
    slug: "dokito",
    name: "Dokito",
    category: "Health Technology",
    status: "Featured Company",
    badge: "A Fonia Labs Company",
    tagline: "Digital health access, support, and care navigation.",
    description:
      "Dokito is a health technology platform designed to improve access to health support, health records, facility discovery, emergency flows, and digital care experiences.",
    url: "https://dokito.vercel.app",
    tier: "Featured Company",
    problem:
      "Many people struggle to access health information, nearby facilities, medical support, emergency help, and organized health records.",
    solution:
      "Dokito provides a digital platform for health support, health records, facility discovery, emergency access, and care navigation.",
    users: [
      "Patients",
      "Clinics",
      "Doctors",
      "Health startups",
      "Medical facilities",
      "Care providers",
      "Families",
      "Community health organizations"
    ],
    features: [
      "Health records",
      "Facility finder",
      "Emergency support",
      "Ask Dokito",
      "Appointments",
      "Prescriptions and notes",
      "Responsive health platform"
    ],
    roadmap: ["Improve health records", "Strengthen facility discovery", "Improve emergency flows"],
    collaboration:
      "Digital health access, facility discovery, records, and emergency support.",
    screenshotSlots: [
      "Homepage",
      "Health records",
      "Ask Dokito",
      "Facility finder",
      "Emergency mode",
      "Appointments"
    ],
    note:
      "Dokito supports health access and care navigation. It does not replace professional medical diagnosis, treatment, or emergency medical care."
  },
  {
    slug: "contractfeed",
    name: "ContractFeed",
    category: "Contract & Opportunity Intelligence",
    status: "Growth Venture",
    badge: "A Fonia Labs Venture",
    tagline: "Helping businesses discover and track contract opportunities.",
    description:
      "ContractFeed helps businesses, suppliers, and professionals discover contract opportunities, procurement information, and business openings in a more organized way.",
    url: "https://contractfeed.vercel.app",
    tier: "Growth Venture",
    problem:
      "Businesses often miss opportunities because contract information is scattered, difficult to track, poorly organized, or discovered too late.",
    solution:
      "ContractFeed provides a digital platform for discovering and tracking contract opportunities, procurement information, tenders, business openings, and opportunity-related updates.",
    users: [
      "SMEs",
      "Contractors",
      "Suppliers",
      "Consultants",
      "Procurement teams",
      "Business development teams",
      "Startups"
    ],
    features: [
      "Contract discovery",
      "Opportunity tracking",
      "Categories",
      "Supplier support",
      "Dashboard",
      "Data insights direction",
      "Notifications direction"
    ],
    roadmap: ["Improve discovery", "Add alerts", "Add supplier profiles"],
    collaboration: "Contract discovery, procurement, tenders, and business opportunities.",
    screenshotSlots: ["Dashboard", "Contract listing", "Opportunity detail", "Search/filter", "Mobile view"]
  },
  {
    slug: "stormbridge",
    name: "StormBridge",
    category: "Weather & Emergency Intelligence",
    status: "Growth Venture",
    badge: "A Fonia Labs Venture",
    tagline: "Weather intelligence and disaster preparedness support.",
    description:
      "StormBridge is built for weather intelligence, disaster preparedness, risk awareness, emergency reporting, and community support during environmental or safety-related events.",
    url: "https://stormbridge.vercel.app",
    tier: "Growth Venture",
    problem:
      "Disaster preparedness often fails because people do not have the right information at the right time.",
    solution:
      "StormBridge provides weather intelligence, risk awareness, disaster preparedness, community reports, alerts, and emergency support.",
    users: [
      "Households",
      "Communities",
      "Students",
      "Emergency responders",
      "Local authorities",
      "NGOs",
      "Safety organizations"
    ],
    features: [
      "Weather risk check",
      "Risk analysis",
      "Community reports",
      "Responder dashboard",
      "Offline preparedness",
      "Alerts",
      "Preparedness guidance"
    ],
    roadmap: ["Improve risk checking", "Strengthen alerts", "Add map-based reporting"],
    collaboration:
      "Weather risk, disaster preparedness, emergency awareness, and community reports.",
    screenshotSlots: [
      "Weather check",
      "Risk result",
      "Community report form",
      "Responder dashboard",
      "Offline preparedness"
    ],
    note:
      "StormBridge supports weather awareness and preparedness. It does not replace official emergency services or government warnings."
  },
  {
    slug: "seek",
    name: "Seek",
    category: "Opportunity Discovery",
    status: "Growth Venture",
    badge: "A Fonia Labs Venture",
    tagline: "Discover, track, and act on useful opportunities.",
    description:
      "Seek is an opportunity discovery system designed to help users find, organize, and act on opportunities across education, work, business, funding, and personal growth.",
    url: "https://seek-beryl.vercel.app",
    tier: "Growth Venture",
    problem:
      "Opportunities are everywhere, but they are often scattered, difficult to track, and easy to miss.",
    solution:
      "Seek provides a digital platform for discovering, organizing, and tracking useful opportunities across education, work, funding, programs, competitions, and growth.",
    users: [
      "Students",
      "Job seekers",
      "Founders",
      "Entrepreneurs",
      "Creators",
      "Professionals",
      "Researchers",
      "Freelancers",
      "Grant seekers",
      "Scholarship applicants",
      "Program applicants"
    ],
    features: [
      "Opportunity discovery",
      "Categories",
      "Deadline awareness",
      "Save and track",
      "Dashboard",
      "Application support direction",
      "Mobile-friendly experience"
    ],
    roadmap: ["Improve listing quality", "Add saved tracking", "Add personalized feeds"],
    collaboration:
      "Opportunities, scholarships, jobs, funding, programs, and growth discovery.",
    screenshotSlots: ["Opportunity dashboard", "Listing", "Details", "Saved opportunities", "Mobile view"]
  },
  {
    slug: "complyiq",
    name: "ComplyIQ",
    category: "Compliance & Risk Intelligence",
    status: "Growth Venture",
    badge: "A Fonia Labs Venture",
    tagline: "Helping businesses understand compliance, risk, and digital responsibility.",
    description:
      "ComplyIQ is built to support businesses with compliance awareness, website risk intelligence, digital operations review, and structured guidance for safer business systems.",
    url: "https://complyiq99.vercel.app",
    tier: "Growth Venture",
    problem:
      "Many organizations use websites, forms, user data, cookies, scripts, dashboards, and digital tools without fully understanding the compliance and risk responsibilities attached to them.",
    solution:
      "ComplyIQ provides compliance awareness, website risk intelligence, data collection review, digital operations assessment, and structured business guidance.",
    users: [
      "Small businesses",
      "Startups",
      "Website owners",
      "Digital platforms",
      "Agencies",
      "Compliance teams",
      "Business owners"
    ],
    features: [
      "Website risk review",
      "Data collection awareness",
      "Compliance guidance",
      "Business risk scoring",
      "Report generation",
      "Platform responsibility review",
      "Improvement roadmap"
    ],
    roadmap: ["Improve scanner flow", "Strengthen reports", "Add saved reports"],
    collaboration:
      "Website risk, compliance awareness, data collection review, and digital responsibility.",
    screenshotSlots: ["Scanner", "Risk report", "Compliance guidance", "Dashboard", "Mobile view"],
    note:
      "ComplyIQ supports compliance awareness and risk understanding. It does not replace professional legal advice or certified compliance consultation."
  },
  {
    slug: "unilagfoodspots",
    name: "UnilagFoodSpots",
    category: "Campus & Community Product",
    status: "Community Product",
    badge: "A Fonia Labs Product",
    tagline: "Find food spots around UNILAG.",
    description:
      "UnilagFoodSpots is a community product that helps students and visitors discover food spots around the University of Lagos.",
    url: "https://unilagfoodspots.vercel.app",
    tier: "Community Product",
    problem:
      "Students and visitors often need quick information about food spots around campus, but discovery depends on word of mouth or random movement.",
    solution:
      "UnilagFoodSpots provides a simple digital product for discovering food spots around the University of Lagos.",
    users: [
      "UNILAG students",
      "New students",
      "Campus visitors",
      "Food vendors",
      "Campus workers",
      "Student groups"
    ],
    features: [
      "Food spot discovery",
      "Campus listings",
      "Vendor visibility",
      "Location awareness",
      "Student-friendly experience",
      "Mobile-friendly access"
    ],
    roadmap: ["Improve listings", "Add vendor profiles", "Add student reviews"],
    collaboration: "Campus food discovery and vendor visibility.",
    screenshotSlots: ["Food spot listings", "Food spot detail", "Search", "Mobile view"]
  },
  {
    slug: "deadline-dungeon",
    name: "Deadline Dungeon",
    category: "Game & Productivity Experience",
    status: "Labs Product",
    badge: "A Fonia Labs Project",
    tagline: "A game-inspired experience built around deadlines and focus.",
    description:
      "Deadline Dungeon is a creative product that turns deadlines, focus, and productivity pressure into a game-like experience.",
    url: "https://deadline-dungeon-phi.vercel.app",
    tier: "Labs Product",
    problem:
      "People struggle with deadlines, procrastination, task pressure, and staying focused until work is completed.",
    solution:
      "Deadline Dungeon explores how game mechanics, challenge, progress, and urgency can make task completion feel more engaging.",
    users: [
      "Students",
      "Creators",
      "Developers",
      "Writers",
      "Freelancers",
      "Entrepreneurs",
      "Gamified productivity users"
    ],
    features: [
      "Deadline-based gameplay",
      "Task challenge direction",
      "Progress motivation",
      "Focus experience",
      "Creative interface",
      "Student and creator use case"
    ],
    roadmap: ["Improve game mechanics", "Add achievements", "Improve task flow"],
    collaboration: "Gamified productivity and deadline management.",
    screenshotSlots: ["Gameplay interface", "Task screen", "Progress screen", "Mobile view"]
  },
  {
    slug: "systemguardian",
    name: "SystemGuardian",
    category: "System Protection & Performance",
    status: "Labs Product",
    badge: "A Fonia Labs Project",
    tagline: "Protecting computers from overload, slowdown, and performance failure.",
    description:
      "SystemGuardian is a system protection concept designed to monitor device performance, detect resource pressure, and help prevent CPU, memory, or system overload.",
    tier: "Labs Product",
    problem:
      "Computers can become slow, overloaded, or unresponsive when too many applications, background processes, or heavy tasks are running at the same time.",
    solution:
      "SystemGuardian monitors resource usage, detects dangerous performance spikes, identifies heavy processes, and helps users respond before the system becomes unstable.",
    users: [
      "Software developers",
      "Computer science students",
      "Designers",
      "Content creators",
      "Heavy laptop users",
      "Productivity workers",
      "Low/mid-range PC users"
    ],
    features: [
      "Performance monitoring",
      "Overload detection",
      "Process awareness",
      "Early warnings",
      "Safe action suggestions",
      "Developer productivity support",
      "Future automation direction"
    ],
    roadmap: ["Define desktop architecture", "Improve resource monitoring", "Test on Windows devices"],
    collaboration: "System performance monitoring and overload protection.",
    screenshotSlots: [
      "Dashboard",
      "CPU/memory monitoring",
      "Process detection",
      "Warning alert",
      "Settings"
    ]
  }
];

export const tiers: Tier[] = [
  "Core Company",
  "Featured Company",
  "Growth Venture",
  "Community Product",
  "Labs Product"
];

export const tierMeta: Record<Tier, { label: string; description: string }> = {
  "Core Company": {
    label: "Core Company",
    description: "The software production engine that builds and powers the Fonia Labs ecosystem."
  },
  "Featured Company": {
    label: "Featured Companies",
    description: "Active companies leading the Fonia Labs ecosystem across key industries."
  },
  "Growth Venture": {
    label: "Growth Ventures",
    description: "Ventures building intelligence platforms across business, weather, compliance, and opportunity discovery."
  },
  "Community Product": {
    label: "Community Products",
    description: "Focused community products that serve specific groups and open the door to future industries."
  },
  "Labs Product": {
    label: "Labs Products",
    description: "Creative experiments and tools built under the Fonia Labs innovation umbrella."
  }
};

export function getCompany(slug: string) {
  return companies.find((company) => company.slug === slug);
}

export function companiesByTier(tier: Tier) {
  return companies.filter((company) => company.tier === tier);
}
