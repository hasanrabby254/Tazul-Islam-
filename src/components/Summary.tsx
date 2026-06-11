/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Zap, TrendingDown, Target, HelpCircle, ShieldCheck } from "lucide-react";

export default function Summary() {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "Strategic Decision-making",
      desc: "Skilled in action plans formulation, forecasting, production planning, and resource monitoring."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
      title: "Compliance Leadership",
      desc: "Proven technical mastery in high-stakes auditing contexts (IMB, Coca-Cola KORE, FAO, cGMP)."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-teal-600" />,
      title: "Cost Minimization",
      desc: "Laser focused on reducing production and batch run costs through smart resource utilization."
    }
  ];

  return (
    <section 
      id="summary" 
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 pb-2">
          <span className="text-teal-800 text-xs font-extrabold uppercase tracking-widest font-mono bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Executive Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            Professional Summary
          </h2>
          <div className="w-16 h-1.5 bg-[#2dd4bf] mx-auto mt-4 rounded"></div>
        </div>

        {/* Layout details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Professional Portrait Column (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200/50 bg-white aspect-[4/5] hover:border-slate-300 transition-all duration-350">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(0,0,0,0.3)_100%)] z-10 pointer-events-none"></div>
              
              <img 
                src="https://i.postimg.cc/kGv0JCZG/Chat-GPT-Image-Jun-11-2026-12-08-14-PM.png"
                alt="Tazul Islam Executive"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-700 pointer-events-none select-none"
                id="summary-executive-img"
              />
              
              <div className="absolute bottom-4 left-4 right-4 z-20 p-3.5 bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 text-left">
                <span className="text-[10px] font-extrabold text-[#c29d53] uppercase tracking-wider font-mono block">Food & Pharma Operations</span>
                <p className="text-xs font-bold text-white mt-0.5 font-sans">Tazul Islam (Production Manager)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Area Grid (Span 7) which includes Statement and Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Main Statement Box (Span 7) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 bg-white/90 backdrop-blur-md border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
              id="summary-main-statement"
            >
              <h3 className="font-serif text-xl sm:text-2xl text-[#9a752c] font-semibold italic mb-5 leading-tight">
                "Dedicated to securing managerial excellence directly on the factory floor."
              </h3>
              
              <p className="text-slate-650 text-sm leading-relaxed font-sans mt-3">
                Food and beverage industry professional with over <strong>11 years of experience</strong> as a chemist, senior officer, assistant manager, and manager. Expert in decision-making, reporting, monitoring, evaluating action plans, production planning, and forecasting.
              </p>
              
              <p className="text-slate-650 text-sm leading-relaxed font-sans mt-3">
                Proven technical leadership in food manufacturing, bakery product formulation, process development, and raw/packaging materials quality optimization. Highly experienced with cGMP requirements, standard operating audits, and cross-functional team coordination. My goal is to secure a managerial position in the production department where I can drive robust scaling, optimize efficiency, and maintain absolute regulatory excellence.
              </p>

              <div className="flex items-center space-x-4 mt-6 p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <div className="p-2.5 bg-amber-500/10 rounded-lg">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">
                    Top Auditing Record
                  </h4>
                  <p className="text-[11px] text-slate-600 font-sans mt-0.5">
                    100% compliance record on all external agency manufacturing audits.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Leadership Traits Bento Panel (Span 5) */}
            <div className="md:col-span-5 space-y-4">
              {pillars.map((p, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="p-4 bg-white/95 border border-slate-200/70 rounded-xl flex items-start space-x-3.5 shadow-sm hover:bg-white hover:border-teal-400/40 hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(45,212,191,0.12)] transition-all duration-300 text-left"
                  id={`summary-pillar-${idx}`}
                >
                  <div className="p-2.5 bg-slate-50/80 rounded-lg shadow-inner flex-shrink-0 border border-slate-200/60">
                    {p.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800 font-display">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Soft decorative highlight */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 shadow-xl text-left">
                <span className="text-[9px] font-extrabold font-mono tracking-widest text-[#c29d53] uppercase">
                  CHEMISTRY ROOTS
                </span>
                <p className="text-xs font-semibold mt-1 font-display leading-snug">
                  M.Sc. & B.Sc. in Chemistry provides a deep physical understanding of stable mixing and laboratory audits.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
