export type Campaign = {
  slug: string;
  name: string;
  tagline: string;
  src: string;
};

/**
 * Marketing campaign posters for companies in the ecosystem.
 * Posters live in /public/marketing/<slug>.png.
 */
export const campaigns: Campaign[] = [
  { slug: "omegaestate", name: "OmegaEstate", tagline: "Find your dream home", src: "/marketing/omegaestate.png" },
  { slug: "smaid", name: "SMaid", tagline: "Skip the queue", src: "/marketing/smaid.png" },
  { slug: "stormbridge", name: "StormBridge", tagline: "Operational weather intelligence", src: "/marketing/stormbridge.png" },
  { slug: "contractfeed", name: "ContractFeed", tagline: "Track government contracts", src: "/marketing/contractfeed.png" },
  { slug: "dokito", name: "Dokito", tagline: "Your AI health companion", src: "/marketing/dokito.png" },
  { slug: "systemguardian", name: "SystemGuardian", tagline: "Guard your system resources", src: "/marketing/systemguardian.png" }
];
