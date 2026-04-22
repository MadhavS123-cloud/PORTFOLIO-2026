import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let start = null;
    const duration = 1400;

    function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(pct));
      if (pct < 100) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 600);
        }, 200);
      }
    }
    requestAnimationFrame(step);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050810]"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] rounded-full border border-dashed border-cyan-400/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-24px] rounded-full border border-dashed border-violet-400/15"
            />

            <div className="relative w-24 h-24 rounded-2xl border border-cyan-400/30 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(0,245,255,0.1), rgba(124,58,237,0.1))",
                boxShadow: "0 0 40px rgba(0,245,255,0.2), 0 0 80px rgba(124,58,237,0.1)",
              }}
            >
              <span
                className="text-4xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MS
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-slate-400 text-sm tracking-[0.3em] uppercase mb-8"
          >
            Madhav Sachdeva
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden"
          >
            <div
              className="h-full rounded-full transition-all duration-75 loading-bar"
              style={{ width: `${progress}%` }}
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3 text-xs text-slate-600 tabular-nums"
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
