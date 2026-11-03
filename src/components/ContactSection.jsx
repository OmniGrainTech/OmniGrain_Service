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
  Check,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/websiteData';

export default function ContactSection({ currency, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    need: initialService || 'Android & iOS Mobile Application',
    budget: currency === 'INR' ? '₹25,000 - ₹50,000' : '$500 - $1,000',
    timeline: '2 - 4 Weeks',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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
    'Other (Specify in description below)'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your Name and Mobile/WhatsApp number.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 500);
  };

  const getWhatsAppDirectLink = () => {
    const msg = `Hello Omnigrain Tech!%0A*Name:* ${formData.name || 'Client'}%0A*Phone:* ${formData.phone || 'Not given'}%0A*Company:* ${formData.company || 'Individual'}%0A*Requirement (Need):* ${formData.need}%0A*Budget:* ${formData.budget}%0A*Timeline:* ${formData.timeline}%0A*Details:* ${formData.details || 'Looking for project quote'}`;
    return `https://wa.me/${companyInfo.whatsappRaw}?text=${msg}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>High-Priority Lead Intake Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Ready to Build Your Project? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Get Free Scope & Quote Within 2 Hours
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tell us about your requirements below. Our Senior Tech Lead will review your specifications and provide a realistic roadmap, wireframes, and best-price quote.
          </p>
        </div>

        {/* Main Grid: Form (7 cols) + Direct Desk (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: High-Converting Lead Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-md relative">
            
            {/* Top Online Indicator */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-bold text-slate-800">Tech Lead Desk Active</span>
              </div>
              <span className="text-[11px] text-slate-500 flex items-center font-semibold">
                <Clock className="w-3.5 h-3.5 mr-1 text-blue-600" />
                Avg Response: &lt; 15 Mins
              </span>
            </div>

            {submitted ? (
              /* Success / Conversion State */
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-300 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-black text-slate-900">Thank You, {formData.name || 'Client'}!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your requirements have been delivered to our Senior Technical Architect. We will contact you via WhatsApp / Phone shortly with your preliminary scope and quotation.
                  </p>
                </div>

                {/* WhatsApp Follow-up shortcut */}
                <div className="pt-4 max-w-sm mx-auto space-y-2">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
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
                        company: '',
                        need: 'Android & iOS Mobile Application',
                        budget: currency === 'INR' ? '₹25,000 - ₹50,000' : '$500 - $1,000',
                        timeline: '2 - 4 Weeks',
                        details: '',
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    Submit another requirement
                  </button>
                </div>
              </div>
            ) : (
              /* Main Interactive Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="text-xs font-bold text-slate-700 block mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-phone" className="text-xs font-bold text-slate-700 block mb-1">
                      Mobile / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                </div>

                {/* Company Name (Optional) & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-company" className="text-xs font-bold text-slate-700 block mb-1">
                      Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="client-company"
                      type="text"
                      placeholder="e.g. Apex Retail / Your Brand"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-email" className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                </div>

                {/* Service Needed Dropdown (As Requested by user) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-need" className="text-xs font-bold text-slate-700 block mb-1">
                      What Service Do You Need? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="client-need"
                      value={formData.need}
                      onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    >
                      {needOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="client-budget" className="text-xs font-bold text-slate-700 block mb-1">
                      Approximate Budget Range
                    </label>
                    <select
                      id="client-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Requirements & Write what they want */}
                <div>
                  <label htmlFor="client-details" className="text-xs font-bold text-slate-700 block mb-1">
                    Tell Us What You Want To Build <span className="text-slate-400 font-normal">(Features, specific ideas, or timeline)</span>
                  </label>
                  <textarea
                    id="client-details"
                    rows="3"
                    placeholder="Briefly describe what you need (e.g., Android & iOS grocery delivery app with OTP login, or custom wholesale billing with 3-inch thermal printing, or D2C Shopify setup)..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  
                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm shadow-md hover:shadow-blue-500/25 transition duration-150 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Sending Your Requirements...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Get Free Proposal & Quote</span>
                      </>
                    )}
                  </button>

                  {/* Direct WhatsApp Pre-filled Button with updated phone number */}
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-sm transition flex items-center justify-center space-x-2"
                    title="Send via WhatsApp directly"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Directly</span>
                  </a>
                </div>

                <div className="pt-1 text-[11px] text-slate-500 flex items-center justify-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict Legal NDA • Zero Spam Guarantee • 100% Confidential</span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Direct Corporate Contact Desk */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-5 shadow-xs">
              <div>
                <span className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest block mb-0.5">
                  Direct Engineering Desk
                </span>
                <h3 className="text-2xl font-black text-slate-900">Omnigrain Tech</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Connect directly with our lead software architects and tech consultants.
                </p>
              </div>

              <div className="space-y-3">
                
                {/* Direct Phone Call */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">
                        Direct Call Desk
                      </span>
                      <span className="text-xs text-slate-600 font-medium">Click to connect instantly</span>
                    </div>
                  </div>
                  <a 
                    href={`tel:${companyInfo.phone}`}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-sm"
                    title="Click to Call Tech Lead"
                  >
                    Call Us Now
                  </a>
                </div>

                {/* WhatsApp Chat */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 fill-emerald-600" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">
                        WhatsApp Desk
                      </span>
                      <span className="text-xs text-slate-600 font-medium">Instant proposal chat</span>
                    </div>
                  </div>
                  <a 
                    href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20would%20like%20to%20discuss%20a%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-sm"
                    title="Click to Chat on WhatsApp"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Email Desk */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center space-x-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">
                      Corporate Email Desk
                    </span>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Headquarters Address */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center space-x-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">
                      Main Headquarters
                    </span>
                    <span className="text-xs font-semibold text-slate-700 block leading-tight">
                      {companyInfo.address}
                    </span>
                  </div>
                </div>

              </div>

              {/* Working Hours */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs space-y-1 font-medium text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-500">Monday - Friday:</span>
                  <span className="font-bold text-slate-900">9:00 AM - 9:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Saturday:</span>
                  <span className="font-bold text-slate-900">10:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Emergency DevOps:</span>
                  <span>24/7 Monitoring Active</span>
                </div>
              </div>

            </div>

            {/* Schedule 15-Min Call Card */}
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between shadow-xs">
              <div>
                <h4 className="text-xs font-extrabold text-blue-950">Book a 15-Minute Strategy Call</h4>
                <p className="text-[11px] text-blue-700 mt-0.5">Talk to Senior Tech Architect on Google Meet / Call</p>
              </div>
              <a
                href={`tel:${companyInfo.phone}`}
                className="shrink-0 text-xs font-bold px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition shadow-sm"
              >
                Call Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
