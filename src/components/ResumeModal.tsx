/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Printer, Download, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Sparkles } from "lucide-react";
import { experiences, educationList, certifications, skillCategories } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 no-print">
      <div 
        className="relative bg-white text-slate-800 w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200"
        id="resume-modal-container"
      >
        {/* Header Options */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-medium text-slate-500 font-display">Tazul Islam's Official Resume</span>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-sm font-medium transition cursor-pointer"
              title="Print or Save to PDF"
              id="print-resume-btn"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-400 hover:text-slate-600 transition cursor-pointer"
              aria-label="Close modal"
              id="close-resume-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Container (Scrollable & Styled for Screen/Print) */}
        <div className="overflow-y-auto flex-1 p-8 sm:p-12 bg-white" id="printable-resume-body">
          <div className="max-w-3xl mx-auto">
            {/* Header / Name */}
            <div className="text-center pb-8 border-b border-slate-200">
              <h1 className="text-3xl font-bold font-display text-slate-900 tracking-tight">TAZUL ISLAM</h1>
              <p className="text-lg font-medium text-teal-700 font-sans mt-1">Manager (Production)</p>
              <p className="text-sm text-slate-500 font-display uppercase tracking-wider mt-1">Food, Beverage & Pharmaceuticals Specialist</p>
              
              {/* Contacts info Grid */}
              <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-sm text-slate-600 mt-4 font-mono">
                <span className="flex items-center space-x-1">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a href="mailto:tazulislam4600@yahoo.com" className="hover:underline">tazulislam4600@yahoo.com</a>
                </span>
                <span className="flex items-center space-x-1">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <a href="tel:+8801921460081" className="hover:underline">+880 192 1460 081</a>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Dhaka, Bangladesh</span>
                </span>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {/* Left Column (Main details of EXP) */}
              <div className="md:col-span-2 space-y-8">
                {/* Executive Summary */}
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-teal-600 pb-1 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <span>Executive Summary</span>
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 mt-3 font-sans">
                    Food and beverage industry professional with over 11 years of experience as a chemist, senior officer, assistant manager, and manager. Expert in decision-making, reporting, monitoring, evaluating action plans, production planning, and forecasting. Proven technical leadership in food manufacturing, bakery product formulation, process development, and cost minimization. Goal-oriented manager dedicated to maximizing line outputs while maintaining strict safety and regulatory compliances.
                  </p>
                </div>

                {/* Professional Experience */}
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-teal-600 pb-1 flex items-center space-x-2 mb-4">
                    <Briefcase className="w-4 h-4 text-teal-600" />
                    <span>Professional Experience</span>
                  </h2>
                  
                  <div className="space-y-6">
                    {experiences.map((exp) => (
                      <div key={exp.id} className="group">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-base font-bold text-slate-950 font-display">{exp.role}</h3>
                            <p className="text-sm font-semibold text-slate-700">{exp.company}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-mono block">
                              {exp.duration}
                            </span>
                            <span className="text-xs text-slate-400 block mt-1">{exp.location}</span>
                          </div>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 mt-2 text-xs text-slate-600 font-sans leading-relaxed">
                          {exp.highlights.map((h, idx) => (
                            <li key={idx}>
                              {/* Shorten slightly for high-density CV display */}
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (Education, Certs, Skills keys) */}
              <div className="space-y-8">
                {/* Core Expertise / Skills */}
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-teal-600 pb-1 flex items-center space-x-2">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>Core Expertise</span>
                  </h2>
                  <div className="space-y-4 mt-3">
                    {skillCategories.map((cat) => (
                      <div key={cat.id}>
                        <h4 className="text-xs font-bold text-slate-900 font-display">{cat.category}</h4>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {cat.skills.slice(0, 5).map((sk, index) => (
                            <span key={index} className="text-[10px] bg-slate-100/80 font-mono text-slate-700 px-1.5 py-0.5 rounded">
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-teal-600 pb-1 flex items-center space-x-2 mb-3">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    <span>Education</span>
                  </h2>
                  <div className="space-y-3">
                    {educationList.map((edu) => (
                      <div key={edu.id} className="text-xs">
                        <h4 className="font-bold text-slate-900 leading-tight">{edu.degree}</h4>
                        <p className="text-slate-600">{edu.major}</p>
                        <p className="text-slate-500 font-mono text-[10px]">{edu.institution} | {edu.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Licenses & Certifications (Featured) */}
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-teal-600 pb-1 flex items-center space-x-2 mb-3">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>Selected Certifications</span>
                  </h2>
                  <div className="space-y-2.5">
                    {certifications.slice(0, 8).map((cert) => (
                      <div key={cert.id} className="text-xs border-l-2 border-teal-500 pl-2">
                        <h4 className="font-bold text-slate-900 leading-tight">{cert.title}</h4>
                        <p className="text-slate-500 font-mono text-[10px]">{cert.issuer} ({cert.year})</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info for print advice */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 text-center text-xs text-slate-400 font-display flex flex-col sm:flex-row items-center justify-between">
          <span>Printed on: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>Tip: Save as PDF in the Print dialog with background graphics enabled.</span>
        </div>
      </div>

      {/* Styled Printable Frame (visible during Print only) */}
      <style>{`
        @media print {
          /* Hide anything except the main element */
          body * {
            visibility: hidden;
          }
          #print-resume-btn, #close-resume-modal-btn, #resume-modal-container, .no-print, nav, footer {
            display: none !important;
          }
          #printable-resume-body, #printable-resume-body * {
            visibility: visible;
          }
          #printable-resume-body {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
}
