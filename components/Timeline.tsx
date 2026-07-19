import { timelineEntries } from "@/data/timeline";

// Group entries sharing a time slot (e.g. the two parallel workshop
// streams) so they thread onto a single node on the rail.
function groupByTime() {
  const order: string[] = [];
  const map = new Map<string, typeof timelineEntries>();
  for (const entry of timelineEntries) {
    if (!map.has(entry.time)) {
      map.set(entry.time, []);
      order.push(entry.time);
    }
    map.get(entry.time)!.push(entry);
  }
  return order.map((time) => ({ time, entries: map.get(time)! }));
}

export default function Timeline() {
  const groups = groupByTime();

  return (
    <section id="timeline" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-maroon">
          Run of show
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          The day, strung together.
        </h2>
        <p className="mt-4 max-w-xl text-ink/70">
          Threaded like a garland &mdash; one line, six moments. Simultaneous
          sessions share a single knot.
        </p><p className="mt-4 max-w-xl text-ink/70">
          Save the date: 8th Feb, 2027
        </p>
        <a href="https://maps.app.goo.gl/dCnTJar7LBqY7WUc7"><p className="mt-4 max-w-xl text-ink/70">
          Venue: DLF Cyberhub
        </p>
        </a>

        {/* Rail */}
        <div className="rail-scroll mt-14 overflow-x-auto pb-6">
          <ol className="relative flex min-w-[900px] items-start gap-0 sm:min-w-[1100px]">
            {/* the thread */}
            <div className="pointer-events-none absolute left-0 right-0 top-6 h-[3px] rounded-full bg-gradient-to-r from-maroon via-gold to-leaf opacity-40" />

            {groups.map((group, i) => (
              <li
                key={group.time}
                className="relative flex-1 px-3"
                style={{ minWidth: `${100 / groups.length}%` }}
              >
                {/* knot */}
                <div className="relative z-10 flex justify-center">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-cream bg-maroon font-display text-xs font-semibold text-cream shadow-card transition-transform hover:scale-110"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-maroon">
                  {group.time}
                </p>

                {/* cards */}
                <div className="mt-4 flex flex-col gap-3">
                  {group.entries.map((entry) => (
                    <div
                      key={`${entry.time}-${entry.title}-${entry.track ?? ""}`}
                      className="group rounded-2xl border border-ink/10 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-card"
                    >
                      {entry.track && (
                        <span className="mb-1.5 inline-block rounded-full bg-leaf/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-leaf">
                          {entry.track}
                        </span>
                      )}
                      <h3 className="font-display text-base font-semibold leading-snug text-ink">
                        {entry.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink/65">
                        {entry.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-2 text-xs text-ink/40 sm:hidden">
          Scroll sideways to see the full day &rarr;
        </p>
      </div>
    </section>
  );
}
