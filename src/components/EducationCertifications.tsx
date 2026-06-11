/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { GraduationCap, Award, Search, CheckCircle2, ChevronRight, RefreshCw } from "lucide-react";
import { educationList, certifications } from "../data";

export default function EducationCertifications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllCerts, setShowAllCerts] = useState(false);

  // Filter certifications based on query
  const filteredCerts = useMemo(() => {
    if (!searchQuery.trim()) {
      return certifications;
    }
    const query = searchQuery.toLowerCase();
    return certifications.filter(
      (cert) =>
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.year.includes(query)
    );
  }, [searchQuery]);

  // Certifications to actually render based on "Show More" state
  const visibleCerts = useMemo(() => {
    if (showAllCerts || searchQuery.trim()) {
      return filteredCerts;
    }
    // Default show primary ones (highlighted) + first 2 additional ones
    return filteredCerts.slice(0, 7);
  }, [filteredCerts, showAllCerts, searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section 
      id="education" 
      className="py-24 bg-transparent relative"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-96 bg-teal-500/5 rounded-r-full -z-0 opacity-40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-800 text-xs font-extrabold uppercase tracking-widest font-mono bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            Education & Certifications
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#2dd4bf] to-amber-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Master Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: ACADEMICS (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 pb-2 border-b border-slate-200">
              <div className="p-2.5 bg-teal-500/10 border border-teal-500/20 text-teal-700 rounded-xl font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-slate-900 font-display">Academic Background</h3>
                <p className="text-xs text-slate-600">Degree pathways & major institutions</p>
              </div>
            </div>

            <div className="space-y-4">
              {educationList.map((edu) => (
                <div 
                  key={edu.id}
                  className="group p-6 bg-white border border-slate-200/80 rounded-2xl hover:shadow-lg hover:border-teal-500/30 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 font-sans relative overflow-hidden text-left"
                >
                  <div className="absolute top-0 right-0 w-2 h-full bg-[#2dd4bf]/40 group-hover:bg-[#2dd4bf] transition-colors duration-300"></div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold text-teal-700 bg-teal-55 px-2.5 py-0.5 rounded-full border border-teal-200">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-base font-bold text-slate-900 font-display mt-3 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 mt-1">
                    {edu.major}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1 font-sans flex items-center space-x-1">
                    <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                    <span>{edu.institution}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: CERTIFICATIONS STACK (Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-gradient-to-r from-amber-500 to-[#c29d53] text-slate-950 rounded-xl shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">Licenses & Certifications</h3>
                  <p className="text-xs text-slate-600">Specialized compliance, chemical and safety courses</p>
                </div>
              </div>

              {/* Mini Counter */}
              <div className="self-start sm:self-center">
                <span className="text-xs font-bold text-slate-800 font-mono bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                  Total: {certifications.length} Credentials
                </span>
              </div>
            </div>

            {/* Certification Search / Interactive bar */}
            <div className="relative font-sans bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-450" />
                <input
                  type="text"
                  placeholder="Filter certifications (e.g., ISO, GMP, SAP, Nestle, safety)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm pl-9 pr-8 py-2 border border-slate-200 rounded-lg bg-white placeholder-slate-400 focus:outline-[#2dd4bf] text-slate-900"
                  id="certifications-search-input"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-3 top-2 text-slate-400 hover:text-slate-800 font-sans text-sm focus:outline-none cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* List of Certs */}
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2 font-sans" id="certifications-scrollable-container">
              {visibleCerts.length > 0 ? (
                visibleCerts.map((cert) => (
                  <div 
                    key={cert.id}
                    className={`p-4 rounded-xl border transition-all duration-300 flex items-start space-x-3.5 text-left hover:scale-[1.01] hover:-translate-y-0.5 ${
                      cert.highlighted 
                        ? "bg-amber-500/5 border-amber-600/30 shadow-sm hover:border-[#c29d53] hover:shadow-[0_4px_12px_rgba(194,157,83,0.10)]" 
                        : "bg-white border-slate-200 hover:bg-slate-50/50 hover:border-teal-500/40 hover:shadow-[0_4px_12px_rgba(45,212,191,0.06)]"
                    }`}
                  >
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className={`w-5 h-5 ${cert.highlighted ? "text-[#c29d53]" : "text-teal-650"}`} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 font-display leading-snug">
                        {cert.title}
                      </h4>
                      <div className="flex flex-wrap items-center text-xs text-slate-500 gap-x-3 font-mono">
                        <span className="font-semibold text-slate-700">{cert.issuer}</span>
                        <span>•</span>
                        <span>Granted: {cert.year}</span>
                      </div>
                    </div>
                    {cert.highlighted && (
                      <span className="text-[9px] font-bold text-amber-700 bg-amber-500/10 border border-amber-400/30 px-1.5 py-0.5 rounded uppercase font-mono tracking-wider self-start shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <RefreshCw className="w-8 h-8 text-slate-400 animate-spin mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600 font-sans">No licenses match "{searchQuery}"</p>
                  <button onClick={handleClearSearch} className="text-xs text-teal-600 font-semibold underline mt-1 cursor-pointer font-sans block mx-auto">
                    View all certifications
                  </button>
                </div>
              )}
            </div>

            {/* Show More Actions (Only shows if no active search query) */}
            {!searchQuery.trim() && certifications.length > 7 && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-[#c29d53] hover:from-amber-600 hover:to-[#a17c36] text-slate-950 rounded-full text-xs font-bold shadow transition cursor-pointer"
                  id="show-more-certs-btn"
                >
                  <span>{showAllCerts ? "Show Featured Only" : `Show All ${certifications.length - 7} Certifications`}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${showAllCerts ? "rotate-90" : ""}`} />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
