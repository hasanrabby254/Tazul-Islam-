/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Award, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "summary", label: "Summary" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education & Certs" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Simple active link highlight on scroll
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: id === "home" ? 0 : offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-slate-200/60" 
          : "bg-transparent py-5 border-transparent"
      } no-print`}
    >
      {/* Premium subtle scroll indicator */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#2dd4bf] to-[#c29d53] transition-all duration-75 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Cursive Signature */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex flex-col focus:outline-none"
            id="nav-logo"
          >
            <span className={`font-signature text-3xl sm:text-3.5xl group-hover:text-[#2dd4bf] tracking-wide transition-colors ${
              scrolled ? "text-slate-900" : "text-white"
            }`}>
              Tazul Islam
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition font-sans ${
                  activeSection === item.id
                    ? scrolled
                      ? "bg-teal-500/10 text-teal-700 font-semibold border border-teal-500/20"
                      : "bg-white/10 text-white font-semibold"
                    : scrolled
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Direct Actions & Phone (Mockup design style) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+8801921460081" 
              className={`flex items-center space-x-2 transition text-sm font-mono ${
                scrolled ? "text-slate-600 hover:text-teal-600" : "text-slate-300 hover:text-[#2dd4bf]"
              }`}
            >
              <Phone className="w-4 h-4 text-[#2dd4bf]" />
              <span>+880 (192) 1460 081</span>
            </a>
            
            <button
               onClick={onOpenResume}
              className="group flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-[#c29d53] hover:from-amber-600 hover:to-[#a17c36] text-slate-950 text-xs font-semibold rounded-full shadow-lg shadow-amber-500/10 transition-all cursor-pointer"
              id="header-resume-btn"
            >
              <span>View Full CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1 text-xs px-3 py-1.5 bg-gradient-to-r from-amber-500 to-[#c29d53] text-slate-950 rounded-full font-semibold shadow"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 text-slate-950" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#2dd4bf] ${
                scrolled 
                  ? "text-slate-600 hover:text-slate-950 hover:bg-slate-100" 
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
              aria-label="Toggle Menu"
              id="mobile-hambuger-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[60px] border-b shadow-xl transition-all duration-300 z-30 overflow-hidden ${
          scrolled 
            ? "bg-white border-slate-200" 
            : "bg-[#1c0d02] border-white/10"
        } ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition ${
                activeSection === item.id
                  ? scrolled
                    ? "bg-teal-500/10 text-teal-700 font-bold"
                    : "bg-white/10 text-white font-bold"
                  : scrolled
                    ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className={`pt-4 space-y-3 border-t ${scrolled ? "border-slate-100" : "border-white/10"}`}>
            <a 
              href="tel:+8801921460081"
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                scrolled ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Phone className="w-5 h-5 text-[#2dd4bf]" />
              <span className="font-mono text-sm">+880 (192) 1460 081</span>
            </a>
            <a 
              href="mailto:tazulislam4600@yahoo.com"
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition ${
                scrolled ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Mail className="w-5 h-5 text-[#2dd4bf]" />
              <span className="font-mono text-sm">tazulislam4600@yahoo.com</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
