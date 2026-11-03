import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Smartphone,
  ChevronRight,
  ShoppingBag,
  Receipt,
  Zap,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ onOpenEnquiry, currency, onNavigate }) {
  const minWebPrice = currency === 'INR' ? '₹9,999' : '$149';

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-tech-grid-light bg-radial-glow-light w-full max-w-full">
      
      {/* Decorative Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] max-w-full h-[280px] bg-gradient-to-b from-blue-100/50 via-cyan-100/25 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Short, Punchy, High-Conversion Messaging */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left min-w-0 w-full">
            
            {/* Minimal Trust Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-xs font-bold text-blue-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0"></span>
              <span>Best Price Guarantee • 100% Code Ownership</span>
            </div>

            {/* Clean Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.15]">
              High-Converting Apps & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Custom Software Built Fast
              </span>
            </h1>

            {/* Short Subheading - 1 concise sentence */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We engineer revenue-generating <strong>Android & iOS Apps</strong>, turnkey <strong>E-Commerce Stores</strong>, and custom <strong>Software</strong> with direct architect support and zero vendor lock-in.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
              
              <button
                type="button"
                onClick={() => onOpenEnquiry('Hero Main CTA - Get Free Quote')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-blue-500/25 transition duration-150 flex items-center justify-center space-x-2 group"
              >
                <Zap className="w-4 h-4 fill-amber-300 text-amber-300 shrink-0" />
                <span>Get Free Quote & SOW</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20am%20looking%20for%20Mobile%20App%20or%20Software%20Development.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition duration-150 flex items-center justify-center space-x-2"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Clean Micro Pricing & Services Link */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 pt-1">
              <span className="font-semibold text-slate-700">Services from {minWebPrice}</span>
              <span>•</span>
              <span>2–4 Week Delivery</span>
              <span>•</span>
              <button 
                type="button"
                onClick={() => onNavigate && onNavigate('services')} 
                className="text-blue-600 font-extrabold hover:underline inline-flex items-center"
              >
                <span>View Full Services & Rates →</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900">
                  150<span className="text-blue-600">+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase">Projects Launched</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 flex items-center justify-center lg:justify-start">
                  4.9<span className="text-amber-500 text-sm ml-0.5">★</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase">120+ Reviews</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900">
                  100k<span className="text-emerald-600">+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold uppercase">App Downloads</div>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek, Attractive Tech Showcase Card */}
          <div className="lg:col-span-5 relative min-w-0 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xl">
                
                {/* Header of Preview Box */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="ml-2 text-xs font-mono font-bold text-slate-500">omnigrain.live</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
                    READY TO BUILD
                  </span>
                </div>

                {/* 3 Streamlined Showcase Items */}
                <div className="space-y-2.5">
                  
                  {/* Item 1: Mobile Apps */}
                  <div 
                    onClick={() => onNavigate && onNavigate('services')}
                    className="p-3 bg-slate-50 hover:bg-blue-50/70 rounded-2xl border border-slate-200/80 transition flex items-center justify-between gap-2 cursor-pointer group/item"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors">Android & iOS Applications</div>
                        <div className="text-[11px] text-slate-500">Native Swift/Kotlin • Flutter • React Native</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded shrink-0">
                      Best Price →
                    </span>
                  </div>

                  {/* Item 2: E-Commerce Store */}
                  <div 
                    onClick={() => onNavigate && onNavigate('services')}
                    className="p-3 bg-slate-50 hover:bg-emerald-50/70 rounded-2xl border border-slate-200/80 transition flex items-center justify-between gap-2 cursor-pointer group/item"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-700 transition-colors">E-Commerce Setup</div>
                        <div className="text-[11px] text-slate-500">Shopify • MERN • Razorpay UPI • Shipping</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded shrink-0">
                      High ROI →
                    </span>
                  </div>

                  {/* Item 3: Custom Billing Software */}
                  <div 
                    onClick={() => onNavigate && onNavigate('services')}
                    className="p-3 bg-slate-50 hover:bg-amber-50/70 rounded-2xl border border-slate-200/80 transition flex items-center justify-between gap-2 cursor-pointer group/item"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                        <Receipt className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-amber-700 transition-colors">Custom Billing & POS</div>
                        <div className="text-[11px] text-slate-500">GST Invoice • Thermal Printer • 0 Monthly Fee</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded shrink-0">
                      One-Time →
                    </span>
                  </div>

                </div>

                {/* Instant Quote Action Box inside Card */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-left min-w-0">
                    <span className="text-xs font-bold text-slate-900 block">Have a project in mind?</span>
                    <span className="text-[11px] text-slate-500">Get proposal & wireframes in 24h</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Hero Card Action')}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1 shrink-0 shadow-xs"
                  >
                    <span>Request SOW</span>
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
