import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, Copy, Check } from "lucide-react";
import { resumeData } from "../data";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(resumeData.basics.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative section-padding px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400 mb-3 block">06 / Let&apos;s Connect</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Whether you have an opportunity, a project, or just want to say hi — my inbox is always open.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="group rounded-2xl p-6 border border-white/5 hover:border-cyan-400/25 transition-all duration-300" style={{ background: "rgba(10,15,30,0.7)", backdropFilter: "blur(20px)" }}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.2)" }}><Mail size={18} className="text-cyan-400" /></div>
                <div><p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p><a href={`mailto:${resumeData.basics.email}`} className="text-white text-sm font-medium hover:text-cyan-400 transition-colors break-all">{resumeData.basics.email}</a></div>
              </div>
              <button onClick={copyEmail} className="text-slate-500 hover:text-cyan-400 transition-colors ml-2 shrink-0">{copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="rounded-2xl p-6 border border-white/5 hover:border-violet-400/25 transition-all duration-300" style={{ background: "rgba(10,15,30,0.7)", backdropFilter: "blur(20px)" }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}><Phone size={18} className="text-violet-400" /></div>
              <div><p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Phone</p><a href={`tel:${resumeData.basics.phone}`} className="text-white text-sm font-medium hover:text-violet-400 transition-colors">{resumeData.basics.phone}</a></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300" style={{ background: "rgba(10,15,30,0.7)", backdropFilter: "blur(20px)" }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}><Github size={18} className="text-slate-300" /></div>
              <div><p className="text-xs text-slate-500 uppercase tracking-wider mb-1">GitHub</p><a href={resumeData.basics.links.github} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium hover:text-cyan-400 transition-colors break-all">{resumeData.basics.links.githubLabel}</a></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} className="rounded-2xl p-6 border border-white/5 hover:border-blue-400/25 transition-all duration-300" style={{ background: "rgba(10,15,30,0.7)", backdropFilter: "blur(20px)" }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}><Linkedin size={18} className="text-blue-400" /></div>
              <div><p className="text-xs text-slate-500 uppercase tracking-wider mb-1">LinkedIn</p><a href={resumeData.basics.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium hover:text-blue-400 transition-colors break-all">{resumeData.basics.links.linkedinLabel}</a></div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-5 flex items-center justify-center gap-2 text-slate-500 text-sm"><MapPin size={14} /><span>{resumeData.basics.location}, India</span></motion.div>
      </div>
    </section>
  );
}
