import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div style={{ scaleX, transformOrigin: "0%" }} className="fixed top-0 left-0 right-0 h-[2px] z-[60]" aria-hidden="true">
        <div className="h-full w-full loading-bar" />
      </motion.div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {SECTIONS.map((s) => (
          <button key={s.id} onClick={() => { const el = document.getElementById(s.id); if (el) el.scrollIntoView({ behavior: "smooth" }); }} title={s.label} className="group flex items-center gap-2 justify-end">
            <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{s.label}</span>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${active === s.id ? "bg-cyan-400 scale-150" : "bg-slate-600 hover:bg-slate-400"}`} style={active === s.id ? { boxShadow: "0 0 8px rgba(0,245,255,0.8)" } : {}} />
          </button>
        ))}
      </div>
    </>
  );
}
