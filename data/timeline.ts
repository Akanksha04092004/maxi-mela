export type TimelineEntry = {
  time: string;
  title: string;
  detail: string;
  track?: "Stream 1" | "Stream 2";
};

export const timelineEntries: TimelineEntry[] = [
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    detail: "Traditional lamp lighting to set the day in motion.",
  },
  {
    time: "11:30 AM",
    title: "Keynote Address",
    detail: "Marketing in the New Economy.",
  },
  {
    time: "2:00 PM",
    title: "Mela Workshops",
    detail: "Case study analysis, worked through in small groups.",
    track: "Stream 1",
  },
  {
    time: "2:00 PM",
    title: "Mela Workshops",
    detail: "Digital marketing strategy, hands-on.",
    track: "Stream 2",
  },
  {
    time: "4:30 PM",
    title: "Cultural Performance",
    detail: "A sitar recital to unwind the afternoon.",
  },
  {
    time: "7:00 PM",
    title: "Final Pitch & Closing Ceremony",
    detail: "Teams present, judges deliberate, the mela closes.",
  },
];
