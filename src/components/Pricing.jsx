import React from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  HelpCircle,
  Zap,
  Lock
} from 'lucide-react';
import { pricingPlans } from '../data/websiteData';

export default function Pricing({ currency, onOpenEnquiry }) {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-brand-deep relative">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Minimum Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Transparent Investment Plans, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-cyan-300 to-blue-500">
              Zero Hidden Surprises
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No endless hourly billing bloat. Every project is scoped with fixed milestone-based payments, complete source code handover, and post-launch bug warranty.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = currency === 'INR' 
              ? `₹${plan.priceINR.toLocaleString('en-IN')}` 
              : `$${plan.priceUSD.toLocaleString('en-US')}`;

            return (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-brand-card via-slate-900 to-brand-card border-2 border-brand-accent shadow-2xl shadow-brand-accent/15 transform lg:-translate-y-3'
                    : 'bg-brand-card/90 border border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-accent to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-brand-accent/30 flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                      <span>{plan.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{plan.description}</p>
                  </div>

                  {/* Price Header */}
                  <div className="p-4 rounded-2xl bg-brand-dark/95 border border-slate-800/90 mb-6">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                      Starting At Minimum
                    </span>
                    <div className="flex items-baseline space-x-1 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ project base</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                      <span className="flex items-center text-slate-400">
                        <Clock className="w-3.5 h-3.5 mr-1 text-brand-accent" /> Timeline:
                      </span>
                      <span className="font-mono font-bold text-white">{plan.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Core Deliverables:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA */}
                <div>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(`Selected Pricing Tier: ${plan.name} (${price})`)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition duration-200 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accentLight hover:to-blue-500 text-slate-950 shadow-lg shadow-brand-accent/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-center text-[10px] text-slate-400 mt-2 flex items-center justify-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-brand-accent" />
                    <span>Pay in 3 Easy Milestones</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Milestone Payment Assurance Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mx-auto sm:mx-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">How Milestone Payments Protect You</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                30% Initial Kickoff & Wireframes → 40% Working Product Demo → 30% Final Testing & 100% Source Code Transfer.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Custom Milestone Plan Request')}
            className="shrink-0 text-xs font-bold text-brand-accent hover:text-white underline underline-offset-4 transition"
          >
            Customize Milestones →
          </button>
        </div>

      </div>
    </section>
  );
}
