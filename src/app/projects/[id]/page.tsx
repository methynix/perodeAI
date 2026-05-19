import { notFound } from 'next/navigation';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { PROJECTS_DATA } from '../../data/portfolio';

// Next.js 15 requires async params
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.id === resolvedParams.id);

  if (!project) return notFound();

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <Link href="/projects" className="inline-flex items-center text-navy/60 hover:text-cyan mb-8 transition-colors font-semibold">
        <FaArrowLeft className="mr-2" /> Back to Models
      </Link>
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-navy/5">
        <div className="bg-navy p-10 text-white relative overflow-hidden">
          <div className="absolute top-[-50%] right-[-20%] w-100 h-100 rounded-full bg-cyan opacity-10 blur-[60px]"></div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 relative z-10">{project.title}</h1>
          <p className="text-cyan text-xl tracking-wide relative z-10">{project.shortDesc}</p>
        </div>
        
        <div className="p-10">
          <h2 className="text-sm font-bold text-cyan tracking-widest uppercase mb-4">Model Intelligence Report</h2>
          <div className="text-navy text-base lg:text-lg leading-relaxed mb-10 border-l-4 border-cyan pl-6 bg-offwhite/50 py-6 pr-4 rounded-r-lg">
  {project.report}
</div>

          <div className="mb-10">
            <h3 className="text-lg font-bold text-navy mb-4">Core Technology Stack:</h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech: string) => (
                <span key={tech} className="bg-offwhite border border-navy/10 px-4 py-2 rounded-lg text-sm text-navy font-mono font-medium shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-navy/10">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-cyan hover:text-navy transition-all duration-300 shadow-lg"
            >
              <FaGithub className="w-6 h-6" />
              View Source on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}