import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { resumeData } from "../data";

const STACK_COLORS = {
  Python: "rgba(59,130,246,0.15)",
  Flask: "rgba(16,185,129,0.15)",
  "Gemini Pro": "rgba(251,191,36,0.15)",
  "Gemini API": "rgba(251,191,36,0.15)",
  GSAP: "rgba(236,72,153,0.15)",
  "Tailwind CSS": "rgba(6,182,212,0.15)",
  React: "rgba(0,245,255,0.15)",
  "Node.js": "rgba(34,197,94,0.15)",
  HTML: "rgba(249,115,22,0.15)",
  CSS: "rgba(59,130,246,0.15)",
  JavaScript: "rgba(234,179,8,0.15)",
};

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(resumeData.projects[0].id);

  return (
    <section id="projects" className="relative section-padding px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400 mb-3 block">02 / What I've Built</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Personal Projects</h2>
          <p className="text-slate-400 max-w-xl">A selection of real-world applications I&apos;ve built, from AI tools to full-stack systems.</p>
        </motion.div>

        <div className="space-y-4">
          {resumeData.projects.map((project, idx) => {
            const isOpen = expanded === project.id;
            return (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-cyan-400/30 glow-cyan" : "border-white/5 hover:border-white/15"}`} style={{ background: "rgba(10,15,30,0.7)", backdropFilter: "blur(20px)" }}>
                  <button className="w-full text-left p-6 flex items-start justify-between gap-4" onClick={() => setExpanded(isOpen ? null : project.id)}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-slate-400">{project.year}</span>
                        <span className="hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-medium" style={{ background: "rgba(0,245,255,0.1)", color: "#00f5ff", border: "1px solid rgba(0,245,255,0.2)" }}>
                          <Zap size={10} />{project.highlight}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="text-xs px-2.5 py-0.5 rounded-full font-medium text-slate-300" style={{ background: STACK_COLORS[tech] ?? "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 mt-1 text-slate-400">{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden font-inter">
                        <div className="px-6 pb-6">
                          <div className="border-t border-white/5 pt-5 space-y-3">
                            {project.bullets.map((bullet, bi) => (
                              <div key={bi} className="flex gap-3 items-start">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-cyan-400" />
                                <p className="text-slate-300 text-sm leading-relaxed">{bullet}</p>
                              </div>
                            ))}
                            {project.links.map((link) => (
                              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                                <ExternalLink size={14} />{link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
