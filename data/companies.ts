export type Company = {
  slug: string;
  name: string;
  category: string;
  status: string;
  badge: string;
  tagline: string;
  description: string;
  url?: string;
  tier: "Core Company" | "Featured Company" | "Growth Company" | "Labs Product";
  problem: string;
  solution: string;
  users: string[];
  features: string[];
  roadmap: string[];
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
    description: "FonTech is the software production and digital services company under Fonia Labs.",
    url: "https://fontech-site.vercel.app",
    tier: "Core Company",
    problem: "Many businesses need a stronger digital presence, better websites, custom platforms, dashboards, or product designs.",
    solution: "FonTech helps businesses move from scattered ideas to professional digital products.",
    users: ["Businesses", "Startups", "Organizations", "Schools", "Churches", "Service providers"],
    features: ["Website development", "Web apps", "Mobile app interfaces", "Dashboards", "Product design", "Brand visuals"],
    roadmap: ["Improve client onboarding", "Add stronger case studies", "Build reusable service packages"]
  },
  {
    slug: "omegaestate",
    name: "OmegaEstate",
    category: "Property Technology",
    status: "Featured Company",
    badge: "A Fonia Labs Company",
    tagline: "Property discovery and real estate technology for a more organized property experience.",
    description: "OmegaEstate focuses on real estate discovery, property listings, and property management technology.",
    url: "https://omegaestate.vercel.app",
    tier: "Featured Company",
    problem: "Property discovery is often scattered, slow, and difficult to trust.",
    solution: "OmegaEstate provides a cleaner and more organized digital property discovery experience.",
    users: ["Property seekers", "Real estate agents", "Landlords", "Property managers"],
    features: ["Property listings", "Search", "Property details", "Agent visibility", "Location support"],
    roadmap: ["Improve listings", "Strengthen filters", "Add stronger agent tools"]
  },
  {
    slug: "smaid",
    name: "SMaid",
    category: "Retail, Queue & Logistics Support",
    status: "Featured Company",
    badge: "A Fonia Labs Company",
    tagline: "Making supermarket shopping, queueing, and delivery support easier.",
    description: "SMaid improves supermarket shopping, queue support, delivery coordination, and retail convenience.",
    url: "https://smaid.vercel.app",
    tier: "Featured Company",
    problem: "Supermarket shopping can become inefficient due to long queues and poor service coordination.",
    solution: "SMaid provides digital support for shopping assistance, queue flow, and delivery coordination.",
    users: ["Shoppers", "Supermarkets", "Retail managers", "Delivery partners"],
    features: ["Queue support", "Shopping assistance", "Delivery coordination", "Retail workflow support"],
    roadmap: ["Improve queue flow", "Add supermarket onboarding", "Improve delivery coordination"]
  },
  {
    slug: "dokito",
    name: "Dokito",
    category: "Health Technology",
    status: "Featured Company",
    badge: "A Fonia Labs Company",
    tagline: "Digital health access, support, and care navigation.",
    description: "Dokito supports health records, facility discovery, emergency flows, and digital care navigation.",
    url: "https://dokito.vercel.app",
    tier: "Featured Company",
    problem: "Many people struggle to access health information, nearby facilities, and organized health records.",
    solution: "Dokito provides a digital platform for health support, records, facility discovery, and care navigation.",
    users: ["Patients", "Clinics", "Doctors", "Families", "Health organizations"],
    features: ["Health records", "Facility finder", "Emergency support", "Ask Dokito", "Appointments"],
    roadmap: ["Improve health records", "Strengthen facility discovery", "Improve emergency flows"],
    note: "Dokito supports health access and care navigation. It does not replace professional medical diagnosis, treatment, or emergency medical care."
  },
  {
    slug: "seek",
    name: "Seek",
    category: "Opportunity Discovery",
    status: "Active Company",
    badge: "A Fonia Labs Company",
    tagline: "Discover, organize, and act on useful opportunities.",
    description: "Seek helps people find, organize, and act on opportunities across education, work, business, funding, and growth.",
    url: "https://seek-beryl.vercel.app",
    tier: "Featured Company",
    problem: "Opportunities are often scattered, difficult to track, and easy to miss.",
    solution: "Seek provides a platform for discovering, organizing, and tracking useful opportunities.",
    users: ["Students", "Job seekers", "Founders", "Creators", "Professionals"],
    features: ["Opportunity discovery", "Categories", "Deadline awareness", "Saved opportunities", "Dashboard"],
    roadmap: ["Improve listing quality", "Add saved tracking", "Add personalized feeds"]
  },
  {
    slug: "contractfeed",
    name: "ContractFeed",
    category: "Contract & Opportunity Intelligence",
    status: "Growth Company",
    badge: "A Fonia Labs Company",
    tagline: "Helping businesses discover, organize, and track contract opportunities.",
    description: "ContractFeed supports contract discovery, tender tracking, and business opportunity intelligence.",
    url: "https://contractfeed.vercel.app",
    tier: "Growth Company",
    problem: "Businesses miss opportunities when contract information is scattered or found too late.",
    solution: "ContractFeed organizes contract and procurement opportunities into a focused platform.",
    users: ["SMEs", "Contractors", "Suppliers", "Consultants"],
    features: ["Contract discovery", "Opportunity tracking", "Supplier support", "Dashboard", "Alerts direction"],
    roadmap: ["Improve discovery", "Add alerts", "Add supplier profiles"]
  },
  {
    slug: "stormbridge",
    name: "StormBridge",
    category: "Weather & Emergency Intelligence",
    status: "Growth Company",
    badge: "A Fonia Labs Company",
    tagline: "Weather intelligence, disaster preparedness, and emergency support.",
    description: "StormBridge supports weather risk awareness, disaster preparedness, community reports, and emergency intelligence.",
    url: "https://stormbridge.vercel.app",
    tier: "Growth Company",
    problem: "Disaster preparedness often fails because people do not have the right information at the right time.",
    solution: "StormBridge provides weather intelligence, risk awareness, community reports, and emergency support.",
    users: ["Communities", "Emergency responders", "NGOs", "Safety organizations"],
    features: ["Weather risk check", "Risk analysis", "Community reports", "Responder dashboard", "Alerts"],
    roadmap: ["Improve risk checking", "Strengthen alerts", "Add map-based reporting"],
    note: "StormBridge supports weather awareness and preparedness. It does not replace official emergency services or government warnings."
  },
  {
    slug: "complyiq",
    name: "ComplyIQ",
    category: "Compliance & Risk Intelligence",
    status: "Growth Company",
    badge: "A Fonia Labs Company",
    tagline: "Helping businesses understand compliance, risk, and digital responsibility.",
    description: "ComplyIQ supports website risk review, compliance awareness, and safer digital operations.",
    url: "https://complyiq99.vercel.app",
    tier: "Growth Company",
    problem: "Many organizations use websites and digital tools without fully understanding compliance risks.",
    solution: "ComplyIQ helps businesses understand website risk and digital responsibility through structured guidance.",
    users: ["Business owners", "Website owners", "Agencies", "Startups"],
    features: ["Website risk review", "Compliance guidance", "Risk scoring", "Report generation"],
    roadmap: ["Improve scanner flow", "Strengthen reports", "Add saved reports"],
    note: "ComplyIQ supports compliance awareness and risk understanding. It does not replace professional legal advice or certified compliance consultation."
  },
  {
    slug: "unilagfoodspots",
    name: "UnilagFoodSpots",
    category: "Campus & Community Product",
    status: "Community Product",
    badge: "A Fonia Labs Product",
    tagline: "Helping students and visitors find food spots around UNILAG.",
    description: "UnilagFoodSpots helps the UNILAG community discover campus food spots.",
    url: "https://unilagfoodspots.vercel.app",
    tier: "Labs Product",
    problem: "Food discovery around campus often depends on word of mouth.",
    solution: "UnilagFoodSpots makes campus food discovery easier and more visible.",
    users: ["UNILAG students", "Visitors", "Food vendors"],
    features: ["Food spot discovery", "Vendor visibility", "Location awareness", "Mobile-friendly access"],
    roadmap: ["Improve listings", "Add vendor profiles", "Add student reviews"]
  },
  {
    slug: "deadline-dungeon",
    name: "Deadline Dungeon",
    category: "Game & Productivity Experience",
    status: "Labs Product",
    badge: "A Fonia Labs Product",
    tagline: "A game-inspired experience built around deadlines, focus, and task completion.",
    description: "Deadline Dungeon turns deadline pressure into a creative and game-like productivity experience.",
    url: "https://deadline-dungeon-phi.vercel.app",
    tier: "Labs Product",
    problem: "People struggle with deadlines, procrastination, and task pressure.",
    solution: "Deadline Dungeon explores game mechanics, progress, challenge, and urgency as productivity motivation.",
    users: ["Students", "Creators", "Developers", "Writers", "Freelancers"],
    features: ["Deadline-based gameplay", "Task challenges", "Progress motivation", "Focus experience"],
    roadmap: ["Improve game mechanics", "Add achievements", "Improve task flow"]
  },
  {
    slug: "systemguardian",
    name: "SystemGuardian",
    category: "System Protection & Performance",
    status: "Labs Product",
    badge: "A Fonia Labs Product",
    tagline: "Protecting computers from overload, slowdown, and performance pressure.",
    description: "SystemGuardian monitors device performance and helps protect computers from extreme resource pressure.",
    tier: "Labs Product",
    problem: "Computers can become slow, overloaded, or unresponsive under heavy workload.",
    solution: "SystemGuardian helps users monitor system pressure and respond before the device becomes unstable.",
    users: ["Developers", "Students", "Designers", "Content creators", "Heavy laptop users"],
    features: ["Performance monitoring", "Overload detection", "Process awareness", "Early warnings"],
    roadmap: ["Define desktop architecture", "Improve resource monitoring", "Test on Windows devices"]
  }
];

export const tiers = ["Core Company", "Featured Company", "Growth Company", "Labs Product"] as const;

export function getCompany(slug: string) {
  return companies.find((company) => company.slug === slug);
}
