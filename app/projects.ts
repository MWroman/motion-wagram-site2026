import data from './projects.json';
export const projects = data;
export const selectedProjects = projects.filter((project) => project.featured);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
