import projects from "@/data/projects";

export function getProjects() {
  return projects;
}

export function getProject(slug) {
  return projects.find((item) => item.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((item) => item.featured);
}