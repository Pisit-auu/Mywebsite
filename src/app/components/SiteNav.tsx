"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { hostname, sortProjects, type Project } from "./types";

const SECTIONS = [
  { id: "about", label: "About Me" },
  { id: "work", label: "Project" },
  { id: "contact", label: "Contact" },
];

type Socials = { github: string; email: string };

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

// Which section the reader is in: the last one whose top has passed 40% of the viewport,
// or Contact once the page bottoms out (the footer is too short to ever reach that line).
function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return active;
}

export default function SiteNav({ name, socials, projects }: { name: string; socials: Socials; projects: Project[] }) {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="w-full border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#about" className="font-semibold text-slate-900 tracking-tight whitespace-nowrap">
          <span className="sm:hidden">{name.split(" ")[0]}</span>
          <span className="hidden sm:inline">{name}</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6 text-sm text-slate-500">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              className={`relative py-1 whitespace-nowrap transition-colors hover:text-slate-900 ${active === s.id ? "text-slate-900" : ""}`}
            >
              {s.label}
              <span
                aria-hidden="true"
                className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-slate-900 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  active === s.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 h-8 rounded-md border border-slate-200 bg-white px-2 text-slate-500 hover:border-slate-400 hover:text-slate-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            aria-label="Search the site"
            aria-keyshortcuts={isMac ? "Meta+K" : "Control+K"}
          >
            <SearchIcon className="w-4 h-4" />
            <kbd className="hidden md:inline font-sans text-xs text-slate-400">{isMac ? "⌘K" : "Ctrl K"}</kbd>
          </button>
        </div>
      </div>

      {/* Reading progress, driven by scroll position in CSS (see globals.css) */}
      <div aria-hidden="true" className="scroll-progress absolute left-0 right-0 bottom-0 h-0.5 bg-slate-900 origin-left" />

      <CommandPalette open={open} onClose={() => setOpen(false)} socials={socials} projects={projects} />
    </nav>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" />
      <path d="m10.5 10.5 3 3" />
    </svg>
  );
}

type Command = {
  id: string;
  group: "Go to" | "Projects" | "Contact";
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void | "keep-open";
};

function CommandPalette({ open, onClose, socials, projects }: { open: boolean; onClose: () => void; socials: Socials; projects: Project[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setQuery("");
      setIndex(0);
      setCopied(false);
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const goTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() });
  }, []);

  const commands: Command[] = [
    ...SECTIONS.map((s) => ({ id: `go-${s.id}`, group: "Go to" as const, label: s.label, run: () => goTo(s.id) })),
    ...sortProjects(projects).map((p) => ({
      id: `p-${p.link}`,
      group: "Projects" as const,
      label: p.title.trim(),
      hint: `${p.year} · ${hostname(p.link)}`,
      keywords: p.tags.join(" "),
      run: () => {
        window.open(p.link, "_blank", "noopener,noreferrer");
      },
    })),
    { id: "github", group: "Contact", label: "Open GitHub", hint: hostname(socials.github), run: () => void window.open(socials.github, "_blank", "noopener,noreferrer") },
    {
      id: "copy-email",
      group: "Contact",
      label: copied ? "Email copied" : "Copy email address",
      hint: socials.email,
      run: () => {
        navigator.clipboard?.writeText(socials.email).then(() => setCopied(true));
        return "keep-open";
      },
    },
    { id: "mail", group: "Contact", label: "Send an email", hint: socials.email, run: () => void (window.location.href = `mailto:${socials.email}`) },
  ];

  const q = query.trim().toLowerCase();
  const results = q ? commands.filter((c) => `${c.label} ${c.hint ?? ""} ${c.keywords ?? ""}`.toLowerCase().includes(q)) : commands;
  const safeIndex = Math.min(index, Math.max(results.length - 1, 0));

  function execute(c: Command | undefined) {
    if (!c) return;
    if (c.run() !== "keep-open") onClose();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((safeIndex + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((safeIndex - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      execute(results[safeIndex]);
    }
  }

  const activeId = results[safeIndex]?.id;
  useEffect(() => {
    if (activeId) document.getElementById(`cmd-${activeId}`)?.scrollIntoView({ block: "nearest" });
  }, [activeId]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-label="Search the site"
      className="palette m-0 mx-auto mt-[12vh] w-[min(560px,calc(100vw-32px))] max-h-[min(520px,76vh)] p-0 rounded-xl border border-slate-200 bg-white text-slate-800 shadow-[0_24px_64px_-24px_rgba(15,23,42,0.5)] backdrop:bg-slate-900/40 open:flex flex-col overflow-hidden"
    >
      <div className="flex items-center gap-3 px-4 border-b border-slate-200">
        <SearchIcon className="w-4 h-4 text-slate-400 shrink-0" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Search projects, technologies, or jump to…"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[safeIndex] ? `cmd-${results[safeIndex].id}` : undefined}
          className="flex-1 h-12 bg-transparent text-[15px] outline-none placeholder:text-slate-400"
        />
        <kbd className="font-sans text-[11px] text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">esc</kbd>
      </div>

      <ul id="palette-list" role="listbox" className="flex-1 overflow-y-auto p-2">
        {results.length === 0 && (
          <li className="px-3 py-8 text-center text-sm text-slate-500">
            Nothing matches “{query}”. Try a technology like <span className="font-medium text-slate-700">Python</span>.
          </li>
        )}
        {results.map((c, i) => {
          const showGroup = i === 0 || results[i - 1].group !== c.group;
          return (
            <li key={c.id} role="presentation">
              {showGroup && <p className="px-3 pt-3 pb-1.5 text-xs font-semibold text-slate-400">{c.group}</p>}
              <div
                id={`cmd-${c.id}`}
                role="option"
                aria-selected={i === safeIndex}
                onMouseMove={() => setIndex(i)}
                onClick={() => execute(c)}
                className={`flex items-center justify-between gap-4 px-3 py-2.5 rounded-lg cursor-pointer text-sm transition-colors duration-100 ${
                  i === safeIndex ? "bg-slate-900 text-white" : "text-slate-700"
                }`}
              >
                <span className="font-medium truncate">{c.label}</span>
                {c.hint && <span className={`text-xs truncate ${i === safeIndex ? "text-slate-300" : "text-slate-400"}`}>{c.hint}</span>}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="hidden sm:flex gap-4 px-4 py-2.5 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-500">
        <span>↑ ↓ to move</span>
        <span>↵ to open</span>
        <span>esc to close</span>
      </div>
    </dialog>
  );
}
