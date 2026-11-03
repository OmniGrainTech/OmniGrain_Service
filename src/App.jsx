import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PastWork from './components/PastWork';
import ProductRedPdf from './components/ProductRedPdf';
import WhyUs from './components/WhyUs';
import QuoteCalculator from './components/QuoteCalculator';
import Reviews from './components/Reviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyConversionBar from './components/StickyConversionBar';
import EnquiryModal from './components/EnquiryModal';
import { 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight, 
  Smartphone, 
  ShoppingBag, 
  Receipt, 
  Compass, 
  Sparkles,
  ShieldCheck,
  Star,
  Zap
} from 'lucide-react';

const validPages = ['home', 'services', 'past-work', 'why-us', 'reviews', 'contact'];

export default function App() {
  const [currency, setCurrency] = useState('INR');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Android & iOS Mobile Application');

  // Multi-Page SPA Hash Router
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').replace('/', '');
    if (validPages.includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);

  // Sync state with browser hash (supports Back/Forward buttons and bookmarks)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    if (validPages.includes(pageId)) {
      setActivePage(pageId);
      window.location.hash = pageId === 'home' ? '' : pageId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (subject = 'Android & iOS Mobile Application') => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  // Human-readable titles for breadcrumbs
  const pageTitles = {
    'home': 'Home',
    'services': 'Technology Services',
    'past-work': 'Past Work Portfolio',
    'why-us': 'Why Choose Us',
    'reviews': 'Client Reviews',
    'contact': 'Contact & Free Quote'
  };

  return (
    <div className="min-h-screen bg-brand-bg text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white w-full max-w-full overflow-x-hidden">
      
      {/* Top Fixed Header with Active Page and Services Highlighting */}
      <Header 
        currency={currency} 
        setCurrency={setCurrency} 
        onOpenEnquiry={handleOpenEnquiry} 
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Spacer to prevent fixed header from overlapping top page content */}
      <div className="h-[56px] sm:h-[64px] shrink-0" aria-hidden="true" />

      {/* Subpage Breadcrumb Navigation Bar (Visible on non-home pages) */}
      {activePage !== 'home' && (
        <nav aria-label="Breadcrumb" className="bg-slate-100 border-b border-slate-200 py-2.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-slate-500 font-medium">
              <button 
                type="button" 
                onClick={() => handleNavigate('home')} 
                className="hover:text-blue-600 transition flex items-center space-x-1"
              >
                <span>Home</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-blue-700 font-extrabold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                {pageTitles[activePage] || activePage}
              </span>
            </div>
            
            <button 
              type="button" 
              onClick={() => handleNavigate('home')}
              className="text-slate-700 hover:text-blue-600 font-bold flex items-center space-x-1 text-xs transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
          </div>
        </nav>
      )}

      {/* Main Multi-Page Content Flow */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        
        {/* ================= PAGE 1: HOME ================= */}
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-200">
            
            {/* Conversion Hero */}
            <Hero 
              currency={currency} 
              onOpenEnquiry={handleOpenEnquiry} 
              onNavigate={handleNavigate}
            />

            {/* Quick Service Gateway Section (Invites user to visit Services page) */}
            <section className="py-12 bg-white border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-widest mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explore Our Services</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      What Would You Like to Build?
                    </h2>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      Select any service below to view transparent starting pricing, delivery timelines, and full scope.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleNavigate('services')}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm transition shadow-sm self-start md:self-auto shrink-0"
                  >
                    <span>View All Services & Rates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 4 Core Gateways */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {[
                    {
                      title: "Android & iOS Apps",
                      desc: "Native & Flutter/React Native at guaranteed best market rates with Play Store approval.",
                      price: currency === 'INR' ? 'From ₹24,999' : 'From $349',
                      icon: Smartphone,
                      color: "text-blue-600 bg-blue-50 border-blue-200"
                    },
                    {
                      title: "E-Commerce Setup",
                      desc: "Turnkey branded online store with Razorpay UPI, automated shipping & WhatsApp alerts.",
                      price: currency === 'INR' ? 'From ₹14,999' : 'From $199',
                      icon: ShoppingBag,
                      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
                    },
                    {
                      title: "Custom Billing Software",
                      desc: "Fast GST billing POS with thermal printer USB drivers, barcode scanner & zero monthly fees.",
                      price: currency === 'INR' ? 'From ₹19,999' : 'From $279',
                      icon: Receipt,
                      color: "text-amber-600 bg-amber-50 border-amber-200"
                    },
                    {
                      title: "Tech Consulting",
                      desc: "Direct 1-on-1 architecture advisory, database optimization & server cost reductions.",
                      price: currency === 'INR' ? 'From ₹4,999' : 'From $69',
                      icon: Compass,
                      color: "text-purple-600 bg-purple-50 border-purple-200"
                    }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleNavigate('services')}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all duration-150 cursor-pointer flex flex-col justify-between group"
                      >
                        <div>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${item.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            {item.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                          <span className="text-slate-900 font-black">{item.price}</span>
                          <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center">
                            Check Details →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* In-House Product Showcase: RedPDF */}
            <ProductRedPdf 
              onOpenEnquiry={handleOpenEnquiry} 
            />

            {/* Interactive Instant Project Cost Calculator */}
            <QuoteCalculator 
              currency={currency} 
              onOpenEnquiry={handleOpenEnquiry} 
            />

            {/* Bottom Section Navigator Strip */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
              <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Ready to explore more?
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Check Our Case Studies, Reviews or Get a Direct Quote
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleNavigate('services')}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm transition shadow-sm"
                  >
                    View All Services
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigate('past-work')}
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition"
                  >
                    Explore Past Work
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigate('reviews')}
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition"
                  >
                    Read Reviews
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigate('contact')}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition"
                  >
                    Contact & Free Quote
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ================= PAGE 2: SERVICES ================= */}
        {activePage === 'services' && (
          <div className="animate-in fade-in duration-200">
            <Services 
              currency={currency} 
              onOpenEnquiry={handleOpenEnquiry} 
            />
          </div>
        )}

        {/* ================= PAGE 3: PAST WORK ================= */}
        {activePage === 'past-work' && (
          <div className="animate-in fade-in duration-200">
            <PastWork 
              onOpenEnquiry={handleOpenEnquiry} 
            />
          </div>
        )}

        {/* ================= PAGE 4: WHY US ================= */}
        {activePage === 'why-us' && (
          <div className="animate-in fade-in duration-200">
            <WhyUs 
              onOpenEnquiry={handleOpenEnquiry} 
            />
          </div>
        )}

        {/* ================= PAGE 5: REVIEWS ================= */}
        {activePage === 'reviews' && (
          <div className="animate-in fade-in duration-200">
            <Reviews 
              onOpenEnquiry={handleOpenEnquiry} 
            />
          </div>
        )}

        {/* ================= PAGE 6: CONTACT ================= */}
        {activePage === 'contact' && (
          <div className="animate-in fade-in duration-200">
            <ContactSection 
              currency={currency} 
              initialService={modalSubject} 
            />
          </div>
        )}

      </main>

      {/* Corporate Footer with Navigation Links */}
      <Footer 
        onOpenEnquiry={handleOpenEnquiry} 
        onNavigate={handleNavigate}
      />

      {/* Sticky Conversion Triggers (Floating WhatsApp/Call & Mobile Bar) */}
      <StickyConversionBar 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      {/* Instant Proposal Popup Modal */}
      <EnquiryModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialSubject={modalSubject} 
        currency={currency} 
      />

    </div>
  );
}
