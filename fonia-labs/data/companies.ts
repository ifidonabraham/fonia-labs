export type Company = {
  slug: string;
  name: string;
  category: string;
  status: string;
  badge: string;
  tagline: string;
  description: string;
  url?: string;
  tier: string;
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
    "slug": "fontech",
    "name": "FonTech",
    "category": "Software Production & Digital Services",
    "status": "Active Company",
    "badge": "A Fonia Labs Company",
    "tagline": "Building websites, apps, platforms, and digital products for businesses.",
    "description": "FonTech is the software production and digital services company under Fonia Labs. It builds premium websites, mobile applications, web platforms, dashboards, product designs, and digital systems for businesses, organizations, brands, and institutions.",
    "url": "https://fontech-site.vercel.app",
    "tier": "Core Company",
    "problem": "Many businesses need a stronger digital presence, better websites, custom platforms, dashboards, or product designs, but they do not always have the structure or technical support to build them properly.",
    "solution": "FonTech helps businesses move from scattered ideas to professional digital products by combining software development, product design, and business-focused digital execution.",
    "users": [
      "Businesses",
      "Startups",
      "Organizations",
      "Schools",
      "Churches",
      "Real estate brands",
      "Health brands",
      "Service providers"
    ],
    "features": [
      "Premium website development",
      "Landing pages",
      "Web applications",
      "Mobile app interfaces",
      "Dashboards",
      "Product design",
      "Brand visuals",
      "3D and interactive web sections"
    ],
    "roadmap": [
      "Expand service packages",
      "Create stronger client onboarding",
      "Add more case studies",
      "Improve public brand presence",
      "Build reusable templates and design systems"
    ],
    "collaboration": "If you need a premium website, mobile app interface, web platform, dashboard, landing page, or digital system for your business, FonTech can help you turn the idea into a clean and professional product.",
    "screenshotSlots": [
      "FonTech website",
      "Portfolio website",
      "OmegaEstate",
      "Dokito",
      "SMaid",
      "ContractFeed"
    ]
  },
  {
    "slug": "omegaestate",
    "name": "OmegaEstate",
    "category": "Property Technology",
    "status": "Featured Company",
    "badge": "A Fonia Labs Company",
    "tagline": "Property discovery and real estate technology for a more organized property experience.",
    "description": "OmegaEstate is a property technology company under Fonia Labs focused on making real estate discovery, property listings, and property management more organized, accessible, and user-friendly.",
    "url": "https://omegaestate.vercel.app",
    "tier": "Featured Company",
    "problem": "Property discovery is often scattered, slow, and difficult to trust. Property seekers face unclear information, incomplete listings, and poor location details.",
    "solution": "OmegaEstate provides a digital platform where property listings can be presented in a cleaner, more organized, and more professional way.",
    "users": [
      "Property seekers",
      "Tenants",
      "Home buyers",
      "Land buyers",
      "Real estate agents",
      "Property managers",
      "Landlords",
      "Estate developers"
    ],
    "features": [
      "Property listings",
      "Search and discovery",
      "Property details",
      "Agent visibility",
      "Map and location support",
      "Responsive experience",
      "Inquiry and contact flow"
    ],
    "roadmap": [
      "Improve property listing quality",
      "Strengthen search and filtering",
      "Add stronger agent tools",
      "Improve map discovery",
      "Add verification signals"
    ],
    "collaboration": "OmegaEstate is open to testers, real estate agents, property managers, landlords, and partners who can help improve the platform and shape it into a stronger property technology company.",
    "screenshotSlots": [
      "Homepage",
      "Property listings",
      "Property details",
      "Agent dashboard",
      "Mobile view",
      "Map feature"
    ]
  },
  {
    "slug": "smaid",
    "name": "SMaid",
    "category": "Retail, Queue & Logistics Support",
    "status": "Featured Company",
    "badge": "A Fonia Labs Company",
    "tagline": "Making supermarket shopping, queueing, and delivery support easier.",
    "description": "SMaid is a retail support and logistics company under Fonia Labs built to improve how supermarkets, shoppers, and delivery workflows operate.",
    "url": "https://smaid.vercel.app",
    "tier": "Featured Company",
    "problem": "Supermarket shopping can become inefficient when customers face long queues, crowded spaces, poor service coordination, and limited delivery support.",
    "solution": "SMaid provides a digital support system for supermarket and retail experiences, including queue support, shopping assistance, delivery coordination, and retail workflow support.",
    "users": [
      "Supermarket customers",
      "Retail shoppers",
      "Supermarket owners",
      "Retail managers",
      "Store assistants",
      "Delivery partners",
      "Logistics teams"
    ],
    "features": [
      "Queue support",
      "Shopping assistance",
      "Delivery coordination",
      "Customer requests",
      "Retail workflow support",
      "Business support",
      "Mobile-friendly experience"
    ],
    "roadmap": [
      "Improve shopping flow",
      "Strengthen queue management",
      "Add supermarket onboarding",
      "Improve delivery coordination",
      "Support pilot testing"
    ],
    "collaboration": "SMaid is open to testers, supermarket operators, retail businesses, delivery partners, and collaborators who want to test it in real retail environments.",
    "screenshotSlots": [
      "Homepage",
      "Customer interface",
      "Queue support flow",
      "Delivery flow",
      "Admin dashboard",
      "Mobile view"
    ]
  },
  {
    "slug": "dokito",
    "name": "Dokito",
    "category": "Health Technology",
    "status": "Featured Company",
    "badge": "A Fonia Labs Company",
    "tagline": "Digital health access, support, and care navigation.",
    "description": "Dokito is a health technology company under Fonia Labs designed to improve access to health support, health records, facility discovery, emergency flows, and digital care experiences.",
    "url": "https://dokito.vercel.app",
    "tier": "Featured Company",
    "problem": "Many people struggle to access health information, nearby facilities, medical support, emergency help, and organized health records when they need them.",
    "solution": "Dokito provides a digital platform for health support, health records, facility discovery, emergency access, and care navigation.",
    "users": [
      "Patients",
      "Clinics",
      "Doctors",
      "Health startups",
      "Medical facilities",
      "Care providers",
      "Families",
      "Community health organizations"
    ],
    "features": [
      "Health records",
      "Facility finder",
      "Emergency support",
      "Ask Dokito",
      "Appointments",
      "Prescriptions and notes",
      "Responsive health platform"
    ],
    "roadmap": [
      "Improve health records",
      "Strengthen facility discovery",
      "Improve emergency flows",
      "Add appointment workflows",
      "Strengthen privacy direction"
    ],
    "collaboration": "Dokito is open to testers, health workers, clinics, medical students, health-tech collaborators, and organizations that want to help improve access to digital health support.",
    "screenshotSlots": [
      "Homepage",
      "Health records",
      "Ask Dokito",
      "Facility finder",
      "Emergency mode",
      "Appointments",
      "Mobile view"
    ],
    "note": "Dokito supports health access and care navigation. It does not replace professional medical diagnosis, treatment, or emergency medical care."
  },
  {
    "slug": "seek",
    "name": "Seek",
    "category": "Opportunity Discovery",
    "status": "Active Company",
    "badge": "A Fonia Labs Company",
    "tagline": "Discover, organize, and act on useful opportunities.",
    "description": "Seek is an opportunity discovery company under Fonia Labs built to help people find, organize, and act on opportunities across education, work, business, funding, personal growth, and career development.",
    "url": "https://seek-beryl.vercel.app",
    "tier": "Featured Company",
    "problem": "Opportunities are everywhere, but they are often scattered, difficult to track, and easy to miss.",
    "solution": "Seek provides a digital platform for discovering, organizing, and tracking useful opportunities across education, work, funding, programs, competitions, and growth.",
    "users": [
      "Students",
      "Job seekers",
      "Founders",
      "Entrepreneurs",
      "Creators",
      "Professionals",
      "Researchers",
      "Freelancers"
    ],
    "features": [
      "Opportunity discovery",
      "Opportunity categories",
      "Deadline awareness",
      "Save and track opportunities",
      "User dashboard",
      "Application support direction",
      "Mobile-friendly experience"
    ],
    "roadmap": [
      "Improve listing quality",
      "Strengthen filtering",
      "Add saved opportunity tracking",
      "Improve deadline reminders",
      "Add personalized feeds"
    ],
    "collaboration": "Seek is open to testers, students, founders, job seekers, opportunity curators, career communities, schools, creators, and professionals.",
    "screenshotSlots": [
      "Homepage",
      "Opportunity dashboard",
      "Opportunity listing",
      "Opportunity details",
      "Saved opportunities",
      "Mobile view"
    ]
  },
  {
    "slug": "contractfeed",
    "name": "ContractFeed",
    "category": "Contract & Opportunity Intelligence",
    "status": "Growth Company",
    "badge": "A Fonia Labs Company",
    "tagline": "Helping businesses discover, organize, and track contract opportunities.",
    "description": "ContractFeed is a contract and opportunity intelligence company under Fonia Labs built to help businesses, suppliers, contractors, consultants, and professionals discover useful contract opportunities and procurement-related information.",
    "url": "https://contractfeed.vercel.app",
    "tier": "Growth Company",
    "problem": "Businesses often miss opportunities because contract information is scattered, difficult to track, poorly organized, or discovered too late.",
    "solution": "ContractFeed provides a digital platform for discovering and tracking contract opportunities, procurement information, tenders, business openings, and opportunity-related updates.",
    "users": [
      "SMEs",
      "Contractors",
      "Suppliers",
      "Consultants",
      "Procurement teams",
      "Business development teams",
      "Startups"
    ],
    "features": [
      "Contract discovery",
      "Opportunity tracking",
      "Business categories",
      "Supplier support",
      "Dashboard experience",
      "Data insights direction",
      "Notifications direction"
    ],
    "roadmap": [
      "Improve discovery",
      "Strengthen filtering",
      "Add saved opportunities",
      "Add alerts",
      "Add supplier profiles",
      "Improve data freshness"
    ],
    "collaboration": "ContractFeed is open to testers, business owners, contractors, suppliers, consultants, procurement professionals, and opportunity-driven users.",
    "screenshotSlots": [
      "Homepage",
      "Opportunities dashboard",
      "Contract listing",
      "Opportunity details",
      "Search/filter",
      "Mobile view"
    ]
  },
  {
    "slug": "stormbridge",
    "name": "StormBridge",
    "category": "Weather & Emergency Intelligence",
    "status": "Growth Company",
    "badge": "A Fonia Labs Company",
    "tagline": "Weather intelligence, disaster preparedness, and emergency support.",
    "description": "StormBridge is a weather and emergency intelligence company under Fonia Labs built to support disaster preparedness, risk awareness, community reporting, and emergency response.",
    "url": "https://stormbridge.vercel.app",
    "tier": "Growth Company",
    "problem": "Disaster preparedness often fails because people do not have the right information at the right time.",
    "solution": "StormBridge provides a digital platform for weather intelligence, risk awareness, disaster preparedness, community reports, alerts, and emergency support.",
    "users": [
      "Households",
      "Communities",
      "Students",
      "Emergency responders",
      "Local authorities",
      "NGOs",
      "Safety organizations"
    ],
    "features": [
      "Weather risk check",
      "Risk analysis",
      "Community reports",
      "Responder dashboard",
      "Offline preparedness",
      "Alerts",
      "Preparedness guidance"
    ],
    "roadmap": [
      "Improve risk checking",
      "Strengthen alerts",
      "Improve reporting",
      "Add map-based reporting",
      "Add multilingual support"
    ],
    "collaboration": "StormBridge is open to testers, emergency responders, NGOs, weather-focused communities, safety organizations, and collaborators.",
    "screenshotSlots": [
      "Homepage",
      "Weather check",
      "Risk result",
      "Community report form",
      "Responder dashboard",
      "Offline preparedness"
    ],
    "note": "StormBridge supports weather awareness and preparedness. It does not replace official emergency services or government warnings."
  },
  {
    "slug": "complyiq",
    "name": "ComplyIQ",
    "category": "Compliance & Risk Intelligence",
    "status": "Growth Company",
    "badge": "A Fonia Labs Company",
    "tagline": "Helping businesses understand compliance, risk, and digital responsibility.",
    "description": "ComplyIQ is a compliance and risk intelligence company under Fonia Labs built to help businesses, platforms, and organizations understand digital risk, website responsibility, compliance gaps, and safer business operations.",
    "url": "https://complyiq99.vercel.app",
    "tier": "Growth Company",
    "problem": "Many organizations use websites, forms, user data, cookies, scripts, dashboards, and digital tools without fully understanding the compliance and risk responsibilities attached to them.",
    "solution": "ComplyIQ provides a digital platform direction for compliance awareness, website risk intelligence, data collection review, digital operations assessment, and structured business guidance.",
    "users": [
      "Small businesses",
      "Startups",
      "Website owners",
      "Digital platforms",
      "Agencies",
      "Compliance teams",
      "Business owners"
    ],
    "features": [
      "Website risk review",
      "Data collection awareness",
      "Compliance guidance",
      "Business risk scoring",
      "Report generation",
      "Responsibility review",
      "Improvement roadmap"
    ],
    "roadmap": [
      "Improve scanner flow",
      "Strengthen reports",
      "Add compliance categories",
      "Improve recommendations",
      "Add saved reports"
    ],
    "collaboration": "ComplyIQ is open to testers, business owners, website owners, compliance professionals, legal-tech collaborators, agencies, and organizations.",
    "screenshotSlots": [
      "Homepage",
      "Website scanner",
      "Risk report",
      "Compliance guidance",
      "Dashboard",
      "Mobile view"
    ],
    "note": "ComplyIQ supports compliance awareness and risk understanding. It does not replace professional legal advice or certified compliance consultation."
  },
  {
    "slug": "unilagfoodspots",
    "name": "UnilagFoodSpots",
    "category": "Campus & Community Product",
    "status": "Community Product",
    "badge": "A Fonia Labs Product",
    "tagline": "Helping students and visitors find food spots around UNILAG.",
    "description": "UnilagFoodSpots is a campus and community product under Fonia Labs built to help students, visitors, and members of the University of Lagos community discover food spots around campus.",
    "url": "https://unilagfoodspots.vercel.app",
    "tier": "Community & Labs Product",
    "problem": "Students and visitors often need quick information about food spots around campus, but discovery depends on word of mouth or random movement.",
    "solution": "UnilagFoodSpots provides a simple digital product for discovering food spots around the University of Lagos.",
    "users": [
      "UNILAG students",
      "New students",
      "Campus visitors",
      "Food vendors",
      "Campus workers",
      "Student groups"
    ],
    "features": [
      "Food spot discovery",
      "Campus-focused listings",
      "Vendor visibility",
      "Location awareness",
      "Student-friendly experience",
      "Mobile-friendly access"
    ],
    "roadmap": [
      "Improve listings",
      "Add food categories",
      "Add vendor profiles",
      "Improve location details",
      "Add student reviews"
    ],
    "collaboration": "UnilagFoodSpots is open to students, food vendors, campus community members, and collaborators who want to improve food discovery around UNILAG.",
    "screenshotSlots": [
      "Homepage",
      "Food spot listings",
      "Food spot detail",
      "Search",
      "Mobile view"
    ]
  },
  {
    "slug": "deadline-dungeon",
    "name": "Deadline Dungeon",
    "category": "Game & Productivity Experience",
    "status": "Labs Product",
    "badge": "A Fonia Labs Product",
    "tagline": "A game-inspired experience built around deadlines, focus, and task completion.",
    "description": "Deadline Dungeon is a creative labs product under Fonia Labs built around the pressure, challenge, and urgency of deadlines.",
    "url": "https://deadline-dungeon-phi.vercel.app",
    "tier": "Community & Labs Product",
    "problem": "People struggle with deadlines, procrastination, task pressure, and staying focused until work is completed.",
    "solution": "Deadline Dungeon explores how game mechanics, challenge, progress, and urgency can make task completion feel more engaging.",
    "users": [
      "Students",
      "Creators",
      "Developers",
      "Writers",
      "Freelancers",
      "Entrepreneurs",
      "Productivity users"
    ],
    "features": [
      "Deadline-based gameplay",
      "Task challenge direction",
      "Progress motivation",
      "Focus experience",
      "Creative interface",
      "Student and creator use case"
    ],
    "roadmap": [
      "Improve task flow",
      "Add game mechanics",
      "Add achievements",
      "Improve visual experience",
      "Explore gamified task management"
    ],
    "collaboration": "Deadline Dungeon is open to testers, students, creators, developers, designers, productivity users, and collaborators.",
    "screenshotSlots": [
      "Homepage",
      "Gameplay interface",
      "Task screen",
      "Progress screen",
      "Mobile view"
    ]
  },
  {
    "slug": "systemguardian",
    "name": "SystemGuardian",
    "category": "System Protection & Performance",
    "status": "Labs Product",
    "badge": "A Fonia Labs Product",
    "tagline": "Protecting computers from overload, slowdown, and performance pressure.",
    "description": "SystemGuardian is a system protection and performance product under Fonia Labs designed to help users monitor device performance, detect overload risks, and protect computers from extreme CPU, memory, disk, or resource pressure.",
    "url": "",
    "tier": "Community & Labs Product",
    "problem": "Computers can become slow, overloaded, or unresponsive when too many applications, background processes, or heavy tasks are running at the same time.",
    "solution": "SystemGuardian monitors resource usage, detects dangerous performance spikes, identifies heavy processes, and helps users respond before the system becomes unstable.",
    "users": [
      "Software developers",
      "Computer science students",
      "Designers",
      "Content creators",
      "Heavy laptop users",
      "Productivity workers"
    ],
    "features": [
      "Performance monitoring",
      "Overload detection",
      "Process awareness",
      "Early warnings",
      "Safe action suggestions",
      "Developer productivity support",
      "Future automation direction"
    ],
    "roadmap": [
      "Define desktop app architecture",
      "Improve resource monitoring",
      "Build process detection",
      "Add warning thresholds",
      "Test on Windows devices"
    ],
    "collaboration": "SystemGuardian is open to testers, developers, students, Windows users, performance-focused users, and collaborators.",
    "screenshotSlots": [
      "Dashboard",
      "CPU/memory monitoring",
      "Process detection",
      "Warning alert",
      "Settings"
    ]
  }
];

export const tiers = [
  "Core Company",
  "Featured Company",
  "Growth Company",
  "Community & Labs Product"
];

export function getCompany(slug: string) {
  return companies.find((company) => company.slug === slug);
}
