import React, { useState } from 'react';
import { 
  Receipt, 
  Printer, 
  Barcode, 
  Smartphone, 
  Database, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Zap,
  TrendingUp,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';
import { companyInfo } from '../data/websiteData';

export default function BillingShowcase({ currency, onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('retail');
  const [customerPhone, setCustomerPhone] = useState('9876543210');
  const [billSent, setBillSent] = useState(false);

  const price = currency === 'INR' ? '₹19,999' : '$279';

  const sampleItems = [
    { name: 'Omni Wireless Barcode Scanner', qty: 2, price: 2450, tax: '18%' },
    { name: 'Thermal Receipt Rolls (Pack of 10)', qty: 5, price: 380, tax: '12%' },
    { name: 'Multi-Terminal License Setup', qty: 1, price: 4999, tax: '18%' },
  ];

  const subtotal = sampleItems.reduce((acc, curr) => acc + (curr.qty * curr.price), 0);
  const taxAmount = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + taxAmount;

  const handleSimulateWhatsAppBill = () => {
    setBillSent(true);
    setTimeout(() => setBillSent(false), 3500);
  };

  return (
    <section id="billing-software" className="py-20 lg:py-28 bg-brand-dark/95 border-y border-slate-800/80 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Industry Solution Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Custom Billing, POS & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              Inventory ERP Software
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Stop losing <strong>₹30,000+ every year</strong> to recurring monthly subscriptions of generic billing apps. 
            We build lightning-fast, custom billing software that fits your exact workflow with one-time ownership.
          </p>
        </div>

        {/* Comparison Callout: Generic SaaS vs Omnigrain Custom Billing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="p-5 rounded-xl bg-red-950/20 border border-red-900/40 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 text-red-400 font-bold mb-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Generic SaaS Billing Tools (Tally / Vyapar / Zoho)</span>
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li>❌ Heavy yearly recurring renewal fees per PC</li>
              <li>❌ Slow barcode scanning creates long customer queues</li>
              <li>❌ Generic features you never use, missing the ones you actually need</li>
              <li>❌ Your data is locked on third-party clouds</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Omnigrain Custom Billing Engine</span>
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li>✅ <strong>One-time payment</strong> with zero recurring monthly subscription</li>
              <li>✅ Sub-second 0.8s billing speed with thermal printer support</li>
              <li>✅ Custom GST tax formats, weighing scales & barcode scanner integration</li>
              <li>✅ 100% source code ownership & automated WhatsApp bill dispatch</li>
            </ul>
          </div>
        </div>

        {/* Live Interactive Billing Simulation UI & Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Simulated POS Terminal */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl p-5 sm:p-7">
              
              {/* POS Terminal Top Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 mb-5 gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <Receipt className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">OmniBilling Pro™ v4.2</span>
                    <span className="text-[10px] text-emerald-400 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                      Thermal Printer Connected (USB / Network)
                    </span>
                  </div>
                </div>

                {/* Counter / Branch badge */}
                <div className="flex items-center space-x-2 text-xs">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                    Counter #01 • Main Warehouse
                  </span>
                </div>
              </div>

              {/* Sample Cart Table */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-2">ITEM DESCRIPTION</th>
                      <th className="pb-2 text-center">QTY</th>
                      <th className="pb-2 text-right">RATE (₹)</th>
                      <th className="pb-2 text-right">TAX</th>
                      <th className="pb-2 text-right">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {sampleItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/30">
                        <td className="py-2.5 text-white font-sans font-medium">{item.name}</td>
                        <td className="py-2.5 text-center text-brand-accent">{item.qty}</td>
                        <td className="py-2.5 text-right text-slate-300">₹{item.price.toLocaleString('en-IN')}</td>
                        <td className="py-2.5 text-right text-slate-400">{item.tax}</td>
                        <td className="py-2.5 text-right text-emerald-400 font-bold">
                          ₹{(item.qty * item.price).toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bill Totals Summary */}
              <div className="p-3 bg-brand-dark rounded-xl border border-slate-800 mb-5 flex flex-wrap justify-between items-center text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400">Taxable: ₹{subtotal.toLocaleString('en-IN')}</span>
                  <span className="text-slate-400 mx-2">|</span>
                  <span className="text-slate-400">GST (18%): ₹{taxAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold">Grand Total:</span>
                  <span className="text-xl font-black text-amber-400 font-mono">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Automated WhatsApp Dispatch Demo */}
              <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/30 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="customer-whatsapp-input" className="text-xs font-semibold text-emerald-300 flex items-center">
                    <Smartphone className="w-3.5 h-3.5 mr-1.5" />
                    Auto-Send PDF Invoice to Customer WhatsApp:
                  </label>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                    Instant Delivery
                  </span>
                </div>
                <div className="flex space-x-2">
                  <input
                    id="customer-whatsapp-input"
                    type="text"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Enter customer 10-digit mobile number"
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400 font-mono"
                  />
                  <button
                    type="button"
                    onClick={handleSimulateWhatsAppBill}
                    className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition flex items-center space-x-1"
                  >
                    <span>{billSent ? '✓ Sent to WhatsApp!' : 'Test Send'}</span>
                  </button>
                </div>
                {billSent && (
                  <p className="text-[11px] text-emerald-400 animate-fadeIn">
                    ⚡ PDF Tax Invoice #INV-2026-892 generated & dispatched to customer WhatsApp in 0.4s!
                  </p>
                )}
              </div>

              {/* Terminal Quick Hardware Badges */}
              <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-400">
                <div className="p-2 rounded bg-slate-800/40 flex items-center justify-center space-x-1">
                  <Printer className="w-3.5 h-3.5 text-brand-accent" />
                  <span>2"/3" Thermal Print</span>
                </div>
                <div className="p-2 rounded bg-slate-800/40 flex items-center justify-center space-x-1">
                  <Barcode className="w-3.5 h-3.5 text-amber-400" />
                  <span>Barcode Scanner</span>
                </div>
                <div className="p-2 rounded bg-slate-800/40 flex items-center justify-center space-x-1">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Offline Local Sync</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Benefits & Action CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-brand-accent font-bold">
                Tailored To Your Industry
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Engineered for Retail, Wholesale & Manufacturing
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you run a fast-paced supermarket with 5 checkout counters or a wholesale steel distributor managing credit ledgers, we build your billing software to eliminate errors and speed up checkouts.
              </p>
            </div>

            {/* Checklist of Enterprise Capabilities */}
            <div className="space-y-3">
              {[
                { title: "GST & Multi-Tax Compliant", desc: "Automated GSTR-1, GSTR-3B export, E-Way bills & B2B/B2C filing reports." },
                { title: "Customer Credit Ledger (Khata)", desc: "Track customer balances, payment reminders, and credit limits with auto-SMS." },
                { title: "Stock & Low-Inventory Triggers", desc: "Real-time stock alerts so you never run out of best-selling items." },
                { title: "Multi-Store & Cloud Sync", desc: "Connect multiple shop branches to a centralized live management dashboard." },
                { title: "Hardware Plug & Play", desc: "Compatible with EPSON, TVS, Pegasus thermal printers & USB barcode scanners." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{item.title}</h5>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price & Action Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-card to-slate-900 border border-brand-accent/40 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase">One-Time License Investment</span>
                  <div className="text-2xl font-black text-white">
                    Starting from <span className="text-amber-400">{price}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider">
                  Zero Recurring Subscriptions
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry('Billing Software Live Demo & Quote')}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition flex items-center justify-center space-x-1.5"
                >
                  <span>Request Live Billing Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${companyInfo.whatsappRaw}?text=Hello%20Omnigrain%20Tech%20LLP,%20I%20am%20interested%20in%20custom%20Billing%20Software%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition flex items-center justify-center space-x-1"
                >
                  <span>WhatsApp Specs</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
