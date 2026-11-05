import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Clock, Check, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/websiteData';
import WhatsAppIcon from './WhatsAppIcon';
import { saveLead, recordInteraction } from '../services/tracker';

export default function EnquiryModal({ isOpen, onClose, initialSubject, currency }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [need, setNeed] = useState(initialSubject || 'Android & iOS Mobile Application');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    recordInteraction('quote_modal_opened', { subject: initialSubject || 'General Quote' });
  }, [initialSubject]);

  const needOptions = [
    'Android & iOS Mobile Application',
    'E-Commerce Business Setup & Website',
    'Custom Billing & POS Software',
    'Tech Consulting & Architecture',
    'Custom Web App / SaaS Platform',
    'High-Converting Website / Landing Page',
    'Custom CRM & Automation',
    'API & Database Optimization',
    'Cloud & DevOps Hosting',
    'Other (Custom Requirement)'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    saveLead({
      name,
      phone,
      email,
      company,
      service: need,
      details,
      sourceForm: 'Enquiry Modal Popup'
    }).finally(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({ particleCount: 85, spread: 65, origin: { y: 0.5 } });
      } catch (err) {}
    });
  };

  const getWhatsAppLink = () => {
    const msg = `Hi Omnigrain Tech!%0A*Name:* ${name || 'Client'}%0A*Phone:* ${phone || 'Not provided'}%0A*Company:* ${company || 'Individual'}%0A*Service Needed:* ${need}%0A*Notes:* ${details || 'Interested in quote'}`;
    return `https://wa.me/${companyInfo.whatsappRaw}?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-7 space-y-3.5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Inquiry Received!</h3>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Our Senior Tech Lead is reviewing your requirement. We'll message you on WhatsApp or call you on your number within 15 minutes.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Continue on WhatsApp Now</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-800 underline pt-1"
              >
                Close window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-[10px] text-blue-600 font-extrabold uppercase tracking-wider block">
                Instant Priority Quote
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-0.5">Let's Discuss Your Project</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Fill this quick form or connect directly with our Lead Tech Architect on Call or WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singhania"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / WhatsApp No. *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Company Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="vikram@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">What Service Do You Need?</label>
                <select
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 font-semibold focus:outline-none focus:border-blue-600"
                >
                  {needOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">What do you want to build? / Notes</label>
                <textarea
                  rows="2"
                  placeholder="Tell us any specific features, budget, or ideas..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md transition flex items-center justify-center space-x-1.5"
                >
                  {loading ? <span>Submitting...</span> : <span>Send Project Enquiry</span>}
                </button>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-sm transition flex items-center justify-center space-x-1"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>

              <div className="text-[10px] text-center text-slate-500 flex items-center justify-center space-x-1 pt-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>NDA Protected • 100% Code Ownership • Fast 15-min response</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
