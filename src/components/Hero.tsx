/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, Mail, Award, FileText, ChevronRight, FlaskConical, Target, Users, TrendingUp, ShieldCheck } from "lucide-react";

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
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 bg-gradient-to-br from-[#16a285] via-[#5be2c6] to-[#d8fbf4] text-slate-850 overflow-hidden"
    >
      {/* High-quality laboratory environment blended background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05] pointer-events-none select-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop')" }}
      />

      {/* Premium background grid & visual elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,143,118,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-80 border-b border-teal-100/40"></div>
      
      {/* Symmetrical dot matrix on the far left (capturing layout detail from mockup) */}
      <div 
        className="absolute left-6 top-1/4 w-12 h-44 opacity-25 select-none hidden md:block" 
        style={{ backgroundImage: "radial-gradient(circle, #0a8f76 2.5px, transparent 2.5px)", backgroundSize: "14px 14px" }} 
      />

      {/* Soft luxurious glowing orbs */}
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/15 to-teal-300/15 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Floating chemical molecules / vectors representing atomic structures */}
      <div className="absolute top-24 right-[16%] w-36 h-36 opacity-30 text-teal-600 pointer-events-none select-none hidden md:block animate-float">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="50" r="5" className="fill-teal-500 opacity-70" />
          <circle cx="50" cy="20" r="7" className="fill-teal-600" />
          <circle cx="50" cy="80" r="4.5" className="fill-teal-400 opacity-50" />
          <circle cx="80" cy="50" r="6" className="fill-teal-700" />
          <line x1="20" y1="50" x2="50" y2="20" stroke="currentColor" />
          <line x1="50" y1="20" x2="80" y2="50" stroke="currentColor" />
          <line x1="20" y1="50" x2="50" y2="80" stroke="currentColor" />
          <line x1="50" y1="80" x2="80" y2="50" stroke="currentColor" />
        </svg>
      </div>

      <div className="absolute top-1/3 left-[42%] w-28 h-28 opacity-20 text-cyan-600 pointer-events-none select-none hidden xl:block animate-pulse">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="30" cy="30" r="4" className="fill-cyan-400" />
          <circle cx="70" cy="40" r="4" className="fill-cyan-500" />
          <circle cx="50" cy="70" r="4.5" className="fill-cyan-600" />
          <line x1="30" y1="30" x2="70" y2="40" stroke="currentColor" />
          <line x1="70" y1="40" x2="50" y2="70" stroke="currentColor" />
          <line x1="50" y1="70" x2="30" y2="30" stroke="currentColor" />
        </svg>
      </div>

      {/* Floating Flask outlines */}
      <div className="absolute left-[38%] top-[24%] opacity-[0.12] select-none pointer-events-none hidden lg:block text-[#0a8f76]">
        <FlaskConical className="w-16 h-16" strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* PREMIUM TWO-COLUMN HERO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
          
          {/* ================= LEFT SIDE COLUMN (Span 7) ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-7"
          >
            {/* Small glowing premium badge */}
            <div>
              <span className="inline-flex items-center space-x-2 text-xs font-mono font-extrabold tracking-widest text-slate-900 uppercase bg-white/95 px-4.5 py-2 rounded-full border border-teal-200/50 shadow-md">
                <FlaskConical className="w-4 h-4 text-[#0a8f76] animate-pulse" />
                <span>Senior Executive Section</span>
              </span>
            </div>

            {/* Large Bold Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6.5xl font-black text-slate-900 tracking-tight leading-tight font-display">
                Hey There,<br />
                I'm Tazul <span className="inline-block animate-bounce origin-bottom cursor-pointer hover:scale-110 transition-transform">👋</span><br />
                <span className="relative inline-block font-black text-transparent bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 bg-clip-text">
                  Islam
                  {/* Decorative handwriting underlines exactly as shown in screenshot */}
                  <svg className="absolute -bottom-2.5 left-0 w-full h-3 text-teal-500/80" preserveAspectRatio="none" viewBox="0 0 100 10" fill="none">
                    <path d="M1 7.5 Q35 2 65 5 T99 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              {/* Short professional description precisely matching text of screenshot */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium font-sans">
                Senior executive operations & chemistry leader with over 12 years of proven success in ensuring high-capacity Fish Farm, fructi and pipelined meat, food safety regulations, and GMP/GFSI compliance on the factory floor.
              </p>

              {/* Verified Professional Email link inside capsule */}
              <div className="pt-2">
                <div className="inline-flex items-center space-x-2.5 bg-white border border-slate-200/80 shadow-md px-4 py-2.5 rounded-2xl">
                  <div className="p-1 bg-teal-50 rounded-lg">
                    <Mail className="w-4 h-4 text-[#0a8f76]" />
                  </div>
                  <span className="text-sm font-sans font-bold text-slate-800 select-all">tazulislam4600@yahoo.com</span>
                </div>
              </div>
            </div>

            {/* Call to Actions matching mock colors exactly */}
            <div className="flex flex-wrap gap-4 font-sans pt-2">
              <button
                onClick={onOpenResume}
                className="group flex items-center space-x-2 px-6 py-4 bg-gradient-to-r from-[#f59e0b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#c2410c] text-white rounded-2xl font-black shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 shadow-md transition-all duration-300 transform cursor-pointer text-xs uppercase tracking-wider font-display"
                id="hero-download-resume-btn"
              >
                <FileText className="w-5 h-5 shrink-0" />
                <span>Get Resume (PDF)</span>
                <span className="text-sm font-bold ml-1">↗</span>
              </button>

              <button
                onClick={handleContactScroll}
                className="flex items-center space-x-2 px-6 py-4 border border-slate-300/80 hover:border-[#0a8f76] text-slate-700 hover:text-[#0a8f76] rounded-2xl font-bold bg-white hover:bg-slate-50 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 transform cursor-pointer text-xs uppercase tracking-wider font-display"
                id="hero-contact-btn"
              >
                <span>Get In Touch</span>
                <ChevronRight className="w-4.5 h-4.5 text-slate-400 group-hover:text-[#0a8f76]" />
              </button>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN (Span 5) - Portal and Portrait ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:col-span-5 flex items-center justify-center relative py-6 lg:py-0"
          >
            {/* Masterpiece Glowing Double Ring / Teal Portal behind photo scaled to accommodate larger width */}
            <div className="absolute w-[350px] h-[350px] sm:w-[460px] sm:h-[460px] rounded-full border-4 border-dashed border-teal-400/20 animate-spin-slow pointer-events-none -z-10" />
            <div className="absolute w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] rounded-full border-[6px] border-teal-500/30 bg-radial-gradient from-teal-400/5 to-transparent shadow-[0_0_50px_rgba(10,143,118,0.25)] pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
            <div className="absolute w-[390px] h-[390px] sm:w-[500px] sm:h-[500px] rounded-full border-12 border-teal-500/10 pointer-events-none -z-10 blur-[1px]" />

            {/* Seamless Arch Bounding Container enlarged to showcase the impressive high-fidelity image in large view */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] aspect-[4/5] rounded-t-[18rem] rounded-b-[4rem] overflow-hidden shadow-2xl bg-[#e0f2fe]/40 backdrop-blur-md border-4 border-white select-none z-10 transition-all duration-500 hover:scale-[1.03]">
              
              {/* Image Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 pointer-events-none" />

              {/* Real Executive Cutout Portrait Image */}
              <img 
                src="https://i.postimg.cc/RVphMT9s/Chat-GPT-Image-Jun-10-2026-06-49-27-PM-(1).png" 
                alt="Tazul Islam Portrait" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-102 select-none pointer-events-none relative z-10"
                id="hero-portrait-img"
              />
            </div>

            {/* Signature on shoulder (Cursive elegant name) */}
            <div className="absolute -left-[12%] top-[32%] z-25 pointer-events-none select-none -rotate-12 hidden sm:block">
              <span className="font-signature text-4.5xl sm:text-5.5xl text-cyan-600 font-extrabold drop-shadow-md">
                Tazul Islam
              </span>
            </div>

            {/* Floating Target statistical badge */}
            <div className="absolute -right-[8%] bottom-[22%] bg-white p-4.5 rounded-2xl shadow-2xl border border-slate-100/80 z-20 w-[145px] hover:scale-105 transition-transform duration-300">
              <div className="p-2 w-9.5 h-9.5 bg-teal-500/10 text-[#0a8f76] rounded-full flex items-center justify-center mb-1.5 shadow-sm inline-block">
                <Target className="w-5.5 h-5.5" />
              </div>
              <span className="text-2.5xl sm:text-3xl font-black text-slate-900 block leading-none font-display">12+</span>
              <span className="text-[10px] font-bold text-slate-500 block leading-tight mt-1 uppercase tracking-wider font-sans">
                Years of Experience
              </span>
            </div>
            
            {/* Tiny vector design accents */}
            <div className="absolute top-12 left-4 w-3.5 h-3.5 bg-yellow-400 rounded-full blur-[1px] opacity-60 animate-bounce" />
            <div className="absolute bottom-24 left-8 w-2 h-2 bg-teal-400 rounded-full blur-[1px] opacity-70 animate-pulse" />
          </motion.div>

        </div>

        {/* BOTTOM STATS / BENTO INFO STRIP (Highly styled 4-Column Card) */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl rounded-[2rem] p-5 sm:p-7 w-full mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-25 max-w-[1040px] mx-auto select-none">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center justify-center text-center p-2.5 hover:scale-105 transition-transform">
            <div className="p-3 bg-[#0a8f76]/10 text-[#0a8f76] rounded-full mb-3 shadow-[0_4px_10px_rgba(10,143,118,0.1)]">
              <Users className="w-5.5 h-5.5" />
            </div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none">12+</span>
            <span className="text-[10px] font-extrabold text-slate-400 mt-1 uppercase tracking-widest font-mono">
              Years Experience
            </span>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center justify-center text-center p-2.5 border-l border-slate-100 hover:scale-105 transition-transform">
            <div className="p-3 bg-teal-500/10 text-[#0a8f76] rounded-full mb-3 shadow-[0_4px_10px_rgba(10,143,118,0.1)]">
              <TrendingUp className="w-5.5 h-5.5" />
            </div>
            <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-none">High-Capacity</span>
            <span className="text-[10px] font-extrabold text-slate-400 mt-2 uppercase tracking-widest font-mono">
              Fish Farm
            </span>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center justify-center text-center p-2.5 border-l border-slate-100 hover:scale-105 transition-transform">
            <div className="p-3 bg-emerald-500/10 text-emerald-700 rounded-full mb-3 shadow-[0_4px_10px_rgba(16,185,129,0.15)]">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-none">GMP/GFSI</span>
            <span className="text-[10px] font-extrabold text-slate-400 mt-2 uppercase tracking-widest font-mono">
              Compliance
            </span>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center justify-center text-center p-2.5 border-l border-slate-100 hover:scale-105 transition-transform">
            <div className="p-3 bg-amber-500/10 text-amber-700 rounded-full mb-3 shadow-[0_4px_10px_rgba(245,158,11,0.15)]">
              <Award className="w-5.5 h-5.5" />
            </div>
            <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-none">Food Safety</span>
            <span className="text-[10px] font-extrabold text-slate-400 mt-2 uppercase tracking-widest font-mono">
              Expert
            </span>
          </div>

        </div>

        {/* Modern animated scroll indicator */}
        <div className="hidden sm:flex justify-center mt-12">
          <motion.a 
            href="#summary" 
            className="flex flex-col items-center text-[9px] text-slate-450 hover:text-teal-700 transition-colors cursor-pointer group uppercase tracking-widest font-mono"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="mb-1 text-slate-400">Scroll to Summary</span>
            <ArrowDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700" />
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
