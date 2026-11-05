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
  FileSpreadsheet,
  Check,
  Copy,
  Table,
  ChevronDown,
  ChevronUp,
  Send,
  Sparkles
} from 'lucide-react';
import { db, collection, getDocs, query, orderBy, limit } from '../firebase';
import { companyInfo } from '../data/websiteData';
import { sendLeadToGoogleSheet } from '../services/tracker';
import WhatsAppIcon from './WhatsAppIcon';

const APPS_SCRIPT_TEMPLATE = `// Omnigrain Tech - Google Sheets Automatic Lead Intake Script
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At (IST)",
        "Name",
        "Phone / WhatsApp",
        "Email",
        "Company",
        "Service Needed",
        "Budget",
        "Notes / Scope",
        "Source Form",
        "Device Type",
        "OS & Browser",
        "Screen Resolution",
        "UTM Source (Ad Platform)",
        "UTM Campaign",
        "Dwell Time (Seconds)",
        "Pages Visited Trail",
        "Landing Page"
      ]);
      sheet.getRange(1, 1, 1, 17).setFontWeight("bold").setBackground("#2563EB").setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    var row = [
      data.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.company || "",
      data.service || "",
      data.budget || "",
      data.details || "",
      data.sourceForm || "Website Form",
      (data.device && data.device.deviceType) || "",
      ((data.device && data.device.os) || "") + " (" + ((data.device && data.device.browser) || "") + ")",
      (data.device && data.device.screenResolution) || "",
      (data.attribution && data.attribution.utm_source) || "direct",
      (data.attribution && data.attribution.utm_campaign) || "organic",
      (data.device && data.device.timeOnSiteSeconds) || 0,
      (data.userJourney && data.userJourney.pagesViewed ? data.userJourney.pagesViewed.join(" -> ") : ""),
      (data.attribution && data.attribution.landingPage) || ""
    ];
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Lead saved" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;

export default function LeadAnalyticsModal({ isOpen, onClose }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterService, setFilterService] = useState('all');

  // Google Sheets Webhook Configuration State
  const [sheetWebhookUrl, setSheetWebhookUrl] = useState(() => {
    return localStorage.getItem('og_google_sheet_webhook_url') || companyInfo.googleSheetWebhookUrl || '';
  });
  const [showSheetSettings, setShowSheetSettings] = useState(false);
  const [testStatus, setTestStatus] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

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
      const saved = localStorage.getItem('og_google_sheet_webhook_url') || companyInfo.googleSheetWebhookUrl || '';
      setSheetWebhookUrl(saved);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveWebhook = (url) => {
    setSheetWebhookUrl(url);
    localStorage.setItem('og_google_sheet_webhook_url', url.trim());
  };

  const handleTestSync = async () => {
    if (!sheetWebhookUrl || !sheetWebhookUrl.startsWith('https://script.google.com/')) {
      setTestStatus({ type: 'error', message: 'Please paste a valid Google Apps Script Web App URL first.' });
      return;
    }

    setTestStatus({ type: 'loading', message: 'Sending test lead to your Google Sheet...' });
    
    // Save current url
    localStorage.setItem('og_google_sheet_webhook_url', sheetWebhookUrl.trim());

    const testPayload = {
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: 'Omnigrain Test Lead',
      phone: '+91 8850164531',
      email: 'test-lead@omnigrain.in',
      company: 'Omnigrain Tech Demo',
      service: 'High-Converting Website / Lander',
      budget: '₹9,999',
      details: 'Test sync verification from website lead engine.',
      sourceForm: 'Google Sheet Setup Test',
      device: {
        deviceType: 'desktop',
        os: 'Windows/Mac',
        browser: 'Chrome',
        screenResolution: '1920x1080',
        timeOnSiteSeconds: 15
      },
      attribution: {
        utm_source: 'google-sheets-test',
        utm_campaign: 'setup-verification',
        landingPage: window.location.href
      },
      userJourney: {
        pagesViewed: ['home', 'calculator', 'contact']
      }
    };

    const res = await sendLeadToGoogleSheet(testPayload);
    if (res.success) {
      setTestStatus({ 
        type: 'success', 
        message: 'Success! Test row sent directly to your Google Sheet. Check your sheet right now!' 
      });
    } else {
      setTestStatus({ 
        type: 'error', 
        message: res.error || 'Failed to dispatch test row. Verify deployment is set to "Anyone".' 
      });
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(APPS_SCRIPT_TEMPLATE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

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

  const isSheetConfigured = sheetWebhookUrl && sheetWebhookUrl.startsWith('https://script.google.com/');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
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
                  Live Firestore & Google Sheets
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                All client enquiries, quotes, device telemetry and UTM ad attribution
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setShowSheetSettings(!showSheetSettings)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                isSheetConfigured 
                  ? 'bg-emerald-900/50 text-emerald-300 border-emerald-600 hover:bg-emerald-800/50' 
                  : 'bg-amber-900/50 text-amber-300 border-amber-600 hover:bg-amber-800/50'
              }`}
              title="Connect your Google Sheet"
            >
              <Table className="w-3.5 h-3.5" />
              <span>{isSheetConfigured ? 'Google Sheet: Connected' : 'Connect Google Sheet'}</span>
              {showSheetSettings ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

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

        {/* Google Sheet Direct Integration Panel (Collapsible) */}
        {showSheetSettings && (
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 space-y-3.5 shrink-0 animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center space-x-1.5">
                  <Table className="w-4 h-4 text-emerald-600" />
                  <span>Google Sheets Instant Webhook Connection</span>
                </h4>
                <p className="text-[11px] text-slate-600">
                  Every enquiry or quote submitted on the website will be sent directly as a new row into your Google Sheet in under 1 second.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyCode}
                className="px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 font-extrabold text-xs flex items-center space-x-1.5 transition shrink-0"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Code Copied!' : 'Copy Google Apps Script Code'}</span>
              </button>
            </div>

            {/* URL Input & Test Action */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                value={sheetWebhookUrl}
                onChange={(e) => handleSaveWebhook(e.target.value)}
                placeholder="Paste your deployed Google Web App URL (https://script.google.com/macros/s/.../exec)"
                className="flex-1 bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600"
              />

              <button
                type="button"
                onClick={handleTestSync}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-xs transition shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Save & Send Test Row</span>
              </button>
            </div>

            {testStatus && (
              <div className={`p-2.5 rounded-xl text-xs flex items-center space-x-2 ${
                testStatus.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : testStatus.type === 'error'
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}>
                {testStatus.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                <span>{testStatus.message}</span>
              </div>
            )}

            {/* Quick 3-Step Setup Guide */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <span className="font-extrabold text-slate-900 block">How to connect in 60 seconds:</span>
              <ol className="list-decimal list-inside space-y-0.5 text-slate-700">
                <li>Create a blank Google Sheet in your Google Drive.</li>
                <li>Click <strong>Extensions &gt; Apps Script</strong> and paste the copied code.</li>
                <li>Click <strong>Deploy &gt; New deployment</strong> &rarr; Select type: <strong>Web app</strong> &rarr; Set "Who has access" to <strong>Anyone</strong>.</li>
                <li>Copy the generated Web App URL and paste it in the box above!</li>
              </ol>
            </div>
          </div>
        )}

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
                Test the lead form or calculator on the site! Submissions will appear here and in your Google Sheet instantly.
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

              {/* Marketing Attribution & Device Telemetry */}
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
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Encrypted Firestore Storage • Instant Google Sheets Webhook Sync</span>
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
