"use client";
import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
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
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="bg-navy rounded-3xl p-8 lg:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-20%] w-150 h-150 rounded-full bg-cyan opacity-5 blur-[80px]"></div>
        
        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl font-extrabold mb-6">Let&apos;s build clarity together.</h2>
            <p className="text-offwhite/80 mb-10 text-lg">
              Whether you need to reduce churn, optimize pricing, or forecast demand, I am available for hiring and consulting.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-white hover:text-cyan transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><FaEnvelope className="w-5 h-5" /></div>
                <span className="text-lg">{PERSONAL_INFO.email}</span>
              </a>
              <a href={`https://wa.me/${PERSONAL_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white hover:text-cyan transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><FaWhatsapp className="w-5 h-5" /></div>
                <span className="text-lg">{PERSONAL_INFO.phone} (WhatsApp)</span>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"><FaMapMarkerAlt className="w-5 h-5" /></div>
                <span className="text-lg">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-offwhite border-none rounded-lg focus:ring-2 focus:ring-cyan outline-none transition-all" placeholder="Your name/company" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Email</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-offwhite border-none rounded-lg focus:ring-2 focus:ring-cyan outline-none transition-all" placeholder="Your email" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Message</label>
                <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-offwhite border-none rounded-lg focus:ring-2 focus:ring-cyan outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button disabled={status === 'loading'} type="submit" className="w-full py-4 bg-navy text-white font-bold rounded-lg hover:bg-cyan hover:text-navy transition-colors duration-300 disabled:opacity-50">
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {status === 'error' && <p className="text-red-500 text-sm text-center mt-2">Failed to send. Please try emailing directly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}