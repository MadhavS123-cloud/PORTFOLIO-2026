import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "../data";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((n) =>
        document.querySelector(n.href)
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && window.scrollY >= sections[i].offsetTop - 120) {
          setActive(NAV_ITEMS[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-white/5 py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="relative w-10 h-10 rounded-xl flex items-center justify-center border border-cyan-400/30 hover:border-cyan-400/60 transition-all group"
            style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.1), rgba(124,58,237,0.1))" }}
          >
            <span
              className="text-lg font-bold group-hover:scale-110 transition-transform"
              style={{
                background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MS
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === item.href
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={resumeData.basics.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={18} />
            </a>
            <a href={resumeData.basics.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${resumeData.basics.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={18} />
            </a>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 glass pt-20"
          >
            <nav className="flex flex-col items-center gap-4 py-10">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-2xl font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-6 mt-8">
                <a href={resumeData.basics.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href={resumeData.basics.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
