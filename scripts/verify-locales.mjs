import assert from 'node:assert/strict';
import fs from 'node:fs';
const source = fs.readFileSync('public/_worker.js','utf8');
const {default: worker} = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
let delegated = 0;
const env = {ASSETS:{fetch: async () => {delegated++; return new Response('asset');}}};
async function request(path, country, cookie) {
 const req = new Request(`https://www.motionwagram.com${path}`,{headers:cookie?{Cookie:cookie}:{}});
 if(country !== undefined) Object.defineProperty(req,'cf',{value:{country}});
 return worker.fetch(req,env);
}
for (const [country,cookie,expected] of [
 ['FR',undefined,'fr'],['US',undefined,'en'],[undefined,undefined,'en'],['XX',undefined,'en'],
 ['FR','mw_locale=en','en'],['US','mw_locale=fr','fr'],['FR','mw_locale=invalid','fr'],
 ['US','other=1; mw_locale=fr; another=2','fr']
]) {
 const response = await request('/?campaign=test',country,cookie);
 assert.equal(response.status,302);
 assert.equal(response.headers.get('Location'),`https://www.motionwagram.com/${expected}/?campaign=test`);
 assert.match(response.headers.get('Cache-Control'),/no-store/);
}
for(const path of ['/fr','/en','/fr/','/en/','/fr/work/','/en/projects/sothebys/','/media/astorg-2026-hero.jpg']) {
 const response = await request(path,'FR','mw_locale=en');
 assert.equal(response.status,200); assert.equal(await response.text(),'asset');
}
assert.equal(delegated,7);
const projects = JSON.parse(fs.readFileSync('app/projects.json','utf8'));
const paths = ['', 'work/', 'mentions-legales/', 'confidentialite/', ...projects.map(p=>`projects/${p.slug}/`)];
for (const locale of ['fr','en']) for (const path of paths) {
 const html = fs.readFileSync(`out/${locale}/${path}index.html`,'utf8');
 assert.ok(html.includes(`<html lang="${locale}"`));
 assert.ok(html.includes(`rel="canonical" href="https://www.motionwagram.com/${locale}/${path}"`));
 for(const target of ['fr','en']) assert.ok(html.includes(`hrefLang="${target}" href="https://www.motionwagram.com/${target}/${path}"`));
 assert.ok(html.includes('language-switcher'));
 assert.ok(!html.includes('href="/work/"'));
}
assert.ok(fs.existsSync('out/_worker.js'));
assert.ok(!fs.existsSync('out/production-evenementielle/index.html'));
console.log('Passed edge routing, preference precedence, direct URL passthrough and 68 localized page metadata checks.');
