import { Experience, Education, Certification, SkillCategory } from "./types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Production Manager",
    company: "Abdul Monem Ltd",
    duration: "Nov 2024 – Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Manage end-to-end production operations (Man, Machine, Material) to optimize line output and maximize capacity utilization.",
      "Achieved 98% Good Manufacturing Practices (GMP) compliance across production halls.",
      "Maintained 100% safety compliance during rigorous IMB and GAO Audits.",
      "Facilitated structured Root Cause Analysis (RCA) and implemented Corrective & Preventive Actions (CAPA).",
      "Led the implementation of Lockout-Tagout (LOTO) procedures and rigorous PPE audits to create a zero-accident workspace.",
      "Ensured strict alignment with Coca-Cola (KORE) guidelines and ISO reference frameworks."
    ]
  },
  {
    id: "exp-2",
    role: "Assistant Production Manager",
    company: "PRAN-RFL Group",
    duration: "Dec 2021 – Jul 2024",
    location: "Sylhet & Narsingdi, Bangladesh",
    highlights: [
      "Designed shift-wise production reporting system that improved schedule adherence by 15%.",
      "Ensured absolute compliance with GLP, GHP, GMP, HACCP, and ISO 22000:2018 parameters.",
      "Minimised food and beverage production costs through Lean process enhancements and waste minimization protocols.",
      "Monitored new product formulations and scaled production from bench-test pilot phases to mass manufacturing lines."
    ]
  },
  {
    id: "exp-3",
    role: "In-Charge Quality Operations",
    company: "Multiple Health Pharma Ltd.",
    duration: "Dec 2020 – Nov 2022",
    location: "Narayanganj, Bangladesh",
    highlights: [
      "Supervised overall manufacturing operations, enforcing strict batch validation and QA/QC parameters.",
      "Coordinated cross-departmentally with Procurement, Logistics, and Warehousing to minimize batch delays.",
      "Spearheaded production project budgeting, resources planning, and operational risk mitigation plans."
    ]
  },
  {
    id: "exp-4",
    role: "Sr. Officer Quality Assurance",
    company: "Beacon Pharmaceutical Ltd",
    duration: "Dec 2017 – Nov 2020",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Created structured production plans aligned with market demand forecasts to prevent stock-outs.",
      "Managed Batch Manufacturing Records (BMR) and Batch Packaging Records (BPR) reviewing.",
      "Conducted raw material testing, physical inspections, and double-signature validation scripts.",
      "Directed warehouse audits and physical stock inspection scripts for GMP compliance."
    ]
  },
  {
    id: "exp-5",
    role: "Chemist",
    company: "Nestle Bangladesh Ltd.",
    duration: "Dec 2014 – Nov 2017",
    location: "Sreepur / Gazipur, Bangladesh",
    highlights: [
      "Performed advanced physical-chemical and laboratory testing on raw materials, packaging elements, and finished dairy products.",
      "Investigated quality deviations and non-conforming batches to establish robust protective guidelines.",
      "Acted as a principal technical support member during internal nestle quality audits and international food safety reviews."
    ]
  },
  {
    id: "exp-6",
    role: "Quality Control Specialist",
    company: "Sqweb Group",
    duration: "Jan 2013 – Nov 2014",
    location: "Narayanganj, Bangladesh",
    highlights: [
      "Cataloged quality inspection records and verified product calibration reports.",
      "Identified critical chemical and physical non-conformances in process streams.",
      "Integrated customer feedback into continuous quality improvement programs."
    ]
  }
];

export const educationList: Education[] = [
  {
    id: "edu-1",
    degree: "Executive MBA",
    major: "Business Administration & Management",
    institution: "Jagannath University",
    duration: "Mar 2021 – Present"
  },
  {
    id: "edu-2",
    degree: "Master of Science (M.Sc.)",
    major: "Chemistry",
    institution: "Govt. Titumir College, Dhaka",
    duration: "Jan 2015 – Dec 2016"
  },
  {
    id: "edu-3",
    degree: "Bachelor of Science (B.Sc. Hon's)",
    major: "Chemistry",
    institution: "Govt. Titumir College, Dhaka",
    duration: "Jan 2011 – Dec 2015"
  },
  {
    id: "edu-4",
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    institution: "Noakhali Govt. College",
    duration: "Jan 2004 – Dec 2006"
  },
  {
    id: "edu-5",
    degree: "Secondary School Certificate (SSC)",
    major: "Science",
    institution: "Pratapgonj High School",
    duration: "Jan 1994 – Dec 2004"
  }
];

export const certifications: Certification[] = [
  // Primary (Featured) Certs
  {
    id: "cert-1",
    title: "Six Sigma Lean Professional",
    issuer: "PRAN-RFL Group",
    year: "2022",
    highlighted: true
  },
  {
    id: "cert-2",
    title: "Food Safety Management System (FSMS-ISO-22000:2018)",
    issuer: "SME Foundation",
    year: "2022",
    highlighted: true
  },
  {
    id: "cert-3",
    title: "Management of GMP Audit",
    issuer: "University of Dhaka (IBA)",
    year: "2022",
    highlighted: true
  },
  {
    id: "cert-4",
    title: "ISO Integrated Systems (QMS, EMS, SHE, OHSAS, MSDS)",
    issuer: "Multiple Health Pharma Ltd.",
    year: "2021",
    highlighted: true
  },
  {
    id: "cert-5",
    title: "ERP SAP SOFTWARE (PP & MM Modules)",
    issuer: "ECL Systems Ltd.",
    year: "2021",
    highlighted: true
  },
  // Additional 15+ GMP, GLP, HACCP certs
  {
    id: "cert-6",
    title: "Hazard Analysis Critical Control Point (HACCP) System Implementation",
    issuer: "SGS Training Services",
    year: "2023",
    highlighted: false
  },
  {
    id: "cert-7",
    title: "Advanced Good Manufacturing Practices (cGMP) for Food Industries",
    issuer: "Bangladesh Standards and Testing Institution (BSTI)",
    year: "2023",
    highlighted: false
  },
  {
    id: "cert-8",
    title: "Good Laboratory Practice (GLP) Laboratory Systems",
    issuer: "Nestle Technical Academy",
    year: "2016",
    highlighted: false
  },
  {
    id: "cert-9",
    title: "Analytical Instruments Calibration & Validation",
    issuer: "Nestle Quality Assurance Center",
    year: "2015",
    highlighted: false
  },
  {
    id: "cert-10",
    title: "Advanced Product Quality Planning (APQP)",
    issuer: "PRAN-RFL Operations Academy",
    year: "2022",
    highlighted: false
  },
  {
    id: "cert-11",
    title: "Occupational Safety and Health Standards (OSHA)",
    issuer: "National Safety Council of Bangladesh",
    year: "2021",
    highlighted: false
  },
  {
    id: "cert-12",
    title: "Chemical Safety & Material Safety Data Sheet (MSDS) Management",
    issuer: "Nestle Safety Council",
    year: "2016",
    highlighted: false
  },
  {
    id: "cert-13",
    title: "Root Cause Analysis (RCA) & CAPA Methodology",
    issuer: "Beacon Pharmaceuticals L&D",
    year: "2019",
    highlighted: false
  },
  {
    id: "cert-14",
    title: "Production Planning and Inventory Control (PPIC)",
    issuer: "IBA, Dhaka",
    year: "2023",
    highlighted: false
  },
  {
    id: "cert-15",
    title: "Total Quality Management (TQM) in Modern Manufacturing",
    issuer: "SME Foundation",
    year: "2021",
    highlighted: false
  },
  {
    id: "cert-16",
    title: "5S Workplace Organization Methodology Auditing",
    issuer: "Abdul Monem Ltd Training Division",
    year: "2024",
    highlighted: false
  },
  {
    id: "cert-17",
    title: "Statistical Process Control (SPC) for Processing Lines",
    issuer: "Nestle Operations",
    year: "2017",
    highlighted: false
  },
  {
    id: "cert-18",
    title: "Cleanroom Classification & Air Handling Systems in Pharmaceuticals",
    issuer: "Beacon Quality Engineering",
    year: "2018",
    highlighted: false
  },
  {
    id: "cert-19",
    title: "Good Documentation Practice (GDP) & Record Integrity",
    issuer: "Beacon Compliance Team",
    year: "2019",
    highlighted: false
  },
  {
    id: "cert-20",
    title: "ISO 14001:2015 Environmental Management Audits",
    issuer: "Multiple Health Pharma Quality Group",
    year: "2021",
    highlighted: false
  },
  {
    id: "cert-21",
    title: "Lockout-Tagout (LOTO) & Machine Guarding Safety Compliance",
    issuer: "Abdul Monem Ltd Safety Council",
    year: "2024",
    highlighted: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "skill-cat-1",
    category: "Production & Operations",
    skills: [
      "Production Management",
      "Capacity Planning",
      "Process Optimization",
      "Man-Machine Management",
      "cGMP Manufacturing",
      "Line Efficiency Optimization",
      "Cost Minimization"
    ]
  },
  {
    id: "skill-cat-2",
    category: "Quality & Compliance",
    skills: [
      "Quality Assurance (QA)",
      "Quality Control (QC)",
      "GMP Compliance",
      "Good Laboratory Practice (GLP)",
      "Good Documentation Practice (GDP)",
      "ISO 22000:2018 (FSMS)",
      "HACCP Controls",
      "IMB / GAO Security Auditing",
      "Data Integrity Checks"
    ]
  },
  {
    id: "skill-cat-3",
    category: "Technical & Chemistry",
    skills: [
      "Analytical Chemistry",
      "NMR Spectroscopy",
      "Inductively Coupled Plasma (ICP)",
      "Hazard Mitigation",
      "Standard Operating Procedures (SOP)",
      "Batch Manufacturing Records (BMR)",
      "Batch Packaging Records (BPR)"
    ]
  },
  {
    id: "skill-cat-4",
    category: "Management & Leadership",
    skills: [
      "Team Leadership & Training",
      "Change Management",
      "Project Budgeting",
      "Operational Risk Assessment",
      "Supplier Coordination"
    ]
  },
  {
    id: "skill-cat-5",
    category: "Systems & Languages",
    skills: [
      "SAP ERP Solutions",
      "Inventory Management Systems",
      "Korean Language (Intermediate)",
      "Bengali (Native)",
      "English (Professional)"
    ]
  }
];
