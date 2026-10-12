/**
 * ENGINEERING TRACKS - INTERACTIVE APPLICATION LOGIC
 * Features:
 * - 16 Professional Tracks Data & Filtering
 * - Flagship Courses Data & Dynamic Rendering
 * - Multi-Currency Switcher (USD, SAR, EGP)
 * - Complete Bilingual System (English & Arabic) with RTL/LTR
 * - Light / Dark Theme Switcher with Persistence
 * - Live Search & Filter Bar
 * - Interactive Certification Exam Simulator Widget
 * - Modals for Course Details, Exam Engine, & Free Consultation
 * - Numbers Counter Animation on Scroll
 */

// ==========================================
// 1. DATA: 16 PROFESSIONAL ENGINEERING TRACKS
// ==========================================
const TRACKS_DATA = [
  {
    id: 'pm',
    category: 'management',
    icon: 'fa-solid fa-list-check',
    badge: '18 Courses',
    image: 'assets/tracks/pm.jpg',
    titleEn: 'Project & Risk Management',
    titleAr: 'إدارة المشروعات والمخاطر',
    descEn: 'Master PMI methodologies, agile governance, Primavera P6 scheduling, and risk contingency planning.',
    descAr: 'احتراف منهجيات PMI، الإدارة الرشيقة Agile، وجداول بريمافيرا P6 وإدارة المخاطر المهنية.',
    certs: ['PMP®', 'PMI-RMP®', 'Primavera P6', 'Agile PMI-ACP']
  },
  {
    id: 'cmrp',
    category: 'mechanical',
    icon: 'fa-solid fa-gears',
    badge: '14 Courses',
    image: 'assets/tracks/cmrp.jpg',
    titleEn: 'Maintenance & Reliability',
    titleAr: 'الصيانة والاعتمادية الهندسية',
    descEn: 'World-class industrial maintenance, RCM, vibration analysis, failure modes (FMEA), and SMRP certification prep.',
    descAr: 'برامج الصيانة الصناعية المتقدمة، تحليل الاهتزازات، الصيانة المتمحورة حول الاعتمادية RCM واعتمادية SMRP.',
    certs: ['CMRP®', 'CMRT®', 'RCM', 'Vibration Analysis']
  },
  {
    id: 'hse',
    category: 'safety',
    icon: 'fa-solid fa-helmet-safety',
    badge: '12 Courses',
    image: 'assets/tracks/hse.jpg',
    titleEn: 'Health, Safety & Environment (HSE)',
    titleAr: 'السلامة والصحة المهنية والبيئة',
    descEn: 'Comprehensive occupational safety, OSHA standards, hazard identification, risk assessment, and NEBOSH guidance.',
    descAr: 'معايير السلامة المهنية العالمية، شهادات OSHA للصناعة والإنشاءات، وتقييم وتحليل المخاطر المهنية.',
    certs: ['OSHA 30/45', 'NEBOSH Prep', 'JHA / Risk Matrix', 'ISO 45001']
  },
  {
    id: 'bim',
    category: 'civil',
    icon: 'fa-solid fa-building-columns',
    badge: '15 Courses',
    image: 'assets/tracks/bim.jpg',
    titleEn: 'BIM & Architectural Engineering',
    titleAr: 'هندسة العمارة ونمذجة المباني BIM',
    descEn: 'Autodesk Revit Architecture & MEP, Navisworks clash detection, parametric modeling, and shop drawing standards.',
    descAr: 'دبلومات ريفيت المعماري والإنشائي والكهروميكانيكي، كشف التعارضات نافيسووركس ولوحات الشوب دروينج.',
    certs: ['Revit MEP', 'Revit Structure', 'Navisworks', 'AutoCAD']
  },
  {
    id: 'mech',
    category: 'mechanical',
    icon: 'fa-solid fa-fan',
    badge: '16 Courses',
    image: 'assets/tracks/mech.jpg',
    titleEn: 'Mechanical Building Services (MEP)',
    titleAr: 'الأنظمة الميكانيكية للمباني (MEP)',
    descEn: 'HVAC system design (HAP), automatic fire-fighting networks (NFPA), plumbing systems, and acoustic design.',
    descAr: 'تصميم أنظمة التكييف والتهوية HAP، شبكات مكافحة الحريق طبقاً لكود NFPA، وأنظمة الصرف والتغذية.',
    certs: ['HVAC Design', 'Fire Fighting (NFPA)', 'Plumbing Systems', 'FE Mechanical']
  },
  {
    id: 'elec',
    category: 'electrical',
    icon: 'fa-solid fa-bolt',
    badge: '14 Courses',
    image: 'assets/tracks/elec.jpg',
    titleEn: 'Electrical Power & Distribution',
    titleAr: 'القوى والشبكات الكهربائية',
    descEn: 'Indoor/outdoor lighting (DIALux), medium and low voltage distribution, earthing, substation design, and ETAP.',
    descAr: 'تصميم الإنارة DIALux، شبكات الجهد المنخفض والمتوسط، تصميم المحطات وتأريض المنشآت وحسابات ETAP.',
    certs: ['Electrical Design', 'ETAP', 'DIALux evo', 'Substations']
  },
  {
    id: 'civil',
    category: 'civil',
    icon: 'fa-solid fa-trowel-bricks',
    badge: '17 Courses',
    image: 'assets/tracks/civil.jpg',
    titleEn: 'Civil & Structural Design',
    titleAr: 'التصميم والتحليل الإنشائي',
    descEn: 'Structural modeling and analysis using CSI ETABS, SAFE, SAP2000, high-rise seismic and wind load design.',
    descAr: 'تحليل وتصميم المنشآت الخرسانية والأبراج العالية ومقاومة الزلازل والرياح ببرامج ETABS و SAFE و SAP2000.',
    certs: ['CSI ETABS', 'CSI SAFE', 'SAP2000', 'Structural Detailing']
  },
  {
    id: 'quality',
    category: 'management',
    icon: 'fa-solid fa-circle-check',
    badge: '11 Courses',
    image: 'assets/tracks/quality.jpg',
    titleEn: 'Quality Management & Six Sigma',
    titleAr: 'إدارة الجودة وسيجما ستة',
    descEn: 'Lean manufacturing, Six Sigma Green & Black Belt, statistical process control, and ISO 9001:2015 audit.',
    descAr: 'منهجية سيجما ستة للتحسين المستمر، أدوات الجودة الإحصائية، ونظم إدارة الجودة العالمية ISO 9001.',
    certs: ['Six Sigma Green Belt', 'Lean Enterprise', 'ISO 9001:2015', 'CMQ/OE']
  },
  {
    id: 'asset',
    category: 'safety',
    icon: 'fa-solid fa-boxes-stacked',
    badge: '9 Courses',
    image: 'assets/tracks/asset.jpg',
    titleEn: 'Asset & Facility Management',
    titleAr: 'إدارة الأصول والمرافق',
    descEn: 'ISO 55000 asset lifecycle management, Institute of Asset Management (IAM) diplomas, and CFM prep.',
    descAr: 'إدارة دورة حياة الأصول الهندسية وفق ISO 55000 ودبلومات معهد إدارة الأصول IAM وإدارة المرافق CFM.',
    certs: ['IAM Certificate', 'CFM Prep', 'ISO 55000', 'CAFM Systems']
  },
  {
    id: 'data',
    category: 'data',
    icon: 'fa-solid fa-chart-line',
    badge: '10 Courses',
    image: 'assets/tracks/data.jpg',
    titleEn: 'Data Science & BI for Engineers',
    titleAr: 'علم البيانات وتحليل الأعمال للمهندسين',
    descEn: 'Python for engineering analytics, Power BI interactive KPI dashboards, SQL databases, and predictive algorithms.',
    descAr: 'تحليل البيانات الهندسية بلغة بايثون، تصميم لوحات مؤشرات الأداء Power BI، وقواعد البيانات SQL.',
    certs: ['Python for Engineers', 'Power BI Pro', 'SQL Data Analysis', 'ML Basics']
  },
  {
    id: 'supply',
    category: 'management',
    icon: 'fa-solid fa-truck-ramp-box',
    badge: '8 Courses',
    image: 'assets/tracks/supply.jpg',
    titleEn: 'Supply Chain & Procurement',
    titleAr: 'سلاسل الإمداد والمشتريات الهندسية',
    descEn: 'End-to-end supply chain optimization, international logistics, strategic procurement, and inventory control.',
    descAr: 'إدارة سلاسل التوريد والخدمات اللوجستية، استراتيجيات المشتريات الهندسية وإدارة المخازن المتطورة.',
    certs: ['CSCP Prep', 'Procurement Eng', 'Warehouse Ops', 'Logistics Strategy']
  },
  {
    id: 'oil',
    category: 'mechanical',
    icon: 'fa-solid fa-oil-well',
    badge: '9 Courses',
    image: 'assets/tracks/oil.jpg',
    titleEn: 'Petroleum, Oil & Gas Engineering',
    titleAr: 'هندسة البترول والنفط والغاز',
    descEn: 'Piping engineering, ASME codes (B31.3), API inspector certifications, process flow, and refinery instrumentation.',
    descAr: 'تصميم خطوط الأنابيب وفق أكواد ASME، تأهيل مفتشي API، وهندسة العمليات والمنشآت البترولية.',
    certs: ['ASME B31.3', 'API 510/570', 'Piping Design', 'Process Simulation']
  },
  {
    id: 'solar',
    category: 'electrical',
    icon: 'fa-solid fa-solar-panel',
    badge: '7 Courses',
    image: 'assets/tracks/solar.jpg',
    titleEn: 'Renewable & Solar Energy',
    titleAr: 'الطاقة الشمسية والمتجددة',
    descEn: 'Grid-tied & off-grid PV solar design, PVSyst simulation software, economic feasibility, and clean energy storage.',
    descAr: 'تصميم محطات الطاقة الشمسية المتصلة والمنفصلة عن الشبكة، محاكاة PVSyst، ودراسات الجدوى الاقتصادية.',
    certs: ['PVSyst Simulation', 'On-Grid / Off-Grid', 'Battery Energy Storage', 'Solar EPC']
  },
  {
    id: 'auto',
    category: 'electrical',
    icon: 'fa-solid fa-microchip',
    badge: '12 Courses',
    image: 'assets/tracks/auto.jpg',
    titleEn: 'Automation, PLC & Mechatronics',
    titleAr: 'التحكم الآلي وأنظمة PLC والميكاترونكس',
    descEn: 'Industrial automation, Siemens & Schneider PLC programming, SCADA monitoring systems, and variable frequency drives.',
    descAr: 'برمجة أجهزة التحكم المنطقي PLC (Siemens / Schneider)، أنظمة المراقبة SCADA، ومغيرات السرعة VFD.',
    certs: ['Siemens S7-1200/1500', 'SCADA WinCC', 'Classic Automation', 'Industrial IoT']
  },
  {
    id: 'biomed',
    category: 'data',
    icon: 'fa-solid fa-heart-pulse',
    badge: '6 Courses',
    image: 'assets/tracks/biomed.jpg',
    titleEn: 'Biomedical Equipment Engineering',
    titleAr: 'الهندسة الطبية وصيانة الأجهزة',
    descEn: 'Hospital medical device maintenance, calibration standards, diagnostic imaging, and healthcare facility codes.',
    descAr: 'صيانة ومعايرة الأجهزة الطبية بالمستشفيات، نظم التصوير التشخيصي، واشتراطات المنشآت الصحية.',
    certs: ['Medical Calibration', 'Hospital Systems', 'Imaging Technology', 'Biomedical Codes']
  },
  {
    id: 'soft',
    category: 'management',
    icon: 'fa-solid fa-comments',
    badge: '8 Courses',
    image: 'assets/tracks/soft.jpg',
    titleEn: 'Engineering Leadership & Business',
    titleAr: 'القيادة الهندسية وتطوير الأعمال',
    descEn: 'Contractual disputes, FIDIC conditions of contract, executive engineering communication, and negotiation mastery.',
    descAr: 'إدارة العقود الهندسية وفيديك FIDIC، مهارات التفاوض وحل النزاعات، والقيادة التنفيذية للمهندسين.',
    certs: ['FIDIC Contracts', 'Engineering Negotiation', 'Business Analysis', 'Team Leadership']
  }
];

// ==========================================
// 2. DATA: FLAGSHIP COURSES WITH REAL PRICES
// ==========================================
const COURSES_DATA = [
  {
    id: 'course-pmp',
    titleEn: 'PMP® Exam Preparation (PMBOK 7th Ed & Agile)',
    titleAr: 'دورة إعداد مهندسي إدارة المشروعات الاحترافية PMP®',
    track: 'Project Management',
    level: 'Professional',
    rating: 4.9,
    reviewsCount: 3840,
    hours: '45 Hours',
    lectures: '18 Lectures',
    instructor: 'Eng. Ahmed Zaki, PMP, PMI-RMP',
    image: 'assets/Course-ddf8f70a.jpeg',
    badge: 'Best Seller',
    examCode: 'PMI-PMP',
    snippetEn: 'Complete alignment with PMI ECO 2026. Includes 35 PDUs, 5 full simulation exams, formulas bank, and application review assistance.',
    snippetAr: 'متوافقة بالكامل مع مواصفات اختبار PMI لعام 2026. تشمل 35 ساعة معتمدة، 5 اختبارات محاكاة كاملة، ومراجعة استمارة الاختبار.',
    prices: { USD: 280, SAR: 1050, EGP: 8500 },
    oldPrices: { USD: 400, SAR: 1500, EGP: 12000 },
    syllabus: [
      'People Domain: Leading Teams & Stakeholder Engagement',
      'Process Domain: Predictive & Adaptive Methodologies',
      'Business Environment: Compliance & Strategic Alignment',
      'Agile Frameworks: Scrum, Kanban & Hybrid Implementations',
      'Realistic 180-Question Timed Mock Simulator Sessions'
    ]
  },
  {
    id: 'course-cmrp',
    titleEn: 'CMRP® Certified Maintenance & Reliability Professional',
    titleAr: 'الشهادة الاحترافية في الصيانة والاعتمادية CMRP®',
    track: 'Maintenance & Reliability',
    level: 'Professional',
    rating: 4.9,
    reviewsCount: 2190,
    hours: '40 Hours',
    lectures: '16 Lectures',
    instructor: 'Dr. Eng. Hossam Mostafa, CMRP',
    image: 'assets/hero_concept.jpg',
    badge: 'Accredited SMRP',
    examCode: 'SMRP-CMRP',
    snippetEn: 'The definitive gold standard in industrial asset maintenance. Covers the 5 Pillars of SMRP knowledge with real oil, gas & manufacturing cases.',
    snippetAr: 'المعيار العالمي الأول لصيانة الأصول الصناعية. يغطي المحاور الخمسة لجمعية SMRP مع دراسات حالة تطبيقية لمصانع البتروكيماويات.',
    prices: { USD: 320, SAR: 1200, EGP: 9800 },
    oldPrices: { USD: 480, SAR: 1800, EGP: 14500 },
    syllabus: [
      'Pillar 1: Business & Management of Maintenance',
      'Pillar 2: Manufacturing Process Reliability',
      'Pillar 3: Equipment Reliability & FMEA / RCM',
      'Pillar 4: Organization & Leadership Strategy',
      'Pillar 5: Work Management, Planning & Scheduling'
    ]
  },
  {
    id: 'course-osha',
    titleEn: 'OSHA 30/45 Safety Specialist (Construction & General)',
    titleAr: 'أخصائي السلامة والصحة المهنية الشامل وفق معايير OSHA',
    track: 'HSE & Safety',
    level: 'Specialist',
    rating: 4.8,
    reviewsCount: 1650,
    hours: '36 Hours',
    lectures: '14 Lectures',
    instructor: 'Eng. Tamer El-Badry, OSHA Authorized',
    image: 'assets/engineers_team.jpg',
    badge: 'Global Standards',
    examCode: 'OSHA-HSE',
    snippetEn: 'Hazard identification, safety management systems, scaffold inspection, confined space entry, and incident investigation protocols.',
    snippetAr: 'التعرف على المخاطر والتحكم فيها، فحص السقالات، العمل في الأماكن المغلقة، وخطط الاستجابة للطوارئ والتحقيق في الحوادث.',
    prices: { USD: 190, SAR: 720, EGP: 5900 },
    oldPrices: { USD: 290, SAR: 1100, EGP: 8500 },
    syllabus: [
      'OSHA Standards & Inspections Framework',
      'Fall Protection, Scaffolding & Excavation Safety',
      'Electrical Hazards & Lockout/Tagout (LOTO)',
      'Confined Spaces & Hazardous Atmospheres',
      'Fire Prevention, Emergency Evacuation & JHA Preparation'
    ]
  },
  {
    id: 'course-bim',
    titleEn: 'Revit MEP & BIM Coordination Professional Diploma',
    titleAr: 'دبلومة نمذجة معلومات البناء Revit MEP وكشف التعارضات',
    track: 'Civil & BIM',
    level: 'Diploma',
    rating: 4.9,
    reviewsCount: 2940,
    hours: '65 Hours',
    lectures: '26 Lectures',
    instructor: 'Eng. Mahmoud Radwan, BIM Consultant',
    image: 'assets/Course-ddf8f70a.jpeg',
    badge: 'Comprehensive',
    examCode: 'AUTODESK-BIM',
    snippetEn: 'Design full Mechanical, Electrical & Plumbing models in Revit. Master clash tests in Navisworks and extract bills of quantities automatically.',
    snippetAr: 'تصميم أنظمة التكييف والكهرباء والصحي على Revit مع كشف التعارضات ببرنامج Navisworks واستخراج حصر الكميات والمخططات التنفيذية.',
    prices: { USD: 350, SAR: 1300, EGP: 10500 },
    oldPrices: { USD: 520, SAR: 1950, EGP: 15900 },
    syllabus: [
      'BIM Foundations & Level of Development (LOD 100 - 400)',
      'HVAC Ducting & Piping Modeling in Revit',
      'Electrical Cable Trays, Conduits & Lighting Layouts',
      'Plumbing Drainage & Water Supply Distribution',
      'Navisworks Coordination, Clash Matrix & 4D Scheduling'
    ]
  },
  {
    id: 'course-etabs',
    titleEn: 'High-Rise Structural Design Diploma (ETABS, SAFE & SAP)',
    titleAr: 'دبلومة التصميم والتحليل الإنشائي للأبراج العالية',
    track: 'Civil & BIM',
    level: 'Diploma',
    rating: 4.8,
    reviewsCount: 1820,
    hours: '55 Hours',
    lectures: '22 Lectures',
    instructor: 'Dr. Eng. Yasser Farag, Structural Expert',
    image: 'assets/hero_concept.jpg',
    badge: 'Mega Projects',
    examCode: 'CSI-STRUCT',
    snippetEn: 'Seismic and dynamic wind analysis for towers, deep foundations (raft on piles), flat slabs, shear walls, and structural detailing.',
    snippetAr: 'التحليل الديناميكي للزلازل والرياح للأبراج، تصميم اللبشة الخوازيق والكمرات التحويلية وإعداد اللوحات التنفيذية المعتمدة.',
    prices: { USD: 310, SAR: 1150, EGP: 9400 },
    oldPrices: { USD: 450, SAR: 1700, EGP: 13500 },
    syllabus: [
      'Static & Dynamic Modeling in CSI ETABS',
      'Wind & Earthquake Analysis according to ASCE 7 & ECP',
      'Foundation & Raft Analysis in CSI SAFE',
      'Shear Walls & Core Walls Design',
      'Complete Shop Drawing Production & Bar Bending Schedules'
    ]
  },
  {
    id: 'course-sixsigma',
    titleEn: 'Lean Six Sigma Green Belt (CSSGB) Certification',
    titleAr: 'الحزام الأخضر في سيجما ستة والتصنيع الرشيق Lean Six Sigma',
    track: 'Project Management',
    level: 'Professional',
    rating: 4.9,
    reviewsCount: 1420,
    hours: '40 Hours',
    lectures: '15 Lectures',
    instructor: 'Dr. Sherif Kamel, ASQ Certified Black Belt',
    image: 'assets/engineers_team.jpg',
    badge: 'ASQ Aligned',
    examCode: 'ASQ-CSSGB',
    snippetEn: 'DMAIC methodology, statistical process control with Minitab, root cause analysis, waste reduction, and productivity acceleration.',
    snippetAr: 'منهجية DMAIC للتحسين المستمر، التحليل الإحصائي باستخدام برنامج Minitab، تقليل الهدر وزيادة الكفاءة التشغيلية.',
    prices: { USD: 260, SAR: 980, EGP: 7900 },
    oldPrices: { USD: 390, SAR: 1450, EGP: 11800 },
    syllabus: [
      'Define Phase: Project Charter & Voice of Customer (VOC)',
      'Measure Phase: Process Mapping & Gauge R&R',
      'Analyze Phase: Hypothesis Testing & Root Cause Tools',
      'Improve Phase: Lean Solutions & Mistake Proofing (Poka-Yoke)',
      'Control Phase: SPC Control Charts & Standardization Plans'
    ]
  },
  {
    id: 'course-data',
    titleEn: 'Python & Power BI Data Engineering Masterclass',
    titleAr: 'ماستر كلاس تحليل البيانات وبايثون لمهندسي المشروعات',
    track: 'Data & Analytics',
    level: 'Specialist',
    rating: 4.9,
    reviewsCount: 1780,
    hours: '48 Hours',
    lectures: '20 Lectures',
    instructor: 'Eng. Omar Talaat, Senior Data Architect',
    image: 'assets/Course-ddf8f70a.jpeg',
    badge: 'AI Era',
    examCode: 'DATA-ENG',
    snippetEn: 'Extract and analyze engineering logs, construction progress, budget tracking with Python (Pandas), and build automated Power BI executive boards.',
    snippetAr: 'معالجة بيانات المشروعات الضخمة بلغة بايثون، ربطها بقواعد البيانات، وتصميم داشبورد تنفيذي متكامل بـ Power BI.',
    prices: { USD: 240, SAR: 900, EGP: 7200 },
    oldPrices: { USD: 360, SAR: 1350, EGP: 10800 },
    syllabus: [
      'Python Programming Core & Data Structures',
      'Data Cleansing & Wrangling with Pandas & NumPy',
      'SQL Queries for Enterprise Database Management',
      'Power BI Data Modeling (DAX) & Interactive Visuals',
      'Automated Executive KPI Reports for Engineering Management'
    ]
  },
  {
    id: 'course-fe',
    titleEn: 'FE Mechanical / Civil Exam Preparation (NCEES USA)',
    titleAr: 'دورة إعداد مهندسي اختبار المعادلة الأمريكي FE Mechanical',
    track: 'Mechanical & Reliability',
    level: 'Professional',
    rating: 4.8,
    reviewsCount: 1150,
    hours: '60 Hours',
    lectures: '24 Lectures',
    instructor: 'Prof. Mohamed Ezzat, PE Licensed',
    image: 'assets/hero_concept.jpg',
    badge: 'US License',
    examCode: 'NCEES-FE',
    snippetEn: 'Pass the Fundamentals of Engineering exam on your first try. Comprehensive review of mathematics, statics, mechanics of materials, and fluids.',
    snippetAr: 'التحضير الشامل لاختبار أساسيات الهندسة الأمريكي FE بالتعاون مع خبراء معتمدين في كافة العلوم الهندسية الأساسية والميكانيكية.',
    prices: { USD: 380, SAR: 1420, EGP: 11500 },
    oldPrices: { USD: 550, SAR: 2050, EGP: 16800 },
    syllabus: [
      'Engineering Mathematics, Calculus & Probability',
      'Statics, Dynamics & Mechanics of Materials',
      'Fluid Mechanics & Thermodynamics',
      'Heat Transfer & Machine Design Elements',
      'Full CBT Mock Exam Simulation with Reference Handbook'
    ]
  }
];

// ==========================================
// 3. CURRENCY & STATE MANAGEMENT
// ==========================================
let currentCurrency = 'SAR';
let currentLang = 'en';
let currentTheme = 'light';
let selectedCategory = 'all';

const CURRENCY_SYMBOLS = {
  USD: '$',
  SAR: '﷼ ',
  EGP: 'ج.م '
};

// ==========================================
// 4. BILINGUAL TRANSLATION DICTIONARY
// ==========================================
const TRANSLATIONS = {
  en: {
    nav_home: 'Home',
    nav_tracks: '16 Tracks',
    nav_courses: 'Courses',
    nav_exams: 'Exam Simulator',
    nav_why: 'Why Us',
    nav_contact: 'Branches',
    nav_portal: 'Student Portal',
    hero_badge: 'Accredited Academy | 80,000+ Engineers Worldwide 🌍',
    hero_title_1: 'Empower Your Career with ',
    hero_title_gradient: 'Accredited Engineering Tracks',
    hero_desc: 'Bridge the gap between academia and modern global market demands. Master PMI, SMRP, OSHA, Autodesk, and AI engineering diplomas with interactive simulators and 24/7 dedicated mentorship.',
    hero_search_ph: 'Search 100+ courses (e.g. PMP, CMRP, OSHA, Revit, Civil...)',
    btn_search: 'Search',
    btn_explore_tracks: 'Explore 16 Tracks',
    btn_free_consultation: 'Free Career Consultation',
    trust_stat: '80,000+ Certified Professionals',
    float_card1_title: '100% Accredited',
    float_card1_desc: 'PMI · SMRP · OSHA · IAM',
    float_card2_title: '98.4% Pass Rate',
    float_card2_desc: 'Exam Simulation Engines',
    partners_header: 'Accredited & Recognized by Leading Global Engineering Bodies',
    stat_trainees: 'Engineers & Trainees',
    stat_courses: 'Accredited Courses',
    stat_tracks: 'Specialized Tracks',
    stat_pass_rate: 'First-Attempt Pass Rate',
    tracks_tag: 'Comprehensive Engineering Curriculum',
    tracks_title: 'Explore 16 Professional Engineering Tracks',
    tracks_subtitle: 'Designed by industry veterans and university professors to transform junior and senior engineers into market leaders.',
    cat_all: 'All 16 Tracks',
    cat_management: 'Project & Quality',
    cat_mechanical: 'Mechanical & Reliability',
    cat_electrical: 'Electrical & Systems',
    cat_civil: 'Civil & BIM',
    cat_safety: 'Safety & Assets',
    cat_data: 'Tech & Analytics',
    courses_tag: 'Top Rated Programs',
    courses_title: 'Flagship Certifications & Diplomas',
    courses_subtitle: 'Join high-impact cohorts delivered through physical classrooms in Cairo & Al-Khobar or live online webinars with exam preparation simulators.',
    course_filter_ph: 'Filter courses by title, code or skill...',
    level_all: 'All Levels',
    level_pro: 'Professional Certification',
    level_dip: 'Comprehensive Diploma',
    level_spec: 'Technical Specialist',
    why_tag: 'The Engineering Tracks Advantage',
    why_title: 'Why 80,000+ Engineers Choose Our Academy',
    why_desc: 'We don\'t just teach theory. We build practical problem-solving capabilities, provide exam simulation banks, and offer career placement mentorship across Egypt, KSA, and the GCC.',
    why_f1_title: 'Internationally Accredited Diplomas',
    why_f1_desc: 'Every course fulfills rigorous international body credentials (PMI, OSHA, SMRP, IAM) with verifiable certificates.',
    why_f2_title: '24/7 E-Learning & Mobile Support',
    why_f2_desc: 'Access recorded HD lectures, downloadable materials, quizzes, and direct instructor Q&A anytime on desktop and mobile.',
    why_f3_title: 'Veteran Instructors & Consultants',
    why_f3_desc: 'Learn directly from senior chief engineers and international project managers with 15+ years of real Mega-project experience.',
    why_f4_title: 'Realistic Exam Simulation Engines',
    why_f4_desc: 'Train on thousands of mock exam questions matching real Pearson VUE testing interfaces to guarantee your pass.',
    why_years_text: 'Years of Excellence across MENA',
    delivery_tag: 'Flexible Learning Formats',
    delivery_title: 'Learn Your Way, Anywhere',
    delivery_subtitle: 'Choose the learning mode that matches your busy work schedule and geographical location.',
    del_physical_title: 'Physical On-Site Classes',
    del_physical_desc: 'In-person classroom training in fully equipped high-tech laboratories in Nasr City (Cairo) and Al-Khobar (Saudi Arabia).',
    del_live_title: 'Interactive Live Virtual',
    del_live_desc: 'Live instructor-led training via Cisco Webex and Zoom with two-way audio, shared screens, and immediate live feedback.',
    del_self_title: 'Self-Paced E-Learning',
    del_self_desc: 'Study on your own schedule with lifetime portal access, modular video chapters, and interactive knowledge checks.',
    dp_1: 'Face-to-face workshop interaction',
    dp_2: 'Hands-on lab equipment practice',
    dp_3: 'Networking with regional engineering peers',
    dp_4: 'Attend from anywhere in the world',
    dp_5: 'Full live Q&A with lead instructors',
    dp_6: 'Recordings archived immediately for review',
    dp_7: '24/7 round-the-clock platform access',
    dp_8: 'Mobile app learning on iOS & Android',
    dp_9: 'Automated quizzes & downloadable templates',
    sim_tag: 'Interactive Exam Simulator',
    sim_title: 'Test Your Readiness Before the Real Certification Exam',
    sim_desc: 'Our exclusive exam engine replicates actual Pearson VUE testing environments with situational scenarios, timed questions, detailed explanations, and domain breakdown analytics.',
    sim_p1_title: '3,500+ Exam Questions',
    sim_p1_desc: 'Updated to 2026 PMI ECO & SMRP standards.',
    sim_p2_title: 'Situational Analysis',
    sim_p2_desc: 'Understand exactly why an answer is right or wrong.',
    btn_try_simulator: 'Launch Interactive Simulator Demo',
    testi_tag: 'Real Trainee Reviews',
    testi_title: 'Engineers Thriving in Top Global Firms',
    testi_subtitle: 'Our alumni lead projects in Aramco, NEOM, Orascom, Petrojet, Red Sea Global, and multinational engineering consultancies.',
    branches_tag: 'Regional Footprint',
    branches_title: 'Our Regional Headquarters & Offices',
    branches_subtitle: 'Visit our training centers in Egypt, Saudi Arabia, and the United Arab Emirates or speak with an academic advisor.',
    branch_cairo_sub: 'Headquarters & Training Campus',
    branch_ksa_sub: 'Eastern Province Training Center',
    branch_uae_sub: 'Gulf & International Office',
    btn_map: 'View on Google Maps',
    btn_contact_uae: 'Contact Gulf Team',
    cta_title: 'Accelerate Your Engineering Career Today',
    cta_desc: 'Schedule a 1-on-1 counseling call with our senior academic consultants. We will evaluate your current experience, suggest the optimal track, and provide an exclusive corporate discount.',
    form_title: 'Request Free Syllabus & Guidance',
    form_subtitle: 'An engineer consultant will call you within 24 hours.',
    form_name_ph: 'Full Name',
    form_email_ph: 'Email Address',
    form_phone_ph: 'Phone / WhatsApp (+20 / +966 ...)',
    form_select_track: 'Select Your Track of Interest',
    btn_submit_lead: 'Submit & Download Syllabus',
    faq_tag: 'Got Questions?',
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Everything you need to know about enrollment, accreditations, and payment methods.',
    footer_about: 'Engineering Tracks is the Middle East\'s premier accredited engineering and professional development academy. Empowering over 80,000+ engineers across 16 specialized career tracks in Egypt, Saudi Arabia, and the Gulf.',
    footer_col_tracks: 'Top Tracks',
    footer_col_links: 'Quick Links',
    footer_newsletter_title: 'Stay Updated',
    footer_newsletter_desc: 'Receive upcoming course schedules, exam discount vouchers, and free engineering webinars.',
    newsletter_ph: 'Your email address'
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_tracks: 'المسارات الـ 16',
    nav_courses: 'الدورات والشهادات',
    nav_exams: 'محاكي الاختبارات',
    nav_why: 'لماذا نحن',
    nav_contact: 'الفروع والتواصل',
    nav_portal: 'بوابة المتدربين',
    hero_badge: 'أكاديمية معتمدة عالمياً | أكثر من 80,000 مهندس 🌍',
    hero_title_1: 'طوّر مسيرتك الهندسية مع ',
    hero_title_gradient: 'أقوى المسارات والدبلومات المعتمدة',
    hero_desc: 'جسر العبور الحقيقي من الدراسة الأكاديمية إلى متطلبات سوق العمل الهندسي العالمي. دبلومات متخصصة في PMI و SMRP و OSHA و BIM وعلوم البيانات مع نظام محاكاة الاختبارات ودعم فني على مدار الساعة.',
    hero_search_ph: 'ابحث في أكثر من 100 دورة (مثل: PMP، CMRP، OSHA، ريفيت، إنشائي...)',
    btn_search: 'بحث فوري',
    btn_explore_tracks: 'استكشف المسارات الـ 16',
    btn_free_consultation: 'جلسة استشارة مهنية مجانية',
    trust_stat: 'أكثر من 80,000 مهندس ومتدرب معتمد',
    float_card1_title: 'اعتمادات دولية 100%',
    float_card1_desc: 'PMI · SMRP · OSHA · IAM',
    float_card2_title: 'نسبة نجاح 98.4%',
    float_card2_desc: 'محاكي الاختبارات المتطور',
    partners_header: 'معتمدة وشريكة لأكبر المنظمات والهيئات الهندسية الدولية',
    stat_trainees: 'مهندس ومتدرب حول العالم',
    stat_courses: 'دورة ودبلومة تخصصية',
    stat_tracks: 'مساراً هندسياً وإدارياً',
    stat_pass_rate: 'نسبة اجتياز الاختبارات من أول محاولة',
    tracks_tag: 'خطة تدريبية متكاملة',
    tracks_title: 'استكشف 16 مساراً هندسياً وإدارياً متخصصاً',
    tracks_subtitle: 'تم إعداد المناهج بدقة بواسطة نخبة من كبار الخبراء والاستشاريين لتأهيل المهندسين لقيادة كبرى المشاريع.',
    cat_all: 'جميع المسارات (16)',
    cat_management: 'إدارة المشروعات والجودة',
    cat_mechanical: 'الميكانيكا والاعتمادية',
    cat_electrical: 'الكهرباء والأنظمة الذكية',
    cat_civil: 'المدني ونمذجة المباني BIM',
    cat_safety: 'السلامة والأصول',
    cat_data: 'البرمجة وتحليل البيانات',
    courses_tag: 'البرامج الأكثر طلباً',
    courses_title: 'أقوى الشهادات والدبلومات الهندسية المعتمدة',
    courses_subtitle: 'احجز مكانك في المعسكرات التدريبية المباشرة في فروعنا بالقاهرة والخبر أو عبر البث التفاعلي أونلاين.',
    course_filter_ph: 'فلترة حسب اسم الدورة أو الكود الهندسـي...',
    level_all: 'جميع المستويات',
    level_pro: 'شهادة مهنية دولية',
    level_dip: 'دبلومة هندسية شاملة',
    level_spec: 'أخصائي تخصصي دقيق',
    why_tag: 'مزايا إنجنيرينج تراكس',
    why_title: 'لماذا يختارنا أكثر من 80 ألف مهندس؟',
    why_desc: 'نحن لا نقدم مجرد محاضرات نظرية، بل نصنع كفاءات حقيقية قادرة على حل المشكلات الهندسية المعقدة في كبرى المشروعات.',
    why_f1_title: 'شهادات واعتمادات دولية موثقة',
    why_f1_desc: 'جميع دبلوماتنا معتمدة ومطابقة للمواصفات الدولية لمؤسسات PMI و SMRP و OSHA و IAM.',
    why_f2_title: 'دعم تعليمي وتطبيقي 24/7',
    why_f2_desc: 'وصول دائم لمنصة التدريب، الفيديوهات المسجلة بجودة عالية وتطبيقات الهواتف مع تواصل مباشر مع المحاضرين.',
    why_f3_title: 'استشاريون وخبراء ذوو خبرة دولية',
    why_f3_desc: 'تعلّم مباشرة من كبار مديري المشاريع ورؤساء الأقسام بخبرات تزيد عن 15 عاماً في المشروعات القومية والعملاقة.',
    why_f4_title: 'محاكي اختبارات واقعي ومحدّث',
    why_f4_desc: 'تدرّب على آلاف الأسئلة المشابهة تماماً لاختبارات مراكز بيرسون فيو العالمية لضمان اجتياز الاختبار بنجاح تام.',
    why_years_text: 'عاماً من الريادة في الشرق الأوسط',
    delivery_tag: 'أنماط تدريب تناسب الجميع',
    delivery_title: 'تعلّم بالطريقة التي تلائم وقتك ومكانك',
    delivery_subtitle: 'اختر النمط المناسب لجدول أعمالك المهني أينما كنت في مصر أو السعودية أو حول العالم.',
    del_physical_title: 'حضور مباشر بالقاعات (أوفلاين)',
    del_physical_desc: 'تدريب عملي وجهاً لوجه في أحدث المختبرات الهندسية المجهزة في مدينة نصر (القاهرة) والخبر (المملكة العربية السعودية).',
    del_live_title: 'تدريب تفاعلي مباشر (أونلاين)',
    del_live_desc: 'محاضرات تفاعلية حية عبر Webex و Zoom بنظام الصوت والصورة ومشاركة الشاشات والنقاش المباشر مع استشاري المادة.',
    del_self_title: 'التعلم الذاتي المسجل (LMS)',
    del_self_desc: 'تعلّم بسرعتك الخاصة عبر منصتنا الذكية وتطبيقات الجوال مع وصول غير محدود للمحتوى وبنوك الأسئلة.',
    dp_1: 'تفاعل وورش عمل تطبيقية مباشرة',
    dp_2: 'تطبيق عملي على أجهزة ومختبرات الأكاديمية',
    dp_3: 'بناء شبكة علاقات مع نخبة المهندسين في منطقتك',
    dp_4: 'إمكانية الحضور من أي مكان في العالم',
    dp_5: 'جلسات أسئلة وإجابات مباشرة مع المحاضرين',
    dp_6: 'أرشفة فورية للمحاضرات بجودة HD للمراجعة',
    dp_7: 'دخول متاح على مدار 24 ساعة طوال أيام الأسبوع',
    dp_8: 'تطبيق متكامل للأجهزة الذكية (iOS و Android)',
    dp_9: 'اختبارات تقييم ذاتية ونماذج هندسية قابلة للتحميل',
    sim_tag: 'محاكي الاختبارات التفاعلي',
    sim_title: 'اختبر جاهزيتك قبل دخول الاختبار الحقيقي',
    sim_desc: 'نظام محاكاة حصري مطابق تماماً لشاشات مراكز الاختبار الدولية، مزود بمؤقت زمني وتحليل فوري للدرجات وتوضيح أسباب الإجابات الصحيحة.',
    sim_p1_title: 'أكثر من 3,500 سؤال محاكي',
    sim_p1_desc: 'محدثة طبقاً لمعايير اختبارات 2026 الدولية.',
    sim_p2_title: 'تحليل دقيق للسيناريوهات',
    sim_p2_desc: 'فهم وتفسير تفصيلي لكل خيار وسيناريو هندسي.',
    btn_try_simulator: 'تجربة محاكي الاختبارات التفاعلي الآن',
    testi_tag: 'آراء وقصص نجاح خريجينا',
    testi_title: 'مهندسونا يقودون كبرى المشاريع العالمية',
    testi_subtitle: 'يعمل خريجونا في أرامكو، ونيوم، وأوراسكوم، وبتروجت، والبحر الأحمر الدولية، وأرقى المكاتب الاستشارية العالمية.',
    branches_tag: 'فروعنا وتواجدنا الإقليمي',
    branches_title: 'المقرات الإقليمية ومراكز التدريب المعتمدة',
    branches_subtitle: 'تفضل بزيارة مراكزنا التدريبية في جمهورية مصر العربية والمملكة العربية السعودية والإمارات.',
    branch_cairo_sub: 'المقر الرئيسي وحرم التدريب',
    branch_ksa_sub: 'مركز التدريب بالمنطقة الشرقية',
    branch_uae_sub: 'مكتب الخليج والشرق الأوسط',
    btn_map: 'عرض الموقع على خرائط جوجل',
    btn_contact_uae: 'تواصل مع فريق الإمارات',
    cta_title: 'ابدأ انطلاقتك الهندسية الاحترافية اليوم',
    cta_desc: 'احجز جلسة استشارة مجانية مع مستشارينا الأكاديميين لتقييم خبرتك واختيار المسار الأمثل مع خصم حصري للتسجيل المبكر.',
    form_title: 'طلب الخطة التدريبية والاستشارة مجاناً',
    form_subtitle: 'سيتواصل معك مهندس استشاري خلال 24 ساعة.',
    form_name_ph: 'الاسم الكامل',
    form_email_ph: 'البريد الإلكتروني',
    form_phone_ph: 'رقم الهاتف / الواتساب (+20 / +966 ...)',
    form_select_track: 'اختر المسار الهندسي الذي يهمك',
    btn_submit_lead: 'إرسال وتحميل الخطة التدريبية',
    faq_tag: 'الأسئلة الشائعة',
    faq_title: 'كل ما تحتاج معرفته عن التسجيل والشهادات',
    faq_subtitle: 'إجابات وافية حول الاعتمادات وطرق الدفع ونظام المحاضرات.',
    footer_about: 'أكاديمية إنجنيرينج تراكس هي الصرح التدريبي الهندسي الأول في الشرق الأوسط. قمنا بتأهيل أكثر من 80,000 مهندس عبر 16 مساراً تخصصياً في مصر والمملكة العربية السعودية ودول الخليج.',
    footer_col_tracks: 'أبرز المسارات',
    footer_col_links: 'روابط هامة',
    footer_newsletter_title: 'ابقَ على اطلاع',
    footer_newsletter_desc: 'اشترك لتصلك جداول الدورات الجديدة وكوبونات الخصم والندوات الهندسية المجانية.',
    newsletter_ph: 'أدخل بريدك الإلكتروني'
  }
};

// ==========================================
// 5. DOM INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Check stored preferences
  const storedTheme = localStorage.getItem('et_theme') || 'light';
  const storedLang = localStorage.getItem('et_lang') || 'en';
  const storedCurrency = localStorage.getItem('et_curr') || 'SAR';

  setTheme(storedTheme);
  setCurrency(storedCurrency);
  setLanguage(storedLang);

  // Render content
  renderTracks();
  renderCourses();

  // Attach event listeners
  setupEventListeners();

  // Initialize interactive exam question
  initMockExam();

  // Initialize stats counter on scroll
  initStatsObserver();

  // Navbar scroll spy
  setupScrollSpy();
});

// ==========================================
// 6. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  // Theme Toggle
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }

  // Language Toggle
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(newLang);
    });
  }

  // Currency Select
  const currencySelect = document.getElementById('currencySelect');
  if (currencySelect) {
    currencySelect.value = currentCurrency;
    currencySelect.addEventListener('change', (e) => {
      setCurrency(e.target.value);
    });
  }

  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close mobile nav on menu item click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Hero Search Input
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  if (heroSearchBtn && heroSearchInput) {
    heroSearchBtn.addEventListener('click', () => {
      performSearch(heroSearchInput.value);
    });
    heroSearchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch(heroSearchInput.value);
      }
    });
  }

  // Course Filter Search Input
  const courseFilterInput = document.getElementById('courseFilterInput');
  if (courseFilterInput) {
    courseFilterInput.addEventListener('input', (e) => {
      filterCoursesByKeyword(e.target.value);
    });
  }

  // Course Level Select
  const courseLevelSelect = document.getElementById('courseLevelSelect');
  if (courseLevelSelect) {
    courseLevelSelect.addEventListener('change', () => {
      filterCoursesByKeyword(courseFilterInput ? courseFilterInput.value : '');
    });
  }

  // Tracks Category Filter Buttons
  const filterBtns = document.querySelectorAll('.track-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.dataset.category;
      renderTracks();
    });
  });

  // Scroll to Top visibility
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Close modals on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCourseModal(null);
      closeExamModal(null);
      closeConsultationModal(null);
    }
  });
}

// ==========================================
// 7. THEME & LANGUAGE HANDLERS
// ==========================================
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('et_theme', theme);

  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      themeIcon.style.color = '#FFB800';
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      themeIcon.style.color = '';
    }
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('et_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'ar' ? 'English' : 'عربي';
  }

  // Update text with translations
  const dict = TRANSLATIONS[lang];
  if (dict) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  }

  // Re-render tracks and courses for language-specific fields
  renderTracks();
  renderCourses();
}

function setCurrency(currency) {
  currentCurrency = currency;
  localStorage.setItem('et_curr', currency);
  const select = document.getElementById('currencySelect');
  if (select) select.value = currency;

  renderCourses();
}

// ==========================================
// 8. RENDER TRACKS CARDS
// ==========================================
function renderTracks() {
  const container = document.getElementById('tracksGrid');
  if (!container) return;

  const filtered = selectedCategory === 'all'
    ? TRACKS_DATA
    : TRACKS_DATA.filter(t => t.category === selectedCategory);

  container.innerHTML = filtered.map(t => {
    const title = currentLang === 'ar' ? t.titleAr : t.titleEn;
    const desc = currentLang === 'ar' ? t.descAr : t.descEn;
    const certTags = t.certs.map(c => `<span class="cert-tag">${c}</span>`).join('');
    const exploreText = currentLang === 'ar' ? 'استعراض المسار' : 'Explore Track';

    return `
      <div class="track-card" onclick="handleTrackClick('${t.id}')">
        <div class="track-img-wrap">
          <img src="${t.image}" alt="${title}" class="track-card-img" loading="lazy">
          <div class="track-img-gradient"></div>
          <span class="track-badge-pill">${t.badge}</span>
          <div class="track-card-icon-badge">
            <i class="${t.icon}"></i>
          </div>
        </div>

        <div class="track-card-body">
          <h3 class="track-title">${title}</h3>
          <p class="track-desc">${desc}</p>
          <div class="track-cert-tags">
            ${certTags}
          </div>
          <div class="track-card-footer">
            <span>${exploreText}</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 9. RENDER COURSES CARDS
// ==========================================
function renderCourses(coursesToRender = COURSES_DATA) {
  const container = document.getElementById('coursesGrid');
  if (!container) return;

  const symbol = CURRENCY_SYMBOLS[currentCurrency] || '$';

  container.innerHTML = coursesToRender.map(c => {
    const title = currentLang === 'ar' ? c.titleAr : c.titleEn;
    const snippet = currentLang === 'ar' ? c.snippetAr : c.snippetEn;
    const price = c.prices[currentCurrency].toLocaleString();
    const oldPrice = c.oldPrices[currentCurrency].toLocaleString();
    const detailsBtnText = currentLang === 'ar' ? 'التفاصيل' : 'Details';
    const enrollBtnText = currentLang === 'ar' ? 'سجل الآن' : 'Enroll';

    return `
      <div class="course-card" data-course-id="${c.id}">
        <div class="course-thumb">
          <img src="${c.image}" alt="${title}" loading="lazy">
          <span class="course-overlay-badge">${c.track}</span>
          <span class="course-exam-badge">${c.examCode}</span>
        </div>

        <div class="course-body">
          <div class="course-meta-row">
            <div class="course-rating">
              <i class="fa-solid fa-star"></i>
              <span>${c.rating}</span>
              <span style="color:var(--text-light); font-size:0.75rem;">(${c.reviewsCount})</span>
            </div>
            <span><i class="fa-regular fa-clock" style="margin-inline-end:4px;"></i>${c.hours}</span>
          </div>

          <h3 class="course-title" onclick="openCourseDetails('${c.id}')" style="cursor:pointer;">${title}</h3>
          <p class="course-snippet">${snippet}</p>

          <div class="course-features-pills">
            <span class="pill-item"><i class="fa-solid fa-chalkboard-user"></i> ${c.instructor}</span>
            <span class="pill-item"><i class="fa-solid fa-layer-group"></i> ${c.lectures}</span>
          </div>

          <div class="course-footer">
            <div class="course-price-box">
              <span class="price-current">${symbol}${price}</span>
              <span class="price-old">${symbol}${oldPrice}</span>
            </div>

            <div class="course-actions-row">
              <button class="btn btn-outline btn-sm" onclick="openCourseDetails('${c.id}')">
                ${detailsBtnText}
              </button>
              <button class="btn btn-primary btn-sm" onclick="enrollCourse('${c.id}')">
                ${enrollBtnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 10. SEARCH & FILTERING FUNCTIONS
// ==========================================
function performSearch(query) {
  if (!query || !query.trim()) return;

  const target = document.getElementById('courses');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  const courseInput = document.getElementById('courseFilterInput');
  if (courseInput) {
    courseInput.value = query;
  }

  filterCoursesByKeyword(query);
}

function filterCoursesByKeyword(keyword) {
  const levelSelect = document.getElementById('courseLevelSelect');
  const levelFilter = levelSelect ? levelSelect.value : 'all';

  const normalized = keyword.toLowerCase().trim();

  const filtered = COURSES_DATA.filter(c => {
    const matchesKeyword = !normalized || (
      c.titleEn.toLowerCase().includes(normalized) ||
      c.titleAr.toLowerCase().includes(normalized) ||
      c.track.toLowerCase().includes(normalized) ||
      c.examCode.toLowerCase().includes(normalized) ||
      c.snippetEn.toLowerCase().includes(normalized)
    );

    const matchesLevel = levelFilter === 'all' || c.level === levelFilter;

    return matchesKeyword && matchesLevel;
  });

  renderCourses(filtered);
}

function filterTrackCategory(cat) {
  selectedCategory = cat;
  const filterBtns = document.querySelectorAll('.track-filter-btn');
  filterBtns.forEach(btn => {
    if (btn.dataset.category === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderTracks();
}

function handleTrackClick(trackId) {
  const track = TRACKS_DATA.find(t => t.id === trackId);
  if (!track) return;

  // Scroll to courses and filter by track keyword
  const target = document.getElementById('courses');
  if (target) target.scrollIntoView({ behavior: 'smooth' });

  const query = track.certs[0] || track.titleEn;
  const courseInput = document.getElementById('courseFilterInput');
  if (courseInput) {
    courseInput.value = query;
  }
  filterCoursesByKeyword(query);
}

// ==========================================
// 11. INTERACTIVE EXAM SIMULATOR ENGINE
// ==========================================
let currentSelectedOption = null;
let examTimerSeconds = 9858; // 2h 44m 18s

function initMockExam() {
  // Timer countdown
  setInterval(() => {
    if (examTimerSeconds > 0) {
      examTimerSeconds--;
      const hours = Math.floor(examTimerSeconds / 3600);
      const mins = Math.floor((examTimerSeconds % 3600) / 60);
      const secs = examTimerSeconds % 60;
      const el = document.getElementById('mockTimer');
      if (el) {
        el.textContent = `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
      }
    }
  }, 1000);
}

function pad(n) {
  return n < 10 ? '0' + n : n;
}

function selectSimOption(el, optIndex) {
  const items = document.querySelectorAll('.sim-option-item');
  items.forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  currentSelectedOption = optIndex;

  const fbBox = document.getElementById('simFeedbackBox');
  if (fbBox) fbBox.style.display = 'none';
}

function checkSimAnswer() {
  const fbBox = document.getElementById('simFeedbackBox');
  if (!fbBox) return;

  if (currentSelectedOption === null) {
    showToast('Please select an option first!', 'error');
    return;
  }

  fbBox.style.display = 'block';

  if (currentSelectedOption === 1) {
    fbBox.style.background = 'rgba(16, 185, 129, 0.15)';
    fbBox.style.border = '1px solid #10B981';
    fbBox.style.color = '#34D399';
    fbBox.innerHTML = `
      <strong><i class="fa-solid fa-circle-check"></i> Correct! Above Target Rationale:</strong><br>
      According to the PMBOK® Guide & PMI ECO, when facing a critical path delay, the project manager must first evaluate schedule compression techniques (Crashing or Fast-tracking) and assess the resulting cost, quality, and risk trade-offs before requesting contingency reserves or contract deadline extensions.
    `;
  } else {
    fbBox.style.background = 'rgba(228, 5, 5, 0.15)';
    fbBox.style.border = '1px solid #E40505';
    fbBox.style.color = '#F87171';
    fbBox.innerHTML = `
      <strong><i class="fa-solid fa-triangle-exclamation"></i> Incorrect:</strong><br>
      Option A is the correct answer. The PM should never immediately delay contractual deadlines or request extra funds without first analyzing schedule compression (crashing/fast-tracking) options.
    `;
  }
}

function prevSimQuestion() {
  showToast('You are on Question 1 of the interactive diagnostic sample.');
}

// ==========================================
// 12. STATS OBSERVER & ANIMATED COUNTER
// ==========================================
function initStatsObserver() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  let triggered = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      animateCounters();
    }
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

function animateCounters() {
  const numbers = document.querySelectorAll('.stat-number');
  numbers.forEach(num => {
    const target = parseFloat(num.getAttribute('data-target'));
    const decimals = parseInt(num.getAttribute('data-decimals') || '0', 10);
    const duration = 1800;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      if (decimals > 0) {
        num.textContent = current.toFixed(decimals) + '%';
      } else {
        num.textContent = Math.floor(current).toLocaleString() + (target >= 80000 ? '+' : (target >= 100 ? '+' : ''));
      }
    }, stepTime);
  });
}

// ==========================================
// 13. MODALS LOGIC
// ==========================================
function openCourseDetails(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('courseModal');
  const content = document.getElementById('courseModalContent');
  if (!modal || !content) return;

  const title = currentLang === 'ar' ? course.titleAr : course.titleEn;
  const snippet = currentLang === 'ar' ? course.snippetAr : course.snippetEn;
  const symbol = CURRENCY_SYMBOLS[currentCurrency] || '$';
  const price = course.prices[currentCurrency].toLocaleString();
  const oldPrice = course.oldPrices[currentCurrency].toLocaleString();

  const syllabusList = course.syllabus.map(m => `
    <li style="display:flex; align-items:flex-start; gap:0.5rem; margin-bottom:0.5rem; font-size:0.9rem; color:var(--text-main);">
      <i class="fa-solid fa-circle-check" style="color:var(--color-primary); margin-top:4px;"></i>
      <span>${m}</span>
    </li>
  `).join('');

  content.innerHTML = `
    <img src="${course.image}" alt="${title}" class="modal-header-img">
    <div class="modal-inner">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:0.75rem;">
        <div>
          <span class="section-tag" style="font-size:0.75rem; padding:0.2rem 0.6rem;">${course.track}</span>
          <h2 style="font-size:1.4rem; font-weight:800; margin-top:0.4rem; line-height:1.3;">${title}</h2>
        </div>
        <div style="text-align:right;">
          <span style="font-size:1.6rem; font-weight:800; color:var(--color-primary);">${symbol}${price}</span>
          <span style="display:block; font-size:0.85rem; color:var(--text-light); text-decoration:line-through;">${symbol}${oldPrice}</span>
        </div>
      </div>

      <div style="display:flex; gap:1.25rem; margin-bottom:1.25rem; font-size:0.85rem; color:var(--text-muted);">
        <span><i class="fa-solid fa-clock" style="color:var(--color-primary);"></i> ${course.hours}</span>
        <span><i class="fa-solid fa-layer-group" style="color:var(--color-primary);"></i> ${course.lectures}</span>
        <span><i class="fa-solid fa-star" style="color:var(--color-gold);"></i> ${course.rating} (${course.reviewsCount} reviews)</span>
        <span><i class="fa-solid fa-certificate" style="color:var(--color-accent);"></i> ${course.examCode}</span>
      </div>

      <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:1.5rem;">
        ${snippet}
      </p>

      <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:0.75rem; color:var(--text-main);">Core Curriculum Modules:</h4>
      <ul style="list-style:none; margin-bottom:1.75rem;">
        ${syllabusList}
      </ul>

      <div style="display:flex; gap:1rem; flex-wrap:wrap; padding-top:1rem; border-top:1px solid var(--border-color);">
        <button class="btn btn-primary btn-lg" style="flex:1;" onclick="enrollCourse('${course.id}')">
          <i class="fa-solid fa-bolt"></i>
          <span>Enroll Now (${symbol}${price})</span>
        </button>
        <button class="btn btn-outline btn-lg" onclick="downloadSyllabus('${course.id}')">
          <i class="fa-solid fa-download"></i>
          <span>Download PDF Syllabus</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCourseModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.closest('.modal-close-btn')) return;
  const modal = document.getElementById('courseModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function openExamModal() {
  const modal = document.getElementById('examModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeExamModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.closest('.modal-close-btn')) return;
  const modal = document.getElementById('examModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function openConsultationModal() {
  const modal = document.getElementById('consultationModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeConsultationModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.closest('.modal-close-btn')) return;
  const modal = document.getElementById('consultationModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 14. FORM HANDLERS & TOASTS
// ==========================================
function enrollCourse(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  const title = course ? (currentLang === 'ar' ? course.titleAr : course.titleEn) : 'Course';
  closeCourseModal(null);
  openConsultationModal();
  showToast(`Enrollment initiated for: ${title}`);
}

function downloadSyllabus(courseId) {
  showToast('Syllabus PDF downloaded successfully! Check your downloads folder.');
}

function handleLeadSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('leadName').value;
  showToast(`Thank you Eng. ${name}! Your syllabus request and roadmap have been submitted. An advisor will contact you within 24h.`);
  e.target.reset();
}

function handleStartExamSimulator(e) {
  e.preventDefault();
  closeExamModal(null);
  showToast('Diagnostic exam activated! Redirecting to simulation test workspace...');
  const sim = document.getElementById('simulator');
  if (sim) sim.scrollIntoView({ behavior: 'smooth' });
}

function handleConsultationSubmit(e) {
  e.preventDefault();
  closeConsultationModal(null);
  showToast('Your 1-on-1 counseling session is booked! An engineering director will reach out via WhatsApp.');
  e.target.reset();
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  showToast('Subscribed! Welcome to the Engineering Tracks knowledge network.');
  e.target.reset();
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toastBox');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isActive = item.classList.contains('active');

  // Close all other FAQs
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('active');
    const a = i.querySelector('.faq-answer');
    if (a) a.style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
