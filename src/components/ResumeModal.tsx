/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  X, Printer, Download, Mail, Phone, MapPin, Award, BookOpen, 
  Briefcase, Sparkles, ZoomIn, ZoomOut, CheckCircle2, FileText,
  FileSpreadsheet, ExternalLink, RefreshCw
} from "lucide-react";
import { experiences, educationList, certifications, skillCategories } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<"pdf" | "web">("pdf");
  const [zoom, setZoom] = useState(100);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const zoomIn = () => {
    if (zoom < 150) setZoom(zoom + 10);
  };

  const zoomOut = () => {
    if (zoom > 70) setZoom(zoom - 10);
  };

  const resetZoom = () => {
    setZoom(100);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 md:p-6 no-print">
      <div 
        className="relative bg-slate-100 text-slate-800 w-full max-w-6xl h-full sm:h-[95vh] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-700/30"
        id="resume-modal-container"
      >
        {/* TOP STATUS BAR: Acrobat styled toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 py-3 border-b border-slate-200 bg-white shadow-sm gap-3 z-10">
          
          {/* File Name & Tab selection */}
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-red-500/10 text-red-600 rounded">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-left font-sans">
                <span className="text-xs sm:text-sm font-bold text-slate-800 block truncate max-w-[160px] sm:max-w-xs leading-none">
                  Md_Tazul_Islam_CV.pdf
                </span>
                <span className="text-[10px] font-semibold text-slate-450 uppercase tracking-wider block mt-0.5">
                  Original Uploaded Asset
                </span>
              </div>
            </div>

            {/* Quick tab switch between PDF view & Modern profile */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl ml-4 shrink-0 text-xs border border-slate-200">
              <button
                onClick={() => setActiveTab("pdf")}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 ${
                  activeTab === "pdf"
                    ? "bg-white text-[#0a8f76] shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span>Original PDF (7p)</span>
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 ${
                  activeTab === "web"
                    ? "bg-white text-[#0a8f76] shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <span>Interactive Web Summary</span>
              </button>
            </div>
          </div>

          {/* Viewer Tools (Show only in PDF mode to mirror actual PDF controls) */}
          <div className="flex items-center space-x-4">
            {activeTab === "pdf" && (
              <div className="hidden md:flex items-center space-x-2 bg-slate-100 p-1 rounded-xl text-slate-600 border border-slate-200">
                <button 
                  onClick={zoomOut}
                  className="p-1.5 hover:bg-white hover:text-slate-900 rounded-lg transition"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold font-mono px-1 select-none min-w-[40px] text-center">
                  {zoom}%
                </span>
                <button 
                  onClick={zoomIn}
                  className="p-1.5 hover:bg-white hover:text-slate-900 rounded-lg transition"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <div className="w-[1px] h-4 bg-slate-200 mx-1"></div>
                <button 
                  onClick={resetZoom}
                  className="p-1.5 hover:bg-white hover:text-slate-900 rounded-lg transition text-slate-400"
                  title="Reset Zoom"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="flex items-center space-x-1 sm:space-x-2">
              <button 
                onClick={handlePrint}
                className="flex items-center space-x-1 px-3 py-1.5 bg-[#0a8f76] hover:bg-[#075d4d] text-white rounded-lg text-xs font-bold transition shadow-sm"
                title="Print Document"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save as PDF</span>
              </button>
              
              <button 
                onClick={onClose}
                className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition"
                aria-label="Close modal"
                id="close-resume-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* TAB CONTENT 1: HIGH-FIDELITY PDF SIMULATOR */}
        {activeTab === "pdf" ? (
          <div 
            className="flex-1 overflow-y-auto bg-slate-500 p-4 sm:p-8 flex flex-col items-center select-text scroll-smooth"
            id="pdf-simulator-viewport"
          >
            {/* 7 Vertical High-Fidelity Paper Sheets */}
            <div 
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
              className="flex flex-col gap-6 sm:gap-10 transition-transform duration-200"
            >
              
              {/* ================= PAGE 1 ================= */}
              <div 
                className="bg-white w-[95vw] max-w-[800px] border border-slate-300 shadow-xl p-6 sm:p-12 md:p-16 relative text-slate-800 shrink-0 text-left font-sans flex flex-col justify-between"
                style={{ minHeight: "1130px" }}
                id="pdf-page-1"
              >
                <div>
                  {/* Top Header layout with Image */}
                  <div className="flex justify-between items-start border-b-2 border-slate-800 pb-4">
                    <div className="space-y-1.5 text-left pr-4">
                      <h1 className="text-2xl sm:text-3.5xl font-black font-sans tracking-tight text-slate-900 leading-tight">
                        CURRICULUM VITAE OF
                      </h1>
                      <h2 className="text-xl sm:text-2.5xl font-black text-slate-900 leading-none">
                        MD. TAZUL ISLAM
                      </h2>
                      <h3 className="text-sm font-extrabold text-teal-800 tracking-wide uppercase mt-1">
                        Head Of Operations
                      </h3>
                      <p className="text-xs font-bold text-slate-600 leading-snug">
                        Igloo Food & Beverage (Abdul Monem Ltd.), About 12+ Years Experience
                      </p>
                      <p className="text-xs text-slate-500 font-mono leading-none pt-1">
                        Email: <a href="mailto:tazulislam4600@yahoo.com" className="underline">tazulislam4600@yahoo.com</a> | Mobile: +8801921460081
                      </p>
                    </div>

                    {/* High-quality Portrait Cutout */}
                    <div className="shrink-0">
                      <img 
                        src="https://i.postimg.cc/RVphMT9s/Chat-GPT-Image-Jun-10-2026-06-49-27-PM-(1).png" 
                        alt="Tazul Islam CV Photo" 
                        className="w-20 h-24 sm:w-24 sm:h-28 object-cover border border-slate-300 rounded shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Career Summary */}
                  <div className="mt-6">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800">
                      Career Summary
                    </div>
                    <p className="text-xs text-slate-650 mt-3.5 leading-relaxed text-justify">
                      Experienced and Dynamic Leadership Position with 12+ years of progressive experience at Food & Beverage Company in Production & Quality Control, Food Safety, and Regulatory Compliance within bakery, confectionery, and beverage industries. Proven track record of leading QA/QC operations, implementing international food safety standards, and ensuring regulatory compliance. Recognized for driving product excellence, managing external audits, and supporting R&D innovation. Strong leadership in building high-performing teams and delivering consistent quality to achieve sustainable business success.
                    </p>
                  </div>

                  {/* Educational Qualification table */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800">
                      Educational Qualification
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-slate-350 mt-3 text-[10px] leading-tight">
                        <thead>
                          <tr className="bg-slate-50 text-slate-800 border-b border-slate-350">
                            <th className="border border-slate-350 px-2.5 py-2 text-left font-bold">Exam Title</th>
                            <th className="border border-slate-350 px-2.5 py-2 text-left font-bold">Group/Subject</th>
                            <th className="border border-slate-350 px-2.5 py-2 text-left font-bold">Name of the Institute</th>
                            <th className="border border-slate-350 px-2.5 py-2 text-center font-bold">Result</th>
                            <th className="border border-slate-350 px-2.5 py-2 text-center font-bold">Passing year</th>
                            <th className="border border-slate-350 px-2.5 py-2 text-center font-bold">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-300">
                            <td className="border border-slate-300 px-2.5 py-1.5 font-bold">Post Graduation</td>
                            <td className="border border-slate-300 px-2.5 py-1.5">M.Sc in Chemistry</td>
                            <td className="border border-slate-300 px-2.5 py-1.5">Govt. Titumir College, Dhaka</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center font-bold">1st Class</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center font-mono">2015</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center">1 years</td>
                          </tr>
                          <tr className="border-b border-slate-300">
                            <td className="border border-slate-300 px-2.5 py-1.5 font-bold">Graduation</td>
                            <td className="border border-slate-300 px-2.5 py-1.5">B.Sc. in Chemistry</td>
                            <td className="border border-slate-300 px-2.5 py-1.5">Govt. Titumir College, Dhaka</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center">2nd Class</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center font-mono">2014</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center font-mono">4 years</td>
                          </tr>
                          <tr className="border-b border-slate-300">
                            <td className="border border-slate-300 px-2.5 py-1.5 font-bold">Higher Secondary</td>
                            <td className="border border-slate-300 px-2.5 py-1.5">Science</td>
                            <td className="border border-slate-300 px-2.5 py-1.5">Noakhali Govt. College</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center font-mono">4.3 (out of 5)</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center font-mono">2006</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center">2 years</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-300 px-2.5 py-1.5 font-bold">Secondary</td>
                            <td className="border border-slate-300 px-2.5 py-1.5">Science</td>
                            <td className="border border-slate-300 px-2.5 py-1.5">Pratapgonj High School, Lakshmipur</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center font-mono">4.0 (out of 5)</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center font-mono">2004</td>
                            <td className="border border-slate-300 px-2.5 py-1.5 text-center">2 years</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Employment History */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800">
                      Employment History-Total Experience: 11+ years
                    </div>
                    
                    <div className="mt-3.5 space-y-2 text-xs">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <div><span className="font-bold">Designation:</span> Head Of Operations</div>
                        <div className="text-right font-mono"><span className="font-bold text-slate-800">Duration:</span> 09 Nov, 2024 to Continuing</div>
                        <div className="col-span-2"><span className="font-bold">Organization:</span> Igloo Food & Beverage (AIIM Food Ltd.)</div>
                        <div className="col-span-2"><span className="font-bold">Address:</span> Monem Business District, Kawran Bazar, Dhaka-1205.</div>
                      </div>
                      <p className="text-[11px] leading-tight text-slate-705 mt-2.5">
                        <span className="font-bold">Experience of the Products:</span> Noodles, Biscuits, Beverage, Chanachur, Confectionery (Chocolate, Candy), Dry Cake, Cup Cake, Toast, Quality In-charge Extruder Chips, Fried Peas, Wafer, Vermicelli, Lascha Semai, Powder Drinks, Aromatic Rice, Mustard oil, Spices.
                      </p>
                      
                      <div className="mt-4">
                        <span className="font-extrabold text-[11px] uppercase tracking-wide block text-slate-900">
                          Key Job Responsibilities as Operation Head
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 block mb-1">
                          ➢ Duties/Responsibilities:
                        </span>
                        <ul className="list-disc pl-5 mt-1.5 space-y-1 text-[11px] text-slate-700 leading-snug">
                          <li>Manage man, machine, and material to optimize production efficiency.</li>
                          <li>Maintain spare parts and raw material management.</li>
                          <li>Ensure production of high-quality products and achieve 98% GMP compliance.</li>
                          <li>Maintain 100% compliance with safety requirements and pass all audits (IMS and GAO).</li>
                          <li>Perform and oversee timely preventive maintenance and effective breakdown maintenance.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-right text-[10px] text-slate-400 font-mono mt-8">
                  Page 1 of 7
                </div>
              </div>


              {/* ================= PAGE 2 ================= */}
              <div 
                className="bg-white w-[95vw] max-w-[800px] border border-slate-300 shadow-xl p-6 sm:p-12 md:p-16 relative text-slate-800 shrink-0 text-left font-sans flex flex-col justify-between"
                style={{ minHeight: "1130px" }}
                id="pdf-page-2"
              >
                <div>
                  <ul className="list-disc pl-5 space-y-1.5 text-[11px] text-slate-700 leading-snug">
                    <li>Conduct root cause analysis to resolve operational issues and minimize machine downtime.</li>
                    <li>Organize and manage monthly plant start-up and shutdown schedules to minimize production losses.</li>
                    <li>Lead and support continuous improvement, problem-solving, and process improvement activities.</li>
                    <li>Provide training and development to laborers and production engineers.</li>
                    <li>Implement and maintain safety systems such as LOTO (Lockout/Tagout) and PPE (Personal Protective Equipment) inspections.</li>
                    <li>Conduct toolbox talks and raises awareness on safety and quality standards.</li>
                    <li>Ensure compliance with core and ISO procedures and documentation.</li>
                    <li>Serve as a core team member for Quality Management System (QMS) and Environmental Management System (EMS).</li>
                    <li>Communicate goals and objectives to team members and ensure alignment with company standards.</li>
                    <li>Promote and monitor Behavior-Based Safety (BBS) and Quality, Safety, and Environment (QSE) culture.</li>
                  </ul>

                  {/* Quality Assurance & Regulatory Compliance */}
                  <div className="mt-8">
                    <span className="font-extrabold text-xs uppercase text-slate-900 block mb-2 border-b border-slate-200 pb-1">
                      ➢ Quality Assurance & Regulatory Compliance
                    </span>
                    <ul className="list-disc pl-5 space-y-1.5 text-[11px] text-slate-705 leading-relaxed mb-4">
                      <li>Develop, implement, and monitor QA programs, SOPs, Good Manufacturing Practices (GMP), and Food Safety Management Systems (FSMS/HACCP), HALAL and BSTI guidelines.</li>
                      <li>Validate and verify analytical methods, lab equipment, and testing protocols to maintain data integrity.</li>
                      <li>Maintain readiness for internal, third-party, and certification audits (HALAL, ISO, BSTI, etc.)</li>
                      <li>Collaborate with QA team to improve lab processes, ensure traceability, and align testing with product safety and regulatory requirements.</li>
                      <li>
                        Ensure compliance with international food safety standards such as:
                        <ul className="list-circle pl-6 mt-1 space-y-0.5 text-slate-600">
                          <li>Codex Alimentarius</li>
                          <li>US FDA (21 CFR)</li>
                          <li>EU Food Safety Regulations</li>
                          <li>BRCGS for Food Safety</li>
                          <li>FSSC 22000 and GFSI recognized schemes</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* Documentation & Audit Readiness */}
                  <div className="mt-8">
                    <span className="font-extrabold text-xs uppercase text-slate-900 block mb-2 border-b border-slate-200 pb-1">
                      ➢ Documentation & Audit Readiness
                    </span>
                    <ul className="list-disc pl-5 space-y-1.5 text-[11px] text-slate-705 leading-normal">
                      <li>Lead document control system and ensure all QA/QC records are updated and traceable.</li>
                      <li>Prepare and review SOPs, HACCP plans, traceability records, and compliance checklists.</li>
                      <li>Lead internal audit programs and manage external audit observations and CAPA implementation.</li>
                      <li>Ensure product labeling, ingredient declaration, and nutrition facts meet national and export standards.</li>
                    </ul>
                  </div>

                  {/* Team Leadership & Training */}
                  <div className="mt-8">
                    <span className="font-extrabold text-xs uppercase text-slate-900 block mb-2 border-b border-slate-200 pb-1">
                      ➢ Team Leadership & Training
                    </span>
                    <ul className="list-disc pl-5 space-y-1.5 text-[11px] text-slate-751">
                      <li>Lead and Train both QC and QA departments ensuring consistent quality and safety in all operations.</li>
                      <li>Conduct training programs on hygiene, GMP, HACCP, allergen control, traceability, etc.</li>
                      <li>Evaluate team performance and maintain skill development records.</li>
                      <li>Represent the QC & QA department in all top-level management and regulatory meetings.</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-right text-[10px] text-slate-400 font-mono mt-8">
                  Page 2 of 7
                </div>
              </div>


              {/* ================= PAGE 3 ================= */}
              <div 
                className="bg-white w-[95vw] max-w-[800px] border border-slate-300 shadow-xl p-6 sm:p-12 md:p-16 relative text-slate-800 shrink-0 text-left font-sans flex flex-col justify-between"
                style={{ minHeight: "1130px" }}
                id="pdf-page-3"
              >
                <div>
                  {/* Product Development */}
                  <div>
                    <span className="font-extrabold text-xs uppercase text-slate-900 block mb-2 border-b border-slate-200 pb-1">
                      ➢ Product Development & Process Optimization
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-[11px] text-slate-700">
                      <li>Collaborate with R&D in product trials, formulation improvement, and scaling-up production.</li>
                      <li>Support cost-effective innovation without compromising product safety or regulatory standards.</li>
                      <li>Conduct root cause analysis (RCA) and implement process optimization initiatives (Kaizen, 5S).</li>
                    </ul>
                  </div>

                  {/* Supplier Quality */}
                  <div className="mt-6">
                    <span className="font-extrabold text-xs uppercase text-slate-900 block mb-2 border-b border-slate-200 pb-1">
                      ➢ Supplier Quality & RM/PM Inspection
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-[11px] text-slate-700">
                      <li>Establish supplier evaluation and approval procedures.</li>
                      <li>Monitor incoming materials for specification adherence and initiate rejection/correction protocols.</li>
                      <li>Work closely with procurement for quality assurance in supply chain.</li>
                    </ul>
                  </div>

                  {/* Complaint Handling */}
                  <div className="mt-6">
                    <span className="font-extrabold text-xs uppercase text-slate-900 block mb-2 border-b border-slate-200 pb-1">
                      ➢ Complaint Handling & Customer Support
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-[11px] text-slate-700">
                      <li>Investigate customer complaints (internal/external), conduct root cause analysis, and implement corrective actions.</li>
                      <li>Maintain complaint log, analysis dashboard, and trend monitoring.</li>
                      <li>Communicate quality feedback to production and supplier teams.</li>
                    </ul>
                  </div>

                  {/* ETP Water Management */}
                  <div className="mt-6">
                    <span className="font-extrabold text-xs uppercase text-slate-900 block mb-2 border-b border-slate-200 pb-1">
                      ➢ ETP, Hygiene & Sanitation Monitoring
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-[11px] text-slate-700">
                      <li>Supervise sanitation programs as per HACCP & GMP guidelines.</li>
                      <li>Monitor ETP water testing (TDS, Cl, Fe, Hardness, DO) and cleaning validation (CIP/SIP) protocols.</li>
                      <li>Ensure pest control, floor hygiene, employee hygiene and personal protective practices are followed.</li>
                    </ul>
                  </div>

                  {/* Previous Experience */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-4 ml-0">
                      Previous Experience
                    </div>

                    <div className="space-y-5 text-xs">
                      {/* Job 2: Mr Noodles */}
                      <div className="border-l-2 border-slate-200 pl-3">
                        <div className="font-bold text-slate-900">Assistant Manager (Production), Mr. Noodles (Instant, cook & Stick, Cup, Dry)</div>
                        <div className="text-slate-650 flex justify-between font-mono text-[10px] mt-0.5">
                          <span>01 Dec, 2021 to 01 Nov, 2024</span>
                          <span>PRAN-RFL Group | HIP, Sylhet</span>
                        </div>
                      </div>

                      {/* Job 3: Maggi */}
                      <div className="border-l-2 border-slate-200 pl-3">
                        <div className="font-bold text-slate-900">Chemist (Quality Assurance), Maggi Noodles</div>
                        <div className="text-slate-650 flex justify-between font-mono text-[10px] mt-0.5">
                          <span>31 Dec, 2017 to 30 Nov, 2021</span>
                          <span>Nestle Bangladesh Ltd | Sreepur, Gazipur</span>
                        </div>
                      </div>

                      {/* Job 4: Sajeeb */}
                      <div className="border-l-2 border-slate-200 pl-3">
                        <div className="font-bold text-slate-900">Officer (Quality Control)</div>
                        <div className="text-slate-650 flex justify-between font-mono text-[10px] mt-0.5">
                          <span>01 Jan, 2013 to 30 Nov, 2017</span>
                          <span>Sajeeb Group | Rupganj, Narayanganj</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <span className="font-extrabold text-slate-900 block mb-1 italic">
                          Duties and Responsibilities:
                        </span>
                        <ul className="list-disc pl-5 space-y-1.5 text-[11px] text-slate-700 leading-snug">
                          <li><span className="font-bold text-slate-800">Expert in</span> processing and preservation of MANGO PULP and TOMATO PASTE.</li>
                          <li><span className="font-bold text-slate-800">Expert in</span> Soft Drink Powder, Juice, Jam-Jelly, Tomato Ketchup, Hot Tomato Sauce, Soya Sauce, Macaroni, Noodles (Instant, cook & Stick, Cup, Dry), Pickles, Mango Bar, corn flakes,</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-right text-[10px] text-slate-400 font-mono mt-8">
                  Page 3 of 7
                </div>
              </div>


              {/* ================= PAGE 4 ================= */}
              <div 
                className="bg-white w-[95vw] max-w-[800px] border border-slate-300 shadow-xl p-6 sm:p-12 md:p-16 relative text-slate-800 shrink-0 text-left font-sans flex flex-col justify-between"
                style={{ minHeight: "1130px" }}
                id="pdf-page-4"
              >
                <div>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <p className="mb-3.5">
                      Mr. Chocoz, Chokolee chokolee, soya nugget, pan cake, Chocolate bar, Corn Puffys etc.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-2 text-[11px]">
                      <li>
                        <span className="font-bold text-slate-800">QC Major Test:</span> Acidity, Brix, pH, Moisture, Viscosity, Specific Gravity, Thickness, Microleak test, Hydrogen per oxide test, Wash water test, CIP (Caustic & Nitric), Salt determination, Free Fatty Acid (FFA), Acid value (AV) and Per oxide Value (POV) test of Oil etc.
                      </li>
                      <li><span className="font-bold text-slate-800">Sound Knowledge in Microbial test:</span> TPC, Coliform and Yeast & Mold.</li>
                      <li><span className="font-bold text-slate-800">Treatment of ETP water</span> as Hardness, Cl, Fe, TDS, DO.</li>
                      <li>Monitoring hygiene and sanitation of production area as per HACCP program.</li>
                      <li>
                        <span className="font-bold text-slate-800">Research and Development (R&D):</span>
                        <ul className="list-circle pl-5 mt-1 space-y-1 block text-slate-600">
                          <li>Undertaking production of lab batch, pilot batch, stability batch and trial batch of new products.</li>
                          <li>Raising requisition of raw and packaging materials to commercial department for new products as per determined specification.</li>
                          <li>Reviewing formulation of existing products based on product or market complaints, stability related problems or cost saving need.</li>
                          <li>Maintaining lower manufacturing costs and exponentially better-quality products.</li>
                          <li>Preparing and updating all documents i.e. Recipe, specifications, process sheet, formulations and procedure.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* Specialization list */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-3 block">
                      Specialization
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-[11px] text-slate-700 leading-normal">
                      <li>Food Quality Control & Assurance</li>
                      <li>Food Safety & Regulatory Compliance (HACCP, ISO 22000, GMP, HALAL)</li>
                      <li>Product Development & Shelf-life Evaluation</li>
                      <li>Laboratory Management (Chemical, Microbial, Sensory Analysis)</li>
                      <li>Internal & External Audit Handling</li>
                      <li>Production & Process Optimization</li>
                      <li>Team Leadership, Training & Capacity Building</li>
                      <li>Supplier Evaluation & Vendor Quality Assurance</li>
                      <li>Documentation & Compliance for BSTI, HALAL, FSMS</li>
                      <li>Research, Innovation & Continuous Improvement</li>
                      <li>New Product Commercialization (Trial to Full-Scale)</li>
                      <li>Crisis Management & Customer Complaint Handling</li>
                    </ul>
                  </div>

                  {/* Computer Skill */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-3">
                      Computer Skill
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-[11px] text-slate-700">
                      <li>Diploma in Office Management (06 Month)</li>
                      <li>Proficient in MS Office (Word, Excel, PowerPoint), Microsoft Operating System</li>
                      <li>Skilled in internet-based tools, reporting software, and bilingual typing (English & Bangla)</li>
                    </ul>
                  </div>

                  {/* Language Proficiency */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-3">
                      LANGUAGE PROFICIENCY:
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-[11px] text-slate-700">
                      <li>Fluent in both Bengali and English (spoken, written, and comprehension)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-right text-[10px] text-slate-400 font-mono mt-8">
                  Page 4 of 7
                </div>
              </div>


              {/* ================= PAGE 5 ================= */}
              <div 
                className="bg-white w-[95vw] max-w-[800px] border border-slate-300 shadow-xl p-6 sm:p-12 md:p-16 relative text-slate-800 shrink-0 text-left font-sans flex flex-col justify-between"
                style={{ minHeight: "1130px" }}
                id="pdf-page-5"
              >
                <div>
                  <ul className="list-disc pl-5 space-y-1 text-[11px] text-slate-700">
                    <li>Average in Japanese (Spoken & Listening)</li>
                    <li>Capable of preparing technical reports, conducting audits, and delivering training in both languages</li>
                  </ul>

                  {/* Other Skills */}
                  <div className="mt-6">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-3">
                      Others Skill: Project Development on-
                    </div>
                    <ol className="list-decimal pl-5 space-y-1 text-[11px] text-slate-705 leading-relaxed">
                      <li>SEIP-BAPA Project, Finance Division, Ministry of Finance</li>
                      <li>BAPA Shamertho Project, Finance Division, Ministry of Finance</li>
                      <li>ILO Apprenticeship Program, Finance Division, Ministry of Finance</li>
                      <li>SCORE Program, Finance Division, Ministry of Finance</li>
                      <li>
                        <span className="font-bold text-slate-800">Member of the Technical Sub-Committee (TSC)</span> of Bangladesh Technical Education Board (BTEB) in the development of the competency standards for i) Food Safety & Hygiene ii) Automatic Baking Operation.
                      </li>
                    </ol>
                  </div>

                  {/* Training Program table */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800">
                      Training Program:
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 block mt-1.5 mb-1.5 italic">
                      I have completed training course on:
                    </span>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-slate-300 mt-2 text-[9px] leading-tight">
                        <thead>
                          <tr className="bg-slate-50 text-slate-800 border-b border-slate-300">
                            <th className="border border-slate-300 px-2 py-1.5 text-left font-bold">Training Title</th>
                            <th className="border border-slate-300 px-2 py-1.5 text-left font-bold">Institute</th>
                            <th className="border border-slate-300 px-2 py-1.5 text-left font-bold">Location</th>
                            <th className="border border-slate-300 px-2 py-1.5 text-center font-bold">Year</th>
                            <th className="border border-slate-300 px-2 py-1.5 text-center font-bold">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Japanese Language</td>
                            <td className="border border-slate-200 px-2 py-1">JUAAB</td>
                            <td className="border border-slate-200 px-2 py-1">Dhaka, Bangladesh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2022</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">06 Month</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">LEAN SIX SIGMA</td>
                            <td className="border border-slate-200 px-2 py-1">PRAN-RFL</td>
                            <td className="border border-slate-200 px-2 py-1">Habigonj Plant</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2022</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">3 Days</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">ISO, QMS, EMS, SHE, OHSAS, MSDS etc.</td>
                            <td className="border border-slate-200 px-2 py-1">Multiple Health pharma Ltd</td>
                            <td className="border border-slate-200 px-2 py-1">Dhaka, Bangladesh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2021</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">10 Days</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">SPOKEN & IELTS</td>
                            <td className="border border-slate-200 px-2 py-1">SHAFIN'S SPOKEN & IELTS CENTRE</td>
                            <td className="border border-slate-200 px-2 py-1">Mirpur, Dhaka-1216</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2021</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">8 Months</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">ERP SAP SOFTWARE</td>
                            <td className="border border-slate-200 px-2 py-1">ECL SYSTEMS LTD</td>
                            <td className="border border-slate-200 px-2 py-1">Mirpur, Dhaka-1216</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2021</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">1 Days</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Data Integrity Awareness</td>
                            <td className="border border-slate-200 px-2 py-1">Beacon Cephalosporin Limited</td>
                            <td className="border border-slate-200 px-2 py-1">Bhaluka, Mymensingh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2020</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">1 Days</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1 col-span-1">Prevention of Cross-contamination & Mix-ups</td>
                            <td className="border border-slate-200 px-2 py-1">Beacon Cephalosporin Limited</td>
                            <td className="border border-slate-200 px-2 py-1">Bhaluka, Mymensingh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2020</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">1 Day</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">SOP for SOP</td>
                            <td className="border border-slate-200 px-2 py-1">Beacon Cephalosporin Limited</td>
                            <td className="border border-slate-200 px-2 py-1 font-mono">Bhaluka, Mymensingh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2019</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-400">N/A</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Good Documentation Practice (GDP)</td>
                            <td className="border border-slate-200 px-2 py-1">Beacon Cephalosporin Limited</td>
                            <td className="border border-slate-200 px-2 py-1">Bhaluka, Mymensingh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2019</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-400">N/A</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Control and Issuance of Logbook</td>
                            <td className="border border-slate-200 px-2 py-1">Beacon Cephalosporin Limited</td>
                            <td className="border border-slate-200 px-2 py-1">Bhaluka, Mymensingh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2019</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-400">N/A</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Production Plant & The API Unit</td>
                            <td className="border border-slate-200 px-2 py-1">Beacon Cephalosporin Limited</td>
                            <td className="border border-slate-200 px-2 py-1">Bhaluka, Mymensingh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2019</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-400">N/A</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Training and Development</td>
                            <td className="border border-slate-200 px-2 py-1">Beacon Cephalosporin Limited</td>
                            <td className="border border-slate-200 px-2 py-1">Bhaluka, Mymensingh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2019</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-400">N/A</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Documentation Control & Management.</td>
                            <td className="border border-slate-200 px-2 py-1">Beacon Cephalosporin Limited</td>
                            <td className="border border-slate-200 px-2 py-1">Bhaluka, Mymensingh</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2019</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-400">N/A</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Engineering &Up gradation Technology for product Diversification.</td>
                            <td className="border border-slate-200 px-2 py-1">BUET</td>
                            <td className="border border-slate-200 px-2 py-1">Dhaka, Bangladesh.</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2018</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">7 Days</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Productivity Management.</td>
                            <td className="border border-slate-200 px-2 py-1">BUET</td>
                            <td className="border border-slate-200 px-2 py-1">Dhaka</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2018</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">7 Days</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1">Modern Technology Business.</td>
                            <td className="border border-slate-200 px-2 py-1">BUET</td>
                            <td className="border border-slate-200 px-2 py-1">Dhaka</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2018</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">7 Days</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 px-2 py-1">HACCP Plan & CCP, OPRP Management</td>
                            <td className="border border-slate-200 px-2 py-1">Nestle Bangladesh Ltd.</td>
                            <td className="border border-slate-200 px-2 py-1">Sreepur, Gazipur</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">2014</td>
                            <td className="border border-slate-200 px-2 py-1 text-center font-mono">1 Day</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-right text-[10px] text-slate-400 font-mono mt-8">
                  Page 5 of 7
                </div>
              </div>


              {/* ================= PAGE 6 ================= */}
              <div 
                className="bg-white w-[95vw] max-w-[800px] border border-slate-300 shadow-xl p-6 sm:p-12 md:p-16 relative text-slate-800 shrink-0 text-left font-sans flex flex-col justify-between"
                style={{ minHeight: "1130px" }}
                id="pdf-page-6"
              >
                <div>
                  <div className="overflow-x-auto text-[9px] -mt-6">
                    <table className="w-full border-collapse border border-slate-300 mt-2 text-[9.5px]">
                      <tbody>
                        <tr className="border-b border-slate-200 bg-slate-50">
                          <td className="border border-slate-200 px-2 py-1.5 w-1/3">Training on GLP & GMP</td>
                          <td className="border border-slate-200 px-2 py-1.5 w-1/3">Nestle Bangladesh Ltd.</td>
                          <td className="border border-slate-200 px-2 py-1.5">Sreepur, Gazipur, Dhaka</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-center font-mono w-12">2014</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-center font-mono w-14">1 day</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="border border-slate-200 px-2 py-1.5">Sales Management System</td>
                          <td className="border border-slate-200 px-2 py-1.5">SME Foundation</td>
                          <td className="border border-slate-200 px-2 py-1.5">Dhaka, Bangladesh.</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-center font-mono">2011</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-center font-mono">7 Days</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-200 px-2 py-1.5">Certificate On Computer Application</td>
                          <td className="border border-slate-200 px-2 py-1.5">Saifur's</td>
                          <td className="border border-slate-200 px-2 py-1.5">Mirpur, Dhaka, Bangladesh.</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-center font-mono">2010</td>
                          <td className="border border-slate-200 px-2 py-1.5 text-center font-mono">3 Months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Professional Qualification Table */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800">
                      Professional Qualification:
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-slate-300 mt-3 text-[9.5px]">
                        <thead>
                          <tr className="bg-slate-50 text-slate-800 border-b border-slate-300">
                            <th className="border border-slate-300 px-2 py-1.5 text-left font-bold w-1/3">Certification</th>
                            <th className="border border-slate-300 px-2 py-1.5 text-left font-bold">Institute</th>
                            <th className="border border-slate-300 px-2 py-1.5 text-left font-bold">Location</th>
                            <th className="border border-slate-300 px-2 py-1.5 text-center font-bold font-mono">From</th>
                            <th className="border border-slate-300 px-2 py-1.5 text-center font-bold font-mono">To</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1 font-bold">Management of GMP Audits</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">Bangladesh Society for Pharmaceutical Professionals</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">Dhaka University</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">October 18, 2023</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">October 19, 2023</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1 font-bold">SIX SIGMA LEVEL-1 YELLOW BELT</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">PRAN-RFL GROUP</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">SYLHET, HABIGANJ</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">March 1, 2023</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">March 2, 2023</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1 font-bold">Food Safety Management System (FSMS)-ISO-22000:2018</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">SME FOUNDATION</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">Bangladesh, Dhaka</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">December 15, 2022</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">December 22, 2022</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="border border-slate-200 px-2 py-1 font-bold">Regulatory Requirements on Data Integrity Management in cGMP</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">Bangladesh Society for Pharmaceutical Professionals</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">Dhaka University</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">November 4, 2022</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">November 11, 2022</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 px-2 py-1 font-bold">Korean Language Learning</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">Ekush Language Institute</td>
                            <td className="border border-slate-200 px-2 py-1 text-slate-705">131/B, Jahanara Garden, Green Rd, Dhaka. 1215</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">March 1, 2022</td>
                            <td className="border border-slate-200 px-2 py-1 text-center text-slate-600">August 31, 2022</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Writing Skills */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-2">
                      Writing Skills:
                    </div>
                    <span className="text-[10px] font-bold text-slate-900 block mb-1">
                      Writing Competency Based Learning Materials (CBLM) Implemented by BTEB (B-SEIP Project) and SEIP-BAPA Project on:
                    </span>
                    <ol className="list-decimal pl-5 space-y-0.5 text-[10.5px] text-slate-700 leading-tight">
                      <li>"Produce Noodles" for Agro Food Sector (NTVQF-2)</li>
                      <li>"Practice personal health & hygiene for food safety" for Agro Food Sector (NTVQF-1)</li>
                      <li>"Applying Hygiene and Sanitation Practice" for Agro Food Sector (NTVQF-1)</li>
                      <li>Apply principles of food packaging (level-3)</li>
                      <li>Operate high speed wrapping process (level-3)</li>
                      <li>"Following Quality and Food Safety Program" for Agro Food Sector (NTVQF-1)</li>
                      <li>"Generic (Basic) Competency" for Agro Food Processing Sector.</li>
                      <li>"Sector Specific (Common) Competency" for Agro Food Processing Sector.</li>
                      <li>"Occupation Specific (Core) Competency on Food Processing" for Agro Food Processing Sector.</li>
                      <li>"Following OSH Policies and Procedures in the food industries" for Agro Food Sector (NTVQF-1).</li>
                    </ol>
                  </div>

                  {/* Personal Profile part 1 */}
                  <div className="mt-6">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-2">
                       Personal Profile
                    </div>
                    <div className="text-[11px] text-slate-800 space-y-0.5">
                      <div><span className="font-bold w-36 inline-block">Father's name</span>: Late. Nur Mohammad</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-right text-[10px] text-slate-400 font-mono mt-8">
                  Page 6 of 7
                </div>
              </div>


              {/* ================= PAGE 7 ================= */}
              <div 
                className="bg-white w-[95vw] max-w-[800px] border border-slate-300 shadow-xl p-6 sm:p-12 md:p-16 relative text-slate-800 shrink-0 text-left font-sans flex flex-col justify-between"
                style={{ minHeight: "1130px" }}
                id="pdf-page-7"
              >
                <div>
                  {/* Personal Profile part 2 */}
                  <div className="-mt-4">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-3">
                      Personal Profile (Continued)
                    </div>
                    
                    <div className="text-[11px] text-slate-750 space-y-2 leading-relaxed">
                      <div className="grid grid-cols-1 gap-y-1.5">
                        <div><span className="font-bold w-36 inline-block">Mother’s name</span>: Late. Achia Begum</div>
                        <div><span className="font-bold w-36 inline-block">Permanent address</span>: C/O- Nur Mohammad, 1110, Latifpur (Molla Bari), Chandraganj, Lakshmipur Sadar, Lakshmipur.</div>
                        <div><span className="font-bold w-36 inline-block">Present address</span>: Monem Business District, Kawran Bazar, Dhaka-1205.</div>
                        <div><span className="font-bold w-36 inline-block">Date of birth</span>: 1 Jul 1988</div>
                        <div><span className="font-bold w-36 inline-block">Religion</span>: Islam</div>
                        <div><span className="font-bold w-36 inline-block">Nationality</span>: Bangladeshi (By birth)</div>
                        <div><span className="font-bold w-36 inline-block">Marital status</span>: Married</div>
                        <div><span className="font-bold w-36 inline-block">Mobile Number</span>: <span className="font-mono font-bold">+8801921460081</span></div>
                        <div><span className="font-bold w-36 inline-block">NID no</span>: <span className="font-mono">9106083919</span></div>
                      </div>
                    </div>

                    <p className="text-xs font-black text-slate-850 mt-6 tracking-wide text-center">
                      Excellent interpersonal skills and ability to work under pressure
                    </p>
                  </div>

                  {/* References Section */}
                  <div className="mt-8">
                    <div className="bg-slate-100 text-slate-800 px-3 py-1 font-extrabold text-xs uppercase tracking-wider border-l-4 border-slate-800 mb-4">
                      References
                    </div>

                    <div className="grid grid-cols-2 gap-8 text-[11px] text-slate-800 leading-normal">
                      <div>
                        <div className="font-extrabold text-xs text-slate-900">Dipak Kumar Dev</div>
                        <div className="text-slate-650 mt-0.5">Chief Plant Officer</div>
                        <div className="font-bold">PRAN- RFL GROUP. Habiganj</div>
                        <div className="mt-1 font-mono text-[10px]">Phone No: +8801704133555</div>
                        <div className="font-mono text-[10px]">Email: cpo@hip.prangroup.com</div>
                      </div>

                      <div>
                        <div className="font-extrabold text-xs text-slate-900">Kazi Nazmul Hassan</div>
                        <div className="text-slate-650 mt-0.5 font-bold">CEO</div>
                        <div className="font-bold">Abdul Monem Ltd</div>
                        <div className="mt-1 font-mono text-[10px]">Phone No: +880715005051</div>
                        <div className="font-mono text-[10px]">Email: nazmul@amlbd.com</div>
                      </div>
                    </div>
                  </div>

                  {/* Declaration Statement */}
                  <div className="mt-12 text-center text-xs text-slate-850 leading-relaxed font-sans max-w-lg mx-auto">
                    <p className="italic font-medium">
                      "I hereby declare that the information given above is true in my best sense."
                    </p>
                    
                    {/* Realistic Handwriting Signature rendering */}
                    <div className="flex flex-col items-center mt-6">
                      <svg className="w-48 h-10 text-slate-700/80 -mb-1 select-none pointer-events-none" viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 20 28 C 30 18, 45 10, 52 20 C 58 35, 45 38, 62 25 C 75 14, 80 18, 88 28 C 95 38, 105 25, 114 22 C 122 19, 138 20, 155 20 M 90 28 L 160 22" />
                      </svg>
                      <div className="w-52 h-[1px] bg-slate-400 mt-1"></div>
                      <span className="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase mt-1.5 font-sans">
                        (MD. TAZUL ISLAM)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 text-right text-[10px] text-slate-400 font-mono mt-8">
                  Page 7 of 7
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* TAB CONTENT 2: THE SUMMARY INTERACTIVE WEB PROFILE (Modified existing screen-optimized resume layout) */
          <div className="overflow-y-auto flex-1 p-6 sm:p-10 md:p-12 lg:p-14 bg-white" id="printable-resume-body">
            <div className="max-w-4xl mx-auto">
              
              {/* Header / Name card with subtle gradient background */}
              <div className="text-center pb-8 border-b border-slate-200 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl pointer-events-none"></div>
                <h1 className="text-3xl sm:text-4.5xl font-black font-sans text-slate-900 tracking-tight">TAZUL ISLAM</h1>
                <p className="text-lg sm:text-xl font-extrabold text-[#0a8f76] font-sans mt-1">Head Of Operations</p>
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest mt-1.5 font-mono">
                  Food & Beverage Scientific & Industry Operations Specialist
                </p>
                
                {/* Contact grid */}
                <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-650 mt-4.5 font-mono">
                  <span className="flex items-center space-x-1.5">
                    <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                    <a href="mailto:tazulislam4600@yahoo.com" className="hover:underline hover:text-[#0a8f76]">tazulislam4600@yahoo.com</a>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                    <a href="tel:+8801921460081" className="hover:underline hover:text-[#0a8f76]">+880 (192) 1460 081</a>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Kawran Bazar, Dhaka-1205</span>
                  </span>
                </div>
              </div>

              {/* Two Column details layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                
                {/* Left primary details (Summary & Jobs) */}
                <div className="md:col-span-2 space-y-8">
                  
                  {/* Executive Summary block */}
                  <div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-[#0a8f76] border-b-2 border-[#0a8f76]/20 pb-1.5 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Executive Summary</span>
                    </h2>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 mt-3.5 font-sans text-justify">
                      Dynamic Food & Beverage Operations Executive combining over 12+ years of chemistry foundations with systematic floor management. Expert in production optimization, plant capacity planning, safety, HALAL/BSTI compliance, and leading QA/QC teams. Highly structured and focused on strict GMP procedures, system troubleshooting, and cost minimization under international schemes (Codex, US FDA 21 CFR, BRCGS, ISO 22000). Highly collaborative leader dedicated to zero-downtime line efficiency.
                    </p>
                  </div>

                  {/* Professional Experience block */}
                  <div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-[#0a8f76] border-b-2 border-[#0a8f76]/20 pb-1.5 flex items-center space-x-2 mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>Professional Experience</span>
                    </h2>
                    
                    <div className="space-y-6">
                      {experiences.map((exp) => (
                        <div key={exp.id} className="group border-b border-slate-100 last:border-none pb-5 last:pb-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                            <div>
                              <h3 className="text-sm sm:text-base font-extrabold text-slate-905 font-sans leading-snug group-hover:text-[#0a8f76] transition-colors">{exp.role}</h3>
                              <p className="text-xs sm:text-sm font-semibold text-slate-650 mt-0.5">{exp.company}</p>
                            </div>
                            <div className="text-left sm:text-right shrink-0">
                              <span className="inline-block text-[10px] font-bold px-2.5 py-1 bg-[#0a8f76]/10 text-[#0a8f76] rounded-full font-mono">
                                {exp.duration}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 block mt-1">{exp.location}</span>
                            </div>
                          </div>
                          
                          <ul className="list-disc pl-5 mt-3 space-y-1 text-xs text-slate-600 leading-relaxed font-sans">
                            {exp.highlights.slice(0, 4).map((h, idx) => (
                              <li key={idx}>
                                {h}
                              </li>
                            ))}
                            {exp.highlights.length > 4 && (
                              <li className="text-[#0a8f76] list-none pl-0 font-bold font-mono text-[10px] mt-1.5 cursor-pointer hover:underline" onClick={() => setActiveTab("pdf")}>
                                + View {exp.highlights.length - 4} more detailed responsibilities in Original PDF...
                              </li>
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right details sidebar (Certs, education, skills summary) */}
                <div className="space-y-8">
                  
                  {/* Skill categories */}
                  <div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-[#0a8f76] border-b-2 border-[#0a8f76]/20 pb-1.5 flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>Selected Skills</span>
                    </h2>
                    <div className="space-y-4 mt-3">
                      {skillCategories.map((cat) => (
                        <div key={cat.id} className="text-left">
                          <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider font-mono">{cat.category}</h4>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {cat.skills.slice(0, 4).map((sk, index) => (
                              <span key={index} className="text-[10px] bg-slate-50 font-semibold text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education List */}
                  <div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-[#0a8f76] border-b-2 border-[#0a8f76]/20 pb-1.5 flex items-center space-x-2 mb-3">
                      <BookOpen className="w-4 h-4" />
                      <span>Education</span>
                    </h2>
                    <div className="space-y-3.5">
                      {educationList.map((edu) => (
                        <div key={edu.id} className="text-xs border-l-2 border-slate-200 pl-2.5">
                          <h4 className="font-extrabold text-slate-900 leading-tight">{edu.degree}</h4>
                          <p className="text-slate-600 text-[11px]">{edu.major}</p>
                          <p className="text-slate-450 font-mono text-[9px] mt-0.5">{edu.institution} | {edu.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured certifications */}
                  <div>
                    <h2 className="text-xs font-black uppercase tracking-widest text-[#0a8f76] border-b-2 border-[#0a8f76]/20 pb-1.5 flex items-center space-x-2 mb-3">
                      <Award className="w-4 h-4" />
                      <span>Regulatory Certs</span>
                    </h2>
                    <div className="space-y-3">
                      {certifications.filter(c => c.highlighted).slice(0, 5).map((cert) => (
                        <div key={cert.id} className="text-xs border-l-2 border-[#0a8f76]/40 pl-2.5">
                          <h4 className="font-extrabold text-slate-900 leading-snug">{cert.title}</h4>
                          <p className="text-slate-550 font-mono text-[9px] mt-0.5">{cert.issuer} ({cert.year})</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

        {/* Footer info showing standard advice */}
        <div className="px-5 py-3 border-t border-slate-200 bg-white text-center text-xs text-slate-400 font-sans flex flex-col sm:flex-row items-center justify-between gap-1">
          <span>Official Executive Record • ID: d1cf535c-d738-4a1f-b9e6-dec7e1817207</span>
          <span className="font-semibold text-slate-500">
            Tip: Clicking "Print / Save as PDF" lets you save a pristine copy directly.
          </span>
        </div>

      </div>

      {/* Styled Printable Frame (Handles printing of both simulator pages and summary cleanly) */}
      <style>{`
        @media print {
          /* Hide anything except the main element */
          body * {
            visibility: hidden;
          }
          #print-resume-btn, #close-resume-modal-btn, #resume-modal-container, .no-print, nav, footer {
            display: none !important;
          }
          #pdf-simulator-viewport, #pdf-simulator-viewport * {
            visibility: visible;
          }
          #pdf-simulator-viewport {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            min-height: 100vh;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
            display: block !important;
          }
          #pdf-simulator-viewport .bg-white {
            width: 100% !important;
            max-width: 100% !important;
            border: none !important;
            box-shadow: none !important;
            page-break-after: always !important;
            padding: 2.5cm 2cm !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
