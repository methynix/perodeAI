import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { PERSONAL_INFO, ABOUT_DATA, PROJECTS_DATA } from './data/portfolio';
import ForecastChart from './components/ForecastChart';
import Reveal from './components/Reveal';
import CountUp from './components/CountUp';

const RESULTS = [
  {
    value: 340000,
    prefix: '$',
    suffix: '',
    label: 'Lost stockout revenue recovered in the first 12 months.',
    project: 'Pricing Insight Tool',
    id: 'pricing-insight',
  },
  {
    value: 210000,
    prefix: '$',
    suffix: '',
    label: 'Revenue recovered from customers previously considered lost.',
    project: 'Customer Churn Model',
    id: 'churn-model-2-0',
  },
  {
    value: 88,
    prefix: '',
    suffix: '%',
    label: 'Precision predicting churn 60 days in advance.',
    project: 'Customer Churn Model',
    id: 'churn-model-2-0',
  },
  {
    value: 47,
    prefix: '',
    suffix: '%',
    label: 'Drop in Bluetooth-pairing support tickets.',
    project: 'Customer Sentiment Analysis',
    id: 'customer-segmentation',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="grid-paper absolute inset-0 opacity-70 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black, transparent 78%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 78%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16">
          <p className="eyebrow text-cyan-ink mb-7">
            {PERSONAL_INFO.fullName} <span className="text-line-strong">/</span> {PERSONAL_INFO.title}{' '}
            <span className="text-line-strong">/</span> {PERSONAL_INFO.location}
          </p>

          <h1 className="font-display font-semibold text-ink max-w-4xl text-[2.1rem] leading-[1.06] sm:text-5xl sm:leading-[1.04] lg:text-[3.85rem] lg:leading-[1.02] tracking-tight">
            Stop Losing 15-40% Of Your Revenue To{' '}
            <span className="relative whitespace-normal">
              Silent Customer Churn
              <span aria-hidden className="absolute left-0 -bottom-1 h-[3px] w-full bg-cyan-ink/70" />
            </span>{' '}
            Before It Hits Your Dashboard!
          </h1>

          <div className="mt-9 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:items-end">
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed max-w-2xl">
              {ABOUT_DATA.focus}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end shrink-0">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-navy text-white font-medium rounded-md hover:bg-ink transition-colors"
              >
                View AI Models
                <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-line-strong text-ink font-medium rounded-md hover:bg-canvas-2 transition-colors"
              >
                Request a blind data audit
              </Link>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pb-16">
          <div className="rounded-lg border border-line bg-paper p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 mb-4">
              <span className="eyebrow text-ink-soft">Revenue trajectory</span>
              <div className="flex items-center gap-5 font-mono text-[11px] text-ink-soft">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-5 h-[2.5px] bg-navy rounded-full" />
                  actuals
                </span>
                <span className="flex items-center gap-2">
                  <span className="inline-block w-5 h-0 border-t-[2.5px] border-dashed border-navy/50" />
                  predicted
                </span>
              </div>
            </div>
            <ForecastChart className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow text-cyan-ink mb-3">From the case studies</p>
            <h2 className="font-display font-semibold text-ink text-2xl sm:text-3xl tracking-tight max-w-2xl">
              Numbers the models moved.
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-line border-t border-line">
            {RESULTS.map((r, i) => (
              <Reveal key={`${r.id}-${i}`} delay={i * 0.05}>
                <Link
                  href={`/projects/${r.id}`}
                  className="group grid grid-cols-1 sm:grid-cols-[10rem_minmax(0,1fr)_auto] sm:items-baseline gap-1 sm:gap-8 py-6 hover:bg-paper transition-colors -mx-3 px-3 rounded-md"
                >
                  <CountUp
                    value={r.value}
                    prefix={r.prefix}
                    suffix={r.suffix}
                    className="font-display font-semibold text-navy text-3xl sm:text-4xl tracking-tight tabular-nums"
                  />
                  <span className="text-ink-soft text-base sm:text-lg leading-snug">{r.label}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft group-hover:text-ink transition-colors flex items-center gap-1.5">
                    {r.project}
                    <FaArrowRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow text-cyan-ink mb-3">Selected work</p>
                <h2 className="font-display font-semibold text-ink text-2xl sm:text-3xl tracking-tight">
                  E-commerce Prediction Models
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-ink transition-colors shrink-0"
              >
                All models
                <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 0.06}>
                <Link
                  href={`/projects/${project.id}`}
                  className="group block h-full border border-line rounded-lg overflow-hidden bg-paper hover:border-line-strong transition-colors"
                >
                  <div className="relative aspect-[16/9] bg-navy-900 overflow-hidden border-b border-line">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 font-mono text-[11px] text-white/90 bg-ink/55 px-2 py-1 rounded">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display font-semibold text-ink text-xl tracking-tight">{project.title}</h3>
                    <p className="text-ink-soft mt-1.5 text-sm leading-relaxed">{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="font-mono text-[11px] text-ink-soft border border-line rounded px-2 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 mt-5 font-mono text-xs uppercase tracking-[0.14em] text-navy group-hover:gap-3 transition-all">
                      Read Full Report
                      <FaArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-canvas border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:items-center">
            <div>
              <p className="eyebrow text-cyan mb-4">Next step</p>
              <h2 className="font-display font-semibold text-white text-2xl sm:text-4xl tracking-tight max-w-2xl leading-tight">
                Let&apos;s build clarity together.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-cyan text-navy font-semibold rounded-md hover:bg-white transition-colors"
              >
                Request a blind data audit
                <FaArrowRight className="w-3 h-3" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/25 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                View AI Models
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
