// ==========================================================================
// SALMA KHAMIS - PORTFOLIO DATABASE & LOCALIZATION
// Full-Stack Web Developer | National Gold Medalist | Tech Instructor
// ==========================================================================

const PORTFOLIO_DATA = {
  profile: {
    name: "Salma Khamis",
    role: "Senior Full-Stack Web Developer",
    title_badge: "🏆 WorldSkills National Champion",
    location: "6th of October City, Egypt",
    phone: "+20 127 567 5202",
    email: "salmakhamis782@gmail.com",
    linkedin: "https://linkedin.com/in/salma-khamis-684a45249",
    github: "https://github.com/salmakhamis782",
    summary_en: "5+ years building 21 responsive web platforms, RESTful APIs, and custom admin dashboards in React.js, Angular, Node.js, and PHP/Laravel across Egypt and the Gulf. WorldSkills Egypt Gold Medalist & Tech Instructor."
  },

  engineeringMetrics: [
    { name: "Front-End Engineering", name_ar: "هندسة الواجهات الأمامية", value: 98, icon: "palette" },
    { name: "Back-End & API Architecture", name_ar: "هندسة السيرفر والـ APIs", value: 95, icon: "server" },
    { name: "Relational Database Design", name_ar: "تصميم قواعد البيانات العلائقية", value: 92, icon: "database" },
    { name: "System Architecture & Security", name_ar: "معمارية الأنظمة والأمان", value: 94, icon: "cpu" },
    { name: "Technical Instruction & Leadership", name_ar: "القيادة والتدريب الهندسي", value: 96, icon: "award" }
  ],

  motivationalQuotes: [
    { en: "\"Architecting reliable, high-performance web applications with clean code and precision.\"", ar: "\"هندسة تطبيقات ويب موثوقة وعالية الأداء بكود نظيف ودقة متناهية.\"" },
    { en: "\"National Gold Champion standards: engineered for speed, scalability, and seamless user experience.\"", ar: "\"معايير بطلة الجمهورية الذهبية: سرعة فائقة، قابلية للتوسع، وتجربة مستخدم سلسة.\"" },
    { en: "\"5+ years translating complex business workflows into elegant, intuitive digital platforms.\"", ar: "\"أكثر من 5 سنوات في تحويل العمليات التجارية المعقدة إلى منصات رقمية أنيقة وسهلة الاستخدام.\"" },
    { en: "\"From self-charging smart IoT vehicles to mission-critical enterprise portals.\"", ar: "\"من المركبات الذكية ذاتية الشحن بإنترنت الأشياء إلى البوابات المؤسسية الحيوية.\"" }
  ],

  fullStackPillars: [
    {
      id: "frontend-ui",
      layer: "LAYER 01 · CLIENT & UI",
      layer_ar: "الطبقة ٠١ · الواجهات وتجربة المستخدم",
      icon: "⚛️",
      color1: "#2563eb",
      color2: "#38bdf8",
      title: "Frontend Architecture & Motion UI",
      title_ar: "هندسة الواجهات الأمامية والتفاعلية",
      desc: "Pixel-perfect, mobile-first interfaces built with React.js, Angular, and modern ES6+. Engineered for <1.1s load times, native RTL/LTR bilingual switching, and accessible micro-interactions.",
      desc_ar: "واجهات متجاوبة فائقة الدقة مبنية بـ React.js وAngular وES6+ بسرعة تحميل أقل من 1.1 ثانية ودعم أصيل للغتين العربية والإنجليزية (RTL/LTR).",
      tags: ["React.js", "Angular", "JavaScript ES6+", "Tailwind / CSS3", "Bilingual RTL/LTR"]
    },
    {
      id: "backend-api",
      layer: "LAYER 02 · SERVER & CORE LOGIC",
      layer_ar: "الطبقة ٠٢ · السيرفر والـ APIs",
      icon: "⚙️",
      color1: "#1d4ed8",
      color2: "#60a5fa",
      title: "Backend Systems & RESTful APIs",
      title_ar: "أنظمة الـ Backend وبناء الـ APIs",
      desc: "Scalable server architectures powered by PHP (Laravel & Core OOP) and Node.js. Complete with granular Role-Based Access Control (RBAC), secure session auditing, and third-party integrations.",
      desc_ar: "معمارية خوادم قابلة للتوسع باستخدام PHP/Laravel وNode.js مع أنظمة صلاحيات دقيقة (RBAC) وتدقيق أمني للجلسات وتكامل سلس مع الخدمات الخارجية.",
      tags: ["PHP / Laravel", "Node.js", "RESTful APIs", "RBAC Security", "OOP Architecture"]
    },
    {
      id: "database-cms",
      layer: "LAYER 03 · DATA & CUSTOM CMS",
      layer_ar: "الطبقة ٠٣ · قواعد البيانات ولوحات التحكم",
      icon: "🗄️",
      color1: "#0284c7",
      color2: "#22d3ee",
      title: "Database Design & Bespoke CMS Suites",
      title_ar: "قواعد البيانات ولوحات التحكم المخصصة",
      desc: "High-concurrency MySQL & MongoDB schemas paired with tailor-made Admin Dashboards that empower non-technical teams to manage listings, leads, media, and certificates autonomously.",
      desc_ar: "قواعد بيانات MySQL وMongoDB عالية الأداء مع لوحات تحكم إدارية مخصصة تمكّن الشركات من إدارة العقارات، العملاء، الشهادات، والمحتوى باستقلالية تامة.",
      tags: ["MySQL", "MongoDB", "Custom Admin CMS", "Query Tuning", "Lead Engines"]
    },
    {
      id: "iot-leadership",
      layer: "LAYER 04 · IOT, CLOUD & MENTORSHIP",
      layer_ar: "الطبقة ٠٤ · إنترنت الأشياء والقيادة التقنية",
      icon: "🚀",
      color1: "#38bdf8",
      color2: "#1e40af",
      title: "IoT Telemetry, SEO & Tech Leadership",
      title_ar: "إنترنت الأشياء، الـ SEO والقيادة التقنية",
      desc: "Bridging software and hardware with Arduino/IoT web telemetry (smart solar & autonomous vehicles), leading engineering teams, and mentoring hundreds of full-stack bootcamp developers.",
      desc_ar: "ربط البرمجيات بالأجهزة الذكية (IoT/Arduino)، قيادة الفرق الهندسية، وتدريس معسكرات تطوير الويب المتكامل لأجيال جديدة من المبرمجين.",
      tags: ["WorldSkills Gold", "IoT & Arduino", "Tech Instructor", "SEO Architecture", "Team Lead"]
    }
  ],

  skillCategories: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      title_ar: "هندسة الواجهات الأمامية",
      icon: "layout",
      skills: [
        { name: "React.js", level: "Expert", xp: 95, color: "#61dafb" },
        { name: "JavaScript (ES6+)", level: "Master", xp: 98, color: "#f7df1e" },
        { name: "Angular", level: "Advanced", xp: 88, color: "#dd1b16" },
        { name: "HTML5 / CSS3", level: "Master", xp: 100, color: "#e34f26" },
        { name: "Bootstrap / Tailwind", level: "Expert", xp: 95, color: "#7952b3" },
        { name: "Responsive & Mobile-First", level: "Master", xp: 98, color: "#06b6d4" },
        { name: "Cross-Browser Compatibility", level: "Expert", xp: 96, color: "#f59e0b" }
      ]
    },
    {
      id: "backend",
      title: "Backend & API Architecture",
      title_ar: "هندسة الخوادم والـ APIs",
      icon: "terminal",
      skills: [
        { name: "PHP (Laravel / Core)", level: "Master", xp: 96, color: "#777bb4" },
        { name: "Node.js", level: "Advanced", xp: 90, color: "#68a063" },
        { name: "RESTful API Integration", level: "Master", xp: 98, color: "#ec4899" },
        { name: "OOP Architecture", level: "Master", xp: 95, color: "#8b5cf6" },
        { name: "Authentication & RBAC", level: "Expert", xp: 96, color: "#ef4444" },
        { name: "Python", level: "Advanced", xp: 88, color: "#3776ab" },
        { name: "C++", level: "Intermediate", xp: 80, color: "#00599c" }
      ]
    },
    {
      id: "database",
      title: "Databases & Schemas",
      title_ar: "قواعد البيانات والهيكلة",
      icon: "database",
      skills: [
        { name: "MySQL", level: "Master", xp: 95, color: "#00758f" },
        { name: "MongoDB", level: "Advanced", xp: 88, color: "#47a248" },
        { name: "Relational Schema Design", level: "Expert", xp: 94, color: "#0ea5e9" },
        { name: "Query Optimization", level: "Expert", xp: 92, color: "#14b8a6" },
        { name: "SQL", level: "Master", xp: 95, color: "#f97316" }
      ]
    },
    {
      id: "tools",
      title: "DevOps, Tools & Systems",
      title_ar: "الأدوات والأنظمة وإنترنت الأشياء",
      icon: "tool",
      skills: [
        { name: "Git & GitHub", level: "Proficient", xp: 96, color: "#f05032" },
        { name: "Custom Admin Dashboards & CMS", level: "Expert", xp: 100, color: "#a855f7" },
        { name: "SEO Optimization", level: "Expert", xp: 92, color: "#22c55e" },
        { name: "Web Performance Optimization", level: "Expert", xp: 96, color: "#eab308" },
        { name: "IoT & Arduino (SERA)", level: "Advanced", xp: 88, color: "#00979d" },
        { name: "Security & Access Systems", level: "Certified", xp: 85, color: "#6366f1" },
        { name: "Networking (CCNA / CCNP)", level: "Certified", xp: 82, color: "#3b82f6" }
      ]
    }
  ],

  achievements: [
    {
      id: "gold-worldskills",
      tier: "National Gold",
      year: "2022",
      title: "WorldSkills Egypt — Web Development",
      award: "1st Place, Gold Medal (National Champion)",
      icon: "🥇",
      color: "gold",
      desc_en: "Awarded 1st place and national gold medal across Egypt for outstanding web development speed, semantic precision, and architectural mastery."
    },
    {
      id: "silver-worldskills",
      tier: "National Silver",
      year: "2023",
      title: "WorldSkills Egypt — Software Solutions for Business",
      award: "2nd Place, Silver Medal",
      icon: "🥈",
      color: "silver",
      desc_en: "Secured 2nd place nationwide, designing enterprise-grade software architecture, data modeling, and business logic solutions under rigorous time constraints."
    },
    {
      id: "robocup-1st",
      tier: "1st Place Champion",
      year: "2023",
      title: "RoboCup Junior Egypt",
      award: "1st Place, Super Team Champion",
      icon: "🏆",
      color: "cyan",
      desc_en: "Championed the national robotics tournament leading the super team in real-time robotic coordination and autonomous logic."
    },
    {
      id: "unesco-silver",
      tier: "International Finalist",
      year: "International",
      title: "UNESCO International Competition",
      award: "Silver Medal (Final Stage Qualifier)",
      icon: "🌍",
      color: "purple",
      desc_en: "Represented innovative engineering internationally, securing a silver medal and qualifying directly to the global finals."
    },
    {
      id: "robot-challenge-5th",
      tier: "National Finalist",
      year: "2022",
      title: "Robot Challenge Egypt",
      award: "5th Place National Standing",
      icon: "🤖",
      color: "blue",
      desc_en: "Engineered autonomous robotics hardware & control firmware, achieving top 5 ranking in national competition."
    },
    {
      id: "robocup-2022",
      tier: "National Finalist",
      year: "2022",
      title: "RoboCup Junior Egypt 2022",
      award: "12th Place Finalist",
      icon: "⚡",
      color: "emerald",
      desc_en: "Advanced algorithm design for autonomous competitive robotic systems."
    },
    {
      id: "science-conf",
      tier: "Research Showcase",
      year: "Academic",
      title: "9th Student Conference for Science and Innovations",
      award: "Qualified Participant & Research Showcase",
      icon: "📜",
      color: "violet",
      desc_en: "Selected participant presenting technological innovations in embedded systems and software platforms."
    }
  ],

  projects: [
    {
      id: "vira-real-estate",
      title: "VIRA Real Estate",
      subtitle: "VIRA Grandeur — Luxury Master Community & Private Villas Platform",
      subtitle_ar: "منصة فيرا العقارية — مشروع VIRA Grandeur للفيلات الفاخرة",
      result_en: "Result: Delivered <1.1s load time with interactive installment calculator and automated lead routing.",
      result_ar: "النتيجة: سرعة تحميل أقل من ١.١ ثانية مع حاسبة أقساط تفاعلية وتوجيه تلقائي للعملاء.",
      year: "2026",
      category: "realestate",
      visualTheme: "architecture",
      url: "https://vira-egy.com",
      urlDisplay: "vira-egy.com",
      tags: ["HTML5 / CSS3", "JavaScript ES6+", "Installments Calculator", "Interactive Masterplan", "Lead Engine", "Responsive UI"],
      badge: "Live Production",
      desc_en: "Flagship luxury real estate web platform for VIRA Grandeur master community. Features curated signature standalone villas, twin homes, lake residences, interactive installment payment calculator, visual masterplan showcase, and high-conversion client registration inquiry routing.",
      desc_ar: "المنصة الرقمية الفاخرة لشركة فيرا العقارية ومشروع VIRA Grandeur، تشمل استعراض الفيلات والوحدات الفاخرة، حاسبة الأقساط التفاعلية، ومعرض المخطط العام مع نظام تسجيل بيانات العملاء المتطور.",
      metrics: "<1.1s Load Time • Interactive Installments Calculator • High-Conversion Leads"
    },
    {
      id: "x-vision",
      title: "X-Vision",
      subtitle: "Security Systems Company Web Platform",
      subtitle_ar: "منصة شركة أنظمة الأمان المتطورة",
      result_en: "Result: Shipped bilingual RTL/LTR platform (<1.2s load) with an automated quote-request engine.",
      result_ar: "النتيجة: إطلاق منصة ثنائية اللغة (RTL/LTR) بسرعة <١.٢ ثانية ومحرك عروض أسعار ذكي.",
      year: "2026",
      category: "fullstack",
      visualTheme: "security",
      url: "https://x-vision-eg.com",
      urlDisplay: "x-vision-eg.com",
      tags: ["PHP", "MySQL", "JavaScript", "Bilingual RTL/LTR", "Quote Engine"],
      badge: "Commercial Live",
      desc_en: "Bilingual (Arabic/English) enterprise platform for a security-systems provider featuring service showcases, interactive project galleries, brand portfolios, and an intelligent quote-request quotation engine.",
      desc_ar: "منصة متكاملة ثنائية اللغة (عربي/إنجليزي) لمزود أنظمة أمان، تشتمل على استعراض الخدمات والمشاريع والعلامات التجارية ونظام طلب عروض الأسعار الذكي.",
      metrics: "Dual-language RTL/LTR • <1.2s Page Load • Integrated Leads"
    },
    {
      id: "peta-core",
      title: "Peta Core",
      subtitle: "IT Support & Role-Based Client Portal",
      subtitle_ar: "بوابة الدعم الفني وإدارة العملاء بالصلاحيات",
      result_en: "Result: Built role-based (RBAC) ticketing and SLA tracking portal for staff and enterprise clients.",
      result_ar: "النتيجة: بناء بوابة تذاكر دعم فني بصلاحيات (RBAC) وتتبع اتفاقيات مستوى الخدمة (SLA).",
      year: "2026",
      category: "laravel",
      visualTheme: "cloud",
      url: "https://support.peta-core.com",
      urlDisplay: "support.peta-core.com",
      tags: ["Laravel", "PHP", "MySQL", "RBAC Auth", "Ticketing Engine"],
      badge: "SaaS Portal",
      desc_en: "Mission-critical IT-services support portal featuring granular role-based authentication for staff and clients, ticket lifecycles, automated notifications, SLA tracking, and resolution workflows.",
      desc_ar: "بوابة دعم فني حيوية لخدمات تكنولوجيا المعلومات، تتميز بنظام صلاحيات دقيق للموظفين والعملاء وتتبع التذاكر ومراقبة اتفاقيات مستوى الخدمة (SLA)."
    },
    {
      id: "the-road-trading",
      title: "The Road Trading",
      subtitle: "Corporate Commercial Trading Platform",
      subtitle_ar: "موقع شركة التجارة والتوريدات",
      result_en: "Result: Engineered SEO-optimized mobile-first product catalog and B2B inquiry routing.",
      result_ar: "النتيجة: تطوير كتالوج منتجات متجاوب ومهيأ لمحركات البحث (SEO) مع توجيه طلبات الشركات.",
      year: "2026",
      category: "corporate",
      visualTheme: "corporate",
      url: "https://theroadtrading.com",
      urlDisplay: "theroadtrading.com",
      tags: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive UI"],
      badge: "High SEO",
      desc_en: "High-performance responsive business website featuring dynamic service/product presentations, mobile-first fluid architecture, semantic SEO optimization, and secure inquiry routing.",
      desc_ar: "موقع تجاري متجاوب فائق الأداء بعرض تفاعلي للمنتجات والخدمات، وتصميم يدعم الهواتف أولاً وتهيئة كاملة لمحركات البحث."
    },
    {
      id: "halo-haloid",
      title: "Halo (Haloid)",
      subtitle: "Corporate Enterprise Portfolio",
      subtitle_ar: "الموقع التعريفي لشركة هالو العالمية",
      result_en: "Result: Delivered cross-browser corporate platform with modular PHP/MySQL backend services.",
      result_ar: "النتيجة: تسليم منصة مؤسسية متوافقة مع كافة المتصفحات بخدمات خلفية معيارية بـ PHP/MySQL.",
      year: "2026",
      category: "corporate",
      visualTheme: "corporate",
      url: "https://haloidco.com",
      urlDisplay: "haloidco.com",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Cross-Browser"],
      badge: "Corporate",
      desc_en: "Corporate digital experience with dynamic micro-interactions, engineered for uncompromising cross-browser rendering, blazing load times, and modular back-end services.",
      desc_ar: "منصة رقمية مؤسسية بتفاعلات حركية متقدمة، مصممة للتوافق التام مع كافة المتصفحات وسرعة تحميل فائقة وبنية برمجية معيارية."
    },
    {
      id: "helm-al-maskan",
      title: "Helm Al Maskan",
      subtitle: "Dynamic Real Estate Platform",
      subtitle_ar: "منصة حلم المسكن العقارية التفاعلية",
      result_en: "Result: Built multi-attribute faceted property search and real-time listing filtering in PHP/MySQL.",
      result_ar: "النتيجة: بناء محرك بحث عقاري متعدد الفلاتر واستعراض فوري للوحدات بـ PHP وMySQL.",
      year: "2026",
      category: "realestate",
      visualTheme: "architecture",
      url: "https://helmalmaskan.com",
      urlDisplay: "helmalmaskan.com",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Faceted Search"],
      badge: "Real Estate",
      desc_en: "Feature-rich real estate portal with real-time property listings, multi-attribute faceted filtering, map integration, and performance-tuned reusable component architecture.",
      desc_ar: "منصة عقارية متكاملة مع قوائم عقارات حية، فلترة متعددة المعايير، مكونات برمجية قابلة لإعادة الاستخدام، وسرعة بحث فائقة."
    },
    {
      id: "premier-egypt",
      title: "Premier Egypt",
      subtitle: "Corporate Platform & Custom CMS",
      subtitle_ar: "منصة بريمير مصر ولوحة التحكم المخصصة",
      result_en: "Result: Replaced manual updates with a bespoke CMS so non-technical staff manage content autonomously.",
      result_ar: "النتيجة: تمكين فريق الإدارة من تحديث المحتوى والوسائط والرسائل ذاتياً عبر لوحة تحكم مخصصة.",
      year: "2026",
      category: "corporate",
      url: "https://premieregy.net",
      urlDisplay: "premieregy.net",
      tags: ["PHP", "JavaScript", "Custom CMS", "Admin Dashboard", "SEO"],
      badge: "Custom CMS",
      desc_en: "Corporate portal featuring a tailor-made custom admin dashboard empowering non-technical administrators to manage content, media, service offerings, and contact inquiries independently.",
      desc_ar: "موقع مؤسسي مع لوحة تحكم مخصصة تتيح للإدارة التحكم الكامل بالمحتوى والخدمات والوسائط ورسائل التواصل بكل سهولة واستقلالية."
    },
    {
      id: "akwad-real-estate",
      title: "Akwad Real Estate",
      subtitle: "Corporate Property Hub & Admin Suite",
      subtitle_ar: "منصة أكواد العقارية مع جناح إدارة المشروعات",
      result_en: "Result: Engineered centralized property management hub and automated sales inquiry assignment.",
      result_ar: "النتيجة: تطوير نظام مركزي لإدارة المشروعات العقارية وتوزيع استفسارات المبيعات تلقائياً.",
      year: "2026",
      category: "realestate",
      url: "",
      urlDisplay: "Akwad Platform",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Admin Suite"],
      badge: "Admin Suite",
      desc_en: "High-capacity property management system enabling comprehensive project showcases, lead management, automated inquiry assignments, and SEO-engineered layout structures.",
      desc_ar: "نظام متكامل لإدارة العقارات والمشاريع والعملاء المحتملين وتوزيع الاستفسارات على هيكلية برمجية مهيأة لمحركات البحث."
    },
    {
      id: "upscale-egypt",
      title: "Upscale Egypt",
      subtitle: "Media-Rich Luxury Real Estate Platform",
      subtitle_ar: "منصة أب سكيل مصر للعقارات الفاخرة",
      result_en: "Result: Optimized high-res floor plan galleries with lazy loading and custom listing CMS.",
      result_ar: "النتيجة: تحسين سرعة معارض المخططات عالية الدقة مع لوحة تحكم مخصصة للعقارات الفاخرة.",
      year: "2025 - Present",
      category: "realestate",
      visualTheme: "architecture",
      url: "https://upscalegy.com",
      urlDisplay: "upscalegy.com",
      tags: ["HTML5", "CSS3", "JavaScript", "Custom Dashboard", "Image Optimization"],
      badge: "Luxury Portal",
      desc_en: "Media-heavy real estate portal featuring an advanced admin dashboard for listings, high-resolution project galleries with lazy-loading performance optimization, and interactive floor plans.",
      desc_ar: "منصة عقارات راقية مع لوحة تحكم شاملة للقوائم ومعارض الصور عالية الدقة المحسنة للأداء والسرعة ومخططات الطوابق التفاعلية."
    },
    {
      id: "saudi-ems",
      title: "Saudi EMS (Journey of Life Center)",
      subtitle: "Medical Training Platform & LMS (KSA)",
      subtitle_ar: "منصة التدريب الطبي السعودي (مركز رحلة حياة)",
      result_en: "Result: Shipped bilingual KSA medical LMS with course booking, enrollment, and certificate generation.",
      result_ar: "النتيجة: إطلاق منصة تدريب طبي سعودية ثنائية اللغة لحجز الدورات وإصدار الشهادات المعتمدة.",
      year: "2025",
      category: "fullstack",
      visualTheme: "medical",
      url: "https://lnkd.in/p/eUiftza7",
      urlDisplay: "KSA Medical Platform",
      tags: ["Bilingual RTL/LTR", "Native JS", "Admin CMS", "Enrollment Engine", "Certificates"],
      badge: "Bilingual LMS",
      desc_en: "Bilingual (Arabic/English) healthcare training platform for Saudi Arabia with native data-ar/data-en RTL/LTR system, complete course booking, trainee enrollment, order tracking, and certificate generation.",
      desc_ar: "منصة تدريب طبي ثنائية اللغة للمملكة العربية السعودية بنظام RTL/LTR متكامل، حجز الدورات، تسجيل المتدربين، إدارة الطلبات وإصدار الشهادات المعتمدة."
    },
    {
      id: "ashmand",
      title: "Ashmand",
      subtitle: "Full-Stack Web Application Suite",
      subtitle_ar: "تطبيق آشماند المتكامل للبيانات الحية",
      result_en: "Result: Built full-stack PHP/MySQL application with real-time state sync and role authentication.",
      result_ar: "النتيجة: بناء تطبيق ويب متكامل بمزامنة فورية للبيانات وتوثيق أمني للمستخدمين.",
      year: "2025",
      category: "fullstack",
      visualTheme: "cloud",
      url: "",
      urlDisplay: "Enterprise App",
      tags: ["Full-Stack", "PHP", "MySQL", "Real-Time Updates", "Auth"],
      badge: "Full-Stack App",
      desc_en: "End-to-end platform architecture with secure user authentication, real-time database state synchronization, comprehensive administrative panel, and structured relational queries.",
      desc_ar: "تطبيق ويب متكامل مع توثيق أمني للمستخدمين وتحديثات بيانات فورية ولوحة تحكم إدارية شاملة وقواعد بيانات علائقية متقدمة."
    },
    {
      id: "al-arabyia",
      title: "Al-Arabyia for Constructions",
      subtitle: "Engineering Portfolio & Clean URL CMS",
      subtitle_ar: "منصة العربية للإنشاءات الهندسية",
      result_en: "Result: Structured clean SEO URL routing and modular case-study CMS for construction projects.",
      result_ar: "النتيجة: هيكلة روابط SEO نظيفة ولوحة إدارة معيارية لدراسات المشاريع الهندسية.",
      year: "2025",
      category: "corporate",
      visualTheme: "architecture",
      url: "https://arabiya-egy.com",
      urlDisplay: "arabiya-egy.com",
      tags: ["PHP", "MySQL", "JavaScript", "Clean URLs", "Modular Architecture"],
      badge: "Engineering",
      desc_en: "Corporate construction portfolio featuring categorized engineering service silos, dynamic project case studies with clean SEO URLs, and an intuitive admin management portal.",
      desc_ar: "موقع شركة مقاولات كبرى يعرض الخدمات الهندسية ودراسات المشاريع بروابط نظيفة ولوحة تحكم معيارية سهلة الاستخدام."
    },
    {
      id: "solar-energy-iot",
      title: "Solar Energy Control System",
      subtitle: "IoT Smart Energy Automation Web Application",
      subtitle_ar: "نظام التحكم بالطاقة الشمسية الذكي (إنترنت الأشياء)",
      result_en: "Result: Automated solar-to-grid power switching via live Arduino telemetry and web control UI.",
      result_ar: "النتيجة: أتمتة التحويل بين الطاقة الشمسية والشبكة العامة عبر استشعار حي ولوحة تحكم ويب.",
      year: "2024",
      category: "iot",
      visualTheme: "solar",
      url: "",
      urlDisplay: "IoT Energy Portal",
      tags: ["IoT Web App", "Arduino/Hardware", "Solar Switching", "Real-time Telemetry"],
      badge: "IoT & Hardware",
      desc_en: "Supervised by a doctoral researcher in Turkey: remote telemetry and control of electrical systems with automatic switching between solar and grid power based on real-time battery status and consumption tracking.",
      desc_ar: "مشروع تخرج بإشراف باحث دكتوراه بتركيا: مراقبة وتحكم عن بُعد في الأجهزة الكهربائية مع تحويل تلقائي بين الطاقة الشمسية والشبكة العامة بناءً على حالة البطاريات والاستهلاك."
    },
    {
      id: "teratronics-react",
      title: "TeraTronics",
      subtitle: "Component-Based React Corporate Platform",
      subtitle_ar: "منصة تيرا ترونكس المبنية بتقنية React",
      result_en: "Result: Rebuilt legacy startup site into a modular React.js SPA with reusable UI components.",
      result_ar: "النتيجة: إعادة بناء موقع الشركة بالكامل إلى تطبيق React.js معياري سريع الاستجابة.",
      year: "2024",
      category: "frontend",
      visualTheme: "cloud",
      url: "https://teratronics.thepenguinlabs.com",
      urlDisplay: "teratronics.thepenguinlabs.com",
      tags: ["React.js", "JavaScript", "CSS3", "Component Architecture", "High Performance"],
      badge: "React SPA",
      desc_en: "Complete rebuild of the tech startup's corporate web application into a modular React.js architecture featuring reusable UI widgets, state-driven animations, and extreme client-side rendering speed.",
      desc_ar: "إعادة بناء كاملة لموقع الشركة الناشئة باستخدام React.js المعياري مع مكونات قابلة لإعادة الاستخدام وأداء فائق السرعة."
    },
    {
      id: "sera-vehicle",
      title: "SERA - Smart Self-Charging Vehicle",
      subtitle: "Autonomous Energy Harvesting & Embedded Logic",
      subtitle_ar: "مشروع مركبة سيرا ذاتية الشحن الذكية",
      result_en: "Result: Co-engineered embedded Arduino control logic and telemetry for kinetic energy harvesting.",
      result_ar: "النتيجة: تطوير برمجيات التحكم المدمجة والاستشعار لمركبة ذاتية الشحن بالطاقة الحركية.",
      year: "2021 - Present",
      category: "iot",
      visualTheme: "vehicle",
      url: "",
      urlDisplay: "Embedded Concept",
      tags: ["Embedded Systems", "IoT", "Arduino", "System Design", "Energy Innovation"],
      badge: "Deep Tech & IoT",
      desc_en: "Co-developing a revolutionary self-charging vehicle concept that harvests kinetic & environmental energy without external power grids, implementing embedded control logic and micro-controller telemetry.",
      desc_ar: "المشاركة في تطوير مفهوم مركبة ذاتية الشحن تستخلص طاقتها دون مصادر خارجية، مع برمجة منظومات التحكم المدمجة وأجهزة الاستشعار عبر الأردوينو."
    },
    {
      id: "egypt-covid-portal",
      title: "Egyptian Ministry of Health Portal",
      subtitle: "Public COVID-19 Results Retrieval Infrastructure",
      subtitle_ar: "بوابة نتائج الفحوصات - وزارة الصحة المصرية",
      result_en: "Result: Enabled high-traffic online COVID-19 test result lookups with fault-tolerant MySQL queries.",
      result_ar: "النتيجة: إتاحة الاستعلام الفوري الآمن عن نتائج فحوصات كورونا باعتمادية عالية لقواعد البيانات.",
      year: "2022",
      category: "fullstack",
      url: "",
      urlDisplay: "Public Sector",
      tags: ["PHP", "MySQL", "High Traffic", "Healthcare Security", "Public Portal"],
      badge: "Gov & Public Health",
      desc_en: "High-volume public-facing health portal enabling millions of citizens to securely retrieve COVID-19 medical test results online with rapid lookup times and database fault tolerance.",
      desc_ar: "بوابة وطنية واسعة النطاق أتاحت للمواطنين الاستعلام الآمن عن نتائج فحوصات كورونا بسرعة وموثوقية عالية وقواعد بيانات فائقة التحمل."
    },
    {
      id: "almokhtabar-lab",
      title: "Almokhtabar Laboratory Portal",
      subtitle: "Medical Test Results & Patient Dashboard",
      subtitle_ar: "بوابة نتائج التحاليل - معامل المختبر",
      result_en: "Result: Streamlined patient diagnostic report retrieval and clinical lab result publishing.",
      result_ar: "النتيجة: تسهيل حصول المرضى على تقارير التحاليل إلكترونياً مع لوحة نشر سريعة للأطباء.",
      year: "2021",
      category: "fullstack",
      url: "",
      urlDisplay: "Medical Laboratory",
      tags: ["PHP", "MySQL", "Medical Records", "Patient Portal"],
      badge: "Medical Portal",
      desc_en: "Secure medical results portal enabling patients to seamlessly access diagnostic test reports online, backed by a clinical staff dashboard for rapid result publishing.",
      desc_ar: "بوابة طبية تتيح للمرضى الوصول المباشر لنتائج التحاليل مع لوحة تحكم للأطباء والمختبر لنشر التقارير فورياً وبأمان."
    },
    {
      id: "sia-development",
      title: "Sia Development",
      subtitle: "Digital Marketing Agency Platform",
      subtitle_ar: "موقع وكالة سيا للتطوير والتسويق",
      result_en: "Result: Delivered responsive agency showcase and conversion-focused lead capture funnels.",
      result_ar: "النتيجة: إطلاق منصة تسويقية متجاوبة تركز على تحويل الزوار واستقطاب العملاء.",
      year: "2024",
      category: "corporate",
      url: "https://sia-business-development.com",
      urlDisplay: "sia-business-development.com",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP", "Responsive Design"],
      badge: "Agency Site",
      desc_en: "Fluid corporate platform for a business growth agency, structured with visual storytelling, responsive typography, and strategic call-to-actions.",
      desc_ar: "موقع حديث لوكالة تسويق وتطوير أعمال يتميز بسرد بصري جذاب وتصميم مرن متجاوب وتحويل فعال للعملاء."
    },
    {
      id: "elfire-security",
      title: "ElFire Security Systems",
      subtitle: "Fire & Safety Systems Dashboard",
      subtitle_ar: "موقع ولوحة تحكم شركة إل فاير لأنظمة مكافحة الحريق",
      result_en: "Result: Built custom admin CMS to manage enterprise firefighting contracts and safety catalogs.",
      result_ar: "النتيجة: بناء لوحة إدارة مخصصة لعقود ومشروعات أنظمة مكافحة الحريق والسلامة.",
      year: "2024",
      category: "corporate",
      url: "",
      urlDisplay: "Security Solutions",
      tags: ["PHP", "MySQL", "JavaScript", "Admin CMS", "Fire Alarms"],
      badge: "Industrial CMS",
      desc_en: "Corporate website and custom management suite for a firefighting and safety systems firm, managing enterprise contracts and project portfolios.",
      desc_ar: "موقع ولوحة إدارة متخصصة لأنظمة مكافحة الحريق والسلامة لإدارة العقود والمشروعات الصناعية."
    },
    {
      id: "fastfix-store",
      title: "FastFix Store",
      subtitle: "Electronics & Tech Services E-Commerce",
      subtitle_ar: "متجر فاست فيكس للإلكترونيات وخدمات الصيانة",
      result_en: "Result: Launched e-commerce store and inventory dashboard for spare parts and repair bookings.",
      result_ar: "النتيجة: إطلاق متجر إلكتروني ولوحة مخزون لإدارة قطع الغيار وطلبات الصيانة.",
      year: "2024",
      category: "ecommerce",
      url: "",
      urlDisplay: "E-Commerce Suite",
      tags: ["PHP", "Vanilla JavaScript", "MySQL", "Inventory Dashboard"],
      badge: "E-Commerce",
      desc_en: "Electronics e-commerce platform and administrative console managing catalog inventories, spare parts classifications, and repair services.",
      desc_ar: "منصة تجارة إلكترونية ولوحة إدارة شاملة لكتالوج المنتجات وقطع الغيار وطلبات الصيانة."
    },
    {
      id: "linkcu-auth",
      title: "LinkCu User Management",
      subtitle: "Multi-User Activity & Authentication Suite",
      subtitle_ar: "نظام لينك كيو لإدارة المستخدمين وسجلات النشاط",
      result_en: "Result: Engineered multi-user authentication suite with real-time session tracking and audit logs.",
      result_ar: "النتيجة: تطوير نظام مصادقة متعدد المستخدمين مع تتبع حي للجلسات وسجلات تدقيق أمنية.",
      year: "2023",
      category: "fullstack",
      url: "",
      urlDisplay: "Auth & Analytics",
      tags: ["PHP", "MySQL", "Audit Logging", "Session Security"],
      badge: "Security & Auth",
      desc_en: "Multi-user authentication engine featuring rigorous audit logging, session tracking, and an administrative telemetry console reporting real-time user lifecycle activity.",
      desc_ar: "محرك مصادقة متقدم متعدد المستخدمين مع سجلات تدقيق أمنية وتتبع للجلسات وتحليلات دقيقة لأنشطة الدخول والخروج."
    }
  ],

  experience: [
    {
      role: "Senior Full-Stack Web Developer",
      role_ar: "مطورة ويب متكاملة أولى",
      company: "Rudiq Marketing Agency",
      company_ar: "وكالة روديك للتسويق",
      location: "Cairo, Egypt",
      period: "Jan 2026 - Present",
      status: "CURRENT ROLE",
      icon: "rocket",
      badge: "Leadership & Architecture",
      points_en: [
        "Delivered 9+ production client platforms (real estate, corporate, and SaaS) from database schema to cloud deployment.",
        "Engineered custom role-based admin dashboards so non-technical client teams manage listings, media, and leads autonomously.",
        "Cut page load times from [X]s to <1.1s across flagship builds via semantic SEO, WebP asset pipelines, and query optimization."
      ],
      points_ar: [
        "تسليم أكثر من ٩ منصات ويب إنتاجية للعملاء (عقارات، شركات، وأنظمة SaaS) من تصميم قواعد البيانات حتى النشر.",
        "بناء لوحات تحكم إدارية مخصصة تمكّن فرق العمل من إدارة الوحدات والوسائط والعملاء المحتملين باستقلالية تامة.",
        "تقليص زمن تحميل الصفحات من [X] ثانية إلى أقل من ١.١ ثانية عبر تحسين الـ SEO وضغط الأصول واستعلامات قواعد البيانات."
      ]
    },
    {
      role: "Web Development Instructor",
      role_ar: "مدربة ومحاضرة تطوير الويب",
      company: "Raya Academy",
      company_ar: "أكاديمية راية",
      location: "Cairo, Egypt",
      period: "2025 - Present",
      status: "ACTIVE MENTOR",
      icon: "graduation-cap",
      badge: "Full-Stack Training",
      points_en: [
        "Trained [N+] students across hands-on full-stack bootcamps in HTML5, CSS3, ES6+, React.js, Node.js, and MongoDB.",
        "Guided cohorts to build and deploy complete database-driven production web applications from scratch."
      ],
      points_ar: [
        "تدريب [N+] طالب في معسكرات تطوير الويب المتكامل على HTML5 وCSS3 وJavaScript وReact.js وNode.js وMongoDB.",
        "إشراف عملي على بناء ونشر تطبيقات ويب كاملة مرتبطة بقواعد البيانات من الصفر."
      ]
    },
    {
      role: "Web Development Instructor",
      role_ar: "مدربة تطوير الويب",
      company: "Teaching Planet Academy",
      company_ar: "أكاديمية تيتشينج بلانيت",
      location: "Cairo, Egypt",
      period: "Jan 2025 - Present",
      status: "ACTIVE MENTOR",
      icon: "book-open",
      badge: "Industry Standards",
      points_en: [
        "Instructed [N+] trainees in responsive front-end and PHP/MySQL back-end web development.",
        "Standardized student Git workflows, debugging practices, and clean-code review checklists."
      ],
      points_ar: [
        "تدريب [N+] متدرب على تطوير الواجهات المتجاوبة والأنظمة الخلفية وقواعد البيانات.",
        "تأهيل الطلاب على سير عمل Git وتصحيح الأخطاء البرمجية ومعايير الكود النظيف."
      ]
    },
    {
      role: "IT Sales & Full-Stack Developer",
      role_ar: "مبيعات تكنولوجيا المعلومات ومطورة ويب",
      company: "Smart IT Group",
      company_ar: "مجموعة سمارت آي تي",
      location: "Giza, Egypt",
      period: "2025",
      status: "COMPLETED",
      icon: "briefcase",
      badge: "Tech & Client Strategy",
      points_en: [
        "Scoped and delivered tailored technical proposals and full-stack web solutions for enterprise clients.",
        "Led technical consultations and post-sale onboarding to align engineering deliverables with client KPIs."
      ],
      points_ar: [
        "إعداد وتنفيذ العروض التقنية وحلول الويب المتكاملة لعملاء الشركات.",
        "قيادة الاستشارات الهندسية ودعم ما بعد البيع لضمان توافق المخرجات البرمجية مع أهداف العملاء."
      ]
    },
    {
      role: "Back-End Developer Trainee",
      role_ar: "متدربة تطوير الخوادم وقواعد البيانات",
      company: "TAG Company for Software Solutions",
      company_ar: "شركة تاج للحلول البرمجية",
      location: "Cairo, Egypt",
      period: "Feb 2025",
      status: "COMPLETED",
      icon: "server",
      badge: "Node.js & MongoDB",
      points_en: [
        "Built modular Node.js and MongoDB REST APIs and optimized document queries during an intensive back-end residency."
      ],
      points_ar: [
        "بناء واجهات برمجية REST APIs باستخدام Node.js وMongoDB وتحسين أداء الاستعلامات."
      ]
    },
    {
      role: "Python Instructor",
      role_ar: "مدربة لغة بايثون",
      company: "One Way Academy",
      company_ar: "أكاديمية ون واي",
      location: "Cairo, Egypt",
      period: "Apr 2023",
      status: "COMPLETED",
      icon: "code",
      badge: "Python & Algorithms",
      points_en: [
        "Trained [N+] beginner developers in Python fundamentals, data structures, and algorithmic problem solving."
      ],
      points_ar: [
        "تدريب [N+] طالب على أساسيات بايثون وهياكل البيانات وحل المشكلات الخوارزمية."
      ]
    },
    {
      role: "Software Engineer",
      role_ar: "مهندسة برمجيات",
      company: "NetX",
      company_ar: "شركة نت إكس",
      location: "Cairo, Egypt",
      period: "Jan 2023",
      status: "COMPLETED",
      icon: "cpu",
      badge: "Systems & Web",
      points_en: [
        "Delivered full-stack web modules and third-party system integrations for commercial client applications."
      ],
      points_ar: [
        "تطوير وحدات تطبيقات الويب وتكامل الأنظمة البرمجية لمشروعات عملاء الشركة."
      ]
    },
    {
      role: "Technical Trainee (Security & Access Control)",
      role_ar: "متدربة تقنية في أنظمة الأمان والتحكم",
      company: "ZKTeco North Africa & HST Company",
      company_ar: "زد كي تيكو شمال إفريقيا وشركة إتش إس تي",
      location: "Cairo & Alexandria",
      period: "2022 - 2023",
      status: "COMPLETED",
      icon: "shield",
      badge: "Hardware & Security",
      points_en: [
        "Configured biometric access control, time-attendance hardware, CCTV surveillance, and smart-home automation systems."
      ],
      points_ar: [
        "تركيب وبرمجة أنظمة البصمة والتحكم بالدخول وكاميرات المراقبة وأتمتة المنازل الذكية."
      ]
    },
    {
      role: "Team Leader",
      role_ar: "قائدة الفريق التقني",
      company: "Tera Tronics",
      company_ar: "تيرا ترونكس",
      location: "Cairo, Egypt",
      period: "2021 - Present",
      status: "ACTIVE LEADER",
      icon: "users",
      badge: "Startup Leadership",
      points_en: [
        "Directed a multidisciplinary web & embedded-systems team, shipping the TeraTronics React SPA and award-winning robotics builds."
      ],
      points_ar: [
        "قيادة فريق متعدد التخصصات في الويب والأنظمة المدمجة وإطلاق منصة TeraTronics بـ React ومشروعات الروبوتات الفائزة."
      ]
    }
  ],

  education: {
    degree: "Bachelor's Degree in Technology",
    degree_ar: "بكالوريوس في التكنولوجيا",
    institution: "6th October Technological University",
    institution_ar: "جامعة 6 أكتوبر التكنولوجية",
    location: "6th of October City, Egypt",
    period: "2024 - Present",
    status: "ENROLLED / IN PROGRESS",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Professional Working Proficiency" }
    ]
  }
};

// Project Brand Logo Assets Map (WebP + SVG)
const PROJECT_LOGOS_MAP = {
  'vira-real-estate': 'assets/projects/vira-realestate.webp',
  'x-vision': 'assets/projects/x-vision.webp',
  'peta-core': 'assets/projects/peta-core.webp',
  'the-road-trading': 'assets/projects/the-road-trading.webp',
  'halo-haloid': 'assets/projects/halo-haloid.webp',
  'helm-al-maskan': 'assets/projects/helm-al-maskan.svg',
  'premier-egypt': 'assets/projects/premier-egypt.webp',
  'akwad-real-estate': 'assets/projects/akwad-real-estate.webp',
  'upscale-egypt': 'assets/projects/upscale-egypt.webp',
  'saudi-ems': 'assets/projects/saudi-ems.webp',
  'ashmand': 'assets/projects/ashmand.webp',
  'al-arabyia': 'assets/projects/al-arabyia.webp',
  'solar-energy-iot': 'assets/projects/solar-energy-iot.svg',
  'teratronics-react': 'assets/projects/teratronics-react.svg',
  'sera-vehicle': 'assets/projects/sera-vehicle.svg',
  'egypt-covid-portal': 'assets/projects/egypt-covid-portal.svg',
  'almokhtabar-lab': 'assets/projects/almokhtabar-lab.svg',
  'sia-development': 'assets/projects/sia-development.webp',
  'elfire-security': 'assets/projects/elfire-security.svg',
  'fastfix-store': 'assets/projects/fastfix-store.svg',
  'linkcu-auth': 'assets/projects/linkcu-auth.svg'
};

PORTFOLIO_DATA.projects.forEach(p => {
  p.logo = PROJECT_LOGOS_MAP[p.id] || 'assets/logo.jpg';
});

// Export to window
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
