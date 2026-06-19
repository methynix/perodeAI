import { notFound } from 'next/navigation';
import Image from 'next/image';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { PROJECTS_DATA } from '../../data/portfolio';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS_DATA.find((p) => p.id === resolvedParams.id);

  if (!project) return notFound();

  return (
    <article>
      <header className="bg-navy-900 text-canvas border-b border-line">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cyan hover:text-white transition-colors"
          >
            <FaArrowLeft className="w-3 h-3" /> Back to Models
          </Link>

          <div className="mt-9 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="font-mono text-[11px] text-cyan border border-white/15 rounded px-2 py-0.5">
                {tech}
              </span>
            ))}
          </div>

          <h1 className="font-display font-semibold text-white text-3xl sm:text-5xl leading-[1.05] tracking-tight mt-5">
            {project.title}
          </h1>
          <p className="text-cyan text-lg sm:text-xl mt-3">{project.shortDesc}</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <figure className="rounded-lg overflow-hidden border border-line bg-navy-900">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </figure>

        <div className="mt-14 grid lg:grid-cols-[12rem_minmax(0,1fr)] gap-6 lg:gap-10">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-ink lg:pt-1.5">
            Model Intelligence Report
          </p>
          <div className="text-ink text-base sm:text-lg leading-relaxed [&_p]:text-ink-soft [&_p]:leading-relaxed [&_strong]:font-semibold [&_li]:text-ink-soft [&_li]:leading-relaxed">
            {project.report}
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-line">
          <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-ink mb-5">Core Technology Stack:</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech: string) => (
              <span key={tech} className="font-mono text-sm text-ink border border-line bg-paper rounded-md px-3.5 py-2">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 bg-navy text-white font-medium rounded-md hover:bg-ink transition-colors self-start"
          >
            <FaGithub className="w-5 h-5" />
            View Source on GitHub
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-navy hover:gap-3 transition-all self-start"
          >
            Request a blind data audit
            <FaArrowRight className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
