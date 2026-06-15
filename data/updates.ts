export type UpdateCategory =
  | "Company Announcements"
  | "Product Milestones"
  | "Build Logs"
  | "Testing Opportunities"
  | "Partnership Updates"
  | "Founder Notes";

export type Update = {
  category: UpdateCategory;
  title: string;
  company: string;
  date: string;
  text: string;
  featured?: boolean;
};

export type TestingOpp = {
  company: string;
  slug: string;
  who: string;
  area: string;
  status: string;
};

export type FounderNote = {
  title: string;
  date: string;
  text: string;
};

export const updateCategories: UpdateCategory[] = [
  "Company Announcements",
  "Product Milestones",
  "Build Logs",
  "Testing Opportunities",
  "Partnership Updates",
  "Founder Notes"
];

export const categoryDescriptions: Record<UpdateCategory, string> = {
  "Company Announcements":
    "New companies, product launches, ecosystem changes, and major public announcements from Fonia Labs.",
  "Product Milestones":
    "Important improvements, feature releases, redesigns, testing progress, and company growth updates.",
  "Build Logs":
    "Behind-the-scenes updates about how products are being designed, built, improved, and prepared for users.",
  "Testing Opportunities":
    "Open calls for testers, early users, feedback, pilot users, collaborators, and product reviewers.",
  "Partnership Updates":
    "New collaborations, partnership interests, industry connections, pilot opportunities, and ecosystem support.",
  "Founder Notes":
    "Thoughts from the founder about the direction, vision, lessons, decisions, and long-term journey of Fonia Labs."
};

export const companyFilters = [
  "All Updates",
  "Fonia Labs",
  "FonTech",
  "OmegaEstate",
  "SMaid",
  "Dokito",
  "Seek",
  "ContractFeed",
  "StormBridge",
  "ComplyIQ",
  "UnilagFoodSpots",
  "Deadline Dungeon",
  "SystemGuardian"
];

export const testingOpportunities: TestingOpp[] = [
  {
    company: "OmegaEstate",
    slug: "omegaestate",
    who: "Property seekers, agents, and landlords",
    area: "Property discovery, listings, and real estate technology.",
    status: "Open"
  },
  {
    company: "SMaid",
    slug: "smaid",
    who: "Supermarket users, shoppers, and retail operators",
    area: "Queue support, shopping assistance, and delivery coordination.",
    status: "Open"
  },
  {
    company: "Dokito",
    slug: "dokito",
    who: "Health workers, clinics, and users interested in health access",
    area: "Digital health access, facility discovery, and emergency support.",
    status: "Open"
  },
  {
    company: "Seek",
    slug: "seek",
    who: "Students, founders, job seekers, and opportunity seekers",
    area: "Opportunity discovery, tracking, and deadline awareness.",
    status: "Open"
  },
  {
    company: "ContractFeed",
    slug: "contractfeed",
    who: "Suppliers, contractors, and businesses",
    area: "Contract discovery and procurement opportunity tracking.",
    status: "Open"
  },
  {
    company: "StormBridge",
    slug: "stormbridge",
    who: "Communities, responders, and safety-focused users",
    area: "Weather risk, disaster preparedness, and emergency reporting.",
    status: "Open"
  },
  {
    company: "ComplyIQ",
    slug: "complyiq",
    who: "Website owners, business owners, and compliance-aware users",
    area: "Website risk review, compliance awareness, and digital responsibility.",
    status: "Open"
  }
];

export const founderNotes: FounderNote[] = [
  {
    title: "Why Fonia Labs exists",
    date: "2025",
    text: "Fonia Labs exists to give structure to ideas. Instead of allowing useful ideas to remain scattered or unfinished, the goal is to shape them into products, test them with users, and grow the strongest ones into companies."
  }
];

export const updates: Update[] = [
  {
    category: "Company Announcements",
    title: "Fonia Labs begins its public ecosystem rollout.",
    company: "Fonia Labs",
    date: "2025",
    text: "Fonia Labs is organizing its companies, products, and platforms into one clear global innovation group. The ecosystem includes FonTech, OmegaEstate, SMaid, Dokito, Seek, ContractFeed, StormBridge, ComplyIQ, UnilagFoodSpots, Deadline Dungeon, and SystemGuardian.",
    featured: true
  },
  {
    category: "Company Announcements",
    title: "Fonia Labs ecosystem structure defined.",
    company: "Fonia Labs",
    date: "2025",
    text: "The Fonia Labs ecosystem has been structured into core company, featured companies, growth companies, and labs and community products under one parent brand."
  },
  {
    category: "Product Milestones",
    title: "OmegaEstate positioned as a featured property technology company.",
    company: "OmegaEstate",
    date: "2025",
    text: "OmegaEstate is positioned as one of the leading companies under Fonia Labs, focused on property discovery, listings, and real estate technology."
  },
  {
    category: "Company Announcements",
    title: "Seek recognized as an active opportunity discovery company.",
    company: "Seek",
    date: "2025",
    text: "Seek is now positioned as a full company under Fonia Labs, focused on helping people discover, organize, and act on useful opportunities."
  },
  {
    category: "Build Logs",
    title: "FonTech becomes the software production company under Fonia Labs.",
    company: "FonTech",
    date: "2025",
    text: "FonTech is established as the core company that builds websites, apps, platforms, and digital products across the ecosystem and for external clients."
  },
  {
    category: "Testing Opportunities",
    title: "Testers and collaborators invited across the ecosystem.",
    company: "Fonia Labs",
    date: "2025",
    text: "Fonia Labs is opening selected companies and products to testers, collaborators, partners, and early users who can provide useful real-world feedback."
  }
];
