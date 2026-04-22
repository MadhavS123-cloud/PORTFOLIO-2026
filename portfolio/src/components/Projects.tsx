import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";

const projects = [
  {
    title: "ERIS",
    year: "2026",
    highlight: "Real-time Emergency Response System",
    stack: ["React 19", "Leaflet", "Vite", "Overpass API"],
    desc: "A full-scale emergency platform connecting patients, drivers, and hospitals. Features live GPS tracking, intelligent routing, and hospital capacity management.",
    link: "https://github.com/MadhavS123-cloud/ERIS-Emergency-Response-Intelligent-System-"
  },
  {
    title: "Finance Tracker",
    year: "2026",
    highlight: "Comprehensive wealth management",
    stack: ["React", "React Router", "Tailwind CSS", "Context API"],
    desc: "A professional wealth management dashboard with role-based access, real-time expense tracking, and dynamic theme switching.",
    link: "https://github.com/MadhavS123-cloud"
  },
  {
    title: "Ecommerce-Vibe",
    year: "2026",
    highlight: "Premium UI/UX E-commerce experience",
    stack: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    desc: "A modern e-commerce platform featuring complex state management, responsive UI, and premium micro-animations for a professional user experience.",
    link: "https://github.com/MadhavS123-cloud"
  },
  {
    title: "Skill Match AI",
    year: "2026",
    highlight: "AI-powered ATS scoring",
    stack: ["Python", "Flask", "Gemini Pro", "GSAP", "Tailwind CSS"],
    desc: "An AI-powered resume parsing and ATS score calculation system with a Hiring Manager Rejection Simulator and automated skill gap analysis.",
    link: "https://github.com/MadhavS123-cloud"
  },
  {
    title: "Write Ease",
    year: "2025",
    highlight: "Real-time AI writing assistant",
    stack: ["React", "Gemini API", "Tailwind CSS"],
    desc: "A minimalist writing assistant that uses Large Language Models to improve clarity, tone, and grammar in real-time.",
    link: "https://replit.com/t/polaris/repls/WriteEase"
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Selected <span className="text-cyan-400 font-light italic">Works</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl">
          A collection of projects showcasing my journey in creative development, 
          merging cutting-edge technology with thoughtful design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-purple-500/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-purple-500/5 transition-all duration-700 opacity-0 group-hover:opacity-100" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-cyan-400 text-xs font-medium tracking-wide uppercase">{project.highlight}</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium text-slate-300 border border-white/10 rounded-full">
                  {project.year}
                </span>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <Magnetic>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`View ${project.title} project`}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors pointer-events-auto"
                  >
                    View Project <ArrowRight size={16} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
