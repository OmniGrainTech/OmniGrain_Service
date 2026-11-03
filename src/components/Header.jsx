import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Zap,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function Header({ 
  currency, 
  setCurrency, 
  onOpenEnquiry, 
  activePage = 'home', 
  onNavigate 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean, focused navigation links with special emphasis on Services
  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'services', name: 'Services', isSpecial: true },
    { id: 'past-work', name: 'Past Work' },
    { id: 'why-us', name: 'Why Us' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleLinkClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  return (
    /* Locked Sticky Header - Zero shift, permanently fixed at top */
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-2 sm:py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with 1-Click Back to Home */}
          <button 
            type="button" 
            onClick={() => handleLinkClick('home')} 
            className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 mr-2 sm:mr-4 lg:mr-8 group text-left"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 p-[1.5px] shadow-sm group-hover:shadow-blue-500/25 transition shrink-0">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                <img 
                  src="/logo.png" 
                  alt="Omnigrain Tech Logo" 
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<span class="text-blue-600 font-black text-base sm:text-lg">OG</span>';
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-black tracking-wider text-slate-900 group-hover:text-blue-600 transition leading-tight">
                OMNIGRAIN
              </span>
              <span className="text-[8px] sm:text-[10px] text-slate-500 tracking-[0.2em] font-bold uppercase">
                TECH SOLUTIONS
              </span>
            </div>
          </button>

          {/* Desktop Navigation with Prominent Active & Services Highlight */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;

              // Services Tab Highlight so users immediately notice and know where to check services
              if (link.isSpecial) {
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-1.5 px-3.5 rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap flex items-center space-x-1.5 ${
                      isActive
                        ? 'bg-blue-600 text-white font-black shadow-md shadow-blue-500/20'
                        : 'bg-blue-50 hover:bg-blue-100 text-blue-700 font-black border border-blue-200'
                    }`}
                    title="Explore our full technology services catalog"
                  >
                    <span className="flex h-2 w-2 relative shrink-0">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isActive ? 'bg-white opacity-75' : 'bg-blue-600 opacity-75'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isActive ? 'bg-white' : 'bg-blue-600'}`}></span>
                    </span>
                    <span>{link.name}</span>
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full uppercase tracking-wider font-extrabold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-blue-200/80 text-blue-800'
                    }`}>
                      Explore
                    </span>
                  </button>
                );
              }

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-1.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Header Right Actions - Mobile Friendly & Responsive */}
          <div className="flex items-center space-x-2 sm:space-x-2.5 shrink-0">
            
            {/* Currency Selector (Desktop & Tablet) */}
            <div className="hidden md:flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5 text-xs font-bold">
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
              className="relative group overflow-hidden px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-blue-500/25 transition duration-150 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span className="flex items-center space-x-1 sm:space-x-1.5">
                <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300 shrink-0" />
                <span className="hidden xs:inline">Get Free Quote</span>
                <span className="xs:hidden">Get Quote</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer with Services Highlight */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          
          {/* Mobile Currency Switcher */}
          <div className="flex md:hidden items-center justify-between p-2 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-600">Currency:</span>
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 text-xs font-bold">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded transition ${
                  currency === 'INR' 
                    ? 'bg-blue-600 text-white font-black shadow-xs' 
                    : 'text-slate-600'
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded transition ${
                  currency === 'USD' 
                    ? 'bg-blue-600 text-white font-black shadow-xs' 
                    : 'text-slate-600'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>

          {/* Navigation Links with Highlighted Services */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;

              if (link.isSpecial) {
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-black transition flex items-center justify-between text-left ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="flex h-2 w-2 relative shrink-0">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isActive ? 'bg-white opacity-75' : 'bg-blue-600 opacity-75'}`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${isActive ? 'bg-white' : 'bg-blue-600'}`}></span>
                      </span>
                      <span>{link.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-blue-200 text-blue-800'
                      }`}>
                        🔥 Explore Services
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  </button>
                );
              }

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-bold transition flex items-center justify-between text-left ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Direct Mobile Quick Actions */}
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow transition"
              title="Click to Call Directly"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call Tech Lead</span>
            </a>

            <a
              href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hello%20Omnigrain%20Tech,%20I%20am%20looking%20for%20software%20and%20app%20development%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow transition"
              title="Click to Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('Mobile Menu Quote');
              }}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-2.5 rounded-xl text-xs sm:text-sm shadow-md"
            >
              <span>Request Instant Quote & Scope</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-1 text-center text-[11px] text-slate-500 flex items-center justify-center space-x-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>100% Source Code Ownership • Strict Mutual NDA</span>
          </div>
        </div>
      )}
    </header>
  );
}
