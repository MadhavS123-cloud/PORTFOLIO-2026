import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { resumeData } from "../data";

export default function HeroSection({ onResumeView }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-20">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">Open to Opportunities</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="text-white">Madhav</span>{" "}
          <span className="text-glow" style={{ background: "linear-gradient(135deg, #00f5ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sachdeva</span>
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-xl sm:text-2xl font-medium text-slate-400 mb-6">{resumeData.basics.title}</motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10">{resumeData.basics.summary}</motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button onClick={() => scrollTo("#projects")} className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-black transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #00f5ff, #7c3aed)", boxShadow: "0 0 20px rgba(0,245,255,0.3)" }}>
            View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={onResumeView} className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition-all duration-200">
            <Download size={16} /> Download Resume
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex items-center justify-center gap-6 mb-16">
          <a href={resumeData.basics.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm">
            <Github size={16} /> GitHub
          </a>
          <div className="w-px h-4 bg-white/10" />
          <a href={resumeData.basics.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
          <div className="w-px h-4 bg-white/10" />
          <span className="text-slate-500 text-sm">{resumeData.basics.location}</span>
        </motion.div>

        <motion.button onClick={() => scrollTo("#projects")} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.85 }} className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
