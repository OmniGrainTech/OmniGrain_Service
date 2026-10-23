import React, { useState } from 'react';
import { X, Send, MessageCircle, ShieldCheck, CheckCircle2, Clock, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/websiteData';

export default function EnquiryModal({ isOpen, onClose, initialSubject, currency }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialSubject || 'Mobile App Development');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({ particleCount: 75, spread: 60, origin: { y: 0.5 } });
      } catch (err) {}
    }, 500);
  };

  const getWhatsAppLink = () => {
    const msg = `Hi Omnigrain Tech LLP!%0A*Name:* ${name || 'Visitor'}%0A*Phone:* ${phone || 'Not provided'}%0A*Subject:* ${service}%0A*Notes:* ${details || 'Interested in quote'}`;
    return `https://wa.me/${companyInfo.whatsappRaw}?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-brand-card border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              Our lead developer is reviewing your requirement. We'll message you on WhatsApp or call you shortly.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue on WhatsApp Now</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white underline pt-1"
              >
                Close window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[10px] text-brand-accent font-bold uppercase tracking-wider block">
                Instant Priority Quote
              </span>
              <h3 className="text-xl font-black text-white mt-0.5">Let's Discuss Your Project</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill this quick form or send a direct WhatsApp message to our lead software architect.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singhania"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Service / Requirement</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-brand-accent"
                >
                  <option value="Mobile App (Android & iOS)">Mobile App (Android & iOS)</option>
                  <option value="Custom Billing Software / POS">Custom Billing Software / POS</option>
                  <option value="Web App / SaaS Platform">Web App / SaaS Platform</option>
                  <option value="Website / High-Converting Landing Page">Website / High-Converting Landing Page</option>
                  <option value="API Development & Database Design">API Development & Database Design</option>
                  <option value="Cloud DevOps & Server Hosting">Cloud DevOps & Server Hosting</option>
                  <option value="General Software Consultation">General Software Consultation</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Brief Details (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Any specific features or deadlines..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accentLight hover:to-blue-500 text-slate-950 font-extrabold text-xs shadow-lg transition flex items-center justify-center space-x-1.5"
                >
                  {loading ? <span>Submitting...</span> : <span>Send Project Enquiry</span>}
                </button>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-xs border border-emerald-500/30 transition flex items-center justify-center space-x-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-[10px] text-center text-slate-400 flex items-center justify-center space-x-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                <span>NDA Protected • Zero spam • Fast 15-min response</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
