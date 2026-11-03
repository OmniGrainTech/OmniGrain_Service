import React from 'react';
import { Building2, Award, Users, CheckCircle, Shield, Check } from 'lucide-react';
import { clientLogos } from '../data/websiteData';

export default function SatisfiedClients() {
  const industries = [
    { title: "Retail & Wholesale", desc: "Fast Billing & POS Software with Barcode & Thermal Sync" },
    { title: "E-Commerce & D2C", desc: "High-Converting Online Stores, Mobile Apps & Payment Integrations" },
    { title: "Healthcare & Labs", desc: "Patient Portals, Appointment Booking & Diagnostic Systems" },
    { title: "Logistics & Fleet", desc: "Vehicle Tracking, Dispatch Routing & Driver Apps" },
    { title: "Fintech & Billing", desc: "GST Invoicing, Recurring Subscriptions & Khata Ledgers" },
    { title: "Education & EdTech", desc: "LMS Portals, Student Attendance & Assessment Platforms" },
  ];

  return (
    <section className="py-14 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest text-blue-600 font-extrabold block mb-1">
            Proven Industry Track Record
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Trusted by 150+ Growing Brands, Retailers & Startups
          </h3>
        </div>

        {/* Client Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-10">
          {clientLogos.map((client, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col items-center justify-center text-center hover:border-blue-300 hover:bg-blue-50/30 transition shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-1.5 font-black text-xs">
                OG
              </div>
              <span className="text-sm font-bold text-slate-900 block">{client.name}</span>
              <span className="text-[10px] text-slate-500 font-medium">{client.label}</span>
            </div>
          ))}
        </div>

        {/* Industries Served Section */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 text-center mb-5">
            Key Industry Domains We Specialize In
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {industries.map((ind, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start space-x-3 shadow-xs">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{ind.title}</h5>
                  <p className="text-[11px] text-slate-500 mt-0.5">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
