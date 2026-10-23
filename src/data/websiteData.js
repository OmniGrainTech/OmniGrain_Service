export const companyInfo = {
  name: "Omnigrain Tech LLP",
  tagline: "High-Performance Software, Mobile Apps & Cloud Solutions",
  shortDesc: "We help startups, growing businesses, and enterprises build high-converting mobile apps, custom web applications, billing software, and scalable cloud architectures.",
  email: "contact@omnigrain.in",
  phone: "+91 (22) 1234-5678",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  address: "Omnigrain Tech Tower, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051",
  experienceYears: "7+",
  projectsDelivered: "150+",
  clientSatisfaction: "99.4%",
  teamSize: "25+ Engineers",
  hoursResponse: "< 15 Mins",
  websiteUrl: "https://omnigrain.in",
};

export const servicesData = [
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform (Android & iOS)",
    description: "Launch sleek, responsive, 60fps mobile applications engineered for high retention and seamless user experience. We handle complete lifecycle from UI/UX to App Store & Google Play approval.",
    icon: "Smartphone",
    minPriceINR: 34999,
    minPriceUSD: 499,
    timeline: "2 - 4 Weeks",
    popular: true,
    badge: "High Demand",
    technologies: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase", "SQLite"],
    features: [
      "Native Android & iOS deployment",
      "Offline-first synchronization",
      "Biometric security & push notifications",
      "Payment gateway & in-app purchases",
      "Guaranteed App Store & Play Store approval",
      "Full source code handover & documentation"
    ],
    exampleSnippet: "E-Commerce Apps, Delivery Apps, Service Booking, Social & Community Platforms"
  },
  {
    id: "web-apps",
    title: "Web Apps & Custom SaaS",
    subtitle: "Scalable Full-Stack Web Platforms",
    description: "Bespoke web applications built with high-velocity modern frameworks. Engineered for high concurrency, real-time interactivity, and bank-grade data security.",
    icon: "Globe",
    minPriceINR: 29999,
    minPriceUSD: 399,
    timeline: "2 - 3 Weeks",
    popular: false,
    badge: "Scale Ready",
    technologies: ["React.js", "Next.js", "Node.js", "Python FastAPI", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Role-based access control (RBAC)",
      "Interactive data dashboards & charts",
      "Multi-tenant SaaS architecture",
      "Automated transactional emails & notifications",
      "Stripe / Razorpay recurring subscriptions",
      "End-to-end API integrations"
    ],
    exampleSnippet: "CRM Systems, Client Portals, Marketplace Platforms, HR & Payroll Portals"
  },
  {
    id: "billing-software",
    title: "Custom Billing & POS Software",
    subtitle: "Enterprise Invoicing, Inventory & Accounts",
    description: "Tailor-made billing software built specifically for your retail, wholesale, or distribution workflow. Never pay monthly subscription lock-ins again.",
    icon: "Receipt",
    minPriceINR: 19999,
    minPriceUSD: 279,
    timeline: "1 - 3 Weeks",
    popular: true,
    badge: "Top Seller",
    technologies: ["React", "Electron / Web", "Node.js", "PostgreSQL", "Thermal Print Engine", "Barcode SDK"],
    features: [
      "GST / VAT compliant invoice generation (A4 & Thermal 3-inch)",
      "Barcode scanner & electronic weighing scale integration",
      "Real-time inventory tracking & low stock alerts",
      "Customer credit ledger (Khata) & auto WhatsApp invoice dispatch",
      "Multi-branch & multi-counter sync",
      "Detailed P&L, sales, tax & profit analytics"
    ],
    exampleSnippet: "Supermarket POS, Wholesale Invoicing, Pharmacy ERP, Restaurant KOT Billing"
  },
  {
    id: "websites",
    title: "Websites & High-Converting Landers",
    subtitle: "SEO-Optimized Speed Champions",
    description: "Ultra-fast, beautifully crafted websites designed specifically to convert ad traffic into paying customers with 95+ Google PageSpeed score.",
    icon: "Layout",
    minPriceINR: 9999,
    minPriceUSD: 149,
    timeline: "3 - 7 Days",
    popular: false,
    badge: "Quick Launch",
    technologies: ["React", "Tailwind CSS", "Vite", "Next.js", "Headless CMS"],
    features: [
      "100/100 Core Web Vitals optimization",
      "Conversion-focused layouts & call-to-actions",
      "Full mobile & tablet responsiveness",
      "Interactive lead capture forms & WhatsApp chat",
      "Schema.org rich snippets for Google rankings",
      "Free 1-year SSL & domain setup support"
    ],
    exampleSnippet: "Corporate Portals, Ad Landing Pages, Portfolio Showcases, Lead Generation Hubs"
  },
  {
    id: "api-dev",
    title: "API Development & Microservices",
    subtitle: "High-Throughput Backend Architecture",
    description: "Robust RESTful and GraphQL APIs built to handle thousands of requests per second with microsecond latency, ironclad token security, and comprehensive docs.",
    icon: "Cpu",
    minPriceINR: 14999,
    minPriceUSD: 199,
    timeline: "1 - 2 Weeks",
    popular: false,
    badge: "High Speed",
    technologies: ["Node.js / Express", "FastAPI", "GraphQL", "Redis", "Swagger / OpenAPI"],
    features: [
      "Microservice and modular monolithic architecture",
      "OAuth 2.0 & JWT stateless authentication",
      "Third-party integrations (Payment, SMS, WhatsApp, AI)",
      "Webhook events & message queues (RabbitMQ/Kafka)",
      "Automated Swagger documentation",
      "Rate limiting, DDoS filtering & caching layers"
    ],
    exampleSnippet: "Payment Gateways, WhatsApp Automation, AI LLM Wrappers, Mobile App Backends"
  },
  {
    id: "database",
    title: "Database Designing & Optimization",
    subtitle: "Resilient Data Modeling & Tuning",
    description: "Clean relational and document data architecture designed to scale with your business without query slowdowns, deadlocks, or data corruption.",
    icon: "Database",
    minPriceINR: 11999,
    minPriceUSD: 169,
    timeline: "5 - 10 Days",
    popular: false,
    badge: "Zero Latency",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Prisma"],
    features: [
      "Normalized schema design & entity modeling",
      "Composite indexing & query execution plan tuning",
      "Automated hot backups & point-in-time recovery",
      "Data migration & zero-downtime ETL pipelines",
      "Connection pooling & read replica configurations",
      "Rigid data constraints & ACID integrity validation"
    ],
    exampleSnippet: "High-volume transactional databases, Data Warehouses, Real-time Analytics Cache"
  },
  {
    id: "cloud-hosting",
    title: "Cloud Services & Managed Hosting",
    subtitle: "Enterprise DevOps, CI/CD & 99.9% Uptime",
    description: "Worry-free cloud infrastructure setup and 24/7 server monitoring. Deploy your apps on AWS, GCP, Azure, or VPS with automated zero-downtime pipelines.",
    icon: "Cloud",
    minPriceINR: 4999,
    minPriceUSD: 69,
    timeline: "2 - 5 Days",
    popular: false,
    badge: "99.9% Uptime",
    technologies: ["AWS", "Google Cloud", "Docker", "Nginx", "Cloudflare", "GitHub Actions"],
    features: [
      "AWS / GCP / DigitalOcean server provision & hardening",
      "Docker containerization & docker-compose orchestration",
      "Automated CI/CD git push to live deployment",
      "Cloudflare CDN, DDoS mitigation & SSL installation",
      "Automated daily database snapshots to S3",
      "24/7 uptime monitoring with instant alert triggers"
    ],
    exampleSnippet: "Production server setup, Auto-scaling clusters, Microservices hosting"
  }
];

export const redPdfProduct = {
  name: "RedPDF - Image to PDF & Fast PDF Maker",
  tagline: "Ultra-fast, 100% Offline & Private Image to PDF Converter for Android",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.legendarysoftware.redpdf.imagetopdf&hl=en_IN",
  packageName: "com.legendarysoftware.redpdf.imagetopdf",
  developer: "Omnigrain Tech / Legendary Software",
  rating: "4.8",
  reviewCount: "12,500+",
  downloads: "100,000+",
  category: "Productivity / Document Utility",
  pricing: "Free to Download",
  badge: "Featured In-House Product",
  overview: "RedPDF is our flagship document utility app trusted by over 100,000+ Android users worldwide. Engineered by Omnigrain Tech LLP with an offline-first architecture, it ensures maximum privacy—no documents or sensitive files ever leave the user's smartphone.",
  highlights: [
    {
      title: "100% Offline & Privacy First",
      desc: "All image-to-PDF processing happens directly on device. No internet required; zero document leaks.",
      icon: "ShieldCheck"
    },
    {
      title: "Smart Camera Document Scan",
      desc: "Built-in intelligent scanner with automated edge detection, perspective correction, and auto-filters.",
      icon: "Scan"
    },
    {
      title: "Batch Image Conversion",
      desc: "Import dozens of JPG, PNG, or WEBP photos simultaneously and combine them into a single crisp PDF in seconds.",
      icon: "Files"
    },
    {
      title: "Military-Grade Password Locking",
      desc: "Protect sensitive business bills, contracts, and medical records with robust password encryption.",
      icon: "Lock"
    },
    {
      title: "Smart Size Compressor",
      desc: "Reduce heavy 50MB image batches to under 2MB PDFs without compromising clarity or legible text.",
      icon: "Minimize2"
    },
    {
      title: "One-Tap Instant Sharing",
      desc: "Share directly to WhatsApp, Gmail, Bluetooth, Google Drive, or print directly via wireless printers.",
      icon: "Share2"
    }
  ],
  techStack: ["Android SDK", "Kotlin", "C++ PDFium Rendering Engine", "Material You Design", "SQLite", "CameraX API"]
};

export const pricingPlans = [
  {
    id: "starter",
    name: "Starter / Web Launchpad",
    badge: "Quick Launch",
    description: "Perfect for local businesses, professionals, and product launches seeking a fast, high-converting presence.",
    priceINR: 9999,
    priceUSD: 149,
    isPopular: false,
    deliveryTime: "3 - 7 Days",
    features: [
      "Custom responsive 1 to 5-page modern website",
      "100% mobile, tablet & desktop optimized",
      "High-converting lead capture form",
      "Direct WhatsApp chat integration",
      "Google Maps, SEO tags & Schema markup",
      "Speed optimized (sub-1 second load time)",
      "Free 30-day post-launch support",
      "Full source code ownership"
    ],
    ctaText: "Launch Starter Website"
  },
  {
    id: "growth",
    name: "Growth / Full Mobile or SaaS",
    badge: "Most Popular",
    description: "Designed for ambitious startups and businesses needing a full-fledged Mobile App (Android/iOS) or SaaS Web Platform.",
    priceINR: 34999,
    priceUSD: 499,
    isPopular: true,
    deliveryTime: "2 - 4 Weeks",
    features: [
      "Complete Mobile App (Android & iOS) OR Custom SaaS",
      "Interactive modern UI/UX design (Figma provided)",
      "Backend API development & database architecture",
      "User authentication (Email, OTP, Google Login)",
      "Payment gateway integration (Stripe / Razorpay)",
      "Admin CMS dashboard for managing users & content",
      "Google Play & Apple App Store submission",
      "3 Months priority maintenance & bug warranty"
    ],
    ctaText: "Build My App / SaaS"
  },
  {
    id: "enterprise",
    name: "Enterprise / Billing & ERP",
    badge: "High Performance",
    description: "Tailored for retail chains, manufacturing, and growing enterprises requiring custom Billing, POS & automation.",
    priceINR: 49999,
    priceUSD: 699,
    isPopular: false,
    deliveryTime: "3 - 6 Weeks",
    features: [
      "Complete Custom Billing & POS Software system",
      "GST / VAT compliant invoicing engine",
      "Barcode & thermal printer hardware integration",
      "Multi-branch, multi-warehouse inventory sync",
      "Customer ledger (Khata) & auto WhatsApp alerts",
      "Cloud database with automated encrypted backups",
      "Custom role-based permissions & audit logging",
      "6 Months dedicated support & feature updates"
    ],
    ctaText: "Request Enterprise Quote"
  }
];

export const clientReviews = [
  {
    name: "Rajesh Sharma",
    role: "Founder & Managing Director",
    company: "Apex Retail Mart & Wholesale",
    project: "Custom GST Billing & Inventory Software",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    text: "Omnigrain Tech LLP built our custom wholesale billing software from scratch. Previously, monthly subscriptions of generic ERPs were killing our margins and slow barcode scanning created customer queues. Their custom solution is lightning fast, prints bills in under a second, and auto-sends PDFs to our retailers over WhatsApp. Worth every single rupee!"
  },
  {
    name: "Sarah Jenkins",
    role: "Product Lead",
    company: "NovaHealth Tech (UK)",
    project: "Cross-Platform Mobile App (iOS & Android)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    text: "We hired Omnigrain Tech for our cross-platform patient booking application. The UI is silky smooth at 60fps, push notifications are instant, and their engineers cleared Apple App Store review on the first submission without any rejections. Very disciplined, communicative, and transparent team."
  },
  {
    name: "Amitabh Verma",
    role: "Co-Founder & CEO",
    company: "KisanTrade Agro Logistics",
    project: "Web App & Backend API Architecture",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    text: "Their backend and database design saved our peak harvest season. We were hitting database connection limits with our old agency. Omnigrain redesigned our PostgreSQL schemas, implemented Redis caching, and built clean REST APIs. Server costs dropped by 40% while handling 5x more concurrent farmers."
  },
  {
    name: "Pooja Malhotra",
    role: "Director of Marketing",
    company: "LuxeLiving Interior Hub",
    project: "High-Converting Landing Page & Lead Engine",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    text: "We ran Meta and Google search ads to our new website built by Omnigrain Tech LLP. Our conversion rate jumped from 2.1% to 6.8%! The website loads in less than 800 milliseconds and the WhatsApp direct quote button generates inbound qualified leads daily."
  },
  {
    name: "Vikram Singhania",
    role: "Head of Operations",
    company: "SwiftLogistics Express",
    project: "Driver & Dispatch Mobile Apps",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    text: "What sets Omnigrain Tech apart is their integrity. They gave us complete source code ownership, clean documentation, and never tried to trap us in hidden recurring maintenance fees. Their milestone payment structure gave us total confidence."
  }
];

export const clientLogos = [
  { name: "Apex Retail Mart", label: "Retail & Wholesale" },
  { name: "NovaHealth", label: "HealthTech UK" },
  { name: "KisanTrade", label: "AgroTech Logistics" },
  { name: "LuxeLiving", label: "E-Commerce" },
  { name: "SwiftLogistics", label: "Fleet & Transport" },
  { name: "PayShield Tech", label: "Fintech & POS" },
  { name: "EduVantage Pro", label: "EdTech Learning" },
  { name: "MediCore Lab", label: "Healthcare Labs" }
];

export const whyChooseUs = [
  {
    title: "100% Source Code Ownership",
    desc: "You own all code, repositories, databases, and IP from day one. No vendor lock-in, no hostage code.",
    icon: "Code2"
  },
  {
    title: "Agile Sprints & Fast Delivery",
    desc: "We deploy working prototypes within 7 days and full production builds in 2 to 4 weeks using weekly milestone demos.",
    icon: "Zap"
  },
  {
    title: "Direct Senior Engineer Access",
    desc: "No middlemen account managers playing telephone. You communicate directly with the senior developers building your software.",
    icon: "Users"
  },
  {
    title: "Ironclad Mutual NDA",
    desc: "Your product ideas, business logic, customer data, and trade secrets remain strictly confidential under legal NDAs.",
    icon: "ShieldAlert"
  },
  {
    title: "Milestone-Based Payments",
    desc: "Pay strictly as milestones are delivered and approved by you. Zero financial risk with clear transparent invoicing.",
    icon: "CheckCircle"
  },
  {
    title: "Post-Launch Warranty & Support",
    desc: "Every project comes with free bug-fixing support, server monitoring, and guaranteed handover training.",
    icon: "Headphones"
  }
];

export const faqs = [
  {
    q: "How does the pricing work and are there any hidden fees?",
    a: "Our pricing is 100% transparent. We provide itemized quotes starting at minimum prices (e.g., ₹9,999 for landing pages, ₹19,999 for custom billing software, ₹34,999 for full mobile apps). There are zero hidden fees, and payments are split into milestone-based stages (e.g., 30% kickoff, 40% demo milestone, 30% final handover)."
  },
  {
    q: "Do I get full ownership of the source code and database?",
    a: "Yes, absolutely 100%. Upon final milestone completion, all source code repositories (GitHub/GitLab), database credentials, API keys, and deployment credentials are fully transferred to you. You have full intellectual property rights with zero vendor lock-in."
  },
  {
    q: "Can you build custom Billing Software with barcode scanner and printer support?",
    a: "Yes! In fact, custom Billing & POS Software is one of our most requested specializations. We build systems that support 2-inch and 3-inch thermal receipt printers, laser A4 GST invoices, handheld wireless barcode scanners, customer ledger management, and automatic WhatsApp invoice dispatch."
  },
  {
    q: "How long will it take to build and launch my mobile app or web platform?",
    a: "High-converting websites and landing pages take 3 to 7 days. Standard custom web applications and billing software take 1 to 3 weeks. Comprehensive mobile apps (Android & iOS) typically take 2 to 4 weeks depending on the complexity of features and integrations."
  },
  {
    q: "Will you help upload and approve our app on Google Play and Apple App Store?",
    a: "Yes. We take full responsibility for generating signed release builds, configuring app permissions, creating screenshot assets, filling out data safety forms, and submitting to the Google Play Console and Apple App Store Connect until your app is live."
  },
  {
    q: "How do we get started today?",
    a: "Simply click 'Get Instant Quote' or message us directly on WhatsApp (+91 98765 43210). We will review your requirements, schedule a free 30-minute discovery call, and provide a detailed scope of work and fixed-price quotation within 24 hours."
  }
];
