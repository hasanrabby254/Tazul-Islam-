/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Mail, Award, FileText, Send, Linkedin, User, Briefcase, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleContactScroll = () => {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-32 bg-gradient-to-br from-[#020b1e] via-[#091b38] to-[#123066] text-white overflow-hidden"
    >
      {/* Premium background grid & visual elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 border-b-2 border-[#2dd4bf]/30 shadow-[inset_0_-10px_20px_rgba(45,212,191,0.05)]"></div>
      
      {/* Soft luxurious glowing orbs */}
      <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/15 to-cyan-500/10 rounded-full blur-[140px] -z-0 pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-blue-500/15 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
      <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-[#2dd4bf]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 animate-float">
        
        {/* PREMIUM THREE-COLUMN HERO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* ================= LEFT SIDE COLUMN (Span 4) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-center text-left space-y-6 sm:space-y-7"
          >
            {/* Small glowing premium badge */}
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-extrabold tracking-widest text-[#2dd4bf] uppercase bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/25 shadow-[0_0_15px_rgba(45,212,191,0.15)]">
                <span className="w-2.5 h-2.5 bg-[#2dd4bf] rounded-full animate-pulse"></span>
                <span>Senior Executive Sector</span>
              </span>
            </div>

            {/* Large Bold Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight font-display">
                Hey There,<br />
                I'm Tazul<br />
                <span className="bg-gradient-to-r from-[#2dd4bf] via-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm font-black">
                  Islam
                </span>
              </h1>
              
              {/* Short professional description */}
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-medium font-sans">
                Senior executive operations & chemistry leader with over 11 years of proven success directing sterile manufacturing pipelines, plant security, and cGMP compliance directly on the factory floor.
              </p>

              {/* Verified Professional Email link */}
              <div className="pt-2">
                <a 
                  href="mailto:tazulislam4600@yahoo.com" 
                  className="inline-flex items-center space-x-2.5 text-base text-teal-300 hover:text-white font-sans font-bold transition-all group bg-slate-900/50 border border-teal-500/20 px-3.5 py-2 rounded-xl hover:bg-slate-900/80 hover:border-teal-400/40 shadow-lg"
                  id="hero-email-link"
                >
                  <Mail className="w-4.5 h-4.5 text-[#c29d53] group-hover:text-teal-300 shrink-0" />
                  <span className="tracking-wide">tazulislam4600@yahoo.com</span>
                </a>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-3 sm:gap-4 font-sans">
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-5 py-3.5 bg-gradient-to-r from-[#c29d53] to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 rounded-xl font-extrabold shadow-lg shadow-[#c29d53]/30 hover:shadow-[#c29d53]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer text-xs uppercase tracking-wider relative overflow-hidden group"
                id="hero-download-resume-btn"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <FileText className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Get Resume (PDF)</span>
              </button>

              <button
                onClick={handleContactScroll}
                className="flex items-center space-x-2 px-5 py-3.5 border border-[#2dd4bf]/40 hover:border-[#2dd4bf] text-[#2dd4bf] hover:text-white rounded-xl font-bold bg-[#2dd4bf]/5 hover:bg-[#2dd4bf]/10 shadow-[0_0_15px_rgba(45,212,191,0.05)] hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer text-xs uppercase tracking-wider"
                id="hero-contact-btn"
              >
                <span>Get In Touch</span>
                <ChevronRight className="w-4 h-4 text-[#2dd4bf]" />
              </button>
            </div>

            {/* Experience Mini Stat Counter */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10 max-w-xs">
              <span className="text-5xl sm:text-6xl font-black text-[#c29d53] tracking-tight font-display drop-shadow">
                11+
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold tracking-widest text-[#2dd4bf] uppercase font-mono">
                  YEARS OF EXCELLENT
                </span>
                <span className="text-xs font-black text-white uppercase font-sans tracking-wide leading-none">
                  EXPERIENCE
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= CENTER COLUMN (Span 4) ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative py-8 lg:py-0"
          >
            {/* Glowing teal background layout shape behind image */}
            <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full shadow-[0_0_60px_rgba(45,212,191,0.2)] bg-teal-500/5 animate-pulse z-0 pointer-events-none"></div>
            
            {/* Portrait bounding container styled as exquisite glass box with absolutely no borders */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-950/25 backdrop-blur-md group select-none z-10 transition-all duration-500">
              
              {/* Radial gradient shadow gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none"></div>

              {/* Circular cyan/teal backdrop elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl z-0 pointer-events-none"></div>

              {/* Realistic Executive Cutout Portrait Image */}
              <img 
                src="https://i.postimg.cc/9Q7b5hn6/Chat-GPT-Image-Jun-11-2026-01-26-01-PM.png" 
                alt="Tazul Islam Portrait" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[2.2rem] scale-102 group-hover:scale-105 transition-all duration-700 select-none pointer-events-none relative z-10"
                id="hero-portrait-img"
              />

              {/* Premium Luxury Signature Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col text-left p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md">
                <span className="font-signature text-2xl text-[#2dd4bf] tracking-wide block select-none">
                  Tazul Islam
                </span>
                <span className="text-[9px] font-bold text-[#c29d53] uppercase tracking-wider block mt-0.5 font-mono">
                  Production Operations Executive
                </span>
              </div>
            </div>

            {/* Interactive floating particles to enhance layout */}
            <div className="absolute top-10 left-4 w-3 h-3 bg-amber-500 rounded-full blur-[2px] opacity-40 animate-bounce"></div>
            <div className="absolute bottom-20 right-4 w-2 h-2 bg-[#2dd4bf] rounded-full blur-[1px] opacity-50 animate-pulse"></div>
          </motion.div>

          {/* ================= RIGHT COLUMN (Span 4) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col space-y-6 text-left"
          >
            {/* Elegant Italic Quote snippet */}
            <div className="space-y-3 relative">
              {/* Large quote marks with brand color */}
              <span className="absolute -top-6 -left-3 text-7xl font-serif text-teal-500/10 select-none pointer-events-none">“</span>
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#2dd4bf] font-medium leading-relaxed max-w-sm pl-4 border-l-2 border-[#2dd4bf]/40">
                "I design safely efficient, compliant processing systems."
              </blockquote>
              
              {/* Professional Summary Paragraph */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed font-sans max-w-sm pl-4">
                Dedicated to maintaining peak standards of pharmaceutical and safety-critical manufacturing. Formulating optimal cost-saving measures through strict compliance and smart system organization.
              </p>
            </div>

            {/* Premium Gold Certification Glass Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/15 p-5 rounded-2xl shadow-xl flex items-start space-x-3.5 hover:bg-[#c29d53]/5 hover:border-[#c29d53]/45 hover:shadow-[0_0_25px_rgba(194,157,83,0.15)] transition-all duration-300 group">
              <div className="p-3 bg-amber-500/15 border border-amber-500/20 rounded-xl text-[#c29d53] group-hover:scale-105 transition-transform shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#c29d53] uppercase">
                  Operational Standard
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  Highly certified in cGMP operating guidelines, Nestlé Quality Systems (NQS), ISO 22000, and standard GAO auditing compliance parameters.
                </p>
              </div>
            </div>

            {/* Premium Cyan Target Position Glass Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/15 p-5 rounded-2xl shadow-xl flex items-start space-x-3.5 hover:bg-[#2dd4bf]/5 hover:border-[#2dd4bf]/45 hover:shadow-[0_0_25px_rgba(45,212,191,0.15)] transition-all duration-300 group">
              <div className="p-3 bg-teal-500/15 border border-teal-500/20 rounded-xl text-[#2dd4bf] group-hover:scale-105 transition-transform shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#2dd4bf] uppercase">
                  Current Position Target
                </h4>
                <p className="text-[11px] text-slate-300 font-sans font-semibold leading-relaxed">
                  Senior Business Unit Lead / Production Manager at high-capacity food safety or pharmaceutical operations.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Modern animated scroll indicator */}
        <div className="hidden sm:flex justify-center mt-12 lg:mt-16">
          <motion.a 
            href="#summary" 
            className="flex flex-col items-center text-[10px] text-slate-400 hover:text-[#2dd4bf] transition-colors cursor-pointer group uppercase tracking-widest font-mono"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <span className="mb-1">Scroll to Summary</span>
            <ArrowDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2dd4bf]" />
          </motion.a>
        </div>

      </div>

      {/* Seamless curve divider connecting into dark background section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px] pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[50px] sm:h-[80px] lg:h-[110px] fill-[#FAF8F5]"
        >
          <path d="M0,80 C150,110 350,120 600,120 C900,120 1050,30 1200,90 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}

