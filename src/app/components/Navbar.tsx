"use client"
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '../data/portfolio';
import {useState} from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-navy/95 backdrop-blur-md z-40 border-b border-cyan/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white shrink-0">
             <Image 
               src={BRAND.logo} 
               alt="Perode Logo" 
               fill
               sizes="40px"
               className="object-cover group-hover:scale-110 transition-transform" 
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
             />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg sm:text-xl tracking-wide">{BRAND.name}</h1>
           <p className="text-cyan text-[10px] sm:text-xs font-mono tracking-widest hidden xs:block">{BRAND.tagline}</p>
          </div>
        </Link>
        <button 
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden text-white focus:outline-none z-50"
  aria-label="Toggle menu"
>
  <div className="w-6 h-5 flex flex-col justify-between">
    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
    <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </div>
</button>
        <div className="hidden md:flex gap-8 text-offwhite text-sm font-medium">
             <Link href="/" className="hover:text-cyan transition-colors">Home</Link>
          <Link href="/about" className="hover:text-cyan transition-colors">About</Link>
          <Link href="/projects" className="hover:text-cyan transition-colors">AI Models</Link>
          <Link href="/contact" className="hover:text-cyan transition-colors">Contact</Link>
        </div>
      </div>
      {/* Mobile menu dropdown */}
<div className={`md:hidden fixed top-18.25 left-0 w-full bg-navy/98 backdrop-blur-md border-b border-cyan/20 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
  <div className="flex flex-col items-center gap-6 py-8">
    <Link 
      href="/" 
      onClick={() => setIsMenuOpen(false)}
      className="text-offwhite text-lg font-medium hover:text-cyan transition-colors"
    >
      Home
    </Link>
    <Link 
      href="/about" 
      onClick={() => setIsMenuOpen(false)}
      className="text-offwhite text-lg font-medium hover:text-cyan transition-colors"
    >
      About
    </Link>
    <Link 
      href="/projects" 
      onClick={() => setIsMenuOpen(false)}
      className="text-offwhite text-lg font-medium hover:text-cyan transition-colors"
    >
      AI Models
    </Link>
    <Link 
      href="/contact" 
      onClick={() => setIsMenuOpen(false)}
      className="text-offwhite text-lg font-medium hover:text-cyan transition-colors"
    >
      Contact
    </Link>
  </div>
</div>
    </nav>
  );
}