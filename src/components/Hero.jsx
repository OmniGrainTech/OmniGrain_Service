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
  Code2, 
  Smartphone,
  ChevronRight,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function Hero({ onOpenEnquiry, currency }) {
  const minWebPrice = currency === 'INR' ? '₹9,999' : '$149';
  const minAppPrice = currency === 'INR' ? '₹34,999' : '$499';

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-tech-grid">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-brand-accent/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Conversion Hooks */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-accent/30 shadow-lg shadow-brand-accent/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                Full-Lifecycle Software Engineering & App Development
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Build High-Converting <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-cyan-300 to-blue-500">
                Mobile Apps, Web Platforms
              </span>
              <br />
              <span className="text-slate-100">& Custom Billing Software</span>
            </h1>

            {/* Subheading / Value Guarantee */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>Omnigrain Tech LLP</strong> designs, builds, and scales high-velocity digital products. From consumer Android/iOS apps with 
              <span className="text-brand-accent font-semibold"> 100k+ downloads</span> to custom GST billing systems, high-speed APIs, and resilient cloud architectures.
            </p>

            {/* Starting Price Pill */}
            <div className="inline-flex items-center space-x-3 bg-brand-card/90 border border-slate-700/80 px-4 py-2 rounded-xl text-xs sm:text-sm text-slate-300">
              <span className="text-amber-400 font-bold flex items-center">
                <Sparkles className="w-4 h-4 mr-1 text-amber-400 fill-amber-400/20" /> Transparent Pricing:
              </span>
              <span>Websites starting from <strong className="text-white underline decoration-brand-accent">{minWebPrice}</strong></span>
              <span className="text-slate-600">|</span>
              <span>Mobile Apps from <strong className="text-white underline decoration-blue-500">{minAppPrice}</strong></span>
            </div>

            {/* High-Converting CTA Button Cluster */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              
              {/* Primary Consultation Button */}
              <button
                type="button"
                onClick={() => onOpenEnquiry('Hero Main CTA - Free Consultation')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accentLight hover:to-blue-500 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-brand-accent/25 hover:shadow-brand-accent/40 transition duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Scope & Quote</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Direct WhatsApp Action */}
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech%20LLP,%20I%20am%20looking%20for%20software%20and%20app%20development%20pricing%20and%20scope.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-bold text-sm sm:text-base border border-emerald-500/40 transition duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-500/20" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* In-House Product Link */}
              <a
                href="#products"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700/80 transition duration-300 flex items-center justify-center space-x-1.5"
              >
                <Smartphone className="w-4 h-4 text-brand-accent" />
                <span>See Our Apps</span>
              </a>
            </div>

            {/* Trust Signals & Guarantees */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mutual NDA Protected</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2 - 4 Week Sprints</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Milestone Payments</span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center">
                  150<span className="text-brand-accent">+</span>
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center">
                  4.9<span className="text-amber-400 text-lg ml-0.5">★</span>
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">120+ Client Reviews</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center">
                  100k<span className="text-emerald-400">+</span>
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Active App Users</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Tech Card / Live Status Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-accent/40 via-blue-600/30 to-purple-600/40 opacity-70 blur-xl"></div>
              
              {/* Main Card Surface */}
              <div className="relative rounded-2xl bg-brand-dark/95 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">omnigrain-engine.v2.prod</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                    SYSTEM HEALTHY
                  </span>
                </div>

                {/* Simulated Metrics Grid */}
                <div className="space-y-3 font-mono text-xs">
                  
                  {/* Status Item 1: App Status */}
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">RedPDF Utility Engine</div>
                        <div className="text-[10px] text-slate-400">Google Play Store • In-House App</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold">100,000+ Installs</div>
                      <div className="text-[10px] text-amber-400">4.8 ★ Rating</div>
                    </div>
                  </div>

                  {/* Status Item 2: Custom Billing Software */}
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Custom Billing & POS Engine</div>
                        <div className="text-[10px] text-slate-400">GST Invoicing • Barcode & Thermal Sync</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-brand-accent font-bold">&lt; 0.8s Per Bill</div>
                      <div className="text-[10px] text-slate-400">Zero Monthly Sub</div>
                    </div>
                  </div>

                  {/* Status Item 3: API & Cloud Infrastructure */}
                  <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Microservices & Database</div>
                        <div className="text-[10px] text-slate-400">PostgreSQL • Redis • AWS Auto-Scale</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold">14ms Latency</div>
                      <div className="text-[10px] text-slate-400">99.99% Uptime</div>
                    </div>
                  </div>

                </div>

                {/* Simulated Code snippet */}
                <div className="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800/90 font-mono text-[11px] text-slate-300">
                  <div className="text-slate-500">// Client Guarantee Contract</div>
                  <div><span className="text-purple-400">const</span> clientProject = &#123;</div>
                  <div className="pl-4">sourceCode: <span className="text-emerald-400">'100% Client Owned'</span>,</div>
                  <div className="pl-4">ndaSigned: <span className="text-blue-400">true</span>,</div>
                  <div className="pl-4">postLaunchSupport: <span className="text-amber-400">'Included (Free)'</span>,</div>
                  <div className="pl-4">fixedMilestonePricing: <span className="text-cyan-400">'Guaranteed'</span></div>
                  <div>&#125;;</div>
                </div>

                {/* Instant Quote CTA inside card */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Have an active project requirement?</span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry('Card Direct Action')}
                    className="text-xs font-bold text-brand-accent hover:text-white flex items-center transition"
                  >
                    <span>Instant Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
