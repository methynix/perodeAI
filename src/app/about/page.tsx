import { ABOUT_DATA } from '../data/portfolio';

export default function About() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3">
          <h3 className="text-sm font-bold text-cyan tracking-widest uppercase mb-2">Who am I?</h3>
          <h2 className="text-4xl font-extrabold text-navy mb-6">The Data Scientist Behind Perode.</h2>
          <div className="h-1 w-20 bg-cyan rounded-full"></div>
        </div>
        <div className="lg:w-2/3 space-y-8 text-lg text-navy/80 leading-relaxed">
          <p><strong className="text-navy">My Goal:</strong> {ABOUT_DATA.goals}</p>
          <p><strong className="text-navy">Why I actually care?:</strong> {ABOUT_DATA.why}</p>
          <p><strong className="text-navy">Personality:</strong> {ABOUT_DATA.personality}</p>
          <p><strong className="text-navy">My Story:</strong> {ABOUT_DATA.story}</p>
          
          <div className="pt-6">
            <h4 className="text-navy font-bold mb-4">Core Competencies:</h4>
            <div className="flex flex-wrap gap-3">
              {ABOUT_DATA.skills.map((skill: string) => (
                <span key={skill} className="px-4 py-2 bg-white border border-navy/10 shadow-sm rounded-full text-sm font-medium text-navy">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}