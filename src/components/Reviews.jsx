import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Building2, 
  ChevronRight, 
  ChevronLeft,
  ThumbsUp,
  Sparkles
} from 'lucide-react';
import { clientReviews } from '../data/websiteData';

export default function Reviews({ onOpenEnquiry }) {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-brand-dark/95 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Verified Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Loved By Founders, Retailers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              & Enterprise Leaders
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Read how Omnigrain Tech LLP replaced expensive software subscriptions, built viral mobile apps, and accelerated business growth for our partners.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientReviews.map((rev, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-brand-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                
                {/* Top Row: Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-400" />
                    Verified Client
                  </span>
                </div>

                {/* Project Tag */}
                <div className="mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-brand-accent/10 text-brand-accentLight border border-brand-accent/20 font-semibold">
                    {rev.project}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-3.5">
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  className="w-11 h-11 rounded-full object-cover border border-slate-700 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">{rev.name}</h4>
                  <p className="text-[11px] text-slate-400">{rev.role}</p>
                  <p className="text-[11px] text-brand-accent font-medium">{rev.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-card via-slate-900 to-brand-card border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-amber-400 mr-2" />
              Ready to be our next success story?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Join 150+ companies who trust Omnigrain Tech LLP for their mission-critical software.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Review Section Callout')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accentLight hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-brand-accent/25 transition"
          >
            Start Your Project Today
          </button>
        </div>

      </div>
    </section>
  );
}
