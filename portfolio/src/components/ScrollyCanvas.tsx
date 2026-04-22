"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120; // 000 to 119

export default function ScrollyCanvas({ scrollContainer }: { scrollContainer: React.RefObject<HTMLDivElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"]
  });
  
  // Ref for images to avoid re-renders
  const imagesRef = useRef<HTMLImageElement[]>(new Array(FRAME_COUNT).fill(null));
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadImages = async () => {
      // 1. Load the first frame immediately for instant LCP
      const firstImg = new Image();
      firstImg.src = "/api/sequence/000";
      await new Promise(resolve => {
        firstImg.onload = () => {
          imagesRef.current[0] = firstImg;
          if (!isCancelled) setFirstFrameLoaded(true);
          resolve(true);
        };
        firstImg.onerror = () => resolve(false);
      });

      // 2. Load the rest in small batches to prioritize network availability
      for (let i = 1; i < FRAME_COUNT; i++) {
        if (isCancelled) break;
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        img.src = `/api/sequence/${frameIndex}`;
        
        // Use a slight delay or batching if needed, but sequential is safe
        await new Promise(resolve => {
          img.onload = () => {
            imagesRef.current[i] = img;
            resolve(true);
          };
          img.onerror = () => resolve(false);
        });
      }
    };

    loadImages();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Handle resize once the first frame is ready
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !firstFrameLoaded) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      drawFrame(Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1)));
    };
    window.addEventListener("resize", handleResize);
    
    if (firstFrameLoaded) {
      handleResize();
    }
    
    return () => window.removeEventListener("resize", handleResize);
  }, [firstFrameLoaded]);

  const drawFrame = (index: number) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    
    let img = imagesRef.current[index];
    if (!img || !img.complete) {
        for (let i = index - 1; i >= 0; i--) {
            if (imagesRef.current[i] && imagesRef.current[i].complete) {
                img = imagesRef.current[i];
                break;
            }
        }
    }
    
    if (!img || !img.complete) return;

    const canvas = canvasRef.current;
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let renderWidth, renderHeight, x = 0, y = 0;

    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      y = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      renderHeight = canvas.height;
      x = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050810]">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full" 
        role="img" 
        aria-label="Cinematic scrollytelling background animation"
      />
    </div>
  );
}
