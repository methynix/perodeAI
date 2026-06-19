"use client";
import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="eyebrow text-cyan-ink mb-4">Contact</p>
          <h1 className="font-display font-semibold text-ink text-3xl sm:text-5xl leading-[1.05] tracking-tight">
            Let&apos;s build clarity together.
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed mt-6 max-w-md">
            Whether you need to reduce churn, optimize pricing, or forecast demand, I am available for hiring and consulting.
          </p>

          <div className="mt-12 border-t border-line">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group flex items-center gap-4 py-5 border-b border-line hover:bg-paper -mx-3 px-3 rounded-md transition-colors"
            >
              <span className="w-10 h-10 rounded-md border border-line flex items-center justify-center text-navy shrink-0">
                <FaEnvelope className="w-4 h-4" />
              </span>
              <span className="text-ink group-hover:text-navy transition-colors break-all">{PERSONAL_INFO.email}</span>
            </a>
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 py-5 border-b border-line hover:bg-paper -mx-3 px-3 rounded-md transition-colors"
            >
              <span className="w-10 h-10 rounded-md border border-line flex items-center justify-center text-navy shrink-0">
                <FaWhatsapp className="w-4 h-4" />
              </span>
              <span className="text-ink group-hover:text-navy transition-colors">{PERSONAL_INFO.phone} (WhatsApp)</span>
            </a>
            <div className="flex items-center gap-4 py-5 border-b border-line -mx-3 px-3">
              <span className="w-10 h-10 rounded-md border border-line flex items-center justify-center text-navy shrink-0">
                <FaMapMarkerAlt className="w-4 h-4" />
              </span>
              <span className="text-ink">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        <div className="border border-line rounded-lg bg-paper p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">Name</label>
              <input
                id="name"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-canvas border border-line rounded-md text-ink placeholder:text-ink-soft/60 focus:border-navy focus:outline-none transition-colors"
                placeholder="Your name/company"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">Email</label>
              <input
                id="email"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-canvas border border-line rounded-md text-ink placeholder:text-ink-soft/60 focus:border-navy focus:outline-none transition-colors"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-[0.14em] text-ink-soft mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-canvas border border-line rounded-md text-ink placeholder:text-ink-soft/60 focus:border-navy focus:outline-none transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button
              disabled={status === 'loading'}
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2.5 py-3.5 bg-navy text-white font-medium rounded-md hover:bg-ink transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              {status === 'idle' && <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />}
            </button>
            {status === 'error' && (
              <p className="text-red-600 text-sm text-center" role="alert">Failed to send. Please try emailing directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
