"use client";
import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#050810] min-h-screen selection:bg-cyan-400/20 selection:text-cyan-400">
      <div ref={scrollContainer} className="relative w-full h-[500vh]">
        <ScrollyCanvas scrollContainer={scrollContainer} />
        <Overlay scrollContainer={scrollContainer} />
      </div>
      
      <div className="relative z-20 bg-[#050810]">
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
