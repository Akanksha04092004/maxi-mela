import ArchMotif from "./ArchMotif";

const PILLARS = [
  {
    label: "Learn",
    copy: "Keynotes and workshops led by practitioners, built around real case studies.",
  },
  {
    label: "Build",
    copy: "Teams sharpen a pitch across the day and present it to a closing panel.",
  },
  {
    label: "Celebrate",
    copy: "A mela is a fair first — music, colour, and a reason to gather.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-navy py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            About the Mela
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Marketing, dressed as a festival.
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            MAXI Mela takes the format of a traditional fair &mdash; open
            stalls, shared courtyards, performances between the serious talks
            &mdash; and fills it with the working discipline of marketing.
            Expect a keynote worth taking notes on, workshops you leave with
            something usable, and a closing pitch that decides the day.
          </p>
        </div>

        <ArchMotif className="mt-14 h-9 w-72 text-gold" />

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-2xl border border-cream/10 bg-white/5 p-6 transition-colors hover:border-gold/40"
            >
              <span className="font-display text-2xl italic text-gold">
                {pillar.label}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
