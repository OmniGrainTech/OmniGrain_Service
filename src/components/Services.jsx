import React, { useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Receipt, 
  Layout, 
  Cpu, 
  Database, 
  Cloud, 
  ArrowRight, 
  Check, 
  Sparkles,
  Clock,
  Layers
} from 'lucide-react';
import { servicesData } from '../data/websiteData';

// Icon Map
const iconMap = {
  Smartphone: Smartphone,
  Globe: Globe,
  Receipt: Receipt,
  Layout: Layout,
  Cpu: Cpu,
  Database: Database,
  Cloud: Cloud
};

export default function Services({ currency, onOpenEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'app', label: 'Mobile & Web Apps' },
    { id: 'enterprise', label: 'Billing & Enterprise' },
    { id: 'backend', label: 'API, DB & Cloud' },
  ];

  const filteredServices = servicesData.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'app') return service.id === 'mobile-apps' || service.id === 'web-apps' || service.id === 'websites';
    if (activeFilter === 'enterprise') return service.id === 'billing-software' || service.id === 'web-apps';
    if (activeFilter === 'backend') return service.id === 'api-dev' || service.id === 'database' || service.id === 'cloud-hosting';
    return true;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Engineering Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Comprehensive Tech Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-cyan-300 to-blue-500">
              Built for Scale & Conversions
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From cross-platform mobile apps to bespoke billing software and ultra-fast APIs, we build robust digital solutions tailored to your unique business model. Transparent starting prices with zero hidden costs.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  activeFilter === tab.id
                    ? 'bg-brand-accent text-slate-950 shadow-md shadow-brand-accent/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const price = currency === 'INR' 
              ? `₹${service.minPriceINR.toLocaleString('en-IN')}` 
              : `$${service.minPriceUSD.toLocaleString('en-US')}`;

            return (
              <div 
                key={service.id}
                className={`relative rounded-2xl bg-brand-card/90 border transition-all duration-300 flex flex-col justify-between group p-6 sm:p-7 hover:-translate-y-1.5 ${
                  service.popular 
                    ? 'border-brand-accent/60 shadow-xl shadow-brand-accent/10 bg-slate-900/95' 
                    : 'border-slate-800 hover:border-slate-700 hover:shadow-xl'
                }`}
              >
                {/* Popular or Demand Badge */}
                {service.badge && (
                  <div className="absolute -top-3 right-6">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow ${
                      service.popular 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950' 
                        : 'bg-brand-accent/20 text-brand-accentLight border border-brand-accent/40'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent/20 to-blue-600/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition">
                        {service.title}
                      </h3>
                      <p className="text-xs text-brand-muted font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Pricing Box - As requested: Minimum pricing like starting with xxxx */}
                  <div className="p-3.5 rounded-xl bg-brand-dark/90 border border-slate-800/90 mb-5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                        Minimum Pricing
                      </span>
                      <div className="text-lg font-black text-white flex items-baseline space-x-1">
                        <span className="text-xs font-normal text-slate-400">Starting from</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400 font-extrabold text-xl">
                          {price}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                        Est. Delivery
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-300 flex items-center justify-end">
                        <Clock className="w-3 h-3 mr-1 text-brand-accent" />
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      What's Included:
                    </span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Real World Solution Example (e.g. Billing Software, CRM, etc.) */}
                  {service.exampleSnippet && (
                    <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-[11px] text-slate-400 mb-6">
                      <strong className="text-slate-300">Examples: </strong>
                      {service.exampleSnippet}
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
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
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition duration-200 ${
                    service.popular
                      ? 'bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accentLight hover:to-blue-500 text-slate-950 shadow-lg shadow-brand-accent/20'
                      : 'bg-slate-800 hover:bg-brand-accent hover:text-slate-950 text-white border border-slate-700'
                  }`}
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-brand-card to-slate-900 border border-brand-accent/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-amber-400 mr-2" /> Have a Unique Or Complex Requirement?
            </h4>
            <p className="text-sm text-slate-300">
              We engineer custom enterprise architectures, legacy system migrations, and specialized mobile software.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Custom Specialized Project')}
            className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm transition shadow-lg flex items-center space-x-2"
          >
            <span>Talk to Tech Architect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
