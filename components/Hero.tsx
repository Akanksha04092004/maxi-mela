import Image from "next/image";
import ArchMotif from "./ArchMotif";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-maroon">
            Marketing Association of XLRI Delhi-NCR presents
          </p>
          <h1 className="mt-4 font-display text-[3.2rem] font-semibold leading-[0.95] text-ink sm:text-7xl">
            MAXI{" "}
            <span className="italic text-maroon">Mela</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
            A day where the discipline of marketing meets the colour of a
            mela &mdash; keynotes, workshops, a pitch to close it all, and a
            sitar recital in between.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#timeline"
              className="rounded-full bg-maroon px-7 py-3 text-sm font-medium text-cream shadow-card transition-transform hover:-translate-y-0.5 hover:bg-maroon-deep"
            >
              View the schedule
            </a>
            <a
              href="#resources"
              className="rounded-full border border-ink/20 px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-maroon hover:text-maroon"
            >
              Get the brochure
            </a>
          </div>

          <ArchMotif className="mt-12 h-10 w-64 text-maroon" />
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] bg-gold/25" />
          <div className="overflow-hidden rounded-[2.5rem] border border-ink/10 bg-white shadow-card">
            <Image
              src="/maxi-mela-logo.jpg"
              alt="MAXI Mela — lotus emblem with the event wordmark, rendered in a traditional folk-art style"
              width={640}
              height={640}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="absolute -bottom-5 -left-5 flex h-20 w-20 items-center justify-center rounded-full bg-navy text-center font-display text-[0.6rem] leading-tight text-cream shadow-card">
            2027
            <br />
            Delhi-NCR
          </span>
        </div>
      </div>
    </section>
  );
}
