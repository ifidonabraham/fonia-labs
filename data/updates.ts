export type Update = {
  category:
    | "Company Announcements"
    | "Product Milestones"
    | "Build Logs"
    | "Testing Opportunities"
    | "Partnership Updates"
    | "Founder Notes";
  title: string;
  text: string;
};

export const updateCategories = [
  "Company Announcements",
  "Product Milestones",
  "Build Logs",
  "Testing Opportunities",
  "Partnership Updates",
  "Founder Notes"
] as const;

export const updates: Update[] = [
  {
    category: "Company Announcements",
    title: "Fonia Labs begins its public ecosystem rollout.",
    text: "Fonia Labs is introduced publicly as a global innovation group building companies, platforms, and products that solve real-world problems."
  },
  {
    category: "Company Announcements",
    title: "Fonia Labs ecosystem structure defined.",
    text: "The ecosystem is organized into a core company, featured companies, growth companies, and community/labs products under one parent brand."
  },
  {
    category: "Product Milestones",
    title: "OmegaEstate positioned as a featured property technology company.",
    text: "OmegaEstate takes its place as a featured company focused on cleaner, more organized property discovery."
  },
  {
    category: "Company Announcements",
    title: "Seek recognized as an active opportunity discovery company.",
    text: "Seek is confirmed as a full company under Fonia Labs, helping people discover, organize, and act on useful opportunities."
  },
  {
    category: "Build Logs",
    title: "FonTech becomes the software production company under Fonia Labs.",
    text: "FonTech is established as the core company that builds websites, apps, platforms, and digital products across the ecosystem."
  },
  {
    category: "Testing Opportunities",
    title: "Testers and collaborators invited across the ecosystem.",
    text: "Fonia Labs opens its doors to testers, partners, contributors, and supporters who want to help build, test, improve, or grow the ecosystem."
  }
];
