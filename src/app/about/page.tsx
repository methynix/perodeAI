import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolio';
import Reveal from '../components/Reveal';

const BLOCKS = [
  { label: 'My Goal', body: ABOUT_DATA.goals },
  { label: 'Why I actually care?', body: ABOUT_DATA.why },
  { label: 'Personality', body: ABOUT_DATA.personality },
  { label: 'My Story', body: ABOUT_DATA.story },
];

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="grid lg:grid-cols-[20rem_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="eyebrow text-cyan-ink mb-4">Who am I?</p>
          <h1 className="font-display font-semibold text-ink text-3xl sm:text-4xl leading-[1.08] tracking-tight">
            The Data Scientist Behind Perode.
          </h1>
          <div className="mt-6 font-mono text-xs text-ink-soft space-y-1.5">
            <p>{PERSONAL_INFO.fullName}</p>
            <p>{PERSONAL_INFO.title}</p>
            <p>{PERSONAL_INFO.location}</p>
          </div>
        </div>

        <div>
          <div className="border-t border-line">
            {BLOCKS.map((block, i) => (
              <Reveal key={block.label} delay={i * 0.05}>
                <div className="grid sm:grid-cols-[9rem_minmax(0,1fr)] gap-2 sm:gap-8 py-7 border-b border-line">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-ink pt-1">{block.label}</p>
                  <p className="text-ink text-lg leading-relaxed">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="pt-10">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-cyan-ink mb-5">Core Competencies</p>
              <div className="flex flex-wrap gap-2.5">
                {ABOUT_DATA.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="font-mono text-sm text-ink border border-line bg-paper rounded-md px-3.5 py-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-ink-soft">Have a dataset you want read honestly?</p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-navy text-white font-medium rounded-md hover:bg-ink transition-colors self-start"
              >
                Request a blind data audit
                <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
