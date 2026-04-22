"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 px-6 md:px-24 border-t border-white/5 bg-[#050810]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s build something <span className="text-cyan-400">extraordinary.</span></h2>
          <p className="text-slate-400 mb-8">
            Currently looking for new opportunities and collaborations. 
            Feel free to reach out if you have a project in mind or just want to say hi!
          </p>
          <a 
            href="mailto:madhavsachdeva613@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-cyan-400 transition-colors duration-300"
          >
            Get in Touch <Mail size={18} />
          </a>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6">
          <div className="flex gap-4">
            <Magnetic>
              <a href="https://github.com/MadhavS123-cloud" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                <Github size={20} aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.linkedin.com/in/madhav-sachdeva-362038234/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </Magnetic>
          </div>
          <Magnetic>
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
            >
              Back to Top <ArrowUpRight size={16} aria-hidden="true" className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </Magnetic>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between text-xs text-slate-400 tracking-widest uppercase">
        <p>&copy; {currentYear} Madhav Sachdeva. All rights reserved.</p>
        <p className="mt-4 sm:mt-0 italic font-light">Designed with precision.</p>
      </div>
    </footer>
  );
}
