"use client";

import Image from "next/image";
import { useRef } from "react";

const MAX_TILT = 10; // degrees

// The portrait leans toward the pointer like a card held in the hand,
// with a soft highlight that follows the cursor across it.
export default function TiltPhoto({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width; // 0..1
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * MAX_TILT * 2}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * MAX_TILT * 2}deg`);
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
    el.dataset.active = "true";
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    delete el.dataset.active;
  }

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 [perspective:800px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        ref={ref}
        className="group/tilt relative w-full h-full rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] [transform-style:preserve-3d] data-[active]:duration-150"
      >
        <div className="absolute inset-0 bg-slate-200 rounded-full animate-pulse"></div>
        <Image src={src} alt={alt} fill className="object-cover rounded-full border-4 border-white shadow-xl" priority />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full pointer-events-none opacity-0 transition-opacity duration-300 group-data-[active]/tilt:opacity-100 bg-[radial-gradient(circle_at_var(--gx,50%)_var(--gy,50%),rgba(255,255,255,0.45),transparent_55%)] mix-blend-soft-light"
        />
      </div>
    </div>
  );
}
