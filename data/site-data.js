/* ==========================================================================
   BARHAM KIRKUK — CENTRAL CONTENT CONFIGURATION
   Edit this file to update company info, services, projects, stats, nav,
   social links and SEO copy across the ENTIRE site (English + Arabic).
   Every page reads from this single source, so you only edit content once.
   ========================================================================== */

// EDIT COMPANY INFORMATION HERE
const COMPANY_INFO = {
  name: "Barham Kirkuk",
  legalNameAr: "شركة برهم كركوك للصناعات التحويلية",
  domain: "https://barhamkirkuk.com",
  email: "info@barhamkirkuk.com",
  phone: "+964 XXX XXX XXXX",
  location: { en: "Kirkuk, Iraq", ar: "كركوك، العراق" },
  // EDIT SOCIAL LINKS HERE — replace "#" with real profile URLs when available
  social: {
    linkedin: "#",
    facebook: "#",
    youtube: "#"
  }
};

// EDIT SEO INFORMATION HERE (per-page overrides fall back to these defaults)
const SEO_DEFAULTS = {
  title: "Barham Kirkuk | Oil & Gas & Energy Solutions",
  description: "Barham Kirkuk provides professional oil & gas, energy, engineering and industrial solutions from Kirkuk, Iraq.",
  ogImage: "/assets/images/og-image.png"
};

/* ==========================================================================
   TRANSLATIONS — EN (default) / AR
   ========================================================================== */
const SITE_DATA = {

en: {
  dir: "ltr",
  lang: "en",
  nav: {
    home: "Home", about: "About", services: "Services", projects: "Projects",
    industries: "Industries", hse: "HSE", contact: "Contact", cta: "Contact Us"
  },
  hero: {
    kicker: "Barham Kirkuk — Kirkuk, Iraq",
    headline1: "Powering Energy.",
    headline2: "Engineering the Future.",
    sub: "Delivering reliable energy, engineering and industrial solutions with a commitment to excellence, safety and sustainable growth.",
    ctaPrimary: "Explore Our Capabilities",
    ctaSecondary: "Contact Us",
    scroll: "Scroll"
  },
  about: {
    eyebrow: "Who We Are",
    headline: "Engineering Energy. Delivering Confidence.",
    // EDIT COMPANY DESCRIPTION HERE — replace with verified company information
    body: "Barham Kirkuk is an Iraq-based energy, engineering and industrial solutions company headquartered in Kirkuk. We support oil & gas, industrial and infrastructure projects with a disciplined, safety-first approach and a commitment to reliable, high-quality delivery. This description is placeholder content and should be replaced with the company's official profile.",
    link: "Discover Our Story"
  },
  stats: [
    { value: "10", suffix: "+", label: "Years of Experience" },
    { value: "50", suffix: "+", label: "Projects" },
    { value: "100", suffix: "%", label: "Commitment to Safety" },
    { value: "24", suffix: "/7", label: "Operational Support" }
  ],
  statsNote: "Figures shown are placeholder values and will be updated with verified company data.",
  services: {
    eyebrow: "What We Do",
    headline: "Our Capabilities",
    sub: "A focused set of energy, engineering and industrial capabilities built around safety, quality and reliable execution.",
    exploreLabel: "Explore Service",
    items: [
      { title: "Oil & Gas Services", desc: "Professional solutions supporting oil and gas operations across the field and facility lifecycle.", size:"large" },
      { title: "Engineering & EPC", desc: "Engineering, procurement and project execution support for complex industrial developments.", size:"regular" },
      { title: "Oil & Gas Processing", desc: "Solutions for processing and energy infrastructure, engineered for reliability.", size:"small" },
      { title: "Industrial Projects", desc: "Engineering and execution support for industrial facilities of varying scale and complexity.", size:"regular" },
      { title: "Pipeline & Infrastructure", desc: "Energy transportation and industrial infrastructure solutions built to last.", size:"regular", dark:true },
      { title: "Maintenance & Technical Services", desc: "Reliable technical and operational support to keep critical assets performing.", size:"small" }
    ]
  },
  projects: {
    eyebrow: "Our Work",
    headline: "Selected Projects",
    sub: "A snapshot of the project types Barham Kirkuk supports across the energy and industrial sector.",
    viewLabel: "View Project",
    filters: ["All", "Oil & Gas", "Engineering", "Infrastructure", "Industrial"],
    items: [
      { title: "Oil & Gas Processing Facility", location: "Kirkuk, Iraq", type: "Oil & Gas", desc: "Support for processing operations and associated infrastructure." },
      { title: "Industrial Infrastructure Development", location: "Kirkuk, Iraq", type: "Industrial", desc: "Engineering and execution support for industrial-scale infrastructure." },
      { title: "Pipeline & Energy Infrastructure", location: "Kirkuk, Iraq", type: "Infrastructure", desc: "Transportation infrastructure supporting regional energy operations." },
      { title: "Engineering & EPC Project", location: "Kirkuk, Iraq", type: "Engineering", desc: "Full-cycle engineering, procurement and execution support." },
      { title: "Refinery Development", location: "Kirkuk, Iraq", type: "Oil & Gas", desc: "Technical and industrial support for refinery-related development." },
      { title: "Energy Facility Upgrade", location: "Kirkuk, Iraq", type: "Industrial", desc: "Upgrade and modernization support for existing energy assets." }
    ],
    note: "Project details shown are placeholder examples of project types and will be replaced with verified project information."
  },
  industries: {
    eyebrow: "Where We Work",
    headline: "Industries We Serve",
    items: ["Oil & Gas", "Energy", "Petrochemical", "Industrial Infrastructure", "Engineering", "Construction", "Operations & Maintenance"]
  },
  why: {
    eyebrow: "Why Barham Kirkuk",
    headline: "Built on Trust and Technical Discipline",
    items: [
      { title: "Safety First", desc: "Protecting people, assets and communities." },
      { title: "Engineering Excellence", desc: "Focused on quality engineering and technical performance." },
      { title: "Reliable Delivery", desc: "Committed to dependable project execution." },
      { title: "Experienced Professionals", desc: "Supporting complex industrial environments." },
      { title: "Quality Commitment", desc: "Maintaining strong standards throughout our work." },
      { title: "Sustainable Growth", desc: "Building responsible long-term value." }
    ]
  },
  hse: {
    eyebrow: "Health, Safety & Environment",
    headline: "Safety Is Not Negotiable",
    body: "Health, Safety and Environment sit at the center of how Barham Kirkuk operates. Every project is approached with a disciplined commitment to protecting our people, our partners and the communities and environment where we work.",
    items: [
      { title: "Safety", desc: "Rigorous safety practices across every stage of our work." },
      { title: "Environmental Responsibility", desc: "Operating with respect for the surrounding environment." },
      { title: "Quality", desc: "Consistent technical and operational quality standards." },
      { title: "Compliance", desc: "Working in line with applicable regulations and requirements." }
    ],
    note: "Specific certifications will be listed here once formally obtained and verified."
  },
  sustainability: {
    eyebrow: "Sustainability",
    headline1: "Responsible Energy.",
    headline2: "Sustainable Progress.",
    body: "Barham Kirkuk is committed to conducting its operations responsibly — using resources efficiently, minimizing environmental impact, and investing in technology and people to support long-term, sustainable growth for the communities we serve.",
    items: ["Environmental Responsibility","Efficient Resource Use","Responsible Operations","Technology & Innovation","Sustainable Growth","Community Impact"]
  },
  cta: {
    headline: "Let's Build the Future of Energy Together",
    body: "Have a project, partnership or energy opportunity? Talk to our team.",
    primary: "Start a Conversation",
    secondary: "Contact Us"
  },
  contact: {
    eyebrow: "Get In Touch",
    headline: "Contact Us",
    sub: "Reach out to discuss a project, partnership or opportunity with the Barham Kirkuk team.",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    formTitle: "Send an Inquiry",
    fields: { name:"Name", company:"Company", email:"Email", phone:"Phone", subject:"Subject", message:"Message" },
    submit: "Send Inquiry",
    mapNote: "Exact office address to be added. General location shown: Kirkuk, Iraq."
  },
  footer: {
    tagline: "Energy, engineering and industrial solutions from Kirkuk, Iraq.",
    companyTitle: "Company",
    servicesTitle: "Services",
    contactTitle: "Contact",
    followTitle: "Follow Us",
    servicesList: ["Oil & Gas","Engineering","EPC","Industrial Solutions","Maintenance"],
    rights: "© 2026 Barham Kirkuk. All Rights Reserved.",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },
  breadcrumbHome: "Home"
},

ar: {
  dir: "rtl",
  lang: "ar",
  nav: {
    home: "الرئيسية", about: "من نحن", services: "خدماتنا", projects: "المشاريع",
    industries: "القطاعات", hse: "الصحة والسلامة", contact: "اتصل بنا", cta: "اتصل بنا"
  },
  hero: {
    kicker: "برهم كركوك — كركوك، العراق",
    headline1: "نصنع الطاقة.",
    headline2: "نهندس المستقبل.",
    sub: "نقدّم حلولاً موثوقة في الطاقة والهندسة والصناعة، مع التزام راسخ بالتميز والسلامة والنمو المستدام.",
    ctaPrimary: "استكشف قدراتنا",
    ctaSecondary: "اتصل بنا",
    scroll: "مرر للأسفل"
  },
  about: {
    eyebrow: "من نحن",
    headline: "نهندس الطاقة، ونمنح الثقة.",
    body: "برهم كركوك شركة عراقية متخصصة في حلول الطاقة والهندسة والصناعة، مقرها الرئيسي في مدينة كركوك. ندعم مشاريع النفط والغاز والمشاريع الصناعية والبنية التحتية بأسلوب منضبط يضع السلامة أولاً، والتزام بتنفيذ موثوق وعالي الجودة. هذا النص تعريفي مؤقت وسيتم استبداله بالملف الرسمي للشركة.",
    link: "تعرف على قصتنا"
  },
  stats: [
    { value: "10", suffix: "+", label: "سنوات من الخبرة" },
    { value: "50", suffix: "+", label: "مشروعًا" },
    { value: "100", suffix: "%", label: "التزام بالسلامة" },
    { value: "24", suffix: "/7", label: "دعم تشغيلي" }
  ],
  statsNote: "الأرقام المعروضة تعريفية مؤقتة وسيتم تحديثها ببيانات الشركة الموثقة.",
  services: {
    eyebrow: "ماذا نقدم",
    headline: "قدراتنا",
    sub: "مجموعة متكاملة من قدرات الطاقة والهندسة والصناعة، مبنية على السلامة والجودة والتنفيذ الموثوق.",
    exploreLabel: "استكشف الخدمة",
    items: [
      { title: "خدمات النفط والغاز", desc: "حلول احترافية داعمة لعمليات النفط والغاز عبر دورة العمل الميدانية والتشغيلية.", size:"large" },
      { title: "الهندسة والمقاولات المتكاملة (EPC)", desc: "دعم هندسي وتوريد وتنفيذ للمشاريع الصناعية المعقدة.", size:"regular" },
      { title: "معالجة النفط والغاز", desc: "حلول لمعالجة وبنية تحتية للطاقة مصممة للموثوقية.", size:"small" },
      { title: "المشاريع الصناعية", desc: "دعم هندسي وتنفيذي للمنشآت الصناعية بمختلف أحجامها وتعقيدها.", size:"regular" },
      { title: "خطوط الأنابيب والبنية التحتية", desc: "حلول نقل الطاقة والبنية التحتية الصناعية المصممة لتدوم.", size:"regular", dark:true },
      { title: "الصيانة والخدمات الفنية", desc: "دعم فني وتشغيلي موثوق للحفاظ على أداء الأصول الحيوية.", size:"small" }
    ]
  },
  projects: {
    eyebrow: "أعمالنا",
    headline: "مشاريع مختارة",
    sub: "نبذة عن أنواع المشاريع التي تدعمها برهم كركوك في قطاع الطاقة والصناعة.",
    viewLabel: "عرض المشروع",
    filters: ["الكل", "النفط والغاز", "الهندسة", "البنية التحتية", "الصناعة"],
    items: [
      { title: "منشأة معالجة نفط وغاز", location: "كركوك، العراق", type: "النفط والغاز", desc: "دعم عمليات المعالجة والبنية التحتية المرتبطة بها." },
      { title: "تطوير بنية تحتية صناعية", location: "كركوك، العراق", type: "الصناعة", desc: "دعم هندسي وتنفيذي لبنية تحتية بمقاييس صناعية." },
      { title: "بنية تحتية لخطوط الأنابيب والطاقة", location: "كركوك، العراق", type: "البنية التحتية", desc: "بنية تحتية للنقل تدعم عمليات الطاقة الإقليمية." },
      { title: "مشروع هندسي (EPC)", location: "كركوك، العراق", type: "الهندسة", desc: "دعم متكامل للهندسة والتوريد والتنفيذ." },
      { title: "تطوير مصفاة", location: "كركوك، العراق", type: "النفط والغاز", desc: "دعم فني وصناعي لتطوير أعمال المصافي." },
      { title: "تحديث منشأة طاقة", location: "كركوك، العراق", type: "الصناعة", desc: "دعم تحديث وتطوير لأصول طاقة قائمة." }
    ],
    note: "تفاصيل المشاريع المعروضة أمثلة تعريفية لأنواع المشاريع، وسيتم استبدالها بمعلومات موثقة."
  },
  industries: {
    eyebrow: "أين نعمل",
    headline: "القطاعات التي نخدمها",
    items: ["النفط والغاز", "الطاقة", "البتروكيماويات", "البنية التحتية الصناعية", "الهندسة", "الإنشاءات", "التشغيل والصيانة"]
  },
  why: {
    eyebrow: "لماذا برهم كركوك",
    headline: "مبنيون على الثقة والانضباط الفني",
    items: [
      { title: "السلامة أولاً", desc: "حماية الأفراد والأصول والمجتمعات." },
      { title: "التميز الهندسي", desc: "التركيز على جودة الهندسة والأداء الفني." },
      { title: "تنفيذ موثوق", desc: "الالتزام بتنفيذ مشاريع يمكن الاعتماد عليه." },
      { title: "كوادر ذات خبرة", desc: "دعم بيئات صناعية معقدة." },
      { title: "التزام بالجودة", desc: "الحفاظ على معايير عالية طوال العمل." },
      { title: "نمو مستدام", desc: "بناء قيمة مسؤولة على المدى الطويل." }
    ]
  },
  hse: {
    eyebrow: "الصحة والسلامة والبيئة",
    headline: "السلامة غير قابلة للتفاوض",
    body: "تحتل الصحة والسلامة والبيئة موقع الصدارة في طريقة عمل برهم كركوك. نتعامل مع كل مشروع بالتزام منضبط لحماية موظفينا وشركائنا والمجتمعات والبيئة التي نعمل فيها.",
    items: [
      { title: "السلامة", desc: "ممارسات سلامة صارمة في كل مرحلة من مراحل العمل." },
      { title: "المسؤولية البيئية", desc: "العمل باحترام للبيئة المحيطة." },
      { title: "الجودة", desc: "معايير جودة فنية وتشغيلية ثابتة." },
      { title: "الامتثال", desc: "العمل وفق الأنظمة والمتطلبات المعمول بها." }
    ],
    note: "سيتم إدراج الشهادات المحددة هنا عند الحصول عليها رسميًا والتحقق منها."
  },
  sustainability: {
    eyebrow: "الاستدامة",
    headline1: "طاقة مسؤولة.",
    headline2: "تقدم مستدام.",
    body: "تلتزم برهم كركوك بإدارة عملياتها بمسؤولية — من خلال الاستخدام الفعّال للموارد، وتقليل الأثر البيئي، والاستثمار في التقنية والكوادر لدعم نمو مستدام طويل الأمد للمجتمعات التي نخدمها.",
    items: ["المسؤولية البيئية","الاستخدام الفعّال للموارد","عمليات مسؤولة","التقنية والابتكار","نمو مستدام","الأثر المجتمعي"]
  },
  cta: {
    headline: "لنبنِ مستقبل الطاقة معًا",
    body: "لديك مشروع أو شراكة أو فرصة في قطاع الطاقة؟ تحدث مع فريقنا.",
    primary: "ابدأ الحديث",
    secondary: "اتصل بنا"
  },
  contact: {
    eyebrow: "تواصل معنا",
    headline: "اتصل بنا",
    sub: "تواصل مع فريق برهم كركوك لمناقشة مشروع أو شراكة أو فرصة عمل.",
    addressLabel: "العنوان",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    formTitle: "أرسل استفسارًا",
    fields: { name:"الاسم", company:"الشركة", email:"البريد الإلكتروني", phone:"الهاتف", subject:"الموضوع", message:"الرسالة" },
    submit: "إرسال الاستفسار",
    mapNote: "سيتم إضافة العنوان الدقيق للمكتب لاحقًا. الموقع العام المعروض: كركوك، العراق."
  },
  footer: {
    tagline: "حلول الطاقة والهندسة والصناعة من كركوك، العراق.",
    companyTitle: "الشركة",
    servicesTitle: "الخدمات",
    contactTitle: "تواصل",
    followTitle: "تابعنا",
    servicesList: ["النفط والغاز","الهندسة","المقاولات المتكاملة","حلول صناعية","الصيانة"],
    rights: "© 2026 برهم كركوك. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام"
  },
  breadcrumbHome: "الرئيسية"
}

};

// Expose globally for main.js
window.COMPANY_INFO = COMPANY_INFO;
window.SEO_DEFAULTS = SEO_DEFAULTS;
window.SITE_DATA = SITE_DATA;
