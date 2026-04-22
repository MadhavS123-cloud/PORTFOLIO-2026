"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Overlay({ scrollContainer }: { scrollContainer: React.RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 25% (fades in 0-5%, stays, fades out 20-25%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.2, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [50, -50]);

  // Section 2: 30% to 55%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [50, -50]);

  // Section 3: 60% to 85%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.85], [50, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center p-8 overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mb-4">
            Madhav <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">Sachdeva</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 font-light tracking-wide mb-8">MERN Developer.</p>
          
          <div className="flex gap-6 pointer-events-auto">
            <Magnetic>
              <a href="https://github.com/MadhavS123-cloud" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.linkedin.com/in/madhav-sachdeva-362038234/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="mailto:madhavsachdeva613@gmail.com" aria-label="Send Email" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={24} aria-hidden="true" />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left max-w-7xl mx-auto px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
            I build <span className="text-cyan-400">digital experiences.</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
            From intuitive e-commerce platforms to AI-powered applications, I turn complex problems into elegant interfaces.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right max-w-7xl mx-auto px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Bridging <span className="text-purple-500">design</span> and engineering.
          </h2>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
            Ensuring every pixel is perfect and every interaction feels fluid and natural.
          </p>
        </motion.div>

      </div>

      {/* Floating Social Bar */}
      <div className="fixed left-8 bottom-8 flex flex-col gap-6 pointer-events-auto z-50">
        <div className="w-px h-24 bg-gradient-to-t from-cyan-400 to-transparent mx-auto mb-2" />
        <Magnetic>
          <a href="https://github.com/MadhavS123-cloud" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
            <Github size={20} aria-hidden="true" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="https://www.linkedin.com/in/madhav-sachdeva-362038234/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
            <Linkedin size={20} aria-hidden="true" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="mailto:madhavsachdeva613@gmail.com" aria-label="Email" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
            <Mail size={20} aria-hidden="true" />
          </a>
        </Magnetic>
      </div>
    </div>
  );
}
