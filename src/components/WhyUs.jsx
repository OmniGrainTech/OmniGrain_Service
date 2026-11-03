import React from 'react';
import { 
  BadgePercent, 
  Code2, 
  ShoppingBag, 
  Zap, 
  Users, 
  ShieldAlert, 
  CheckCircle, 
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle
} from 'lucide-react';
import { whyChooseUs, companyInfo } from '../data/websiteData';

const iconMap = {
  BadgePercent: BadgePercent,
  Code2: Code2,
  ShoppingBag: ShoppingBag,
  Zap: Zap,
  Users: Users,
  ShieldAlert: ShieldAlert,
  CheckCircle: CheckCircle,
  Headphones: Headphones
};

export default function WhyUs({ onOpenEnquiry }) {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Founders & Businesses Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Built Differently Than <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Traditional Slow Agencies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We act as your dedicated engineering partner. We combine best-in-market pricing, rapid 2–4 week delivery sprints, 100% intellectual property ownership, and direct senior architect access.
          </p>
        </div>

        {/* 8 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-400 hover:bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Conversion Action Strip */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-black flex items-center justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-amber-400 mr-2" />
              Ready to bring your Mobile App or E-Commerce vision to life?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our Tech Lead on WhatsApp or Call: <strong className="text-white underline">{companyInfo.phoneDisplay}</strong>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20want%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center space-x-1.5 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Why Us Action')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition flex items-center justify-center space-x-1.5"
            >
              <span>Get Free Quote Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
