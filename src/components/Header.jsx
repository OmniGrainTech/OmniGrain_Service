import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  ShieldCheck
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

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Billing Software', href: '#billing-software' },
    { name: 'Our Products (RedPDF)', href: '#products' },
    { name: 'Cost Estimator', href: '#calculator' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top High-Conversion Urgency Banner */}
      <aside aria-label="Limited Time Offer" className="bg-gradient-to-r from-brand-accent/20 via-blue-600/20 to-purple-600/20 border-b border-brand-accent/20 py-2 px-4 text-xs text-center text-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-brand-accent/20 text-brand-accentLight font-semibold text-[11px] border border-brand-accent/30">
            <Sparkles className="w-3 h-3 mr-1" /> SPECIAL PROMOTION
          </span>
          <span>
            Need a Mobile App, Web Platform, or Custom Billing Software? 
            <strong className="text-white ml-1">Get Free Scope & Prototype within 24 Hours!</strong>
          </span>
          <button 
            onClick={() => onOpenEnquiry('Free Scope & Prototype Consultation')}
            className="text-brand-accentLight hover:text-white underline font-medium ml-1 inline-flex items-center group transition"
          >
            Claim Consultation <ArrowRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-deep/95 backdrop-blur-md shadow-2xl shadow-brand-deep/80 border-b border-slate-800/90 py-3' 
          : 'bg-brand-deep/80 backdrop-blur-sm border-b border-slate-800/50 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-blue-600 p-[1.5px] shadow-lg shadow-brand-accent/20 group-hover:shadow-brand-accent/40 transition">
                <div className="w-full h-full bg-brand-deep rounded-[10px] flex items-center justify-center overflow-hidden p-1">
                  <img 
                    src="/logo.png" 
                    alt="Omnigrain Tech Logo" 
                    className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<span class="text-brand-accent font-black text-lg">OG</span>';
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white group-hover:text-brand-accent transition flex items-center">
                  OMNIGRAIN
                  <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded bg-brand-accent/15 text-brand-accent border border-brand-accent/30 font-bold tracking-normal">
                    LLP
                  </span>
                </span>
                <span className="text-[10px] text-brand-muted tracking-[0.22em] font-semibold uppercase">
                  TECH SOLUTIONS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-7 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-brand-accent transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              
              {/* Currency Selector */}
              <div className="flex items-center bg-slate-900/90 border border-slate-700/80 rounded-lg p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-2 py-1 rounded transition ${
                    currency === 'INR' 
                      ? 'bg-brand-accent text-slate-900 shadow font-bold' 
                      : 'text-slate-400 hover:text-white'
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
                      ? 'bg-brand-accent text-slate-900 shadow font-bold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Show prices in US Dollars ($)"
                >
                  $ USD
                </button>
              </div>

              {/* Direct WhatsApp Action (Desktop) */}
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hello%20Omnigrain%20Tech%20LLP,%20I%20am%20interested%20in%20your%20software%20and%20app%20development%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center space-x-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-lg transition"
                title="Direct WhatsApp Chat with Tech Lead"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
                <span>WhatsApp</span>
              </a>

              {/* Primary High-Conversion CTA */}
              <button
                type="button"
                onClick={() => onOpenEnquiry('Instant Quote Request')}
                className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 hover:from-brand-accentLight hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition duration-300 transform hover:-translate-y-0.5"
              >
                <span className="flex items-center space-x-1.5 text-slate-900 font-extrabold">
                  <span>Get Instant Quote</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-brand-dark/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-brand-accent transition flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hello%20Omnigrain%20Tech%20LLP,%20I%20am%20looking%20for%20software%20development%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 rounded-lg text-sm shadow transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('Mobile Menu Quote');
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-accent to-blue-600 text-slate-950 font-bold py-2.5 rounded-lg text-sm shadow-lg shadow-brand-accent/20"
              >
                <span>Request Project Proposal</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
              <span>Full Source Code Ownership • NDA Protected</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
