export type Project = {
  title: string;
  desc: string;
  year: string;
  link: string;
  image: string | null;
  tags: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export function hostname(url: string) {
  return new URL(url).hostname;
}

// Newest first; the sort is stable so same-year projects keep their written order.
export function sortProjects(projects: Project[]) {
  return [...projects].sort((a, b) => Number(b.year) - Number(a.year));
}
