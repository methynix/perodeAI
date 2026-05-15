"use client"
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS_DATA, Project } from '../data/portfolio';
import { FaCode, FaArrowRight } from 'react-icons/fa';

export default function Projects() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-sm font-bold text-cyan tracking-widest uppercase mb-2">What do I do?</h3>
        <h2 className="text-4xl font-extrabold text-navy">E-commerce Prediction Models</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project: Project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="group bg-offwhite rounded-2xl overflow-hidden border border-navy/10 hover:border-cyan hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="relative h-56 w-full bg-navy flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-linear-to-t from-navy to-transparent z-10"></div>
              <FaCode className="w-24 h-24 text-cyan/20 absolute z-0" />
              <Image 
                src={project.thumbnail} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 z-0" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute bottom-4 left-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              </div>
            </div>
            
            <div className="p-6 flex flex-col grow">
              <p className="text-navy/80 mb-4 grow">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map((tech: string) => (
                  <span key={tech} className="text-xs font-mono bg-navy/10 text-navy px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs font-mono bg-navy/10 text-navy px-2 py-1 rounded">+{project.techStack.length - 3}</span>
                )}
              </div>
              <div className="flex items-center text-cyan font-semibold group-hover:translate-x-2 transition-transform">
                Read Full Report <FaArrowRight className="ml-2 w-3 h-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}