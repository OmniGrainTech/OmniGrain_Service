import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  MessageCircle,
  Smartphone,
  Globe,
  Receipt,
  Layout,
  Cpu
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function QuoteCalculator({ currency, onOpenEnquiry }) {
  const [serviceType, setServiceType] = useState('mobile');
  const [scale, setScale] = useState('pro');
  const [selectedAddons, setSelectedAddons] = useState(['auth', 'payment']);

  // Base pricing maps
  const baseRatesINR = {
    website: { starter: 9999, pro: 18999, enterprise: 34999, time: "3 - 7 Days" },
    billing: { starter: 19999, pro: 34999, enterprise: 64999, time: "1 - 3 Weeks" },
    webapp: { starter: 29999, pro: 54999, enterprise: 99999, time: "2 - 4 Weeks" },
    mobile: { starter: 34999, pro: 69999, enterprise: 129999, time: "3 - 6 Weeks" },
    api: { starter: 14999, pro: 29999, enterprise: 54999, time: "1 - 2 Weeks" },
  };

  const addonsList = [
    { id: 'auth', label: 'User Auth & Role Management', inr: 4999, usd: 70 },
    { id: 'payment', label: 'Payment Gateway (Razorpay/Stripe)', inr: 5999, usd: 85 },
    { id: 'whatsapp', label: 'WhatsApp Alerts & Notification Bot', inr: 4999, usd: 70 },
    { id: 'hardware', label: 'Barcode Scanner & Thermal Printer Driver', inr: 6999, usd: 99 },
    { id: 'admin', label: 'Dedicated Admin CMS & Data Analytics', inr: 8999, usd: 125 },
    { id: 'cloud', label: 'AWS / Cloud Production Auto-Deploy & SSL', inr: 4999, usd: 70 },
  ];

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const baseINR = baseRatesINR[serviceType][scale];
  const addonsTotalINR = selectedAddons.reduce((acc, currId) => {
    const item = addonsList.find(a => a.id === currId);
    return acc + (item ? item.inr : 0);
  }, 0);

  const totalEstimateINR = baseINR + addonsTotalINR;
  const inrToUsdRate = 75; // standard agency conversion divisor
  const totalEstimateUSD = Math.round(totalEstimateINR / inrToUsdRate);

  const estimatedTimeline = baseRatesINR[serviceType].time;

  const displayTotal = currency === 'INR' 
    ? `₹${totalEstimateINR.toLocaleString('en-IN')}` 
    : `$${totalEstimateUSD.toLocaleString('en-US')}`;

  const serviceLabels = {
    mobile: "Mobile App (Android & iOS)",
    billing: "Custom Billing & POS Software",
    webapp: "Custom Web App / SaaS",
    website: "High-Converting Website",
    api: "API & Backend Microservices"
  };

  const generateWhatsAppMessage = () => {
    const serviceName = serviceLabels[serviceType];
    const addonsStr = selectedAddons.join(', ');
    const msg = `Hello Omnigrain Tech LLP! I calculated a project estimate on your website:%0A- Service: ${serviceName}%0A- Scale: ${scale.toUpperCase()}%0A- Selected Features: ${addonsStr}%0A- Estimated Cost: ${displayTotal}%0A- Timeline: ${estimatedTimeline}%0APlease share detailed proposal & discount.`;
    return `https://wa.me/${companyInfo.whatsappRaw}?text=${msg}`;
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-brand-dark/95 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost & Timeline Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Estimate Your Project Cost <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-400 to-indigo-400">
              In Less Than 30 Seconds
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No endless sales waiting periods. Select your service requirements below to get an instant transparent starting estimate and project roadmap.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Controls (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Service Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-3">
                  Step 1: Select Primary Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'mobile', label: 'Mobile App', sub: 'Android & iOS', icon: Smartphone },
                    { id: 'billing', label: 'Billing Software', sub: 'POS & Invoicing', icon: Receipt },
                    { id: 'webapp', label: 'Custom SaaS', sub: 'Web Platform', icon: Globe },
                    { id: 'website', label: 'Website / Lander', sub: 'Speed & SEO', icon: Layout },
                    { id: 'api', label: 'API & Database', sub: 'Backend Microservices', icon: Cpu },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setServiceType(item.id)}
                        className={`p-3 rounded-xl border text-left transition ${
                          serviceType === item.id
                            ? 'bg-brand-accent/20 border-brand-accent text-white shadow-md shadow-brand-accent/20'
                            : 'bg-brand-dark border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-2 ${serviceType === item.id ? 'text-brand-accent' : 'text-slate-400'}`} />
                        <div className="text-xs font-bold leading-tight">{item.label}</div>
                        <div className="text-[10px] text-slate-400">{item.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Scale */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-3">
                  Step 2: Choose Project Scale
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'starter', label: 'MVP / Starter', desc: 'Core essentials & launch' },
                    { id: 'pro', label: 'Professional', desc: 'Full custom features' },
                    { id: 'enterprise', label: 'Enterprise', desc: 'High concurrency & scale' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScale(item.id)}
                      className={`p-3 rounded-xl border text-center transition ${
                        scale === item.id
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                          : 'bg-brand-dark border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Feature Add-ons */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-3">
                  Step 3: Select Essential Capabilities
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {addonsList.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-2.5 rounded-xl border cursor-pointer flex items-center justify-between transition ${
                          isSelected
                            ? 'bg-slate-800/90 border-brand-accent/50 text-white'
                            : 'bg-brand-dark/80 border-slate-800/80 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2 text-xs">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected ? 'bg-brand-accent border-brand-accent text-slate-950 font-bold' : 'border-slate-700'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className={isSelected ? 'text-slate-100 font-medium' : 'text-slate-400'}>
                            {addon.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Live Quote Result Card (Right 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-brand-card via-slate-900 to-brand-card border border-brand-accent/40 shadow-xl space-y-6">
              
              <div className="space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Estimated Proposal
                  </span>
                  <span className="text-[10px] bg-brand-accent/15 text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded font-mono font-bold">
                    Fixed Price Guarantee
                  </span>
                </div>

                {/* Main Estimated Cost */}
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Estimated Starting Investment:</span>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-cyan-300 to-white mt-1">
                    {displayTotal}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    + Inclusive of Architecture, Code Review, Testing & Handover
                  </span>
                </div>

                {/* Timeline badge */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-brand-accent" /> Est. Development Timeline:
                  </span>
                  <span className="font-mono font-bold text-white">{estimatedTimeline}</span>
                </div>

                {/* Summary checklist */}
                <div className="space-y-2 text-xs text-slate-300 pt-1">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Selected: <strong>{serviceLabels[serviceType]}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>100% Source Code & Database Ownership</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Free Post-Launch Bug Warranty & Support</span>
                  </div>
                </div>

              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-600/20 transition flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Lock Estimate via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`Calculator Estimate: ${serviceLabels[serviceType]} (${displayTotal})`)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accentLight hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-brand-accent/20 transition flex items-center justify-center space-x-1.5"
                >
                  <span>Request Full SOW Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
