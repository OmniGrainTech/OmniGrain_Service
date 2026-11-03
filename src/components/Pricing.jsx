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
    <section id="pricing" className="py-16 lg:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Transparent Minimum Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Transparent Investment Plans, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Zero Hidden Surprises
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No endless hourly billing surprises. Every project is scoped with fixed milestone-based payments, 100% complete source code handover, and post-launch bug warranty.
          </p>
        </div>

        {/* 4-Column Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const price = currency === 'INR' 
              ? `₹${plan.priceINR.toLocaleString('en-IN')}` 
              : `$${plan.priceUSD.toLocaleString('en-US')}`;

            return (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-blue-50/50 via-white to-white border-2 border-blue-600 shadow-xl lg:-translate-y-2'
                    : 'bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[11px] uppercase tracking-wider shadow-sm flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{plan.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="mb-4">
                    <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1.5 min-h-[34px]">{plan.description}</p>
                  </div>

                  {/* Price Header */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-5 shadow-xs">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                      Starting At Minimum
                    </span>
                    <div className="flex items-baseline space-x-1 mt-1">
                      <span className="text-3xl font-black text-slate-900 tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ base</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
                      <span className="flex items-center text-slate-500">
                        <Clock className="w-3.5 h-3.5 mr-1 text-blue-600" /> Timeline:
                      </span>
                      <span className="font-mono font-bold text-slate-800">{plan.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                      Core Deliverables:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                          ✓
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
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center space-x-2 transition duration-150 ${
                      plan.isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-center text-[10px] text-slate-500 mt-2 flex items-center justify-center space-x-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Pay in 3 Easy Milestones</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Milestone Payment Assurance Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900">How Our Milestone Payments Protect You</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                30% Initial Kickoff & UI Mockups → 40% Working Product Demo → 30% Final Testing & 100% Code Handover.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Custom Milestone Plan Request')}
            className="shrink-0 text-xs font-bold text-blue-600 hover:text-blue-800 underline underline-offset-4 transition"
          >
            Customize Milestones →
          </button>
        </div>

      </div>
    </section>
  );
}
