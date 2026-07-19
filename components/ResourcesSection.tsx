import { resources } from "@/data/resources";
import ResourceCard from "./ResourceCard";
import ArchMotif from "./ArchMotif";

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-cream-dark py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-maroon">
          Take these with you
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          The resource stall.
        </h2>
        <p className="mt-4 max-w-xl text-ink/70">
          Everything you need to plan around, sponsor, or simply pin to a
          noticeboard.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <ResourceCard key={resource.href} resource={resource} />
          ))}
        </div>

        <ArchMotif className="mx-auto mt-16 h-9 w-72 text-leaf" flip />
      </div>
    </section>
  );
}
