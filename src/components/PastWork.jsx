import React from 'react';
import { 
  Smartphone, 
  ShoppingBag, 
  Receipt, 
  Compass, 
  ExternalLink, 
  Star, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';
import { pastWorkShowcase, redPdfProduct, companyInfo } from '../data/websiteData';

export default function PastWork({ onOpenEnquiry }) {
  return (
    <section id="past-work" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-extrabold uppercase tracking-widest mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proven Delivery Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Past Work & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              High-Performing Software Products
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real software built for real businesses. From in-house consumer Android apps with 100k+ downloads to fast D2C E-Commerce setups and bespoke billing software.
          </p>
        </div>

        {/* 4 Featured Past Work Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          
          {/* Card 1: RedPDF Flagship App */}
          <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-red-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-red-100 text-red-700 border border-red-200 uppercase tracking-wider">
                  Mobile App Development
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-100/70 border border-amber-200 px-2.5 py-1 rounded-lg flex items-center shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1" />
                  4.8 ★ on Google Play
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-red-600 transition mb-2">
                RedPDF - Image to PDF & Fast PDF Maker
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Offline-first Android utility app engineered by Omnigrain Tech. Handles instant document edge-detection, camera scans, batch photo-to-PDF conversion, and military-grade 256-bit password locking.
              </p>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-bold">
                <span className="text-slate-500">Global Play Store Impact:</span>
                <span className="text-emerald-600 flex items-center">
                  <Download className="w-3.5 h-3.5 mr-1 shrink-0" />
                  100,000+ Downloads (12,500+ Reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Android (Kotlin)", "C++ PDFium", "CameraX API", "SQLite", "Material You"].map((t, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href={redPdfProduct.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center space-x-1.5 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>View on Play Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onOpenEnquiry('Build an App Like RedPDF')}
                className="py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition"
              >
                Build Similar App
              </button>
            </div>
          </div>

          {/* Card 2: E-Commerce Store & App Setup */}
          <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-emerald-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
                  E-Commerce Setup & Website
                </span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg shrink-0">
                  3.4x Conversion Lift
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-700 transition mb-2">
                AuraFit D2C E-Commerce Store & Mobile App
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Full-stack custom online storefront setup engineered for paid Meta & Google ad conversion. Includes 1-click Razorpay UPI checkout, automated Shiprocket fulfillment, and WhatsApp order alerts.
              </p>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-bold">
                <span className="text-slate-500">Business Growth Metric:</span>
                <span className="text-emerald-700">₹18 Lakhs+ Monthly GMV Handled</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Shopify Engine", "Next.js", "Razorpay UPI", "Shiprocket", "WhatsApp Cloud API"].map((t, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenEnquiry('E-Commerce Business Setup Demo')}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Launch Your E-Commerce Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Custom Billing & POS Software */}
          <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-amber-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800 border border-amber-200 uppercase tracking-wider">
                  Billing Software & POS
                </span>
                <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shrink-0">
                  0.8s Sub-Second Bill
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-amber-700 transition mb-2">
                OmniBilling POS & Wholesale Inventory ERP
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Custom billing software deployed across 12 retail & wholesale mart counters. Features 2"/3" thermal printer USB drivers, barcode scanner plug-and-play, customer credit ledger (Khata), and auto WhatsApp bills.
              </p>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-bold">
                <span className="text-slate-500">Savings for Client:</span>
                <span className="text-amber-700">₹36,000/yr Saved on SaaS Renewals</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Electron Desktop", "React", "PostgreSQL", "Thermal SDK", "Barcode SDK"].map((t, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Request Billing Software Live Demo')}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <Receipt className="w-4 h-4" />
              <span>Get Custom Billing Software</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Tech Consulting & Backend Scaling */}
          <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-purple-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-purple-100 text-purple-800 border border-purple-200 uppercase tracking-wider">
                  Tech Consulting & Architecture
                </span>
                <span className="text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-lg shrink-0">
                  40% Cloud Cost Cut
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-purple-700 transition mb-2">
                KisanTrade Agro Logistics & ERP Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Omnigrain Tech provided end-to-end technical consulting to resolve severe database connection deadlocks during harvest season. Redesigned PostgreSQL schemas, implemented Redis caching, and built REST microservices.
              </p>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-bold">
                <span className="text-slate-500">Scaling Benchmark:</span>
                <span className="text-purple-700">5x Concurrent Traffic Handled</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["FastAPI (Python)", "PostgreSQL", "Redis Cache", "AWS Architecture", "Docker"].map((t, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Tech Consulting Architecture Review')}
              className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Schedule Tech Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <h4 className="text-base sm:text-lg font-black flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-amber-300" />
              Need a custom mobile app, e-commerce store, or billing software built?
            </h4>
            <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
              We provide fixed-milestone pricing with zero advance risk and 100% source code handover.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Past Work Bottom CTA')}
            className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-black text-xs sm:text-sm transition shadow"
          >
            Request SOW & Pricing
          </button>
        </div>

      </div>
    </section>
  );
}
