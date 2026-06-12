import { Experience, Education, Certification, SkillCategory } from "./types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Head Of Operations",
    company: "Igloo Food & Beverage (Abdul Monem Ltd.)",
    duration: "Nov 2024 – Present",
    location: "Kawran Bazar, Dhaka, Bangladesh",
    highlights: [
      "Manage end-to-end production operations (Man, Machine, Material) to maximize line output, optimize efficiency, and maintain peak capacity utilization.",
      "Achieve and maintain 98% Good Manufacturing Practices (GMP) compliance across all food processing halls.",
      "Maintain 100% compliance with safety requirements, leading teams to pass rigorous Integrated Management System (IMS) and Group Audit Office (GAO) audits.",
      "Direct preventive maintenance, timely breakdown recovery, and conduct root cause analyses (RCA) to minimize machinery downtime.",
      "Supervise raw materials and spare parts procurement, scheduling monthly plant start-ups and shutdowns to eliminate potential production losses.",
      "Implement robust LOTO (Lockout/Tagout) procedures and PPE inspection systems for secure factory operations.",
      "Serve as a core team member of the corporate Quality Management (QMS) and Environmental Management (EMS) steering committees.",
      "Lead regulatory compliance initiatives under ISO standards, Halal guidelines, and Bangladesh Standards and Testing Institution (BSTI) limits."
    ]
  },
  {
    id: "exp-2",
    role: "Assistant Manager (Production)",
    company: "PRAN-RFL Group (Mr. Noodles)",
    duration: "Dec 2021 – Nov 2024",
    location: "HIP, Sylhet, Bangladesh",
    highlights: [
      "Overseed absolute shift operations for Mr. Noodles processing lines (Instant, Cook & Stick, Cup, and Dry lines).",
      "Ensured strict conformance with ISO 22000:2018 parameters, standard GMP, GHP, and HACCP flowcharts.",
      "Cooperated proactively with R&D departments in raw material trials, recipe formulations, and scaling up product batches from pilot testing to large-scale lines.",
      "Led cost-minimization protocols through implementation of waste reduction programs and continuous process improvement initiatives (Kaizen, 5S).",
      "Conducted weekly supplier audits and evaluated incoming raw materials for spec adherence."
    ]
  },
  {
    id: "exp-3",
    role: "Chemist (Quality Assurance)",
    company: "Nestle Bangladesh Ltd. (Maggi Noodles)",
    duration: "Dec 2017 – Nov 2021",
    location: "Sreepur, Gazipur, Bangladesh",
    highlights: [
      "Executed analytical, physical-chemical, and laboratory testing protocols on raw materials, packaging elements, and finished Maggi Noodles.",
      "Managed audit preparation readiness for internal global Nestle teams and external regulatory authorities (Codex, US FDA 21 CFR, EU Food Safety, BRCGS).",
      "Created, reviewed, and finalized plant SOPs, HACCP flow diagrams, traceability records, and critical quality checklist databases.",
      "Facilitated investigations on batch quality deviations, establishing robust corrective actions (CAPA) to avoid reoccurrence."
    ]
  },
  {
    id: "exp-4",
    role: "Officer (Quality Control)",
    company: "Sajeeb Group",
    duration: "Jan 2013 – Nov 2017",
    location: "Rupganj, Narayanganj, Bangladesh",
    highlights: [
      "Supervised lab quality control tests for diversified products (Soft Drink Powder, Fruit Juice, Jam, Jelly, Sauce, Noodles, Pickles, Macaroni, Extruded Chips, Soya Nuggets).",
      "Conducted major QC tests: Acidity, Brix, pH, Moisture, Viscosity, specific gravity, peroxide value of oil (POV), and free fatty acid (FFA) tests.",
      "Evaluated Effluent Treatment Plant (ETP) parameters (water hardness, Cl, Fe, TDS, DO) to guarantee environment safety.",
      "Undertook laboratory-scale trial batches of new product lines, estimating manufacturing costs, and reviewing raw ingredient specifications."
    ]
  }
];

export const educationList: Education[] = [
  {
    id: "edu-1",
    degree: "Master of Science (M.Sc.)",
    major: "Chemistry (1st Class)",
    institution: "Govt. Titumir College, Dhaka",
    duration: "Graduated: 2015"
  },
  {
    id: "edu-2",
    degree: "Bachelor of Science (B.Sc.)",
    major: "Chemistry (2nd Class)",
    institution: "Govt. Titumir College, Dhaka",
    duration: "Graduated: 2014"
  },
  {
    id: "edu-3",
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    institution: "Noakhali Govt. College",
    duration: "Graduated: 2006"
  },
  {
    id: "edu-4",
    degree: "Secondary School Certificate (SSC)",
    major: "Science",
    institution: "Pratapgonj High School, Lakshmipur",
    duration: "Graduated: 2004"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Management of GMP Audits",
    issuer: "Bangladesh Society for Pharmaceutical Professionals (Dhaka University)",
    year: "2023",
    highlighted: true
  },
  {
    id: "cert-2",
    title: "Six Sigma Level-1 Yellow Belt",
    issuer: "PRAN-RFL Group",
    year: "2023",
    highlighted: true
  },
  {
    id: "cert-3",
    title: "Food Safety Management System (FSMS)-ISO-22000:2018",
    issuer: "SME Foundation",
    year: "2022",
    highlighted: true
  },
  {
    id: "cert-4",
    title: "Regulatory Requirements on Data Integrity Management in cGMP",
    issuer: "Bangladesh Society for Pharmaceutical Professionals (Dhaka University)",
    year: "2022",
    highlighted: true
  },
  {
    id: "cert-5",
    title: "Korean Language Learning Certificate",
    issuer: "Ekush Language Institute",
    year: "2022",
    highlighted: false
  },
  {
    id: "cert-6",
    title: "Japanese Language Certificate (06 Month)",
    issuer: "JUAAB (Dhaka)",
    year: "2022",
    highlighted: false
  },
  {
    id: "cert-7",
    title: "ERP SAP Software (PP & MM Modules)",
    issuer: "ECL Systems Ltd",
    year: "2021",
    highlighted: true
  },
  {
    id: "cert-8",
    title: "Integrated Management Systems (ISO, QMS, EMS, SHE, OHSAS, MSDS)",
    issuer: "Multiple Health Pharma Ltd.",
    year: "2021",
    highlighted: true
  },
  {
    id: "cert-9",
    title: "Lean Six Sigma Course",
    issuer: "PRAN-RFL (Habigonj)",
    year: "2022",
    highlighted: false
  },
  {
    id: "cert-10",
    title: "Productivity Management Training",
    issuer: "BUET (Dhaka)",
    year: "2018",
    highlighted: false
  },
  {
    id: "cert-11",
    title: "HACCP Plan & CCP, OPRP Management",
    issuer: "Nestle Bangladesh Ltd.",
    year: "2014",
    highlighted: false
  },
  {
    id: "cert-12",
    title: "Good Laboratory Practice (GLP) and GMP",
    issuer: "Nestle Bangladesh Ltd.",
    year: "2014",
    highlighted: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "skill-cat-1",
    category: "Operations & Processing",
    skills: [
      "Production Planning",
      "Capacity Optimization",
      "Man & Machine Management",
      "Preventive Maintenance",
      "Raw Materials Procurement",
      "Lean Six Sigma & Kaizen",
      "Workplace Organize (5S)",
      "Spare Parts Planning"
    ]
  },
  {
    id: "skill-cat-2",
    category: "Quality Control Tests",
    skills: [
      "Acidity, pH & Brix tests",
      "Oil Peroxide Value (POV)",
      "Moisture & Viscosity",
      "Free Fatty Acid (FFA)",
      "Microleak Verification",
      "Microbial: TPC, Yeast & Mold",
      "Lab Equipment Verification",
      "Requisition Estimation"
    ]
  },
  {
    id: "skill-cat-3",
    category: "Food Safety & Regulations",
    skills: [
      "HACCP System Designs",
      "ISO 22000:2018 (FSMS)",
      "Good Manufacturing Practice (GMP)",
      "Good Laboratory Practice (GLP)",
      "Halal & BSTI Guidelines",
      "Codex Alimentarius Standards",
      "US FDA (21 CFR) Review",
      "BRCGS for Food Safety"
    ]
  },
  {
    id: "skill-cat-4",
    category: "Project & Policy Dev",
    skills: [
      "BTEB Technical Committee Member",
      "CBLM Standard Writing",
      "SEIP-BAPA Projects Coordination",
      "ILO Apprenticeship Program",
      "SCORE Finance Team Program",
      "ETP Treatment (TDS, DO, Fe)",
      "Bilingual Training (Spoken & Written)"
    ]
  },
  {
    id: "skill-cat-5",
    category: "Tools & Languages",
    skills: [
      "SAP ERP Solutions (PP/MM)",
      "MS Office Suite Proficiency",
      "English (Spoken & Written Fluent)",
      "Bengali (Native Language)",
      "Japanese (Spoken & Listening Avg)",
      "Korean Language (Intermediate)",
      "Bilingual Technical Reporting"
    ]
  }
];
