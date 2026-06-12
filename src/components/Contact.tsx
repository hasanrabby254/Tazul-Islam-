/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, FileText, Send, CheckCircle2, AlertTriangle, Inbox, Trash2, ArrowUp } from "lucide-react";
import { ContactMessage } from "../types";

interface ContactProps {
  onOpenResume: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [inboxMessages, setInboxMessages] = useState<ContactMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Load local user messages
  useEffect(() => {
    try {
      const stored = localStorage.getItem("tazul_contact_messages");
      if (stored) {
        setInboxMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate server latency for premium feel
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const newMessage: ContactMessage = {
      id: "msg-" + Date.now(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toLocaleString()
    };

    try {
      const updated = [newMessage, ...inboxMessages];
      setInboxMessages(updated);
      localStorage.setItem("tazul_contact_messages", JSON.stringify(updated));
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteMessage = (id: string) => {
    const filtered = inboxMessages.filter((msg) => msg.id !== id);
    setInboxMessages(filtered);
    localStorage.setItem("tazul_contact_messages", JSON.stringify(filtered));
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      id="contact" 
      className="py-24 bg-gradient-to-br from-[#0c1e3b] via-[#102d5a] to-[#07162b] text-slate-100 relative overflow-hidden"
    >
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(45,212,191,0.12),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Contact CTA Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-300 text-xs font-extrabold uppercase tracking-widest font-mono bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mt-3 tracking-tight text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-[#2dd4bf] mx-auto mt-4 rounded"></div>
          <p className="text-sm text-slate-300 mt-4 max-w-lg mx-auto">
            Ready to secure operational excellence and minimize costs? Drop a line to establish contact.
          </p>
        </div>

        {/* Master Two-Column Form and Info layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT: GET IN TOUCH CONTACT DETAILS (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-white">
                Contact Parameters
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I am open to discuss production leadership, executive management, plant operations consultation, speaking engagements, or advisory on compliance safety checks.
              </p>

              {/* Physical details lists */}
              <div className="space-y-4 pt-4">
                
                {/* Email item */}
                <a 
                  href="mailto:tazulislam4600@yahoo.com"
                  className="group flex items-start space-x-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/40 transition-all cursor-pointer shadow-lg"
                >
                  <div className="p-3 bg-[#c29d53]/15 text-[#c29d53] rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                      OFFICIAL EMAIL
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#c29d53] transition-colors font-mono">
                      tazulislam4600@yahoo.com
                    </span>
                  </div>
                </a>

                {/* Phone item */}
                <a 
                  href="tel:+8801921460081"
                  className="group flex items-start space-x-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/40 transition-all cursor-pointer shadow-lg"
                >
                  <div className="p-3 bg-[#c29d53]/15 text-[#c29d53] rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                      DIRECT PHONE CALL
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#c29d53] transition-colors font-mono">
                      +880 1921 460081
                     </span>
                  </div>
                </a>

                {/* Location item */}
                <div 
                  className="group flex items-start space-x-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 font-sans shadow-lg"
                >
                  <div className="p-3 bg-[#c29d53]/15 text-[#c29d53] rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                      CURRENT BASE
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-100 transition-colors">
                      Dhaka, Dhaka, Bangladesh
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social handles + CV CTA */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                Professional Credentials & Networks
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                
                {/* LinkedIn Link placeholder */}
                <a 
                  href="https://www.linkedin.com/in/tazul-islam-6b1a61244/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-amber-500 hover:text-white transition text-xs font-bold text-slate-200 font-sans hover:scale-[1.03]"
                  id="linkedin-link-btn"
                >
                  <Linkedin className="w-4 h-4 text-sky-400 fill-current" />
                  <span>LinkedIn Profile</span>
                </a>

                {/* Printable CV Launcher */}
                <button 
                  onClick={onOpenResume}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 transition text-xs font-bold font-sans hover:scale-[1.03] cursor-pointer"
                  id="footer-resume-link"
                >
                  <FileText className="w-4 h-4" />
                  <span>Official CV (PDF Format)</span>
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT: SECURE INTERACTIVE CONTACT FORM PANEL (Span 7) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-md">
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/15 rounded-bl-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-5 font-sans relative z-10 text-left">
              <h3 className="text-lg font-bold font-display text-white border-b border-white/10 pb-2">
                Leave a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-display">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full text-sm px-4 py-3 bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 rounded-xl focus:border-[#2dd4bf] focus:bg-transparent focus:outline-none text-white placeholder-slate-500"
                    id="contact-name-input"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-display">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full text-sm px-4 py-3 bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 rounded-xl focus:border-[#2dd4bf] focus:bg-transparent focus:outline-none text-white placeholder-slate-500"
                    id="contact-email-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 font-display">Message Content *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Discuss production planning, capacity enhancements, quality audits..."
                  className="w-full text-sm px-4 py-3 bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 rounded-xl focus:border-[#2dd4bf] focus:bg-transparent focus:outline-none text-white placeholder-slate-500 resize-none font-sans"
                  id="contact-message-input"
                ></textarea>
              </div>

              {/* Submit Buttons / Loader / State alerts */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                
                {/* Visual Error alerts */}
                {submitStatus === "error" && (
                  <div className="flex items-center space-x-1.5 text-rose-400 text-xs font-semibold">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Please write real credentials in all inputs.</span>
                  </div>
                )}
                {submitStatus === "success" && (
                  <div className="flex items-center space-x-1.5 text-emerald-450 text-xs font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Message received! Saved securely below in your personal feed.</span>
                  </div>
                )}
                {submitStatus === "idle" && (
                  <span className="text-[10px] text-slate-400 font-mono">
                    🛡️ Inputs are validated locally on client.
                  </span>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition shadow disabled:opacity-40 cursor-pointer text-sm font-sans shrink-0 hover:scale-[1.01]"
                  id="contact-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting..." : "Send Secure Message"}</span>
                </button>
              </div>
            </form>

            {/* Recruiter Inbox Feed Section - visible if user logs any message to Tazul! */}
            {inboxMessages.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/10 font-sans relative z-10">
                <button
                  type="button"
                  onClick={() => setShowInbox(!showInbox)}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-brand-gold hover:underline bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg cursor-pointer"
                  id="toggle-inbox-btn"
                >
                  <Inbox className="w-4 h-4" />
                  <span>
                    {showInbox ? "Hide Logged Messages Feed" : `View Your Messages Receipt (${inboxMessages.length})`}
                  </span>
                </button>

                {showInbox && (
                  <div className="mt-4 space-y-3 max-h-[160px] overflow-y-auto pr-2" id="inbox-messages-list">
                    {inboxMessages.map((msg) => (
                      <div key={msg.id} className="p-3 bg-slate-900/80 border border-white/10 rounded-lg text-xs relative text-left shadow-lg">
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="absolute top-2.5 right-2 text-slate-400 hover:text-rose-400 transition"
                          title="Delete message"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="font-extrabold text-white text-xs">{msg.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{msg.email} | {msg.timestamp}</div>
                        <p className="text-[11px] text-slate-200 mt-1.5 bg-[#0b1e3b]/80 border border-white/10 p-2 rounded">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

        {/* Outer credit bar / bottom footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-450 font-display uppercase tracking-widest sm:max-w-5xl sm:mx-auto">
          <div>
            <span>© 2026 TAZUL ISLAM. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleScrollTop}
              className="inline-flex items-center space-x-1 hover:text-brand-gold transition cursor-pointer text-slate-400"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
