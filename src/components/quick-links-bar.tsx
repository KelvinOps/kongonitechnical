// components/quick-links-bar.tsx
import Link from "next/link";

// Edit these to match your real routes / external portal URLs.
const LINKS = [
  { label: "Download your admission letter", href: "https://kongonitvc.jiunge.com/sign-up" },
  { label: "Apply to join Kongoni", href: "https://kongonitvc.jiunge.com/programmes-widget" },
  { label: "Student portal login", href: "https://kongonitvc.jiunge.com/login" },
];

export default function QuickLinksBar() {
  return (
    <div
      className="w-full border-b"
      style={{ backgroundColor: "#fdf6dc", borderColor: "#eadfae" }}
    >
      <nav
        aria-label="Quick links for new and continuing students"
        className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm md:text-base"
      >
        <span className="font-semibold text-slate-900">Placed by KUCCPS?</span>

        {LINKS.map((link, i) => (
          <span key={link.label} className="inline-flex items-center gap-3">
            {i > 0 && (
              <span aria-hidden="true" className="text-slate-400">
                &middot;
              </span>
            )}
            <Link
              href={link.href}
              className="font-medium underline underline-offset-4 decoration-1 hover:decoration-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0893f0]"
              style={{ color: "#0a5fa8" }}
            >
              {link.label}
            </Link>
          </span>
        ))}
      </nav>
    </div>
  );
}