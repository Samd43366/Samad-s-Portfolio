// Run before launch: npm run check:todo
// Fails while any TODO is left in src/ or the resume file is missing.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const exts = new Set(['.astro', '.ts', '.md', '.css', '.json']);
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (exts.has(p.slice(p.lastIndexOf('.')))) {
      readFileSync(p, 'utf8')
        .split('\n')
        .forEach((line, i) => {
          if (line.includes('TODO')) hits.push(`${p}:${i + 1}  ${line.trim()}`);
        });
    }
  }
}

walk('src');

if (!existsSync('public/resume.pdf')) hits.push('public/resume.pdf is missing (the nav and contact page link to it)');

try {
  const site = JSON.parse(readFileSync('src/data/site.json', 'utf8'));
  if (!site.photo) console.log('Note: no photo set yet (optional). Upload one in the CMS under Site settings.');
} catch {}

if (hits.length) {
  console.error(`\n${hits.length} thing(s) to fix before launch:\n`);
  for (const h of hits) console.error('  ' + h);
  console.error('');
  process.exit(1);
}
console.log('No TODOs left and resume present. Ready to launch.');
