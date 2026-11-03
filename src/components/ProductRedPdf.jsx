import React, { useState } from 'react';
import { 
  Smartphone, 
  Download, 
  Star, 
  ShieldCheck, 
  Lock, 
  Minimize2, 
  Files, 
  Scan, 
  Share2, 
  ExternalLink, 
  Sparkles,
  CheckCircle,
  EyeOff,
  Zap,
  ArrowRight
} from 'lucide-react';
import { redPdfProduct, companyInfo } from '../data/websiteData';

export default function ProductRedPdf({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('convert');

  const interactiveScreens = {
    convert: {
      title: "Batch Image to PDF Converter",
      subtitle: "Convert 20+ Photos into 1 crisp PDF in < 2 Seconds",
      badge: "High-Speed Engine",
      phoneScreen: (
        <div className="bg-slate-900 p-4 rounded-2xl h-full flex flex-col justify-between text-xs font-sans text-white">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-white flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                Select Photos (8 Selected)
              </span>
              <span className="text-[10px] text-blue-400 font-semibold">Select All</span>
            </div>
            
            <div className="grid grid-cols-4 gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-[9px] text-slate-400 font-mono">IMG_{i}</div>
                  <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-red-600 text-white flex items-center justify-center text-[8px] font-bold">
                    ✓
                  </div>
                </div>
              ))}
            </div>

            <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">PDF Output Name:</span>
                <span className="text-white font-mono font-bold">Tax_Invoice.pdf</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Page Margins:</span>
                <span className="text-blue-400">Standard Margin</span>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="w-full py-2.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded-xl text-center shadow-md flex items-center justify-center space-x-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Convert to PDF Now</span>
            </div>
            <div className="text-[9px] text-center text-slate-400 mt-1">100% Offline • Zero Data Uploaded</div>
          </div>
        </div>
      )
    },
    scanner: {
      title: "Smart Camera Scanner",
      subtitle: "Auto Edge-Detection, Perspective Crop & Contrast Filters",
      badge: "CameraX AI API",
      phoneScreen: (
        <div className="bg-slate-900 p-4 rounded-2xl h-full flex flex-col justify-between text-xs font-sans text-white">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-white flex items-center">
                <Scan className="w-3.5 h-3.5 mr-1 text-red-500" />
                Live Document Finder
              </span>
              <span className="text-[10px] text-emerald-400 font-bold">Auto-Detect ON</span>
            </div>

            <div className="relative aspect-[4/3] bg-slate-950 border-2 border-dashed border-red-500/70 rounded-xl flex items-center justify-center p-4">
              <div className="absolute inset-2 border border-red-400 rounded bg-red-500/10 flex items-center justify-center">
                <span className="text-[10px] text-white font-mono bg-black/70 px-2 py-0.5 rounded">
                  Document Edge Locked
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
              <div className="p-1 rounded bg-slate-800 text-slate-300">Original</div>
              <div className="p-1 rounded bg-red-600 text-white font-bold">Enhanced</div>
              <div className="p-1 rounded bg-slate-800 text-slate-300">B&W Document</div>
            </div>
          </div>

          <div className="w-full py-2 bg-slate-800 text-white font-bold rounded-xl text-center border border-slate-700">
            Keep Scanning Next Page (Page 3/4)
          </div>
        </div>
      )
    },
    security: {
      title: "Password Encryption & File Locking",
      subtitle: "Protect Confidential Files with 256-Bit Encryption",
      badge: "Bank-Grade Privacy",
      phoneScreen: (
        <div className="bg-slate-900 p-4 rounded-2xl h-full flex flex-col justify-between text-xs font-sans text-white">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-white flex items-center">
                <Lock className="w-3.5 h-3.5 mr-1 text-amber-400" />
                Encrypt PDF
              </span>
              <span className="text-[10px] text-amber-400 font-bold">AES-256</span>
            </div>

            <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 space-y-2">
              <label className="text-[11px] text-slate-300 block">Set PDF Password:</label>
              <div className="bg-slate-950 px-3 py-2 rounded border border-slate-700 text-amber-400 font-mono tracking-widest text-sm flex justify-between">
                <span>••••••••</span>
                <EyeOff className="w-4 h-4 text-slate-500" />
              </div>
              <div className="text-[10px] text-slate-400">
                Prevents unauthorized opening, printing, or modification.
              </div>
            </div>

            <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-[10px] text-emerald-300 flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
              <span>Offline Password: Never sent across any cloud server.</span>
            </div>
          </div>

          <div className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-xl text-center shadow-md">
            Lock & Save Secure PDF
          </div>
        </div>
      )
    },
    compress: {
      title: "Smart Lossless Compression",
      subtitle: "Reduce 50MB Scans to < 2MB for Instant WhatsApp Sharing",
      badge: "High Compression Ratio",
      phoneScreen: (
        <div className="bg-slate-900 p-4 rounded-2xl h-full flex flex-col justify-between text-xs font-sans text-white">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-white flex items-center">
                <Minimize2 className="w-3.5 h-3.5 mr-1 text-blue-400" />
                Compress File Size
              </span>
              <span className="text-[10px] text-emerald-400 font-bold">Lossless Quality</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 bg-slate-800 rounded-lg flex justify-between items-center text-[11px]">
                <span className="text-slate-400">Original Raw Size:</span>
                <span className="text-rose-400 font-mono font-bold line-through">42.8 MB</span>
              </div>
              <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-lg flex justify-between items-center text-[11px]">
                <span className="text-emerald-300 font-semibold">Compressed Output:</span>
                <span className="text-emerald-400 font-mono font-extrabold text-sm">1.8 MB (-95%)</span>
              </div>
            </div>
          </div>

          <div className="w-full py-2.5 bg-blue-600 text-white font-bold rounded-xl text-center shadow-md">
            Share via WhatsApp / Gmail
          </div>
        </div>
      )
    }
  };

  const currentTab = interactiveScreens[activeTab];

  return (
    <section id="products" className="py-16 lg:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-100 text-red-700 border border-red-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Featured In-House App Production</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Flagship Android App: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
              RedPDF - Fast Image to PDF Maker
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Engineered from ground up by Omnigrain Tech. Trusted by <strong>100,000+ users worldwide</strong> with a 4.8★ rating on Google Play. Built with an offline-first architecture for uncompromising speed and data privacy.
          </p>
        </div>

        {/* Product Hero Banner */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg relative overflow-hidden mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* App Identity Row */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 p-2 shadow-md flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center text-white">
                    <span className="text-red-500 font-black text-xs">RED</span>
                    <span className="text-white font-extrabold text-[10px] tracking-wider">PDF</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">RedPDF</h3>
                  <p className="text-xs sm:text-sm text-slate-500">Image to PDF & Offline Document Utility</p>
                  
                  {/* Google Play Ratings & Downloads */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs">
                    <span className="flex items-center text-amber-700 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1" /> 4.8 / 5.0
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 font-semibold">12,500+ Reviews</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-700 font-bold">100,000+ Downloads</span>
                  </div>
                </div>
              </div>

              {/* Product Overview */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {redPdfProduct.overview}
              </p>

              {/* Highlights 2-column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {redPdfProduct.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="w-5 h-5 rounded-md bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{h.title}</h5>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Play Store Link CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={redPdfProduct.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-md transition flex items-center justify-center space-x-2 group"
                >
                  <Download className="w-4 h-4" />
                  <span>Download on Google Play</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Build an Android App Like RedPDF')}
                  className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition flex items-center justify-center space-x-1.5"
                >
                  <Smartphone className="w-4 h-4 text-blue-400" />
                  <span>Build an App Like This For You</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Play Store Package ID: <code className="text-slate-800 font-mono text-[10px]">{redPdfProduct.packageName}</code></span>
              </div>

            </div>

            {/* Right Interactive Phone Mockup */}
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-[310px] relative">
                
                {/* Interactive Feature Simulator Tabs */}
                <div className="grid grid-cols-4 gap-1 mb-3 bg-white p-1 rounded-xl border border-slate-200 text-[10px] font-bold text-center shadow-xs">
                  <button
                    onClick={() => setActiveTab('convert')}
                    className={`py-1.5 rounded-lg transition ${activeTab === 'convert' ? 'bg-red-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Convert
                  </button>
                  <button
                    onClick={() => setActiveTab('scanner')}
                    className={`py-1.5 rounded-lg transition ${activeTab === 'scanner' ? 'bg-red-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Scanner
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`py-1.5 rounded-lg transition ${activeTab === 'security' ? 'bg-red-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Lock
                  </button>
                  <button
                    onClick={() => setActiveTab('compress')}
                    className={`py-1.5 rounded-lg transition ${activeTab === 'compress' ? 'bg-red-600 text-white' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Compress
                  </button>
                </div>

                {/* Smartphone Chassis */}
                <div className="relative rounded-[36px] bg-slate-900 border-[7px] border-slate-800 shadow-xl p-2.5 aspect-[9/18]">
                  <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-950"></div>
                  </div>

                  <div className="h-[calc(100%-24px)] rounded-[22px] overflow-hidden">
                    {currentTab.phoneScreen}
                  </div>
                </div>

                <div className="text-center mt-3 text-xs text-slate-500">
                  <span className="font-bold text-slate-800">{currentTab.title}</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
