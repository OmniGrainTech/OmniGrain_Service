import React from 'react';
import { 
  Code2, 
  Zap, 
  Users, 
  ShieldAlert, 
  CheckCircle, 
  Headphones,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { whyChooseUs } from '../data/websiteData';

const iconMap = {
  Code2: Code2,
  Zap: Zap,
  Users: Users,
  ShieldAlert: ShieldAlert,
  CheckCircle: CheckCircle,
  Headphones: Headphones
};

export default function WhyUs({ onOpenEnquiry }) {
  return (
    <section className="py-20 lg:py-28 bg-brand-deep relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Omnigrain Tech LLP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built Differently Than <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-cyan-300 to-blue-500">
              Traditional Slow Agencies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We operate like your dedicated in-house technical co-founder. We combine product velocity with enterprise code quality, complete IP ownership, and direct engineering access.
          </p>
        </div>

        {/* 6 Key Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-brand-card/80 border border-slate-800 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent/20 to-blue-600/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
