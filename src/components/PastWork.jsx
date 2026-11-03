import React, { useState } from 'react';
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
  Zap,
  X,
  Check,
  ShieldCheck,
  MessageCircle,
  Eye
} from 'lucide-react';
import { pastWorkShowcase, companyInfo } from '../data/websiteData';

const iconMap = {
  Smartphone: Smartphone,
  ShoppingBag: ShoppingBag,
  Receipt: Receipt,
  Compass: Compass,
};

export default function PastWork({ onOpenEnquiry }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section id="past-work" className="py-14 lg:py-22 bg-white border-t border-slate-200 relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-extrabold uppercase tracking-widest mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proven Delivery Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Past Work & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              High-Performing Software Products
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
            Click any project card below to explore full technical deliverables, client results, and live demonstrations.
          </p>
        </div>

        {/* 4 Clickable Past Work Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {pastWorkShowcase.map((project) => {
            const IconComponent = iconMap[project.icon] || Smartphone;

            return (
              <div
                key={project.id}
                onClick={() => handleOpenDetail(project)}
                className="group p-5 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between cursor-pointer relative"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between mb-3.5 gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider flex items-center space-x-1">
                      <IconComponent className="w-3 h-3 mr-1 shrink-0" />
                      <span>{project.category}</span>
                    </span>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg flex items-center shrink-0">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1 shrink-0" />
                      {project.stats}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base sm:text-xl font-black text-slate-900 group-hover:text-blue-600 transition leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-none">
                    {project.desc}
                  </p>

                  {/* Key Metric Pill */}
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-white group-hover:bg-blue-50/40 border border-slate-200 group-hover:border-blue-200 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-bold transition">
                    <span className="text-slate-500 text-[11px] sm:text-xs">{project.metricLabel}:</span>
                    <span className="text-emerald-700 text-xs sm:text-sm flex items-center">
                      <Sparkles className="w-3 h-3 mr-1 text-amber-500 shrink-0" />
                      {project.metricValue}
                    </span>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Click Target Button */}
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs sm:text-sm font-bold text-blue-600 group-hover:text-blue-700">
                  <span className="flex items-center space-x-1.5">
                    <Eye className="w-4 h-4" />
                    <span>Click to View Full Details</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-blue-600 group-hover:text-white border border-slate-200 group-hover:border-blue-600 flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-black flex items-center justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 mr-2 text-amber-300 shrink-0" />
              Need a custom mobile app, e-commerce store, or software built?
            </h4>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Fixed-milestone pricing with zero advance risk, mutual NDA, and 100% source code handover.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Past Work Bottom CTA')}
            className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-black text-xs sm:text-sm transition shadow-sm w-full sm:w-auto"
          >
            Request SOW & Pricing
          </button>
        </div>

      </div>

      {/* Interactive Detail Drawer / Modal ("Cart style" slide-over detail view) */}
      {selectedProject && (
        <div 
          role="dialog" 
          aria-modal="true" 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseDetail}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom sm:zoom-in-95 duration-200 flex flex-col"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between z-10">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-700 border border-blue-200 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg">
                  {selectedProject.badge}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCloseDetail}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition"
                aria-label="Close Project Details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 space-y-6 flex-grow">
              
              {/* Title & Impact Metric */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-2">
                  {selectedProject.title}
                </h3>
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs font-bold">
                  <span className="text-slate-600">{selectedProject.metricLabel}:</span>
                  <span className="text-emerald-700 text-sm font-extrabold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1 text-amber-500 fill-amber-500 shrink-0" />
                    {selectedProject.metricValue}
                  </span>
                </div>
              </div>

              {/* Full Detailed Description */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                  Project Overview & Scope
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              {/* Key Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Technical Deliverables & Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                  Technology Architecture Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center space-x-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Client Code Guarantee: 100% source code ownership and full intellectual property handover.</span>
              </div>

            </div>

            {/* Modal Sticky Bottom Action Footer */}
            <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row gap-2.5 z-10">
              {selectedProject.isExternal && selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>{selectedProject.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}

              <button
                type="button"
                onClick={() => {
                  handleCloseDetail();
                  onOpenEnquiry(selectedProject.enquiryText);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs sm:text-sm shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>Request Similar Solution</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20saw%20your%20past%20work%20"${encodeURIComponent(selectedProject.title)}"%20and%20want%20to%20discuss%20a%20similar%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center space-x-1.5 shadow-sm shrink-0"
                title="Chat on WhatsApp about this project"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
