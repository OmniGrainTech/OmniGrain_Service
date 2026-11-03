import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Smartphone,
  ChevronRight,
  MessageCircle,
  Phone,
  ShoppingBag,
  Receipt,
  Compass,
  Check
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function Hero({ onOpenEnquiry, currency, onNavigate }) {
  const minWebPrice = currency === 'INR' ? '₹9,999' : '$149';
  const minAppPrice = currency === 'INR' ? '₹24,999' : '$349';
  const minEcomPrice = currency === 'INR' ? '₹14,999' : '$199';

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-tech-grid-light bg-radial-glow-light w-full max-w-full">
      
      {/* Decorative Gradient Flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-[320px] bg-gradient-to-b from-blue-100/60 via-cyan-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Conversion Hooks */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left min-w-0 w-full">
            
            {/* Top Ad Trust Pill */}
            <div className="inline-flex max-w-full items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-xs text-[10px] sm:text-xs font-bold text-blue-700">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="truncate">🔥 BEST PRICE GUARANTEE • 100% CODE OWNERSHIP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[50px] font-black tracking-tight leading-[1.18] sm:leading-[1.15] text-slate-900 break-words">
              High-Converting <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Mobile Apps, E-Commerce
              </span>
              <br />
              <span className="text-slate-900">& Custom Software Solutions</span>
            </h1>

            {/* Subheading explicitly covering requirements */}
            <p className="text-xs sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We engineer revenue-generating <strong>Android & iOS Mobile Applications</strong>, complete <strong>E-Commerce Business Setups</strong>, custom <strong>Billing & POS Software</strong>, and provide direct <strong>Tech Consulting</strong> at the best price in the market.
            </p>

            {/* Highlighted Clickable Services Quick Tags - Jumps to Services Page */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1">
              <button 
                type="button"
                onClick={() => onNavigate && onNavigate('services')}
                className="inline-flex items-center text-[10px] sm:text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/80 px-2.5 py-1 rounded-lg transition"
              >
                <Smartphone className="w-3.5 h-3.5 mr-1 shrink-0" /> All Android & iOS Apps →
              </button>
              <button 
                type="button"
                onClick={() => onNavigate && onNavigate('services')}
                className="inline-flex items-center text-[10px] sm:text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 px-2.5 py-1 rounded-lg transition"
              >
                <ShoppingBag className="w-3.5 h-3.5 mr-1 shrink-0" /> E-Commerce Business Setup →
              </button>
              <button 
                type="button"
                onClick={() => onNavigate && onNavigate('services')}
                className="inline-flex items-center text-[10px] sm:text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 px-2.5 py-1 rounded-lg transition"
              >
                <Receipt className="w-3.5 h-3.5 mr-1 shrink-0" /> Custom GST Billing & POS →
              </button>
              <button 
                type="button"
                onClick={() => onNavigate && onNavigate('services')}
                className="inline-flex items-center text-[10px] sm:text-xs font-bold bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200/80 px-2.5 py-1 rounded-lg transition"
              >
                <Compass className="w-3.5 h-3.5 mr-1 shrink-0" /> Tech Consulting Services →
              </button>
            </div>

            {/* Starting Price Pill - Clickable to View Services */}
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('services')}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-[11px] sm:text-sm text-slate-700 shadow-xs max-w-full text-left transition group cursor-pointer"
            >
              <span className="text-amber-600 font-extrabold flex items-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 text-amber-500 fill-amber-500 shrink-0" /> Transparent Pricing:
              </span>
              <span className="whitespace-nowrap">Websites from <strong className="text-slate-900 font-bold">{minWebPrice}</strong></span>
              <span className="text-slate-300 hidden xs:inline">•</span>
              <span className="whitespace-nowrap">E-Commerce from <strong className="text-slate-900 font-bold">{minEcomPrice}</strong></span>
              <span className="text-slate-300 hidden xs:inline">•</span>
              <span className="whitespace-nowrap text-blue-600 font-bold group-hover:underline">Mobile Apps from {minAppPrice} →</span>
            </button>

            {/* High-Converting CTA Button Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              
              {/* Primary Quote CTA Button with Glow */}
              <button
                type="button"
                onClick={() => onOpenEnquiry('Hero Main CTA - Get Free Quote')}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs sm:text-base shadow-md hover:shadow-blue-500/30 transition duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Quote & SOW</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* View Services Dedicated Page Button */}
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('services')}
                className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-base shadow-xs transition duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct WhatsApp Call-to-Action */}
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20am%20looking%20for%20Mobile%20App,%20E-Commerce%20or%20Software%20Development%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-base shadow-sm transition duration-200 flex items-center justify-center space-x-2"
                title="Click to Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Direct Phone Call Button */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-base border border-slate-300 shadow-xs transition duration-200 flex items-center justify-center space-x-2"
                title="Click to Call Immediately"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Call Us Directly</span>
              </a>
            </div>

            {/* Trust Badges Checkmarks */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-semibold text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                <span className="truncate">100% Code Ownership</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-semibold text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                <span className="truncate">Strict Mutual NDA</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-semibold text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                <span className="truncate">2 - 4 Week Sprints</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-semibold text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                <span className="truncate">Milestone Payments</span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-5 border-t border-slate-200 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-xl sm:text-3xl font-black text-slate-900">
                  150<span className="text-blue-600">+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Projects Launched</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-slate-900 flex items-center justify-center lg:justify-start">
                  4.9<span className="text-amber-500 text-base sm:text-lg ml-0.5">★</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider">120+ Client Reviews</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-slate-900">
                  100k<span className="text-emerald-600">+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Active App Users</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Tech Showcase Card */}
          <div className="lg:col-span-5 relative min-w-0 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Surface */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-7 shadow-lg">
                
                {/* Header of Preview Box */}
                <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-3 mb-4 gap-2">
                  <div className="flex items-center space-x-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                    <span className="ml-1 text-xs font-mono font-bold text-slate-500 truncate max-w-[140px] sm:max-w-none">omnigrain-delivery.live</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                    ACTIVE DEPLOYMENT
                  </span>
                </div>

                {/* 4 Core Pillars Showcase - Clickable to Services */}
                <div className="space-y-2.5">
                  
                  {/* Item 1: Mobile Apps */}
                  <div 
                    onClick={() => onNavigate && onNavigate('services')}
                    className="p-3 bg-slate-50 hover:bg-blue-50/70 rounded-2xl border border-slate-200/70 transition flex items-center justify-between gap-2 cursor-pointer group/item"
                  >
                    <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate group-hover/item:text-blue-600 transition-colors">Android & iOS Applications</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">Flutter • React Native • Native Swift/Kotlin</div>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                      Best Price →
                    </span>
                  </div>

                  {/* Item 2: E-Commerce Store */}
                  <div 
                    onClick={() => onNavigate && onNavigate('services')}
                    className="p-3 bg-slate-50 hover:bg-emerald-50/70 rounded-2xl border border-slate-200/70 transition flex items-center justify-between gap-2 cursor-pointer group/item"
                  >
                    <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate group-hover/item:text-emerald-700 transition-colors">E-Commerce Business Setup</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">Shopify • Custom MERN • Razorpay UPI</div>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                      High ROI →
                    </span>
                  </div>

                  {/* Item 3: Custom Billing Software */}
                  <div 
                    onClick={() => onNavigate && onNavigate('services')}
                    className="p-3 bg-slate-50 hover:bg-amber-50/70 rounded-2xl border border-slate-200/70 transition flex items-center justify-between gap-2 cursor-pointer group/item"
                  >
                    <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                        <Receipt className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate group-hover/item:text-amber-700 transition-colors">Custom Billing & POS Software</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">GST Invoice • Thermal Printer • Barcode</div>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                      One-Time →
                    </span>
                  </div>

                  {/* Item 4: Tech Consulting */}
                  <div 
                    onClick={() => onNavigate && onNavigate('services')}
                    className="p-3 bg-slate-50 hover:bg-purple-50/70 rounded-2xl border border-slate-200/70 transition flex items-center justify-between gap-2 cursor-pointer group/item"
                  >
                    <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                        <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate group-hover/item:text-purple-700 transition-colors">Tech Consulting Services</div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">Architecture • Code Audit • Cloud Scaling</div>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-purple-700 bg-purple-100/60 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                      Expert Lead →
                    </span>
                  </div>

                </div>

                {/* Instant Quote Action Box inside Card */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-left min-w-0">
                    <span className="text-xs font-bold text-slate-900 block truncate">Have a project in mind?</span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 truncate block">Get a fixed quote in 24h</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Hero Card Action')}
                    className="px-3 sm:px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-extrabold transition shadow-xs flex items-center space-x-1 shrink-0"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
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
