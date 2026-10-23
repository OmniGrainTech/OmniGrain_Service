import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SatisfiedClients from './components/SatisfiedClients';
import Services from './components/Services';
import BillingShowcase from './components/BillingShowcase';
import ProductRedPdf from './components/ProductRedPdf';
import QuoteCalculator from './components/QuoteCalculator';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyConversionBar from './components/StickyConversionBar';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [currency, setCurrency] = useState('INR');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('General Project Inquiry');

  const handleOpenEnquiry = (subject = 'Project Proposal') => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-deep text-slate-100 flex flex-col font-sans selection:bg-brand-accent selection:text-slate-900">
      
      {/* Top Header & Sticky Navigation */}
      <Header 
        currency={currency} 
        setCurrency={setCurrency} 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* High-Converting Hero Section */}
        <Hero 
          currency={currency} 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Satisfied Clients & Industries Logo Grid */}
        <SatisfiedClients />

        {/* Core Services Section with "Starting with ₹xxxx" */}
        <Services 
          currency={currency} 
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

        {/* Interactive Instant Project Cost & Timeline Calculator */}
        <QuoteCalculator 
          currency={currency} 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Minimum Transparent Pricing Packages */}
        <Pricing 
          currency={currency} 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Why Choose Omnigrain Tech LLP (Code ownership, NDA, sprints) */}
        <WhyUs 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Verified Client Reviews & Ratings */}
        <Reviews 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* FAQ Section */}
        <FaqSection 
          onOpenEnquiry={handleOpenEnquiry} 
        />

        {/* Main Conversion Center: High-Converting Contact & Lead Desk */}
        <ContactSection 
          currency={currency} 
          initialService={modalSubject} 
        />
      </main>

      {/* Corporate Footer */}
      <Footer 
        onOpenEnquiry={handleOpenEnquiry} 
      />

      {/* Sticky Conversion Triggers (Floating WhatsApp & Mobile CTA) */}
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
