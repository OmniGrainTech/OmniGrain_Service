import React from 'react';
import { 
  BadgePercent, 
  Code2, 
  Zap, 
  Users, 
  ShieldCheck, 
  Headphones,
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function WhyUs({ onOpenEnquiry }) {
  const pillars = [
    {
      title: "Best Price Guarantee",
      desc: "Transparent milestone pricing with zero hidden fees.",
      icon: BadgePercent,
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      title: "100% Code Ownership",
      desc: "Full source code, IP, and databases transferred to you.",
      icon: Code2,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      title: "Fast 2–4 Week Delivery",
      desc: "Working prototypes in 7 days, full production in weeks.",
      icon: Zap,
      color: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      title: "Direct Senior Tech Access",
      desc: "Collaborate directly with lead architects on call or WhatsApp.",
      icon: Users,
      color: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      title: "Strict Mutual NDA",
      desc: "Full legal protection for your business idea and data.",
      icon: ShieldCheck,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200"
    },
    {
      title: "Free Post-Launch Warranty",
      desc: "30 to 90 days of dedicated bug fixes and server monitoring.",
      icon: Headphones,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200"
    }
  ];

  return (
    <section id="why-us" className="py-12 lg:py-18 bg-white relative border-t border-slate-200 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Short, Direct Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase tracking-widest mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Omnigrain Tech</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Why Businesses Choose Us
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Enterprise software quality delivered with speed and zero vendor lock-in.
          </p>
        </div>

        {/* Compact, Redesigned 6-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-4.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-150 flex items-start space-x-3.5 group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.color} transition-transform group-hover:scale-105`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-0.5 group-hover:text-blue-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Short & Clean CTA Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-sm">
          <div>
            <h4 className="text-sm sm:text-base font-extrabold">
              Need technical advice or a project quote?
            </h4>
            <p className="text-xs text-blue-100 mt-0.5">
              Speak directly with our Lead Tech Architect on WhatsApp or Call.
            </p>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <a
              href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20want%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5 shadow-xs"
              title="Click to Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Why Us Action')}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-black text-xs transition shadow-xs flex items-center justify-center space-x-1"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
