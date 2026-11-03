import React, { useState } from 'react';
import { 
  Smartphone, 
  ShoppingBag, 
  Receipt, 
  Compass, 
  Globe, 
  Layout, 
  Cpu, 
  Database, 
  Cloud, 
  ArrowRight, 
  Check, 
  Sparkles,
  Clock,
  Layers,
  Phone
} from 'lucide-react';
import { servicesData, companyInfo } from '../data/websiteData';

const iconMap = {
  Smartphone: Smartphone,
  ShoppingBag: ShoppingBag,
  Receipt: Receipt,
  Compass: Compass,
  Globe: Globe,
  Layout: Layout,
  Cpu: Cpu,
  Database: Database,
  Cloud: Cloud
};

export default function Services({ currency, onOpenEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'mobile', label: 'Mobile Apps (Android & iOS)' },
    { id: 'ecommerce', label: 'E-Commerce Setup' },
    { id: 'billing', label: 'Billing Software & POS' },
    { id: 'consulting', label: 'Tech Consulting' },
    { id: 'web', label: 'Websites & SaaS' },
  ];

  const filteredServices = servicesData.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mobile') return service.id === 'mobile-apps';
    if (activeFilter === 'ecommerce') return service.id === 'ecommerce';
    if (activeFilter === 'billing') return service.id === 'billing-software';
    if (activeFilter === 'consulting') return service.id === 'tech-consulting';
    if (activeFilter === 'web') return service.id === 'web-apps' || service.id === 'websites';
    return true;
  });

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Our Core Technology Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            High-Performance Digital Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Built at the Best Market Price
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From consumer Android & iOS apps to turnkey E-Commerce setups, custom GST billing systems, and strategic Tech Consulting. 100% source code ownership with zero hidden fees.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const price = currency === 'INR' 
              ? `₹${service.minPriceINR.toLocaleString('en-IN')}` 
              : `$${service.minPriceUSD.toLocaleString('en-US')}`;

            return (
              <div 
                key={service.id}
                className={`relative rounded-3xl bg-white border transition-all duration-200 flex flex-col justify-between group p-6 sm:p-7 hover:-translate-y-1 ${
                  service.popular 
                    ? 'border-blue-400 shadow-lg shadow-blue-500/10' 
                    : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular or Demand Badge */}
                {service.badge && (
                  <div className="absolute -top-3 right-6">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm ${
                      service.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Transparent Minimum Pricing Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                        Minimum Pricing
                      </span>
                      <div className="text-lg font-black text-slate-900 flex items-baseline space-x-1">
                        <span className="text-xs font-medium text-slate-500">Starting from</span>
                        <span className="text-blue-600 font-extrabold text-xl ml-1">
                          {price}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                        Est. Delivery
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-800 flex items-center justify-end">
                        <Clock className="w-3.5 h-3.5 mr-1 text-blue-600" />
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider block">
                      What's Included:
                    </span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Real World Example Snippet */}
                  {service.exampleSnippet && (
                    <div className="p-2.5 rounded-xl bg-slate-100/70 border border-slate-200 text-[11px] text-slate-600 mb-5">
                      <strong className="text-slate-800">Use Cases: </strong>
                      {service.exampleSnippet}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`Service Inquiry: ${service.title}`)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center space-x-2 transition duration-150 ${
                    service.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 hover:bg-blue-600 text-white'
                  }`}
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-blue-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-black text-slate-900 flex items-center justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-amber-500 mr-2" />
              Not sure which tech architecture fits your budget?
            </h4>
            <p className="text-sm text-slate-600">
              Speak directly with our Lead Tech Consultant for a free 15-minute scoping call. Call or WhatsApp at <strong>{companyInfo.phoneDisplay}</strong>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {companyInfo.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenEnquiry('Free Tech Consultation Session')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm transition shadow-md shadow-blue-500/20 flex items-center justify-center space-x-1.5"
            >
              <span>Book Tech Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
