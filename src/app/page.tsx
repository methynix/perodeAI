"use client"
import Link from 'next/link';
import Image from 'next/image';
import { PERSONAL_INFO, ABOUT_DATA } from './data/portfolio';

export default function Home() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full bg-cyan opacity-10 blur-[100px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-100 h-100 rounded-full bg-white opacity-5 blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start mt-10 lg:mt-0">
  <p className="text-cyan font-mono mb-4 text-sm sm:text-base tracking-wider uppercase">
    
  </p>
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
     Stop Losing 15-40% Of Your Revenue To{" "}
    <span className="text-cyan block sm:inline">
       Silent Customer Churn Before It Hits Your Dashboard!
    </span>
  </h2>
  <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-2xl">
    {ABOUT_DATA.focus}
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
    <Link href="/projects" className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-navy font-semibold rounded-lg hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(0,224,255,0.4)] text-center">
      View AI Models
    </Link>
    <Link href="/contact" className="px-6 sm:px-8 py-3 sm:py-4 border border-cyan text-cyan font-semibold rounded-lg hover:bg-cyan/10 transition-all duration-300 text-center">
      Request a blind data audit
    </Link>
  </div>
</div>

<div className="flex-1 flex justify-center lg:justify-end relative w-full pb-10 lg:pb-0">
  
  <div className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-112.5 xl:h-112.5 group">
    <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ 
      background: 'conic-gradient(from 0deg, transparent, #00e0ff, transparent, #00e0ff, transparent)',
      padding: '3px',
      borderRadius: '60% 40% 50% 50% / 45% 50% 50% 55%',
      animation: 'spin 8s linear infinite, morph 6s ease-in-out infinite'
    }}>
      <div className="w-full h-full rounded-full bg-navy/20 backdrop-blur-sm"></div>
    </div>
    
    {/* Second rotating ring - opposite direction, different shape */}
    <div className="absolute -inset-2.5 rounded-full animate-spin-reverse-slow" style={{ 
      background: 'conic-gradient(from 180deg, transparent, rgba(0,224,255,0.4), transparent, rgba(0,224,255,0.2))',
      padding: '2px',
      borderRadius: '40% 60% 45% 55% / 55% 40% 60% 45%',
      animation: 'spinReverse 12s linear infinite, morph2 8s ease-in-out infinite'
    }}>
    </div>
    
    {/* Third ring - fast orbital dots */}
    <div className="absolute -inset-5 rounded-full" style={{ 
      borderRadius: '50% 45% 55% 50% / 50% 55% 45% 50%',
      animation: 'spin 4s linear infinite'
    }}>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_#00e0ff]"
          style={{
            top: '50%',
            left: '50%',
            transform: `rotate(${i * 45}deg) translateX(calc(50% + 25px))`,
            animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`
          }}
        ></div>
      ))}
    </div>
    
    {/* Orbiting particles around the image */}
    <div className="hidden sm:block absolute inset-10 rounded-full" style={{ 
      animation: 'spin 20s linear infinite'
    }}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan/60 rounded-full"
          style={{
            top: '50%',
            left: '50%',
           transform: `rotate(${i * 30}deg) translateX(calc(50% + clamp(40px, 8vw, 120px)))`,
            filter: 'blur(1px)'
          }}
        ></div>
      ))}
    </div>
    
    {/* Glowing pulse aura behind the image */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan/20 rounded-full blur-[80px] animate-pulse-slow"></div>
    
    {/* The image with glassmorphic frame */}
    <div className="relative w-full h-full rounded-full overflow-hidden" style={{
      borderRadius: '55% 45% 60% 40% / 45% 55% 45% 55%',
      animation: 'float 6s ease-in-out infinite'
    }}>
      {/* Inner glow overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan/20 via-transparent to-purple-500/20 z-10 rounded-full"></div>
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 z-20 overflow-hidden rounded-full">
        <div className="w-full h-[200%] bg-linear-to-b from-transparent via-cyan/30 to-transparent rotate-45 animate-scan"></div>
      </div>
      
      <Image 
        src="/ml.png" 
        alt="Machine Learning Visualization" 
        fill
        sizes="(max-width: 1024px) 288px, 450px"
        priority
        className="object-contain scale-110 group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    
    {/* Decorative corner accents */}
    <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-cyan/60 rounded-tl-2xl"></div>
    <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-cyan/60 rounded-tr-2xl"></div>
    <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-cyan/60 rounded-bl-2xl"></div>
    <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-cyan/60 rounded-br-2xl"></div>
    
  </div>
</div>
        
      </div>
    </section>
  );
}