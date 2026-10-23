import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  Smartphone,
  Heart
} from 'lucide-react';
import { companyInfo, redPdfProduct } from '../data/websiteData';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-accent to-blue-600 p-[1px]">
                <div className="w-full h-full bg-brand-deep rounded-[10px] flex items-center justify-center p-1">
                  <img 
                    src="/logo.png" 
                    alt="Omnigrain Tech Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<span class="text-brand-accent font-black text-sm">OG</span>';
                    }}
                  />
                </div>
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-wider">OMNIGRAIN TECH LLP</span>
                <span className="block text-[10px] text-brand-accent tracking-[0.2em] font-bold uppercase">
                  SOFTWARE & APP STUDIO
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We engineer revenue-generating mobile apps, bespoke billing systems, web applications, and scalable cloud architectures. Helping businesses eliminate bloated SaaS fees and scale with full IP ownership.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-slate-400">
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                <span>Registered Tech LLP</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-brand-accent">
                <span>100% Code Handover</span>
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-brand-accent transition">Mobile App Development</a></li>
              <li><a href="#billing-software" className="hover:text-brand-accent transition">Custom Billing Software</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition">Web Apps & Custom SaaS</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition">High-Speed Websites</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition">API & Microservices</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition">Database Optimization</a></li>
              <li><a href="#services" className="hover:text-brand-accent transition">Cloud & DevOps Hosting</a></li>
            </ul>
          </div>

          {/* Col 3: In-House Products & Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Products & Portals</h4>
            <ul className="space-y-2.5">
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
              <li><a href="#billing-software" className="hover:text-brand-accent transition">OmniBilling POS Engine</a></li>
              <li><a href="#calculator" className="hover:text-brand-accent transition">Instant Cost Estimator</a></li>
              <li><a href="#pricing" className="hover:text-brand-accent transition">Transparent Pricing</a></li>
              <li><a href="#reviews" className="hover:text-brand-accent transition">Client Testimonials</a></li>
              <li>
                <button 
                  onClick={() => onOpenEnquiry('Footer SOW Request')} 
                  className="text-brand-accent hover:underline text-left"
                >
                  Request Architecture Review
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Desk</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                <span>Bandra Kurla Complex (BKC), Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition">{companyInfo.email}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition">{companyInfo.phone}</a>
              </li>
              <li className="pt-2">
                <a 
                  href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hi%20Omnigrain%20Tech%20LLP`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition text-xs font-semibold"
                >
                  <span>WhatsApp: {companyInfo.whatsapp}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-slate-900 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} <strong>Omnigrain Tech LLP</strong>. All rights reserved. Registered Indian Technology Partnership.
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-300 transition">Privacy Policy</span>
            <span className="hover:text-slate-300 transition">Terms of Service</span>
            <span className="hover:text-slate-300 transition">Non-Disclosure Agreement (NDA)</span>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition border border-slate-800"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
