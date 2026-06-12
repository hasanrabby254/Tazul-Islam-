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
    { id: "references", label: "References" },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print px-4 sm:px-6 lg:px-8 py-4 sm:py-6`}
    >
      <div 
        className={`w-full max-w-7xl mx-auto rounded-full border transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-xl border-slate-200/80 py-2.5 sm:py-3 px-6 sm:px-8" 
            : "bg-white shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] border-white/90 py-3.5 sm:py-4.5 px-7 sm:px-10"
        }`}
      >
        {/* Premium subtle scroll progress bar embedded at the top of the capsule */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-slate-100 rounded-full overflow-hidden pointer-events-none">
          <div 
            className="h-full bg-gradient-to-r from-[#0a8f76] to-[#2dd4bf] transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex items-center justify-between relative">
          
          {/* Logo / BizCorpo-style Professional Brand Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center space-x-2.5 focus:outline-none select-none"
            id="nav-logo"
          >
            {/* Abstract corporate double-ring styled mark */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#0a8f76] to-[#5be2c6] p-[2px] flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#0a8f76] flex items-center justify-center text-white font-black text-[10px]">
                  TI
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-black text-slate-800 tracking-tight leading-none group-hover:text-[#0a8f76] transition-colors font-sans">
                Tazul<span className="text-[#0a8f76]">Islam.</span>
              </span>
              <span className="text-[8px] font-bold text-slate-400 tracking-widest uppercase leading-none mt-0.5">
                Executive Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition font-sans ${
                  activeSection === item.id
                    ? "bg-[#0a8f76]/10 text-[#0a8f76] font-extrabold border border-[#0a8f76]/25"
                    : "text-slate-600 hover:text-[#0a8f76] hover:bg-[#0a8f76]/5"
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Direct Contact Widgets & Phone (BizCorpo style) */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a 
              href="tel:+8801921460081" 
              className="flex items-center space-x-2.5 group text-left"
            >
              {/* Circular contact icon bubble */}
              <div className="p-2 sm:p-2.5 bg-teal-500/10 text-[#0a8f76] rounded-full group-hover:bg-[#0a8f76] group-hover:text-white transition-all duration-300 shrink-0">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Make A Call Anytime
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 hover:text-[#0a8f76] transition-colors mt-0.5 font-mono">
                  +880 (192) 1460 081
                </span>
              </div>
            </a>
            
            <button
               onClick={onOpenResume}
              className="group flex items-center space-x-1.5 px-5 py-2.5 bg-[#f59e0b] hover:bg-[#ea580c] text-white text-xs font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              id="header-resume-btn"
            >
              <span>View My CV</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1 text-[10px] px-3.5 py-1.5 bg-[#f59e0b] text-white rounded-full font-bold shadow-md hover:bg-[#ea580c]"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 text-white" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a8f76] text-slate-755 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
              id="mobile-hambuger-btn"
            >
              {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden fixed left-4 right-4 md:left-8 md:right-8 top-[84px] shadow-xl transition-all duration-300 z-30 overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 ${
          isOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`block px-4 py-2.5 rounded-full text-sm font-bold transition text-left ${
                activeSection === item.id
                  ? "bg-[#0a8f76]/10 text-[#0a8f76] font-extrabold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 space-y-2 border-t border-slate-100">
            <a 
              href="tel:+8801921460081"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-full transition text-slate-700 hover:text-slate-905 hover:bg-slate-50"
            >
              <Phone className="w-4.5 h-4.5 text-[#0a8f76]" />
              <span className="font-sans text-xs font-semibold">+880 (192) 1460 081</span>
            </a>
            <a 
              href="mailto:tazulislam4600@yahoo.com"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-full transition text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              <Mail className="w-4.5 h-4.5 text-[#0a8f76]" />
              <span className="font-sans text-xs font-semibold">tazulislam4600@yahoo.com</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
