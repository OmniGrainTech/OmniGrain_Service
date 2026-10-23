# Omnigrain Tech LLP - Official Agency & Sales Website

A high-converting, SEO-rich, and modern React.js website engineered specifically for **Omnigrain Tech LLP** to drive qualified client acquisitions, promote core software engineering services, and showcase featured in-house products (like RedPDF on Google Play).

Designed following the exact dark navy & electric cyan brand DNA of [omnigrain.in](https://omnigrain.in/).

---

## 🚀 Key Features Built for Maximum Ad Conversions

1. **High-Converting Hero Section**:
   - Compelling value proposition targeting founders, retailers, and enterprises.
   - Dual high-contrast CTAs: *"Get Free Scope & Quote"* and *"Chat on WhatsApp"*.
   - Live simulated tech metrics card (100k+ downloads, 14ms API latency, 99.99% cloud uptime).
   - Trust badges: 4.9★ rating, 150+ projects delivered, 100% source code ownership, NDA protected.

2. **Core Services Suite (with Minimum Transparent Pricing)**:
   - **Mobile App Development (Android & iOS)** - *Starting from ₹34,999 / $499*
   - **Web Apps & Custom SaaS Platforms** - *Starting from ₹29,999 / $399*
   - **Custom Billing & POS Software** - *Starting from ₹19,999 / $279*
   - **Websites & High-Converting Landing Pages** - *Starting from ₹9,999 / $149*
   - **API Development & Microservices Architecture** - *Starting from ₹14,999 / $199*
   - **Database Designing & Optimization** - *Starting from ₹11,999 / $169*
   - **Cloud Services & Hosting Infrastructure** - *Starting from ₹4,999 / $69*
   - Dynamic currency toggle between **₹ INR** and **$ USD**.

3. **Specialized Billing Software Deep Dive**:
   - Detailed spotlight on custom billing software solving retail and wholesale pain points.
   - Interactive live POS simulation demonstrating sub-second billing, barcode scanner sync, and automatic WhatsApp PDF invoice dispatch.
   - Comparison breakdown showing why custom billing beats generic recurring subscription tools (Tally / Vyapar / Zoho).

4. **In-House Product Showcase: RedPDF**:
   - Showcase for **RedPDF - Image to PDF & Fast PDF Maker** (`com.legendarysoftware.redpdf.imagetopdf`).
   - Official Google Play Store download link and badge.
   - Verified metrics: 4.8★ rating, 100,000+ downloads, 100% offline & privacy-safe.
   - Interactive 4-tab mobile phone simulation (Convert, Scanner, Password Lock, Compress).

5. **Interactive Project Cost & Timeline Calculator**:
   - Allows visitors from Google/Meta ads to select service type, project scale (Starter, Pro, Enterprise), and add-ons (Auth, Payments, WhatsApp bot, Hardware drivers).
   - Generates instant live estimates and timelines with a 1-click **"Lock Estimate via WhatsApp"** button.

6. **Transparent Pricing Tiers**:
   - 3 transparent packages: *Starter Launchpad*, *Growth (Full Mobile/SaaS)*, and *Enterprise (Billing & ERP)*.
   - 3-step milestone payment guarantee (30% kickoff, 40% working demo, 30% code transfer).

7. **Reviews & Satisfied Clients**:
   - Verified client reviews with star ratings, project scopes, company names, and verified badges.
   - Industry specialization grid (Retail, D2C, Healthcare, Logistics, Fintech, EdTech).

8. **High-Priority Contact & Lead Desk (Main Conversion Engine)**:
   - Interactive multi-select service selector.
   - Budget range selector and project details.
   - Direct pre-filled WhatsApp link (`https://wa.me/...`) so leads can connect with the lead architect instantly.
   - Celebratory conversion confetti on submission.
   - Complete corporate credentials: `contact@omnigrain.in`, hotline, BKC Mumbai headquarters, 15-minute response SLA.

9. **Sticky Conversion Triggers**:
   - Floating pulsating WhatsApp button on desktop.
   - Sticky bottom conversion action bar on mobile (`WhatsApp Us` + `Instant Quote`).

10. **Rich SEO & Performance**:
    - Schema.org structured data (`ProfessionalService` & `SoftwareApplication`).
    - OpenGraph and Twitter Cards for social and WhatsApp link previews.
    - Semantic HTML5 and sub-second loading speed.

---

## 🛠️ Project Structure

```text
omnigrain-tech/
├── dist/                      # Production-ready optimized build
│   ├── index.html
│   ├── logo.png
│   └── assets/
├── public/
│   └── logo.png               # Official Omnigrain Tech logo
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Sticky header with urgency banner & currency toggle
│   │   ├── Hero.jsx           # Conversion hero with tech status card
│   │   ├── SatisfiedClients.jsx # Logos & industries grid
│   │   ├── Services.jsx       # 7 core services with starting prices
│   │   ├── BillingShowcase.jsx # Dedicated billing software spotlight & POS demo
│   │   ├── ProductRedPdf.jsx  # RedPDF Android app showcase
│   │   ├── QuoteCalculator.jsx# Interactive cost & timeline estimator
│   │   ├── Pricing.jsx        # Transparent minimum pricing tiers
│   │   ├── WhyUs.jsx          # 6 core differentiators & code ownership
│   │   ├── Reviews.jsx        # Verified client reviews & ratings
│   │   ├── FaqSection.jsx     # Accordion addressing client questions
│   │   ├── ContactSection.jsx # Main conversion form & WhatsApp lead capture
│   │   ├── Footer.jsx         # Links, legal statement & contact desk
│   │   ├── StickyConversionBar.jsx # Floating WhatsApp & mobile CTA bar
│   │   └── EnquiryModal.jsx   # Instant proposal popup modal
│   ├── data/
│   │   └── websiteData.js     # Centralized, easily editable content & pricing
│   ├── App.jsx                # Main application entry point
│   ├── index.css              # Custom tech grid, scrollbars, and styling
│   └── main.jsx               # React DOM initialization
├── index.html                 # SEO meta tags, OpenGraph, JSON-LD schema
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Exact Omnigrain dark theme palette
├── vite.config.js             # Vite build configuration
├── start-dev.bat              # 1-Click Windows Dev Server launcher
└── start-preview.bat          # 1-Click Windows Production Preview launcher
```

---

## ⚡ How to Run Locally

### Option A: Using the 1-Click Batch Files (Easiest)
- Double-click **`start-dev.bat`** to start the local development server with hot-reload.
- Double-click **`start-preview.bat`** to test the production build.

### Option B: Using the Terminal
1. Open PowerShell or Command Prompt in this folder.
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

4. To build for production:
   ```bash
   npm run build
   ```
   The output files are generated in the `dist/` folder, ready for immediate deployment!

---

## 🌐 Deployment Instructions

You can host this website on any modern hosting platform in under 2 minutes:

- **Vercel / Netlify**: Connect the repository or drag-and-drop the `dist` folder.
- **Shared Hosting / cPanel / Apache / Nginx**: Upload the contents of the `dist/` folder directly to `public_html`.
- **Cloudflare Pages / GitHub Pages**: Deploy the `dist/` folder with zero configuration.
