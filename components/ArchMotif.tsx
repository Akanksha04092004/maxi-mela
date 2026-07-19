type ArchMotifProps = {
  className?: string;
  flip?: boolean;
};

/**
 * A dotted arch, directly echoing the arch of marigold dots and leaf
 * sprigs that frames the lotus in the Mela logo. Reused as the site's
 * recurring divider instead of a generic <hr>, so the traditional
 * artwork's own geometry threads through the modern layout.
 */
export default function ArchMotif({ className = "", flip = false }: ArchMotifProps) {
  const dots = Array.from({ length: 13 });
  return (
    <svg
      viewBox="0 0 400 60"
      className={className}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <path
        d="M 10 55 A 190 190 0 0 1 390 55"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      {dots.map((_, i) => {
        const t = i / (dots.length - 1);
        const angle = Math.PI - t * Math.PI;
        const cx = 200 + 190 * Math.cos(angle);
        const cy = 55 - 190 * Math.sin(angle) * (55 / 190);
        const r = i % 3 === 0 ? 4.5 : 2.5;
        return <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />;
      })}
    </svg>
  );
}
