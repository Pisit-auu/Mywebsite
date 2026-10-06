"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { hostname, sortProjects, type Project, type SkillGroup } from "./types";

// Skill names don't always match project tags word for word ("Tailwind CSS" vs "Tailwind").
// List the tags each skill should light up; anything not listed matches its own name.
const SKILL_TAGS: Record<string, string[]> = {
  "Tailwind CSS": ["tailwind"],
  PrismaORM: ["prisma"],
  React: ["react", "next.js"],
  SQL: ["postgresql", "mysql", "sql"],
  LoRA: ["lora"],
};

type Filter = { label: string; keys: string[] };

function matches(project: Project, filter: Filter) {
  return project.tags.some((tag) => {
    const t = tag.toLowerCase();
    return filter.keys.some((k) => t === k || (k.length > 3 && t.includes(k)));
  });
}

function skillFilter(skill: string): Filter {
  return { label: skill, keys: SKILL_TAGS[skill] ?? [skill.toLowerCase()] };
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function WorkExplorer({ skills, projects: input }: { skills: SkillGroup[]; projects: Project[] }) {
  const projects = useMemo(() => sortProjects(input), [input]);
  const [featured, ...rest] = projects;
  const [filter, setFilter] = useState<Filter | null>(null);

  const matchCount = filter ? projects.filter((p) => matches(p, filter)).length : projects.length;
  const isDimmed = (p: Project) => filter !== null && !matches(p, filter);

  function choose(next: Filter, scroll: boolean) {
    setFilter((current) => (current?.label === next.label ? null : next));
    if (scroll) {
      document.getElementById("work")?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
  }

  return (
    <>
      {/* --- Skills --- */}
      <section className="max-w-4xl mx-auto px-6 mb-24 pt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-8">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider">Technologies</h2>
          <p className="text-sm text-slate-500">Click a technology to see the projects built with it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const f = skillFilter(skill);
                  const count = projects.filter((p) => matches(p, f)).length;
                  if (count === 0) {
                    return (
                      <span key={skill} className="px-3 py-1 bg-white text-slate-600 text-sm rounded-full border border-slate-200">
                        {skill}
                      </span>
                    );
                  }
                  const active = filter?.label === skill;
                  return (
                    <button
                      key={skill}
                      type="button"
                      aria-pressed={active}
                      onClick={() => choose(f, !active)}
                      className={`group/chip inline-flex items-center gap-2 pl-3 pr-1 py-1 text-sm rounded-full border transition-[background-color,border-color,color,box-shadow,translate] duration-200 ease-out active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                        active
                          ? "bg-slate-900 border-slate-900 text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-slate-400 hover:shadow-sm"
                      }`}
                    >
                      {skill}
                      <span
                        className={`min-w-5 h-5 px-1.5 inline-flex items-center justify-center rounded-full text-[11px] font-semibold tabular-nums transition-colors ${
                          active ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500 group-hover/chip:bg-slate-900 group-hover/chip:text-white"
                        }`}
                      >
                        {count}
                        <span className="sr-only"> {count === 1 ? "project" : "projects"}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Projects*/}
      <section id="work" className="max-w-4xl mx-auto px-6 mb-32">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">My Project</h2>
          <div aria-live="polite" className="flex items-center gap-3 text-sm text-slate-500 pb-1.5">
            {filter ? (
              <>
                <p>
                  <span className="tabular-nums font-semibold text-slate-900">{matchCount}</span> of {projects.length} projects use{" "}
                  <span className="font-semibold text-slate-900">{filter.label}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setFilter(null)}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white pl-2.5 pr-2 py-0.5 text-slate-700 hover:border-slate-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  Show all
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
                    <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" />
                  </svg>
                </button>
              </>
            ) : (
              <p>
                <span className="tabular-nums font-semibold text-slate-900">{projects.length}</span> projects
              </p>
            )}
          </div>
        </div>

        {/* Latest project leads at full width */}
        <article className={`group transition-[opacity,filter] duration-500 ease-out ${isDimmed(featured) ? "opacity-30 grayscale" : ""}`}>
          <ProjectPreview project={featured} featured />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-5">
              <p className="text-sm text-slate-500 tabular-nums mb-2">{featured.year} · Latest</p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-balance">
                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-[6px] decoration-2 decoration-slate-300">
                  {featured.title.trim()}
                </a>
              </h3>
              <VisitLink href={featured.link} className="mt-5" />
            </div>
            <div className="md:col-span-7">
              <p className="text-slate-600 leading-relaxed max-w-[65ch]">{featured.desc.trim()}</p>
              <ProjectTags tags={featured.tags} filter={filter} onPick={(tag) => choose({ label: tag, keys: [tag.toLowerCase()] }, false)} />
            </div>
          </div>
        </article>

        <div className="mt-20 md:mt-24 border-t border-slate-200 divide-y divide-slate-200">
          {rest.map((project) => (
            <article
              key={project.link}
              className={`group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 transition-[opacity,filter] duration-500 ease-out ${
                isDimmed(project) ? "opacity-30 grayscale" : ""
              }`}
            >
              <div className="md:col-span-5">
                <ProjectPreview project={project} />
              </div>
              <div className="md:col-span-7 flex flex-col">
                <p className="text-sm text-slate-500 tabular-nums mb-1.5">{project.year}</p>
                <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-2 decoration-slate-300">
                    {project.title.trim()}
                  </a>
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed max-w-[65ch]">{project.desc.trim()}</p>
                <ProjectTags tags={project.tags} filter={filter} onPick={(tag) => choose({ label: tag, keys: [tag.toLowerCase()] }, false)} />
                <VisitLink href={project.link} className="mt-6" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  );
}

function VisitLink({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 self-start text-sm font-medium text-slate-900 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 ${className}`}
    >
      <span className="underline underline-offset-4 decoration-slate-300 group-hover:decoration-slate-900 transition-colors">Visit site</span>
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="sr-only">(opens {hostname(href)} in a new tab)</span>
    </a>
  );
}

function ProjectTags({ tags, filter, onPick }: { tags: string[]; filter: Filter | null; onPick: (tag: string) => void }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => {
        const lit = filter !== null && matches({ tags: [tag] } as Project, filter);
        return (
          <li key={tag}>
            <button
              type="button"
              onClick={() => onPick(tag)}
              title={`Show projects using ${tag}`}
              className={`px-2 py-1 text-xs rounded-md border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                lit ? "bg-slate-900 border-slate-900 text-white" : "bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-300 hover:text-slate-700"
              }`}
            >
              {tag}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

// A browser-window frame around a real screenshot of the live site.
// It unclips into view as it scrolls in, and on hover the screenshot glides
// from the top of the page to the bottom so the visitor sees the whole site.
function ProjectPreview({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className="reveal-clip block rounded-lg overflow-hidden border border-slate-200 bg-white shadow-[0_12px_32px_-16px_rgba(15,23,42,0.35)] transition-[box-shadow,translate] duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.45)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
    >
      <div className="flex items-center gap-3 h-8 px-3 border-b border-slate-200 bg-slate-50">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <span className="flex-1 min-w-0 truncate text-center text-[11px] font-mono text-slate-400 pr-12">{hostname(project.link)}</span>
      </div>
      <div className={`relative ${featured ? "aspect-[16/9]" : "aspect-[16/10]"} bg-slate-100`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title.trim()}`}
            fill
            sizes={featured ? "(min-width: 896px) 848px, 100vw" : "(min-width: 896px) 340px, 100vw"}
            className="object-cover object-top transition-[object-position] duration-[3000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:object-bottom motion-reduce:transition-none"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-900 text-center px-6">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title.trim()}</span>
            <span className="text-xs font-mono text-slate-400">{hostname(project.link)}</span>
          </div>
        )}
      </div>
    </a>
  );
}
