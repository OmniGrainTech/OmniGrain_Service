import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Download, 
  Cpu, 
  Zap, 
  Lock, 
  Smartphone,
  ChevronRight,
  TrendingUp,
  MessageCircle,
  Phone,
  ShoppingBag,
  Receipt,
  Compass,
  Check
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function Hero({ onOpenEnquiry, currency }) {
  const minWebPrice = currency === 'INR' ? '₹9,999' : '$149';
  const minAppPrice = currency === 'INR' ? '₹24,999' : '$349';
  const minEcomPrice = currency === 'INR' ? '₹14,999' : '$199';

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-tech-grid-light bg-radial-glow-light">
      
      {/* Decorative Gradient Flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-100/60 via-cyan-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Conversion Hooks */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Ad Trust Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm text-xs font-bold text-blue-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>🔥 BEST PRICE GUARANTEE • 100% CODE OWNERSHIP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] text-slate-900">
              High-Converting <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Mobile Apps, E-Commerce
              </span>
              <br />
              <span className="text-slate-900">& Custom Software Solutions</span>
            </h1>

            {/* Subheading explicitly covering requirements */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We engineer revenue-generating <strong>Android & iOS Mobile Applications</strong>, complete <strong>E-Commerce Business Setups</strong>, custom <strong>Billing & POS Software</strong>, and provide direct <strong>Tech Consulting</strong> at the best price in the market.
            </p>

            {/* Highlighted Services Quick Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80 px-2.5 py-1 rounded-lg">
                <Smartphone className="w-3.5 h-3.5 mr-1" /> All Android & iOS Apps
              </span>
              <span className="inline-flex items-center text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2.5 py-1 rounded-lg">
                <ShoppingBag className="w-3.5 h-3.5 mr-1" /> E-Commerce Business Setup
              </span>
              <span className="inline-flex items-center text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/80 px-2.5 py-1 rounded-lg">
                <Receipt className="w-3.5 h-3.5 mr-1" /> Custom GST Billing & POS
              </span>
              <span className="inline-flex items-center text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200/80 px-2.5 py-1 rounded-lg">
                <Compass className="w-3.5 h-3.5 mr-1" /> Tech Consulting Services
              </span>
            </div>

            {/* Starting Price Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl text-xs sm:text-sm text-slate-700 shadow-sm">
              <span className="text-amber-600 font-extrabold flex items-center">
                <Sparkles className="w-4 h-4 mr-1 text-amber-500 fill-amber-500" /> Transparent Pricing:
              </span>
              <span>Websites from <strong className="text-slate-900 font-bold">{minWebPrice}</strong></span>
              <span className="text-slate-300">•</span>
              <span>E-Commerce from <strong className="text-slate-900 font-bold">{minEcomPrice}</strong></span>
              <span className="text-slate-300">•</span>
              <span>Mobile Apps from <strong className="text-blue-600 font-bold">{minAppPrice}</strong></span>
            </div>

            {/* High-Converting CTA Button Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              
              {/* Primary Quote CTA Button with Glow */}
              <button
                type="button"
                onClick={() => onOpenEnquiry('Hero Main CTA - Get Free Quote')}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Quote & SOW</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Direct WhatsApp Call-to-Action */}
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20am%20looking%20for%20Mobile%20App,%20E-Commerce%20or%20Software%20Development%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-emerald-600/30 transition duration-200 flex items-center justify-center space-x-2"
                title="Click to Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="px-5 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-sm transition duration-200 flex items-center justify-center space-x-2"
                title="Click to Call Immediately"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Us Directly</span>
              </a>
            </div>

            {/* Trust Badges Checkmarks */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span>Strict Mutual NDA</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span>2 - 4 Week Sprints</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                <span>Milestone Payments</span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  150<span className="text-blue-600">+</span>
                </div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Projects Launched</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center justify-center lg:justify-start">
                  4.9<span className="text-amber-500 text-lg ml-0.5">★</span>
                </div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">120+ Client Reviews</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  100k<span className="text-emerald-600">+</span>
                </div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Active App Users</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Tech Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Surface */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xl">
                
                {/* Header of Preview Box */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="ml-2 text-xs font-mono font-bold text-slate-500">omnigrain-delivery.live</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                    ACTIVE DEPLOYMENT
                  </span>
                </div>

                {/* 4 Core Pillars Showcase */}
                <div className="space-y-3">
                  
                  {/* Item 1: Mobile Apps */}
                  <div className="p-3.5 bg-slate-50 hover:bg-blue-50/50 rounded-2xl border border-slate-200/70 transition flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Android & iOS Applications</div>
                        <div className="text-[11px] text-slate-500">Flutter • React Native • Native Swift/Kotlin</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded">
                      Best Price
                    </span>
                  </div>

                  {/* Item 2: E-Commerce Store */}
                  <div className="p-3.5 bg-slate-50 hover:bg-emerald-50/50 rounded-2xl border border-slate-200/70 transition flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">E-Commerce Business Setup</div>
                        <div className="text-[11px] text-slate-500">Shopify • Custom MERN • Razorpay UPI</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                      High ROI
                    </span>
                  </div>

                  {/* Item 3: Custom Billing Software */}
                  <div className="p-3.5 bg-slate-50 hover:bg-amber-50/50 rounded-2xl border border-slate-200/70 transition flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <Receipt className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Custom Billing & POS Software</div>
                        <div className="text-[11px] text-slate-500">GST Invoice • Thermal Printer • Barcode</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                      Zero Monthly Fee
                    </span>
                  </div>

                  {/* Item 4: Tech Consulting */}
                  <div className="p-3.5 bg-slate-50 hover:bg-purple-50/50 rounded-2xl border border-slate-200/70 transition flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                        <Compass className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Tech Consulting Services</div>
                        <div className="text-[11px] text-slate-500">Architecture • Code Audit • Cloud Scaling</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-100/60 px-2 py-0.5 rounded">
                      1-on-1 Lead
                    </span>
                  </div>

                </div>

                {/* Instant Quote Action Box inside Card */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-900 block">Have a project in mind?</span>
                    <span className="text-[11px] text-slate-500">Get a fixed quote and wireframes in 24h</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Hero Card Action')}
                    className="px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-extrabold transition shadow-sm flex items-center space-x-1"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
