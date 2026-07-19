import Image from "next/image";
import ContactButton from "./ContactButton";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-lg ring-1 ring-gold/60">
              <Image
                src="/maxi-mela-logo.jpg"
                alt="MAXI Mela emblem"
                fill
                sizes="48px"
                className="scale-[1.35] object-cover"
              />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">MAXI Mela</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/60">
                Marketing Association &middot; XLRI Delhi-NCR
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-cream/70 sm:flex sm:gap-12">
            <a href="#about" className="hover:text-gold">About</a>
            <a href="#timeline" className="hover:text-gold">Schedule</a>
            <a href="#resources" className="hover:text-gold">Resources</a>
            <ContactButton />

          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} MAXI &mdash; Marketing Association of XLRI Delhi-NCR.</span>
          <span>Built for the MAXI Mela selection round.</span>
        </div>
      </div>
    </footer>
  );
}
