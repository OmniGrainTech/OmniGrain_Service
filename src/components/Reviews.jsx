import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Phone,
  MessageCircle
} from 'lucide-react';
import { clientReviews, companyInfo } from '../data/websiteData';

export default function Reviews({ onOpenEnquiry }) {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Loved By Founders, Retailers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              & Business Leaders
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Read how Omnigrain Tech built viral mobile apps, launched fast-converting E-Commerce platforms, and eliminated recurring billing subscription costs for our partners.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {clientReviews.map((rev, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 shadow-sm"
            >
              <div>
                
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
                    Verified Client
                  </span>
                </div>

                {/* Project Tag */}
                <div className="mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                    {rev.project}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3.5">
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-black text-slate-900 leading-snug">{rev.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{rev.role}</p>
                  <p className="text-[11px] text-blue-600 font-bold">{rev.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Social Proof Conversion Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-black text-slate-900 flex items-center justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-amber-500 mr-2" />
              Ready to be our next client success story?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Join 150+ satisfied businesses who scale with Omnigrain Tech. Call or WhatsApp: <strong>{companyInfo.phoneDisplay}</strong>
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Review Section Callout')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-md transition"
          >
            Start Your Project Today
          </button>
        </div>

      </div>
    </section>
  );
}
