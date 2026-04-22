"use client";
import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Cpu, Globe } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  "Languages": Code2,
  "Frameworks & Libraries": Layout,
  "AI & APIs": Cpu,
  "Tools & Concepts": Terminal,
  "Others": Globe
};

const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "HTML", "CSS", "JavaScript"]
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express.js", "MongoDB", "Flask", "Tailwind CSS", "GSAP"]
  },
  {
    group: "AI & APIs",
    items: ["Gemini Pro", "Gemini API", "LLMs"]
  }
];

export default function Skills() {
  return (
    <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Technical <span className="text-purple-500 font-light italic">Expertise</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          A comprehensive overview of the languages, frameworks, and tools I use 
          to bring complex ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, idx) => {
          const Icon = ICON_MAP[group.group] || Code2;
          return (
            <motion.div 
              key={group.group} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: idx * 0.1 }} 
              className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-purple-500/20 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{group.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 rounded-full text-sm font-medium text-slate-400 bg-white/5 border border-white/5 group-hover:border-purple-500/30 group-hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
