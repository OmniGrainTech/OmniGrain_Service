import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SatisfiedClients from './components/SatisfiedClients';
import Services from './components/Services';
import PastWork from './components/PastWork';
import BillingShowcase from './components/BillingShowcase';
import ProductRedPdf from './components/ProductRedPdf';
import WhyUs from './components/WhyUs';
import QuoteCalculator from './components/QuoteCalculator';
import Reviews from './components/Reviews';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyConversionBar from './components/StickyConversionBar';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [currency, setCurrency] = useState('INR');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Android & iOS Mobile Application');

  const handleOpenEnquiry = (subject = 'Android & iOS Mobile Application') => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Header & Sticky Navigation */}
      <Header 
        currency={currency} 
        setCurrency={setCurrency} 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      {/* Main Page Content Flow */}
      <main className="flex-grow">
        {/* High-Converting Hero Section */}
        <Hero 
          currency={currency} 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Satisfied Clients & Domain Experience */}
        <SatisfiedClients />

        {/* Core Services Section with "Starting with ₹xxxx" */}
        <Services 
          currency={currency} 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Past Work Showcase (RedPDF, E-Commerce Setup, Custom Billing, Tech Consulting) */}
        <PastWork 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Dedicated Solution Deep Dive: Custom Billing & POS Software */}
        <BillingShowcase 
          currency={currency} 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* In-House Product Showcase: RedPDF Utility App (Google Play) */}
        <ProductRedPdf 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Why Client Should Choose Us? (8 Core Conversion Pillars) */}
        <WhyUs 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Interactive Instant Project Cost & Timeline Calculator */}
        <QuoteCalculator 
          currency={currency} 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Verified Client Reviews & Ratings */}
        <Reviews 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* FAQ Section addressing customer questions */}
        <FaqSection 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Main Lead Conversion Center: Contact & Quote Form */}
        <ContactSection 
          currency={currency} 
          initialService={modalSubject} 
        />
      </main>

      {/* Corporate Footer */}
      <Footer 
        onOpenEnquiry={handleOpenEnquiry} 
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
