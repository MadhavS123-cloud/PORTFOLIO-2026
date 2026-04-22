import { motion } from "framer-motion";
import { Trophy, Award, Calendar, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative section-padding px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-cyan-400 mb-3 block">
            05 / Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Hackathons & Certs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hackathons Sub-section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-cyan-400" size={24} />
              <h3 className="text-xl font-bold text-white">Hackathons</h3>
            </div>
            {resumeData.hackathons.map((hack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white leading-tight">{hack.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 font-semibold uppercase">
                    {hack.year}
                  </span>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                  {hack.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Sub-section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-violet-400" size={24} />
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            {resumeData.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white leading-tight">{cert.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-400/10 text-violet-400 font-semibold uppercase">
                    {cert.year}
                  </span>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
            
            {/* Displaying extra achievements or interests if needed */}
            <div className="mt-8 p-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
                <p className="text-sm text-slate-500 italic text-center">
                    "Continuously learning and exploring new technologies through online platforms and community events."
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
