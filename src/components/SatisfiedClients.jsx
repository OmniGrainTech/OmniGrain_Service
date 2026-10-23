import React from 'react';
import { Building2, Award, Users, CheckCircle, Shield } from 'lucide-react';
import { clientLogos } from '../data/websiteData';

export default function SatisfiedClients() {
  const industries = [
    { title: "Retail & Wholesale", desc: "Fast Billing & POS Software with Barcode & Thermal Sync" },
    { title: "Mobile & D2C", desc: "E-Commerce & High-Retention Consumer Apps" },
    { title: "Healthcare & Labs", desc: "HIPAA-ready Patient Portals & Appointment Systems" },
    { title: "Logistics & Fleet", desc: "Real-time Vehicle Tracking & Dispatch Management" },
    { title: "Fintech & Billing", desc: "GST Invoicing, Recurring Subscriptions & Ledgers" },
    { title: "Education & EdTech", desc: "LMS Portals, Student Attendance & Online Tests" },
  ];

  return (
    <section className="py-16 bg-brand-deep border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
            Proven Track Record
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Trusted By Growing Businesses Across Diverse Sectors
          </h3>
        </div>

        {/* Client Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {clientLogos.map((client, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col items-center justify-center text-center hover:border-slate-700 transition"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-2 font-black text-xs">
                OG
              </div>
              <span className="text-sm font-bold text-white block">{client.name}</span>
              <span className="text-[10px] text-slate-400">{client.label}</span>
            </div>
          ))}
        </div>

        {/* Industries Served Section */}
        <div className="rounded-2xl bg-brand-card/60 border border-slate-800 p-6 sm:p-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-accent text-center mb-6">
            Industries We Specialize In
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white">{ind.title}</h5>
                  <p className="text-[11px] text-slate-400">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
