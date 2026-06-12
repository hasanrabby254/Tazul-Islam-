/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import EducationCertifications from "./components/EducationCertifications";
import Skills from "./components/Skills";
import References from "./components/References";
import Contact from "./components/Contact";
import ResumeModal from "./components/ResumeModal";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#020b1e] text-slate-800 font-sans relative">
      {/* Interactive premium desktop cursor spotlight */}
      {isHovering && (
        <div 
          className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 opacity-100 hidden md:block"
          style={{
            background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(194, 157, 83, 0.07), transparent 85%)`
          }}
        />
      )}

      {/* Sticky Top Header */}
      <Navbar onOpenResume={openResume} />

      {/* Hero Section (Remains dark, premium gradient) */}
      <Hero onOpenResume={openResume} />

      {/* Subsequent Sections grouped inside premium Deluxe Off-White gradient wrapper */}
      <div className="bg-gradient-to-b from-[#FAF8F5] via-[#FFFDFB] via-[#FAF9F5] to-[#f4f2ea] relative z-10 text-slate-850">
        
        {/* Professional Summary Section */}
        <ScrollReveal>
          <Summary />
        </ScrollReveal>

        {/* Experience Section */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        {/* Education & Certifications Section */}
        <ScrollReveal>
          <EducationCertifications />
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        {/* References Section */}
        <ScrollReveal>
          <References />
        </ScrollReveal>

        {/* Footer & Contact Section */}
        <ScrollReveal>
          <Contact onOpenResume={openResume} />
        </ScrollReveal>
        
      </div>

      {/* Interactive PDF Resume Modal (No-Print styled) */}
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </div>
  );
}

