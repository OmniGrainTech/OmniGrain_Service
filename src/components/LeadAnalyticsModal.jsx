import React, { useState, useEffect } from 'react';
import { 
  X, 
  RefreshCw, 
  Smartphone, 
  Monitor, 
  Globe, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Target, 
  Filter, 
  User, 
  ExternalLink,
  Calendar,
  CheckCircle2,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { db, collection, getDocs, query, orderBy, limit } from '../firebase';
import WhatsAppIcon from './WhatsAppIcon';

export default function LeadAnalyticsModal({ isOpen, onClose }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterService, setFilterService] = useState('all');

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'), limit(50));
      const querySnapshot = await getDocs(q);
      const fetched = [];
      querySnapshot.forEach((doc) => {
        fetched.push({ id: doc.id, ...doc.data() });
      });
      setLeads(fetched);
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError(err.message || 'Unable to fetch leads from Firestore.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredLeads = filterService === 'all' 
    ? leads 
    : leads.filter(l => l.service?.toLowerCase().includes(filterService.toLowerCase()));

  const exportCSV = () => {
    if (!leads.length) return;
    const headers = ['Name', 'Phone', 'Email', 'Company', 'Service', 'Budget', 'UTM Source', 'Campaign', 'Device', 'OS', 'Browser', 'Submitted At'];
    const rows = leads.map(l => [
      `"${l.name || ''}"`,
      `"${l.phone || ''}"`,
      `"${l.email || ''}"`,
      `"${l.company || ''}"`,
      `"${l.service || ''}"`,
      `"${l.budget || ''}"`,
      `"${l.attribution?.utm_source || 'direct'}"`,
      `"${l.attribution?.utm_campaign || 'none'}"`,
      `"${l.device?.deviceType || 'unknown'}"`,
      `"${l.device?.os || 'unknown'}"`,
      `"${l.device?.browser || 'unknown'}"`,
      `"${l.userJourney?.submittedAtLocal || ''}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `omnigrain-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center space-x-2">
                <span>Real-Time Lead & Attribution Desk</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-wider">
                  Live Firestore
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Track full user journey, ad source attribution, clicks, and device telemetry
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={exportCSV}
              disabled={!leads.length}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition disabled:opacity-50"
              title="Export Leads to CSV"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>

            <button
              type="button"
              onClick={fetchLeads}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Refresh Leads"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-blue-400' : ''}`} />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-slate-700">Total Leads Captured:</span>
            <span className="bg-blue-600 text-white font-black px-2.5 py-0.5 rounded-full">
              {leads.length}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-700 focus:outline-hidden"
            >
              <option value="all">All Services</option>
              <option value="mobile">Mobile App</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="billing">Billing Software</option>
              <option value="website">Website / Lander</option>
              <option value="consulting">Tech Consulting</option>
            </select>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {loading && (
            <div className="py-16 text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
              <p className="text-xs font-bold text-slate-500">Loading incoming leads from Firebase Firestore...</p>
            </div>
          )}

          {!loading && error && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-800">
              <span className="font-bold">Firestore Notice:</span> {error}
              <p className="mt-1 text-[11px] text-amber-700">
                Tip: When leads are submitted through the website, they are automatically stored in your Firebase project (<code>omintech</code>).
              </p>
            </div>
          )}

          {!loading && !error && filteredLeads.length === 0 && (
            <div className="py-16 text-center space-y-2">
              <User className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-bold text-slate-700">No leads captured yet.</p>
              <p className="text-xs text-slate-500">
                Test the lead form or calculator on the site! Submissions will appear here instantly with full browser and UTM attribution data.
              </p>
            </div>
          )}

          {!loading && filteredLeads.map((lead) => (
            <div 
              key={lead.id} 
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition space-y-3"
            >
              {/* Header row: Contact + Timestamp */}
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="font-black text-sm sm:text-base text-slate-900">{lead.name}</span>
                    {lead.company && (
                      <span className="text-xs bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded-md">
                        {lead.company}
                      </span>
                    )}
                    <span className="text-[10px] bg-blue-50 text-blue-700 font-extrabold px-2 py-0.5 rounded-full border border-blue-200">
                      {lead.sourceForm || 'Website Form'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 flex flex-wrap items-center gap-3">
                    <span className="font-bold text-slate-800">{lead.phone}</span>
                    {lead.email && <span>• {lead.email}</span>}
                    <span>• {lead.userJourney?.submittedAtLocal || 'Recent'}</span>
                  </div>
                </div>

                {/* Instant Quick Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${lead.phone}`}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center space-x-1 shadow-xs"
                    title="Call Lead Directly"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>Call</span>
                  </a>

                  <a
                    href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20contacting%20Omnigrain%20Tech%20regarding%20${encodeURIComponent(lead.service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center space-x-1 shadow-xs"
                    title="Reply on WhatsApp"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Requirement & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Service Needed</span>
                  <span className="font-extrabold text-blue-700">{lead.service}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Budget Specified</span>
                  <span className="font-extrabold text-slate-800">{lead.budget || 'Not specified'}</span>
                </div>
                <div className="sm:col-span-1">
                  <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Notes / Scope</span>
                  <span className="text-slate-700 font-medium line-clamp-2">{lead.details || 'None provided'}</span>
                </div>
              </div>

              {/* Marketing Attribution & Device Telemetry (Where user browsed & device) */}
              <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                {/* Device Pill */}
                <span className="inline-flex items-center space-x-1 bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded-md">
                  {lead.device?.deviceType === 'mobile' ? <Smartphone className="w-3 h-3 text-blue-600" /> : <Monitor className="w-3 h-3 text-slate-600" />}
                  <span>{lead.device?.os || 'Device'} • {lead.device?.browser || 'Browser'} ({lead.device?.screenResolution || 'screen'})</span>
                </span>

                {/* Ad & Campaign Source */}
                <span className="inline-flex items-center space-x-1 bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                  <Target className="w-3 h-3 text-emerald-600" />
                  <span>Source: {lead.attribution?.utm_source || 'Direct'} ({lead.attribution?.utm_campaign || 'organic'})</span>
                </span>

                {/* Dwell Time */}
                {lead.device?.timeOnSiteSeconds && (
                  <span className="inline-flex items-center space-x-1 bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>Time Before Submitting: {lead.device.timeOnSiteSeconds}s</span>
                  </span>
                )}

                {/* Pages Visited Trail */}
                {lead.userJourney?.pagesViewed && lead.userJourney.pagesViewed.length > 0 && (
                  <span className="text-slate-500">
                    Trail: {lead.userJourney.pagesViewed.join(' → ')}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Encrypted Firestore Storage • GA4 Conversion Linked</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-slate-700 hover:text-slate-900"
          >
            Close Desk
          </button>
        </div>

      </div>
    </div>
  );
}
