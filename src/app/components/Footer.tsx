import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BRAND, PERSONAL_INFO } from '../data/portfolio';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'AI Models' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-canvas border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-[minmax(0,1fr)_auto] gap-10 sm:items-start">
          <div>
            <p className="font-display font-semibold text-white text-2xl tracking-tight">{BRAND.name}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan mt-2">{BRAND.tagline}</p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-block mt-6 text-canvas/80 hover:text-cyan transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <nav className="flex flex-col gap-3 sm:items-end">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.16em] text-canvas/70 hover:text-cyan transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-canvas/50 text-sm">
            &copy; {new Date().getFullYear()} {BRAND.name} | {PERSONAL_INFO.fullName}. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-canvas/80 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-canvas/80 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
