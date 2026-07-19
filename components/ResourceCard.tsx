import type { Resource } from "@/data/resources";

const ICONS: Record<Resource["kind"], JSX.Element> = {
  Poster: (
    <path d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 4h8M8 10.5c1.2-1.4 2.8-1.4 4 0s2.8 1.4 4 0M8 15h8" />
  ),
  Guide: (
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5v-15ZM19 18H6.5A2.5 2.5 0 0 0 4 20.5M8 8h7M8 11.5h7" />
  ),
  Brochure: (
    <path d="M4 4h6v16l-3-2-3 2V4Zm6 0h6v16l-3-2-3 2M7 8h.01M7 11h.01" />
  ),
  Overview: (
    <path d="M4 4h16v16H4zM8 9h8M8 12.5h8M8 16h5" />
  ),
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.href}
      download
      className="group flex flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-maroon hover:shadow-card"
    >
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/10 text-maroon transition-colors group-hover:bg-maroon group-hover:text-cream">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {ICONS[resource.kind]}
          </svg>
        </div>

        <span className="mt-4 inline-block font-mono text-[10px] uppercase tracking-wider text-gold-deep">
          {resource.kind}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ink">
          {resource.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">
          {resource.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
        <span className="text-xs text-ink/50">{resource.sizeLabel}</span>
        <span className="flex items-center gap-1.5 text-sm font-medium text-maroon">
          Download
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M12 4v12m0 0-4-4m4 4 4-4M5 20h14" />
          </svg>
        </span>
      </div>
    </a>
  );
}
