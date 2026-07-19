"use client";

import { useEffect, useState } from "react";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: "@maxidelhi.xlri",
    href: "https://www.instagram.com/maxidelhi.xlri/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "MAXI — Delhi NCR",
    href: "https://www.linkedin.com/company/maxi-delhi-ncr/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10.5V16.5M8 7.5v.01M12.5 16.5v-3.6c0-1.3.9-2 2-2s1.9.7 1.9 2v3.6" />
      </svg>
    ),
  },
];

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="text-left hover:text-gold">
        Contact
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 px-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-cream p-6 text-ink shadow-card sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 id="contact-modal-title" className="font-display text-xl font-semibold">
                Get in touch
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full p-1 text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <p className="mt-1 text-sm text-ink/60">Find MAXI Delhi-NCR on:</p>

            <div className="mt-5 flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-maroon hover:shadow-card"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-maroon/10 text-maroon transition-colors group-hover:bg-maroon group-hover:text-cream">
                    {link.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-body text-sm font-medium text-ink">{link.label}</span>
                    <span className="text-xs text-ink/50">{link.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}