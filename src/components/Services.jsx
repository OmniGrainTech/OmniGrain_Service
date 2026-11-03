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
  Clock, 
  Layers 
} from 'lucide-react';
import { servicesData } from '../data/websiteData';

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
  const [expandedId, setExpandedId] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'billing', label: 'Billing Software' },
    { id: 'consulting', label: 'Tech Consulting' },
    { id: 'web', label: 'Web & SaaS' },
    { id: 'cloud', label: 'Cloud & APIs' },
  ];

  const filteredServices = servicesData.filter(service => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mobile') return service.id === 'mobile-apps';
    if (activeFilter === 'ecommerce') return service.id === 'ecommerce';
    if (activeFilter === 'billing') return service.id === 'billing-software';
    if (activeFilter === 'consulting') return service.id === 'tech-consulting';
    if (activeFilter === 'web') return service.id === 'web-apps' || service.id === 'websites';
    if (activeFilter === 'cloud') return service.id === 'api-dev' || service.id === 'cloud-hosting';
    return true;
  });

  return (
    <section id="services" className="py-12 lg:py-20 bg-slate-50 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Clean, Direct Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-widest mb-2.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Our Core Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Technology Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Select any category below to check services, starting pricing & deliverables.
          </p>

          {/* Horizontally Scrollable Tabs on Mobile for instant check */}
          <div className="flex items-center overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center gap-2 mt-5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveFilter(tab.id);
                  setExpandedId(null);
                }}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap shrink-0 shadow-xs ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Mobile-Friendly Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            const price = currency === 'INR' 
              ? `₹${service.minPriceINR.toLocaleString('en-IN')}` 
              : `$${service.minPriceUSD.toLocaleString('en-US')}`;
            const isExpanded = expandedId === service.id;

            return (
              <div 
                key={service.id}
                className={`relative rounded-3xl bg-white border transition-all duration-200 flex flex-col justify-between group p-5 sm:p-6 ${
                  service.popular 
                    ? 'border-blue-400 shadow-md shadow-blue-500/10' 
                    : 'border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Popular or Demand Badge */}
                {service.badge && (
                  <div className="absolute -top-3 right-5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs ${
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
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Clean Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                        Starting From
                      </span>
                      <div className="text-base sm:text-lg font-black text-blue-600">
                        {price}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                        Timeline
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-800 flex items-center justify-end">
                        <Clock className="w-3 h-3 mr-1 text-blue-600" />
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Features List (Top 3 by default, expandable for user who wants to check more) */}
                  <div className="space-y-1.5 mb-4">
                    {service.features.slice(0, isExpanded ? undefined : 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : service.id)}
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-800 transition pt-1 flex items-center"
                      >
                        {isExpanded ? '▲ Show less' : `+${service.features.length - 3} more details`}
                      </button>
                    )}
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(`Service Inquiry: ${service.title}`)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-1.5 transition duration-150 ${
                    service.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                      : 'bg-slate-900 hover:bg-blue-600 text-white'
                  }`}
                >
                  <span>Get Quote for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
