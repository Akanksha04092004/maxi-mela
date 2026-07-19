import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#timeline" },
  { label: "Resources", href: "#resources" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        {/* MAXI Association mark — official lockup */}
        <a href="#top" className="flex items-center">
          <span className="relative h-10 w-10 overflow-hidden rounded-md sm:h-11 sm:w-11">
            <Image
              src="/maxi-logo.jpg"
              alt="MAXI — Marketing Association of XLRI Delhi-NCR"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="ml-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-cream/80">
            MAXI &middot; XLRI Delhi-NCR
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
