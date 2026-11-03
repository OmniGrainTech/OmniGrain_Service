import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function Header({ currency, setCurrency, onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean, focused navigation links (Pricing section removed as requested)
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Past Work', href: '#past-work' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top High-Conversion Urgency Banner */}
      <aside aria-label="Limited Time Offer" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white py-2 px-4 text-xs shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-white font-bold text-[10px] tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1 text-amber-300" /> LIMITED AD PROMOTION
            </span>
            <span className="hidden sm:inline font-medium text-slate-100">
              Need a Mobile App, E-Commerce Store or Custom Software?
            </span>
            <strong className="text-white font-bold">
              Get Free Technical Scope & Price Estimate in 2 Hours!
            </strong>
          </div>

          {/* Quick Call & WhatsApp with hidden mobile number digits */}
          <div className="flex items-center space-x-4 text-xs font-semibold">
            <a 
              href={`tel:${companyInfo.phone}`}
              className="hidden md:flex items-center space-x-1 text-white hover:text-amber-200 transition"
              title="Click to Call Tech Lead"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Tech Lead</span>
            </a>
            <a 
              href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech,%20I%20am%20looking%20for%20a%20project%20quote.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-200 hover:text-white transition"
              title="Click to Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5' 
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 shrink-0 mr-6 lg:mr-10 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 p-[1.5px] shadow-sm group-hover:shadow-blue-500/25 transition shrink-0">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                  <img 
                    src="/logo.png" 
                    alt="Omnigrain Tech Logo" 
                    className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<span class="text-blue-600 font-black text-lg">OG</span>';
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-slate-900 group-hover:text-blue-600 transition leading-tight">
                  OMNIGRAIN
                </span>
                <span className="text-[10px] text-slate-500 tracking-[0.24em] font-bold uppercase">
                  TECH SOLUTIONS
                </span>
              </div>
            </a>

            {/* Clean Desktop Navigation with whitespace-nowrap */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-600 transition-colors py-1 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Streamlined Header Right Actions */}
            <div className="flex items-center space-x-3 shrink-0">
              
              {/* Currency Selector */}
              <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-2 py-1 rounded transition ${
                    currency === 'INR' 
                      ? 'bg-white text-blue-600 shadow-xs font-black' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Show prices in Indian Rupees (₹)"
                >
                  ₹ INR
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2 py-1 rounded transition ${
                    currency === 'USD' 
                      ? 'bg-white text-blue-600 shadow-xs font-black' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Show prices in US Dollars ($)"
                >
                  $ USD
                </button>
              </div>

              {/* Primary High-Conversion CTA Button */}
              <button
                type="button"
                onClick={() => onOpenEnquiry('Header Instant Quote Button')}
                className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-blue-500/25 transition duration-150 transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span className="flex items-center space-x-1.5">
                  <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>Get Free Quote</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full flex items-center justify-center space-x-2 bg-slate-900 text-white font-bold py-2.5 rounded-xl text-sm shadow transition"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call Tech Lead</span>
              </a>

              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hello%20Omnigrain%20Tech,%20I%20am%20looking%20for%20software%20and%20app%20development%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-sm shadow transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('Mobile Menu Quote');
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-3 rounded-xl text-sm shadow-md"
              >
                <span>Request Instant Quote & Scope</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center space-x-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Source Code Ownership • Strict Mutual NDA</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
