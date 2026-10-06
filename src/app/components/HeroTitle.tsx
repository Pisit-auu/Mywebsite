"use client";

import { useEffect, useState } from "react";

const PHRASES = ["Software Developer", "Web Developer", "AI Developer", "IoT Explorer"];
const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 2200;

function commonPrefix(a: string, b: string) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}

// Deletes and retypes the title through each phrase. Server render and reduced motion
// show the first phrase as plain text; screen readers only ever get the first phrase.
export default function HeroTitle() {
  const [text, setText] = useState(PHRASES[0]);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setAnimating(true);

    let index = 0;
    let current = PHRASES[0];
    let timer: ReturnType<typeof setTimeout>;

    const step = (fn: () => void, ms: number) => {
      timer = setTimeout(fn, ms);
    };

    const next = () => {
      const target = PHRASES[(index + 1) % PHRASES.length];
      const keep = commonPrefix(current, target);
      const erase = () => {
        if (current.length > keep) {
          current = current.slice(0, -1);
          setText(current);
          step(erase, DELETE_MS);
        } else {
          step(type, TYPE_MS * 3);
        }
      };
      const type = () => {
        if (current.length < target.length) {
          current = target.slice(0, current.length + 1);
          setText(current);
          step(type, TYPE_MS);
        } else {
          index = (index + 1) % PHRASES.length;
          step(next, HOLD_MS);
        }
      };
      erase();
    };

    step(next, HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
      <span className="sr-only">{PHRASES[0]}</span>
      {/* Every phrase sits in the same grid cell, invisible, so the line never changes height */}
      <span aria-hidden="true" className="inline-grid">
        {PHRASES.map((p) => (
          <span key={p} className="invisible col-start-1 row-start-1">
            {p}
            <span className="inline-block w-[3px]" />
          </span>
        ))}
        <span className="col-start-1 row-start-1">
          {text}
          <span
            className={`inline-block w-[3px] h-[0.9em] ml-1 -mb-[0.08em] bg-slate-900 align-baseline ${animating ? "animate-[caret_1.1s_steps(1)_infinite]" : "hidden"}`}
          />
        </span>
      </span>
    </h1>
  );
}
