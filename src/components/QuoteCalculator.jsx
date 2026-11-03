import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Smartphone,
  ShoppingBag,
  Receipt,
  Compass,
  Globe,
  Layout,
  Cpu
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';
import WhatsAppIcon from './WhatsAppIcon';

export default function QuoteCalculator({ currency, onOpenEnquiry }) {
  const [serviceType, setServiceType] = useState('mobile');
  const [scale, setScale] = useState('pro');
  const [selectedAddons, setSelectedAddons] = useState(['auth', 'payment']);

  // Base pricing maps in INR
  const baseRatesINR = {
    mobile: { starter: 24999, pro: 49999, enterprise: 89999, time: "2 - 4 Weeks" },
    ecommerce: { starter: 14999, pro: 29999, enterprise: 54999, time: "1 - 2 Weeks" },
    billing: { starter: 19999, pro: 34999, enterprise: 64999, time: "1 - 3 Weeks" },
    consulting: { starter: 4999, pro: 14999, enterprise: 29999, time: "1 - 5 Days" },
    webapp: { starter: 24999, pro: 49999, enterprise: 89999, time: "2 - 4 Weeks" },
    website: { starter: 9999, pro: 18999, enterprise: 34999, time: "3 - 7 Days" },
  };

  const addonsList = [
    { id: 'auth', label: 'User Auth & Role Management', inr: 3999, usd: 55 },
    { id: 'payment', label: 'Payment Gateway (Razorpay/Stripe/UPI)', inr: 4999, usd: 70 },
    { id: 'whatsapp', label: 'WhatsApp Order & Alert Automation', inr: 3999, usd: 55 },
    { id: 'hardware', label: 'Barcode Scanner & Thermal Printer Driver', inr: 5999, usd: 85 },
    { id: 'admin', label: 'Admin CMS Dashboard & Data Analytics', inr: 6999, usd: 99 },
    { id: 'cloud', label: 'AWS / Cloud Production Auto-Deploy & SSL', inr: 3999, usd: 55 },
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
  const inrToUsdRate = 72;
  const totalEstimateUSD = Math.round(totalEstimateINR / inrToUsdRate);

  const estimatedTimeline = baseRatesINR[serviceType].time;

  const displayTotal = currency === 'INR' 
    ? `₹${totalEstimateINR.toLocaleString('en-IN')}` 
    : `$${totalEstimateUSD.toLocaleString('en-US')}`;

  const serviceLabels = {
    mobile: "Android & iOS Mobile App",
    ecommerce: "E-Commerce Business Setup",
    billing: "Custom Billing & POS Software",
    consulting: "Tech Consulting & Architecture",
    webapp: "Custom Web App / SaaS / CRM",
    website: "High-Speed Website / Landing Page"
  };

  const generateWhatsAppMessage = () => {
    const serviceName = serviceLabels[serviceType];
    const addonsStr = selectedAddons.join(', ');
    const msg = `Hello Omnigrain Tech! I calculated an estimate on your website:%0A*Service:* ${serviceName}%0A*Scale:* ${scale.toUpperCase()}%0A*Features:* ${addonsStr}%0A*Estimate:* ${displayTotal}%0A*Timeline:* ${estimatedTimeline}%0APlease share detailed scope & discount.`;
    return `https://wa.me/${companyInfo.whatsappRaw}?text=${msg}`;
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost & Timeline Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Estimate Your Project Cost <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              In Less Than 30 Seconds
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No long waiting times. Select your requirements below to calculate an honest, transparent estimate with delivery timelines.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl p-6 sm:p-9 max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Service Type */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2.5">
                  Step 1: Select Your Service Need
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'mobile', label: 'Mobile App', sub: 'Android & iOS', icon: Smartphone },
                    { id: 'ecommerce', label: 'E-Commerce', sub: 'Setup & Store', icon: ShoppingBag },
                    { id: 'billing', label: 'Billing Software', sub: 'POS & Invoicing', icon: Receipt },
                    { id: 'consulting', label: 'Tech Consulting', sub: 'Architecture', icon: Compass },
                    { id: 'webapp', label: 'Web App / SaaS', sub: 'CRM & Portals', icon: Globe },
                    { id: 'website', label: 'Website / Lander', sub: 'Ad Conversion', icon: Layout },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setServiceType(item.id)}
                        className={`p-3 rounded-2xl border text-left transition ${
                          serviceType === item.id
                            ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-1.5 ${serviceType === item.id ? 'text-blue-600' : 'text-slate-500'}`} />
                        <div className="text-xs font-bold leading-tight">{item.label}</div>
                        <div className="text-[10px] text-slate-500">{item.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Scale */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2.5">
                  Step 2: Choose Project Scale
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'starter', label: 'MVP / Starter', desc: 'Core features' },
                    { id: 'pro', label: 'Standard / Pro', desc: 'Full custom design' },
                    { id: 'enterprise', label: 'Enterprise', desc: 'High scale & SLA' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScale(item.id)}
                      className={`p-3 rounded-2xl border text-center transition ${
                        scale === item.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className={`text-[10px] mt-0.5 ${scale === item.id ? 'text-blue-100' : 'text-slate-500'}`}>
                        {item.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Feature Add-ons */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2.5">
                  Step 3: Select Essential Features
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
                            ? 'bg-blue-50/70 border-blue-400 text-slate-900 font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2 text-xs">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected ? 'bg-blue-600 border-blue-600 text-white font-bold' : 'border-slate-300'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{addon.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Live Quote Result Card (Right 5 Cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Estimated Proposal
                  </span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded font-mono font-bold">
                    Fixed Price Guarantee
                  </span>
                </div>

                {/* Main Estimated Cost */}
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Estimated Starting Investment:</span>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white mt-1">
                    {displayTotal}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    + Architecture, Code Review, Testing & Handover Included
                  </span>
                </div>

                {/* Timeline badge */}
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-400" /> Est. Development Timeline:
                  </span>
                  <span className="font-mono font-bold text-white">{estimatedTimeline}</span>
                </div>

                {/* Summary checklist */}
                <div className="space-y-2 text-xs text-slate-300 pt-1">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                    <span>Selected: <strong>{serviceLabels[serviceType]}</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                    <span>100% Source Code Ownership & IP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                    <span>Free Post-Launch Bug Warranty & Training</span>
                  </div>
                </div>

              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md transition flex items-center justify-center space-x-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Lock Estimate via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`Calculator Estimate: ${serviceLabels[serviceType]} (${displayTotal})`)}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center space-x-1.5"
                >
                  <span>Request Written SOW Proposal</span>
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
