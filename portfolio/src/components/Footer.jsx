import { Github, Linkedin, Heart } from "lucide-react";
import { resumeData } from "../data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span className="font-bold text-white" style={{ background: "linear-gradient(135deg, #00f5ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Madhav Sachdeva</span>
          <span>·</span><span>Built with React + Framer Motion</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={resumeData.basics.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><Github size={18} /></a>
          <a href={resumeData.basics.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><Linkedin size={18} /></a>
        </div>
        <p className="flex items-center gap-1.5 text-slate-500 text-sm">Made with <Heart size={13} className="text-pink-400 fill-pink-400" /> in {resumeData.basics.location}</p>
      </div>
    </footer>
  );
}
