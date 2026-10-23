import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Calendar,
  AlertCircle,
  HelpCircle,
  Smartphone,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/websiteData';

export default function ContactSection({ currency, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: initialService ? [initialService] : ['Mobile App Development'],
    budget: currency === 'INR' ? '₹25,000 - ₹50,000' : '$500 - $1,000',
    timeline: '2 - 4 Weeks',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const serviceOptions = [
    'Mobile App (Android/iOS)',
    'Custom Billing Software',
    'Web App / SaaS Platform',
    'Website / Landing Page',
    'API & Database Design',
    'Cloud Hosting & DevOps',
  ];

  const budgetOptions = currency === 'INR' ? [
    'Under ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,50,000',
    '₹2,50,000+'
  ] : [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000+'
  ];

  const handleServiceToggle = (srv) => {
    if (formData.services.includes(srv)) {
      if (formData.services.length > 1) {
        setFormData({ ...formData, services: formData.services.filter(s => s !== srv) });
      }
    } else {
      setFormData({ ...formData, services: [...formData.services, srv] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and phone/WhatsApp number so we can reach you.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    // Simulate swift server processing & lead capture
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory conversion confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 600);
  };

  const getWhatsAppDirectLink = () => {
    const srvText = formData.services.join(', ');
    const msg = `Hello Omnigrain Tech LLP!%0A*Name:* ${formData.name || 'Visitor'}%0A*Phone:* ${formData.phone || 'Not given'}%0A*Services Required:* ${srvText}%0A*Budget:* ${formData.budget}%0A*Timeline:* ${formData.timeline}%0A*Brief:* ${formData.details || 'Interested in consultation'}`;
    return `https://wa.me/${companyInfo.whatsappRaw}?text=${msg}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-deep relative">
      
      {/* Background Tech Mesh & Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>High-Priority Client Intake Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Build Your Project? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-cyan-300 to-blue-500">
              Get Free Scope & Quote Within 2 Hours
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tell us about your requirements below. Our senior engineering leads will review your specifications and provide a realistic roadmap, architecture suggestion, and fixed-price quotation.
          </p>
        </div>

        {/* Main Grid: Form (7 cols) + Direct Desk (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: High-Converting Lead Form */}
          <div className="lg:col-span-7 bg-brand-card/90 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl backdrop-blur-xl relative">
            
            {/* Top SLA Indicator */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-bold text-white">Client Desk Online</span>
              </div>
              <span className="text-[11px] text-brand-muted flex items-center font-mono">
                <Clock className="w-3.5 h-3.5 mr-1 text-brand-accent" />
                Avg Response: &lt; 15 Mins
              </span>
            </div>

            {submitted ? (
              /* Success / Conversion State */
              <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">Thank You, {formData.name || 'Client'}!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your project details have been assigned to our Senior Solutions Architect. We will reach out to you via WhatsApp / Phone shortly with your preliminary scope and estimate.
                  </p>
                </div>

                {/* WhatsApp Follow-up shortcut */}
                <div className="pt-4 max-w-sm mx-auto space-y-2">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Speed Up: Continue on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        services: ['Mobile App Development'],
                        budget: currency === 'INR' ? '₹25,000 - ₹50,000' : '$500 - $1,000',
                        timeline: '2 - 4 Weeks',
                        details: '',
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Main Interactive Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMsg && (
                  <div className="p-3 bg-red-950/60 border border-red-500/40 rounded-xl text-xs text-red-300 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Service Selection Chips */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    I Need Development For: <span className="text-slate-500 font-normal">(Select all that apply)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => handleServiceToggle(srv)}
                          className={`text-xs py-1.5 px-3 rounded-lg border font-semibold transition flex items-center space-x-1.5 ${
                            isSelected
                              ? 'bg-brand-accent text-slate-950 border-brand-accent shadow-sm'
                              : 'bg-slate-900 text-slate-400 border-slate-700/80 hover:text-white hover:border-slate-600'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          <span>{srv}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="text-xs font-bold text-slate-300 block mb-1.5">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-phone" className="text-xs font-bold text-slate-300 block mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>
                </div>

                {/* Email & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-email" className="text-xs font-bold text-slate-300 block mb-1.5">
                      Work Email Address <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-budget" className="text-xs font-bold text-slate-300 block mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      id="client-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-slate-900 text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="client-details" className="text-xs font-bold text-slate-300 block mb-1.5">
                    Project Requirements / Vision
                  </label>
                  <textarea
                    id="client-details"
                    rows="3"
                    placeholder="Briefly describe what you want to build (e.g., iOS & Android grocery app with OTP login, or custom wholesale billing with 3-inch thermal printer)..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  
                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accentLight hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 transition duration-300 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Sending Specifications...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Enquiry</span>
                      </>
                    )}
                  </button>

                  {/* Direct WhatsApp Pre-filled Button */}
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-sm border border-emerald-500/40 transition flex items-center justify-center space-x-2"
                    title="Send this exact requirement directly via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
                    <span>WhatsApp Directly</span>
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict Mutual NDA • No Spam Guarantee • 100% Confidential</span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Direct Corporate Contact Desk */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] text-brand-accent font-bold uppercase tracking-widest block mb-1">
                  Direct Engineering Desk
                </span>
                <h3 className="text-2xl font-black text-white">Omnigrain Tech LLP</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect directly with our technical partners and lead software architects.
                </p>
              </div>

              <div className="space-y-3.5">
                
                {/* Official Corporate Email */}
                <div className="p-3.5 rounded-xl bg-brand-deep/90 border border-slate-800 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">
                      Corporate Email Desk
                    </span>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-brand-accent transition"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Direct Phone / Corporate Hotline */}
                <div className="p-3.5 rounded-xl bg-brand-deep/90 border border-slate-800 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">
                      Direct Hotline & WhatsApp
                    </span>
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-brand-accent transition block"
                    >
                      {companyInfo.phone} / {companyInfo.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Corporate Address */}
                <div className="p-3.5 rounded-xl bg-brand-deep/90 border border-slate-800 flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">
                      Main Headquarters
                    </span>
                    <span className="text-xs font-semibold text-slate-200 block leading-relaxed">
                      {companyInfo.address}
                    </span>
                  </div>
                </div>

              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Monday - Friday:</span>
                  <span className="font-semibold text-white">9:00 AM - 8:00 PM IST</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Saturday:</span>
                  <span className="font-semibold text-white">10:00 AM - 5:00 PM IST</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Emergency DevOps:</span>
                  <span className="font-semibold text-emerald-400">24/7 Monitoring Active</span>
                </div>
              </div>

            </div>

            {/* Schedule a Call Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 to-slate-900 border border-blue-500/30 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Book a 15-Minute Tech Discovery Call</h4>
                  <p className="text-[11px] text-slate-300">Pick a Google Meet slot with our Tech Lead</p>
                </div>
              </div>
              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-bold px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow"
              >
                Schedule Call
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
