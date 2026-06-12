/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { User, Briefcase, Building, Phone, Mail, MapPin, Quote } from "lucide-react";

export default function References() {
  const referencesData = [
    {
      name: "Dipak Kumar Dev",
      designation: "Chief Plant Officer",
      company: "PRAN-RFL GROUP",
      location: "Habiganj",
      phone: "+8801704133555",
      email: "cpo@hip.prangroup.com",
      initials: "DK",
      colorTheme: "from-teal-600 to-teal-500",
      accentBg: "bg-teal-500/5",
      accentBorder: "border-teal-500/20",
      badgeText: "bg-teal-50 text-[#0a8f76] border-teal-200"
    },
    {
      name: "Kazi Nazmul Hassan",
      designation: "CEO",
      company: "Abdul Monem Ltd",
      location: "Dhaka",
      phone: "+880715005051",
      email: "nazmul@amlbd.com",
      initials: "KN",
      colorTheme: "from-amber-600 to-amber-500",
      accentBg: "bg-amber-500/5",
      accentBorder: "border-amber-500/20",
      badgeText: "bg-amber-50 text-amber-750 border-amber-200"
    }
  ];

  return (
    <section 
      id="references" 
      className="py-24 bg-gradient-to-tr from-[#f8fafc] via-white to-[#f8fafc] relative overflow-hidden border-b border-slate-200/60 shadow-[inset_0_4px_30px_rgba(0,0,0,0.01)]"
    >
      {/* Dynamic background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute left-12 bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pb-2">
          <span className="text-teal-800 text-xs font-extrabold uppercase tracking-widest font-mono bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Professional Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3 tracking-tight">
            Executive References
          </h2>
          <div className="w-16 h-1.5 bg-[#2dd4bf] mx-auto mt-4 rounded"></div>
        </div>

        {/* References Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {referencesData.map((ref, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-350 flex flex-col justify-between hover:scale-[1.02] relative group hover:border-[#0a8f76]/20"
              id={`reference-card-${idx}`}
            >
              {/* Premium double accent corner borders */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent rounded-tr-3xl -z-10 group-hover:from-slate-100/50 transition-colors" />
              
              {/* Card visual elements */}
              <div className="space-y-6">
                
                {/* Header Profile Info */}
                <div className="flex items-center space-x-4">
                  {/* Outer circle layout */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${ref.colorTheme} p-[1.5px] shadow-md flex items-center justify-center shrink-0`}>
                    <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-bold text-slate-800 tracking-tight text-lg">
                      <span className="font-sans font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        {ref.initials}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 font-display tracking-tight">
                        {ref.name}
                      </h3>
                      <Quote className="w-4 h-4 text-slate-300 group-hover:text-teal-400 transition-colors shrink-0" />
                    </div>
                    {/* Role Tag badge */}
                    <span className="inline-flex items-center space-x-1.5 text-[11px] font-extrabold tracking-wide text-slate-500 uppercase mt-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{ref.designation}</span>
                    </span>
                  </div>
                </div>

                {/* Main corporate organizational details */}
                <div className="py-5 border-y border-slate-100 space-y-3.5 text-left text-sm text-slate-700 font-sans">
                  
                  {/* Company/Group */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-150">
                      <Building className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="leading-tight">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block font-mono">
                        Organization
                      </span>
                      <span className="font-extrabold text-slate-900">
                        {ref.company}
                      </span>
                    </div>
                  </div>

                  {/* Location (where applicable) */}
                  {ref.location && (
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-150">
                        <MapPin className="w-4 h-4 text-slate-500" />
                      </div>
                      <div className="leading-tight">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block font-mono">
                          Location
                        </span>
                        <span className="font-bold text-slate-800">
                          {ref.location}
                        </span>
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Secure communication contact parameters */}
              <div className="mt-6 pt-2 space-y-3">
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block text-left font-mono">
                  Direct Verification Channels
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-sans">
                  
                  {/* Phone Parameter Link */}
                  <a 
                    href={`tel:${ref.phone}`}
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-slate-100 hover:border-teal-500/30 transition text-xs font-semibold text-slate-755 hover:text-[#0a8f76]"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-500 transition-colors shrink-0" />
                    <span className="font-mono truncate">{ref.phone}</span>
                  </a>

                  {/* Email Parameter Link */}
                  <a 
                    href={`mailto:${ref.email}`}
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-slate-100 hover:border-teal-500/30 transition text-xs font-semibold text-slate-755 hover:text-[#0a8f76]"
                    title={ref.email}
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-500 transition-colors shrink-0" />
                    <span className="font-mono truncate">{ref.email}</span>
                  </a>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
