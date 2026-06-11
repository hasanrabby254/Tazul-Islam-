/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, MapPin, Briefcase, Calendar, Star, Building } from "lucide-react";
import { experiences } from "../data";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1"); // Default expand the first one

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      className="py-24 bg-transparent relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-800 text-xs font-extrabold uppercase tracking-widest font-mono bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#2dd4bf] to-amber-500 mx-auto mt-4 rounded"></div>
          <p className="text-sm font-medium text-slate-600 mt-4 font-sans">
            11+ years of progressive technical leadership. Click on any role to explore key operational and regulatory achievements.
          </p>
        </div>

        {/* Experience Timeline Grid / Stack */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Center-Left bar (timeline line) */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-2 bottom-2 w-1.5 bg-slate-200 rounded-full"></div>

          {/* Timeline Nodes */}
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isOpen = expandedId === exp.id;
              
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16 md:pl-20 animate-fade-in"
                >
                  {/* Circle Pin indicator on Vertical line */}
                  <div 
                    onClick={() => toggleExpand(exp.id)}
                    className={`absolute left-1 sm:left-3 md:left-5 top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 flex items-center justify-center transition-all cursor-pointer shadow-md ${
                      isOpen 
                        ? "bg-white border-[#2dd4bf] scale-110 text-[#c29d53]" 
                        : "bg-white border-slate-200 text-slate-450 hover:border-[#2dd4bf] hover:text-slate-800"
                    } z-10`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Expander Box Card */}
                  <div 
                    className={`bg-white/95 backdrop-blur-md border text-left p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl ${
                      isOpen ? "ring-4 ring-teal-500/10 border-teal-500/30 bg-white" : "border-slate-200/80"
                    }`}
                  >
                    {/* Header bar click triggers collapse */}
                    <div 
                      onClick={() => toggleExpand(exp.id)}
                      className="flex items-start justify-between cursor-pointer select-none"
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display leading-tight">
                            {exp.role}
                          </h3>
                          {index === 0 && (
                            <span className="text-[10px] bg-teal-600 font-extrabold text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                              Current
                            </span>
                          )}
                        </div>

                        {/* Company Details */}
                        <div className="flex flex-wrap items-center text-slate-600 text-sm gap-x-4 gap-y-1 font-sans">
                          <span className="flex items-center space-x-1.5 font-semibold text-slate-800">
                            <Building className="w-4 h-4 text-teal-600" />
                            <span>{exp.company}</span>
                          </span>
                          <span className="flex items-center space-x-1 text-slate-500">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span className="font-mono text-xs">{exp.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1 text-xs text-slate-500">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Dropdown carets */}
                      <div className="p-2 rounded-full hover:bg-slate-100 transition-colors shrink-0">
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-teal-600" : ""}`} />
                      </div>
                    </div>

                    {/* Expandable Highlight Section */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                           key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-teal-700 font-mono flex items-center space-x-1.5">
                              <Star className="w-4 h-4 fill-[#c29d53]/60 text-[#c29d53]" />
                              <span>Key Achievements & Projects</span>
                            </h4>
                            <ul className="space-y-2.5 font-sans">
                              {exp.highlights.map((bullet, k) => (
                                <li key={k} className="flex items-start space-x-2 text-sm text-slate-650 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
