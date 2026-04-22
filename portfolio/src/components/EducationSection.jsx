import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { resumeData } from "../data";

export default function EducationSection() {
  return (
    <section id="education" className="relative section-padding px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400 mb-3 block">04 / Background</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Education</h2>
        </motion.div>

        {resumeData.education.map((edu, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative rounded-2xl p-8 border border-cyan-400/20 overflow-hidden" style={{ background: "rgba(10,15,30,0.7)", backdropFilter: "blur(20px)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
            <div className="relative flex items-start gap-5">
              <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(124,58,237,0.15))", border: "1px solid rgba(0,245,255,0.2)" }}>
                <GraduationCap className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                <p className="text-cyan-400 font-medium mb-3">{edu.degree}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{edu.note}</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.2)", color: "#00f5ff" }}>
                    <BookOpen size={12} />Computer Science
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}>{edu.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8 rounded-2xl p-6 border border-white/5" style={{ background: "rgba(10,15,30,0.5)", backdropFilter: "blur(20px)" }}>
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Additional Notes</h4>
          <div className="space-y-2">
            {resumeData.extra.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="mt-2 w-1 h-1 rounded-full shrink-0 bg-slate-500" />
                <p className="text-slate-400 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
