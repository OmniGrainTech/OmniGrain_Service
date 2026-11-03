import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { faqs, companyInfo } from '../data/websiteData';

export default function FaqSection({ onOpenEnquiry }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Answered Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Everything You Need To Know <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Before Hiring Omnigrain Tech
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition space-x-4"
                >
                  <span>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blue-100 text-blue-600' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have other questions CTA */}
        <div className="mt-10 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-3">
          <span>Have a unique question not listed here?</span>
          <a
            href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20have%20a%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:underline font-bold flex items-center"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1" />
            WhatsApp us directly ({companyInfo.phoneDisplay})
          </a>
          <span>or</span>
          <a
            href={`tel:${companyInfo.phone}`}
            className="text-blue-600 hover:underline font-bold flex items-center"
          >
            <Phone className="w-3.5 h-3.5 mr-1" />
            Call: {companyInfo.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
}
