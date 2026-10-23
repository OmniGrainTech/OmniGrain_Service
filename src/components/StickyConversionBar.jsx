import React, { useState, useEffect } from 'react';
import { MessageCircle, Zap, Phone, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function StickyConversionBar({ onOpenEnquiry }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA bar once user scrolls down past hero
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Action Pill (Bottom Right) */}
      <aside aria-label="Direct Chat" className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center group">
        <a
          href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech%20LLP,%20I%20am%20looking%20for%20software%20and%20app%20development.`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-900/60 transition-all duration-300 transform hover:scale-105 border border-emerald-400/40"
          title="Chat directly on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping"></span>
          
          <MessageCircle className="w-6 h-6 fill-white/20 relative z-10" />
          <span className="hidden sm:inline ml-2 text-xs font-bold relative z-10">
            Chat with Tech Lead
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Conversion Bar */}
      {visible && (
        <aside aria-label="Quick Actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-deep/98 border-t border-slate-800 p-2.5 backdrop-blur-xl animate-in slide-in-from-bottom duration-300 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech%20LLP,%20I%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenEnquiry('Mobile Sticky Bar CTA')}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 text-slate-950 font-black text-xs flex items-center justify-center space-x-1 shadow-lg shadow-brand-accent/20"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>Instant Quote</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
