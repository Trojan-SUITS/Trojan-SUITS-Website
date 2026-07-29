"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
};

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let shootingStar: { x: number; y: number; vx: number; vy: number; life: number } | null = null;
    let animationFrame: number;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((window.innerWidth * window.innerHeight) / 3200);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.2 + 0.3,
        baseAlpha: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.015 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    }

    function draw(time: number) {
      const canvas = canvasRef.current;
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const star of stars) {
        const alpha = prefersReducedMotion
          ? star.baseAlpha
          : star.baseAlpha *
            (0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinklePhase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 236, 245, ${alpha})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        if (!shootingStar && Math.random() < 0.003) {
          const startX = Math.random() * window.innerWidth * 0.6;
          shootingStar = {
            x: startX,
            y: -10,
            vx: 6 + Math.random() * 4,
            vy: 3 + Math.random() * 2,
            life: 1,
          };
        }
        if (shootingStar) {
          const s = shootingStar;
          ctx.beginPath();
          const grad = ctx.createLinearGradient(
            s.x,
            s.y,
            s.x - s.vx * 8,
            s.y - s.vy * 8
          );
          grad.addColorStop(0, `rgba(76, 214, 255, ${s.life})`);
          grad.addColorStop(1, "rgba(76, 214, 255, 0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8);
          ctx.stroke();

          s.x += s.vx;
          s.y += s.vy;
          s.life -= 0.012;
          if (s.life <= 0 || s.y > window.innerHeight) shootingStar = null;
        }
      }

      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #0c1220 0%, #030509 70%)",
      }}
      aria-hidden="true"
    />
  );
}
