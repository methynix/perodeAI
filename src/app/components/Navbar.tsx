"use client"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BRAND } from '../data/portfolio';
import { useState } from "react";

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'AI Models' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-40 bg-canvas/95 backdrop-blur-[2px] border-b border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Perode home">
          <span className="relative w-9 h-9 rounded-full overflow-hidden bg-white ring-1 ring-line shrink-0">
            <Image
              src={BRAND.logo}
              alt="Perode Logo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="leading-none">
            <span className="block font-display font-semibold text-ink text-lg tracking-tight">{BRAND.name}</span>
            <span className="block font-mono text-[10px] text-ink-soft tracking-[0.25em] uppercase mt-0.5">{BRAND.tagline}</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                isActive(link.href) ? 'text-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-[22px] left-0 right-0 h-px bg-navy" />
              )}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-ink focus:outline-none -mr-1 p-1"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-ink transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-ink transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-ink transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </span>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden border-t border-line transition-all duration-300 ${isMenuOpen ? 'max-h-80' : 'max-h-0 border-t-0'}`}>
        <div className="flex flex-col px-5 py-2 bg-canvas">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-mono text-sm uppercase tracking-[0.16em] py-4 border-b border-line last:border-0 ${
                isActive(link.href) ? 'text-ink' : 'text-ink-soft'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
