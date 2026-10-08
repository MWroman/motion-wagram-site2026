import data from './projects.fr.json';
export const projects = data;
export const selectedProjects = projects.filter(p => p.featured);
export const getProject = (slug: string) => projects.find(p => p.slug === slug);
