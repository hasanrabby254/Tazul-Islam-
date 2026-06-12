/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { BarChart2, ShieldCheck, Cpu, Heart, Code2, Check, Star, Settings } from "lucide-react";
import { skillCategories } from "../data";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Map category to icons
  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case "skill-cat-1":
        return <BarChart2 className="w-5 h-5 text-emerald-600" />;
      case "skill-cat-2":
        return <ShieldCheck className="w-5 h-5 text-rose-600" />;
      case "skill-cat-3":
        return <Cpu className="w-5 h-5 text-teal-600" />;
      case "skill-cat-4":
        return <Heart className="w-5 h-5 text-pink-600" />;
      case "skill-cat-5":
        return <Settings className="w-5 h-5 text-amber-600" />;
      default:
        return <Star className="w-5 h-5 text-slate-600" />;
    }
  };

  // Map category to border accent classes
  const getAccentColors = (catId: string) => {
    switch (catId) {
      case "skill-cat-1":
        return "border-emerald-500/20 bg-emerald-500/5 group-hover:border-emerald-500/50";
      case "skill-cat-2":
        return "border-rose-500/20 bg-rose-500/5 group-hover:border-rose-500/50";
      case "skill-cat-3":
        return "border-teal-500/20 bg-teal-500/5 group-hover:border-teal-500/50";
      case "skill-cat-4":
        return "border-pink-500/20 bg-pink-500/5 group-hover:border-pink-500/50";
      case "skill-cat-5":
        return "border-amber-500/20 bg-amber-500/5 group-hover:border-amber-500/50";
      default:
        return "border-slate-500/20 bg-slate-50/5 group-hover:border-slate-500/50";
    }
  };

  // Map category to grid layout classes for perfect centring/alignment of the last row
  const getGridLayoutClasses = (catId: string) => {
    switch (catId) {
      case "skill-cat-1":
      case "skill-cat-2":
      case "skill-cat-3":
        return "col-span-12 md:col-span-6 lg:col-span-4";
      case "skill-cat-4":
        return "col-span-12 md:col-span-6 md:col-start-auto lg:col-span-4 lg:col-start-3";
      case "skill-cat-5":
        return "col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-7";
      default:
        return "col-span-12 md:col-span-6 lg:col-span-4";
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 bg-gradient-to-br from-[#f1f5f9] via-[#f8fafc] to-[#f1f5f9] relative border-b border-slate-200/60 shadow-[inset_0_4px_30px_rgba(0,0,0,0.02)]"
    >
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-800 text-xs font-extrabold uppercase tracking-widest font-mono bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            Professional Competencies
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#2dd4bf] to-amber-500 mx-auto mt-4 rounded"></div>
          <p className="text-sm font-medium text-slate-600 mt-4 font-sans">
            A comprehensive matrix of engineering, compliance, chemical and leadership parameters key to high-throughput operations.
          </p>
        </div>

        {/* Skill Category Cards - Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {skillCategories.map((cat, idx) => {
            const isTargeted = selectedCategory === cat.id;
            
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                className={`group font-sans p-6 hover:shadow-2xl rounded-2xl border transition-all duration-300 text-left bg-white cursor-pointer select-none flex flex-col justify-between ${getGridLayoutClasses(cat.id)} ${
                  isTargeted 
                    ? "border-teal-500 ring-4 ring-teal-500/10 bg-white" 
                    : "border-slate-200"
                }`}
                id={`skill-card-${cat.id}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl border transition ${getAccentColors(cat.id)}`}>
                        {getCategoryIcon(cat.id)}
                      </div>
                      <h3 className="text-base font-extrabold font-display text-slate-800">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 font-mono">
                      {cat.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 tracking-wide rounded-lg hover:text-teal-700 hover:border-teal-500/30 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-[#c29d53] rounded-full flex-shrink-0"></span>
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Micro instructions / hint bottom */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-sans tracking-wide">
                  <span className="flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5 text-emerald-650" />
                    <span>Verified Audit Mastery</span>
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase text-teal-600 font-mono">
                    100% Core Competency
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Competence Highlight Block */}
        <div className="mt-12 p-8 md:p-12 bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto backdrop-blur-md">
          <div className="space-y-3 max-w-xl text-left">
            <span className="text-[10px] font-extrabold bg-amber-500/10 text-amber-700 px-3 py-1 rounded-full uppercase tracking-widest font-mono border border-amber-500/25">
              Operational Safety Standards
            </span>
            <h3 className="text-2xl font-bold font-display text-slate-900">
              Underpinned by ISO & Regulatory Frameworks
            </h3>
            <p className="text-sm font-medium text-slate-600 leading-relaxed font-sans">
              Expertise validated through multi-year applications on pharmaceutical lines and fast-moving food packaging operations. Consistently delivering compliance scores of 98%+ regarding GMP, GHP, GLP audits, and hazardous material management routines.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <span className="px-4 py-2.5 bg-slate-50 border border-slate-200 hover:border-teal-500 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 font-mono tracking-wide transition-colors">
              ★ ISO 22000:2018
            </span>
            <span className="px-4 py-2.5 bg-slate-50 border border-slate-200 hover:border-teal-500 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 font-mono tracking-wide transition-colors">
              ★ HACCP CONTROL
            </span>
            <span className="px-4 py-2.5 bg-slate-50 border border-slate-200 hover:border-teal-500 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 font-mono tracking-wide transition-colors">
              ★ cGMP AUDIT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
