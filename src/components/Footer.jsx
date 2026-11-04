import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ShieldCheck
} from 'lucide-react';
import { companyInfo, redPdfProduct } from '../data/websiteData';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onOpenEnquiry, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center p-1">
                  <img 
                    src={`${import.meta.env.BASE_URL}logo.png`} 
                    alt="Omnigrain Tech - Software, Apps & Tech Consulting Agency" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<span class="text-blue-400 font-black text-sm">OG</span>';
                    }}
                  />
                </div>
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-wider">OMNIGRAIN TECH</span>
                <span className="block text-[10px] text-blue-400 tracking-[0.2em] font-bold uppercase">
                  SOFTWARE, APPS & TECH CONSULTING
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We engineer revenue-generating Android & iOS mobile apps, complete E-Commerce business setups, custom Billing Software, and provide strategic Tech Consulting at best market rates with 100% source code ownership.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-slate-400">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-800 text-[11px] text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                <span>100% Source Code Ownership</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-800 text-[11px] text-blue-400 font-medium">
                <span>Mutual Legal NDA</span>
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-blue-400 transition text-left">
                  Android & iOS Mobile Apps
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-blue-400 transition text-left">
                  E-Commerce Business Setup
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-blue-400 transition text-left">
                  Custom Billing & POS Software
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-blue-400 transition text-left">
                  Tech Consulting Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-blue-400 transition text-left">
                  Web Apps, SaaS & CRM
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className="hover:text-blue-400 transition text-left">
                  High-Speed Websites
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Past Work & Products */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5">Products & Pages</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href={redPdfProduct.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-semibold flex items-center space-x-1 transition"
                >
                  <span>RedPDF Android App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('past-work')} className="hover:text-blue-400 transition text-left">
                  AuraFit E-Commerce Case
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('past-work')} className="hover:text-blue-400 transition text-left">
                  OmniBilling POS Software
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('why-us')} className="hover:text-blue-400 transition text-left">
                  Why Choose Omnigrain Tech
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('reviews')} className="hover:text-blue-400 transition text-left">
                  Verified Client Reviews
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('contact')} className="hover:text-blue-400 transition text-left">
                  Get Free Scope & Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact Desk */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5">Contact Desk</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Bandra Kurla Complex (BKC), Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white font-bold transition" title="Click to Call Tech Lead">
                  Click to Call Tech Lead
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                <a 
                  href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-bold transition"
                  title="Click to Chat on WhatsApp"
                >
                  Chat on WhatsApp Directly
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition">{companyInfo.email}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-slate-800 bg-black/40 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} <strong>Omnigrain Tech</strong>. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <button type="button" onClick={() => handleNav('home')} className="hover:text-slate-300 transition">
              Home
            </button>
            <button type="button" onClick={() => handleNav('services')} className="hover:text-slate-300 transition">
              Services
            </button>
            <button type="button" onClick={() => handleNav('contact')} className="hover:text-slate-300 transition">
              Contact
            </button>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700 ml-2"
              title="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
