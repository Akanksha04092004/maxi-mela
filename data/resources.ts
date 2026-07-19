export type Resource = {
  title: string;
  description: string;
  href: string;
  sizeLabel: string;
  kind: "Poster" | "Guide" | "Brochure" | "Overview";
};

export const resources: Resource[] = [
  {
    title: "MAXI Mela Official Poster",
    description: "The full event poster — save it, print it, share it.",
    href: "/resources/maxi-mela-poster.pdf",
    sizeLabel: "PDF · 739 KB",
    kind: "Poster",
  },
  {
    title: "Operational Guide for Participants",
    description: "Venue map, timings, and what to bring on the day.",
    href: "/resources/participant-guide.pdf",
    sizeLabel: "PDF · 367 KB",
    kind: "Guide",
  },
  {
    title: "Detailed Sponsorship Brochure",
    description: "Tiers, visibility, and how to partner with the Mela.",
    href: "/resources/sponsorship-brochure.pdf",
    sizeLabel: "PDF · 393 KB",
    kind: "Brochure",
  },
  {
    title: "MAXI Committee Overview",
    description: "Who we are and what the Marketing Association runs.",
    href: "/resources/maxi-committee-overview.pdf",
    sizeLabel: "PDF · 28.8 MB",
    kind: "Overview",
  },
];