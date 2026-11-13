"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  hue: number;
}

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Pointer interaction
    let mouseX = width / 2;
    let mouseY = height / 3;

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // Create particles
    const particleCount = Math.min(50, Math.floor((width * height) / 30000));
    const particles: Particle[] = [];

    const hues = [24, 215, 260]; // Durvix brand orange (24), royal blue (215), deep violet (260)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.6,
        baseAlpha: Math.random() * 0.35 + 0.15,
        alpha: 0.2,
        hue: hues[i % hues.length],
      });
    }

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let lastTime = performance.now();

    const render = (time: number) => {
      animId = requestAnimationFrame(render);
      if (!isVisible) return;

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse proximity subtle swell
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distSq = dx * dx + dy * dy;
        const maxDist = 200;

        let alpha = p.baseAlpha;
        if (distSq < maxDist * maxDist) {
          const prox = 1 - Math.sqrt(distSq) / maxDist;
          alpha += prox * 0.45;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${alpha})`;
        ctx.fill();

        // Connect adjacent particles with subtle constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cDistSq = cdx * cdx + cdy * cdy;
          const connectDist = 120;

          if (cDistSq < connectDist * connectDist) {
            const lineAlpha = (1 - Math.sqrt(cDistSq) / connectDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-60"
    />
  );
}

