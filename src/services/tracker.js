import { db, trackAnalyticsEvent, collection, addDoc, serverTimestamp } from '../firebase';
import { companyInfo } from '../data/websiteData';

// Storage keys for persisting attribution throughout user session
const UTM_STORAGE_KEY = 'og_traffic_attribution';
const PAGES_VIEWED_KEY = 'og_pages_viewed';
const SESSION_START_KEY = 'og_session_start';

/**
 * Capture and store traffic attribution (UTM parameters, referrer, landing page)
 */
export function initTrafficAttribution() {
  if (typeof window === 'undefined') return;

  if (!sessionStorage.getItem(SESSION_START_KEY)) {
    sessionStorage.setItem(SESSION_START_KEY, Date.now().toString());
  }

  // Parse query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  const utmTerm = urlParams.get('utm_term');
  const utmContent = urlParams.get('utm_content');
  const gclid = urlParams.get('gclid'); // Google Ads Click Identifier
  const fbclid = urlParams.get('fbclid'); // Meta/Facebook Ads Click Identifier

  // Only overwrite if we have incoming params or no previous attribution
  const existing = sessionStorage.getItem(UTM_STORAGE_KEY);
  if (!existing || utmSource || gclid || fbclid) {
    const attribution = {
      utm_source: utmSource || (existing ? JSON.parse(existing).utm_source : (document.referrer ? new URL(document.referrer, window.location.origin).hostname : 'direct')),
      utm_medium: utmMedium || (existing ? JSON.parse(existing).utm_medium : (document.referrer ? 'referral' : 'none')),
      utm_campaign: utmCampaign || (existing ? JSON.parse(existing).utm_campaign : 'organic'),
      utm_term: utmTerm || '',
      utm_content: utmContent || '',
      gclid: gclid || '',
      fbclid: fbclid || '',
      referrer: document.referrer || 'direct',
      landingPage: window.location.href,
      firstVisitAt: new Date().toISOString()
    };
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(attribution));
    } catch (e) {}
  }
}

/**
 * Get current traffic attribution
 */
export function getTrafficAttribution() {
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) {}
  return {
    utm_source: 'direct',
    utm_medium: 'none',
    utm_campaign: 'organic',
    referrer: typeof document !== 'undefined' ? document.referrer || 'direct' : 'direct',
    landingPage: typeof window !== 'undefined' ? window.location.href : ''
  };
}

/**
 * Detect browser, device, screen resolution, and operating system
 */
export function getDeviceMetadata() {
  if (typeof window === 'undefined') return {};

  const ua = navigator.userAgent;
  let deviceType = 'desktop';
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    deviceType = 'tablet';
  } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua) || window.innerWidth < 768) {
    deviceType = 'mobile';
  }

  let os = 'Unknown';
  if (/Windows/i.test(ua)) os = 'Windows';
  else if (/Android/i.test(ua)) os = 'Android';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Mac/i.test(ua)) os = 'macOS';
  else if (/Linux/i.test(ua)) os = 'Linux';

  let browser = 'Unknown';
  if (/Edg/i.test(ua)) browser = 'Edge';
  else if (/Chrome/i.test(ua)) browser = 'Chrome';
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
  else if (/Firefox/i.test(ua)) browser = 'Firefox';

  const startTime = parseInt(sessionStorage.getItem(SESSION_START_KEY) || Date.now().toString(), 10);
  const timeOnSiteSeconds = Math.round((Date.now() - startTime) / 1000);

  return {
    deviceType,
    os,
    browser,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    language: navigator.language || 'en',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata',
    timeOnSiteSeconds
  };
}

/**
 * Record a page / section view in user journey
 */
export function recordPageView(pageId) {
  if (typeof window === 'undefined') return;

  try {
    const raw = sessionStorage.getItem(PAGES_VIEWED_KEY);
    const pages = raw ? JSON.parse(raw) : [];
    if (!pages.includes(pageId)) {
      pages.push(pageId);
      sessionStorage.setItem(PAGES_VIEWED_KEY, JSON.stringify(pages));
    }
  } catch (e) {}

  trackAnalyticsEvent('page_view', {
    page_title: `Omnigrain - ${pageId}`,
    page_location: window.location.href,
    page_path: `/#${pageId}`
  });
}

/**
 * Send real-time lead payload to Google Sheets Webhook
 */
export async function sendLeadToGoogleSheet(leadPayload) {
  if (typeof window === 'undefined') return { success: false };

  // Prioritize custom webhook saved in browser settings, then fallback to config
  const customUrl = localStorage.getItem('og_google_sheet_webhook_url');
  const webhookUrl = (customUrl && customUrl.trim()) 
    ? customUrl.trim() 
    : (companyInfo.googleSheetWebhookUrl || '').trim();

  if (!webhookUrl || !webhookUrl.startsWith('https://script.google.com/')) {
    return { success: false, reason: 'No Google Sheet Webhook configured yet' };
  }

  try {
    // Mode 'no-cors' allows browser to submit to Google Apps Script without CORS preflight block
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(leadPayload)
    });
    return { success: true };
  } catch (err) {
    console.warn('Google Sheet auto-dispatch notice:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Save complete lead data to Cloud Firestore & trigger GA4 Lead Event
 */
export async function saveLead(leadData) {
  const attribution = getTrafficAttribution();
  const device = getDeviceMetadata();

  let pagesViewed = [];
  try {
    pagesViewed = JSON.parse(sessionStorage.getItem(PAGES_VIEWED_KEY) || '[]');
  } catch (e) {}

  const fullLeadPayload = {
    // Lead Form Fields
    name: leadData.name || 'Anonymous',
    phone: leadData.phone || '',
    email: leadData.email || '',
    company: leadData.company || '',
    service: leadData.service || leadData.subject || 'General Inquiry',
    budget: leadData.budget || 'Standard',
    details: leadData.details || leadData.message || '',
    sourceForm: leadData.sourceForm || 'Website Form',
    
    // Marketing & Attribution (for Google & Meta Ad Optimization)
    attribution,
    
    // User Browser & Device Details
    device,
    
    // User Navigation Trail
    userJourney: {
      pagesViewed,
      landingPage: attribution.landingPage,
      currentPage: typeof window !== 'undefined' ? window.location.href : '',
      submittedAtLocal: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    },

    status: 'new', // new | contacted | qualified | closed
    createdAt: serverTimestamp()
  };

  // 1. Log to Google Analytics 4 (triggers ad conversion signals)
  trackAnalyticsEvent('generate_lead', {
    currency: 'INR',
    lead_source: leadData.sourceForm || 'Website Form',
    service_type: leadData.service || 'Software Development',
    device_type: device.deviceType,
    traffic_source: attribution.utm_source
  });

  // 2. Dispatch to connected Google Sheet
  const sheetPromise = sendLeadToGoogleSheet({
    submittedAt: fullLeadPayload.userJourney.submittedAtLocal,
    name: fullLeadPayload.name,
    phone: fullLeadPayload.phone,
    email: fullLeadPayload.email,
    company: fullLeadPayload.company,
    service: fullLeadPayload.service,
    budget: fullLeadPayload.budget,
    details: fullLeadPayload.details,
    sourceForm: fullLeadPayload.sourceForm,
    device: fullLeadPayload.device,
    attribution: fullLeadPayload.attribution,
    userJourney: fullLeadPayload.userJourney
  });

  // 3. Persist to Firestore without blocking the UI
  const firestorePromise = (async () => {
    try {
      await addDoc(collection(db, 'leads'), fullLeadPayload);
    } catch (err) {
      console.warn('Lead Firestore write notice:', err);
    }
  })();

  // Guarantee UI transition completes within 1000ms max so user is NEVER stuck on "Submitting..."
  await Promise.race([
    Promise.allSettled([sheetPromise, firestorePromise]),
    new Promise(resolve => setTimeout(resolve, 1000))
  ]);

  return { success: true };
}

/**
 * Record high-intent click or interaction
 */
export async function recordInteraction(eventType, metadata = {}) {
  const attribution = getTrafficAttribution();
  const device = getDeviceMetadata();

  const interactionPayload = {
    eventType,
    metadata,
    deviceType: device.deviceType,
    page: typeof window !== 'undefined' ? window.location.hash || '#home' : '#home',
    utm_source: attribution.utm_source,
    timestamp: serverTimestamp()
  };

  // Log to GA4
  trackAnalyticsEvent(eventType, metadata);

  // High-value interactions logged to Firestore `interactions` collection for conversion rate analysis
  const highValueEvents = ['whatsapp_click', 'call_click', 'quote_modal_opened', 'calculator_estimate_locked'];
  if (highValueEvents.includes(eventType)) {
    try {
      await addDoc(collection(db, 'interactions'), interactionPayload);
    } catch (e) {}
  }
}

/**
 * Global Automatic User Click & Navigation Tracker
 * Monitors where the user clicks and how they browse without requiring manual code everywhere.
 */
let trackerInitialized = false;

export function initGlobalTracker() {
  if (typeof window === 'undefined' || trackerInitialized) return;
  trackerInitialized = true;

  initTrafficAttribution();
  recordPageView(window.location.hash.replace('#', '') || 'home');

  // Track hash changes (page navigation)
  window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.replace('#', '') || 'home';
    recordPageView(pageId);
  });

  // Global click delegate to track where users click
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    const href = target.getAttribute('href') || '';
    const text = (target.innerText || target.getAttribute('title') || target.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 60);

    // 1. Phone Call Clicks
    if (href.startsWith('tel:')) {
      recordInteraction('call_click', {
        button_text: text,
        phone_number: href.replace('tel:', ''),
        section: target.closest('section, header, footer, aside')?.id || 'body'
      });
      return;
    }

    // 2. WhatsApp Direct Chat Clicks
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      recordInteraction('whatsapp_click', {
        button_text: text,
        section: target.closest('section, header, footer, aside')?.id || 'body'
      });
      return;
    }

    // 3. CTA Buttons (Quote, Proposals, Calculator)
    if (text.toLowerCase().includes('quote') || text.toLowerCase().includes('estimate') || text.toLowerCase().includes('proposal') || text.toLowerCase().includes('start your project')) {
      recordInteraction('cta_click', {
        button_text: text,
        section: target.closest('section, header, footer, aside')?.id || 'body'
      });
      return;
    }

    // 4. General button interactions
    if (target.tagName.toLowerCase() === 'button' && text.length > 0) {
      trackAnalyticsEvent('button_click', {
        button_text: text,
        section: target.closest('section, header, footer, aside')?.id || 'body'
      });
    }
  }, { passive: true });

  // Scroll Depth Milestones (25%, 50%, 75%, 90%)
  const scrollMilestones = { 25: false, 50: false, 75: false, 90: false };
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

    [25, 50, 75, 90].forEach((milestone) => {
      if (scrollPercent >= milestone && !scrollMilestones[milestone]) {
        scrollMilestones[milestone] = true;
        trackAnalyticsEvent('scroll_depth', {
          percent: milestone,
          page: window.location.hash || '#home'
        });
      }
    });
  }, { passive: true });
}
