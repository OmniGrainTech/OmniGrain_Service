import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, Phone, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function StickyConversionBar({ onOpenEnquiry }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Desktop WhatsApp & Call Pill (Bottom Right) */}
      <aside aria-label="Direct Chat and Call" className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex flex-col items-end gap-2.5">
        
        {/* Floating Call Button */}
        <a
          href={`tel:${companyInfo.phone}`}
          className="hidden sm:flex items-center bg-white hover:bg-slate-50 text-slate-800 px-3.5 py-2.5 rounded-full shadow-lg border border-slate-200 transition-all duration-200 transform hover:scale-105"
          title="Click to Call Tech Lead Directly"
        >
          <Phone className="w-4 h-4 text-blue-600 mr-2" />
          <span className="text-xs font-bold text-slate-800">
            Call Tech Lead
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20am%20looking%20for%20a%20project%20estimate.`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl shadow-emerald-700/30 transition-all duration-200 transform hover:scale-105 border border-emerald-400"
          title="Click to Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-ping"></span>
          
          <MessageCircle className="w-6 h-6 fill-white relative z-10" />
          <span className="hidden sm:inline ml-2 text-xs font-black relative z-10">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Conversion Bar */}
      {visible && (
        <aside aria-label="Quick Mobile Actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-slate-200 p-2 backdrop-blur-md animate-in slide-in-from-bottom duration-200 shadow-xl">
          <div className="grid grid-cols-3 gap-1.5">
            <a
              href={`tel:${companyInfo.phone}`}
              className="py-2.5 px-2 rounded-xl bg-slate-900 text-white font-extrabold text-[11px] flex items-center justify-center space-x-1 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Us</span>
            </a>

            <a
              href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-extrabold text-[11px] flex items-center justify-center space-x-1 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Mobile Sticky Bar CTA')}
              className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[11px] flex items-center justify-center space-x-1 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Get Quote</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
