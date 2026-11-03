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
  X,
  Check,
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

  return (
    <section id="past-work" className="py-12 lg:py-18 bg-white border-t border-slate-200 relative overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-extrabold uppercase tracking-widest mb-2.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proven Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Our Past Work
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Click any project to check live results, metrics & deliverables.
          </p>
        </div>

        {/* Clean, Compact Clickable Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {pastWorkShowcase.map((project) => {
            const IconComponent = iconMap[project.icon] || Smartphone;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white hover:shadow-md transition-all duration-150 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-2.5 gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-blue-700 flex items-center">
                      <IconComponent className="w-3 h-3 mr-1 shrink-0" />
                      <span>{project.category}</span>
                    </span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded flex items-center">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-1 shrink-0" />
                      {project.stats}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug mb-1">
                    {project.title}
                  </h3>

                  {/* Concise 1-line description */}
                  <p className="text-xs text-slate-500 line-clamp-1 mb-3">
                    {project.desc}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span className="flex items-center space-x-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project Details</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Short Bottom Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 hidden sm:inline" />
            <span className="text-xs sm:text-sm font-bold">
              Want a similar mobile app, online store, or custom software built?
            </span>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Past Work Bottom CTA')}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs transition shadow-xs shrink-0 w-full sm:w-auto"
          >
            Get Free Quote
          </button>
        </div>

      </div>

      {/* Short & Clean Detail Modal ("Cart style" quick view) */}
      {selectedProject && (
        <div 
          role="dialog" 
          aria-modal="true" 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-150 flex flex-col"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white p-4 border-b border-slate-100 flex items-center justify-between z-10">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                {selectedProject.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content - Short & Focused */}
            <div className="p-4 sm:p-5 space-y-4">
              
              {/* Title & Key Stat */}
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug mb-1">
                  {selectedProject.title}
                </h3>
                <div className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-500 fill-amber-500 shrink-0" />
                  {selectedProject.metricValue}
                </div>
              </div>

              {/* Short Summary */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedProject.fullDesc}
              </p>

              {/* Top 3 Deliverables Only */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Key Deliverables:
                </span>
                {selectedProject.highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Compact Tech Stack */}
              <div className="pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Tech Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.slice(0, 4).map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-3.5 flex flex-col sm:flex-row gap-2 z-10">
              {selectedProject.isExternal && selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Google Play</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  onOpenEnquiry(selectedProject.enquiryText);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5"
              >
                <span>Get Quote for Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20am%20interested%20in%20a%20project%20like%20"${encodeURIComponent(selectedProject.title)}".`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center justify-center space-x-1"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
