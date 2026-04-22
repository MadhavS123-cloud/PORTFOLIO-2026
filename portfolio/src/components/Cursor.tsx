"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        mixBlendMode: "difference"
      }}
    >
      <div className="absolute inset-0 m-auto w-1 h-1 bg-cyan-400 rounded-full" />
    </motion.div>
  );
}
