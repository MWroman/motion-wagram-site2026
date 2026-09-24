import fs from 'node:fs';
import path from 'node:path';
const projects = JSON.parse(fs.readFileSync('app/projects.json', 'utf8'));
const output = path.resolve('out');
const pages = ['index.html', 'work/index.html', ...projects.map(p => `projects/${p.slug}/index.html`)];
const failures = [];
if (projects.length !== new Set(projects.map(p => p.slug)).size) failures.push('Duplicate project slug');
for (const page of pages) {
  const file = path.join(output,page);
  if (!fs.existsSync(file)) { failures.push(`Missing page: ${page}`); continue; }
  const html = fs.readFileSync(file,'utf8');
  if (!html.includes('<h1')) failures.push(`Missing h1: ${page}`);
  for (const [,raw] of html.matchAll(/(?:src|href|poster)="([^"]+)"/g)) {
    if (!raw.startsWith('/') || raw.startsWith('//')) continue;
    const url = decodeURIComponent(raw.split(/[?#]/)[0]);
    let target = path.join(output,url);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target,'index.html');
    if (!fs.existsSync(target)) failures.push(`${page}: unresolved ${url}`);
  }
  if (/DEMO REEL|DEMO STUDY|stock media/i.test(html)) failures.push(`Demo copy: ${page}`);
}
for (const project of projects) {
  if (project.images.length > 5) failures.push(`More than five photos: ${project.slug}`);
  for (const item of [...project.images,...project.videos]) {
    if (!fs.existsSync(path.join(output,item.src))) failures.push(`Missing media: ${item.src}`);
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`Verified ${pages.length} exported pages, ${projects.length} project routes, local links and media.`);
