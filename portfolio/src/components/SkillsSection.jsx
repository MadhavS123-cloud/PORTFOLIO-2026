import { motion } from "framer-motion";
import { resumeData } from "../data";
import { Code2, Layout, Database, Terminal, Cpu, Globe } from "lucide-react";

const ICON_MAP = {
  "Languages": Code2,
  "Frameworks & Libraries": Layout,
  "AI & APIs": Database,
  "Tools & Concepts": Terminal,
  "Others": Globe
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400 mb-3 block">03 / My Toolkit</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-xl mx-auto">A comprehensive overview of the languages, frameworks, and tools I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((group, idx) => {
            const Icon = ICON_MAP[group.group] || Code2;
            return (
              <motion.div key={group.group} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="group p-8 rounded-3xl border border-white/5 hover:border-cyan-400/20 transition-all duration-300" style={{ background: "rgba(10,15,30,0.5)", backdropFilter: "blur(10px)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{group.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-sm font-medium text-slate-400 bg-white/5 border border-white/5 hover:border-cyan-400/30 hover:text-white transition-all duration-200">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
