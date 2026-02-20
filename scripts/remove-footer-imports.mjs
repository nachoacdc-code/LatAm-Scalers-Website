/**
 * Remove Footer import and usage from individual pages since it's now in Layout.
 * Run: node scripts/remove-footer-imports.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walk(full));
    else if (full.endsWith('.astro')) results.push(full);
  }
  return results;
}

const pagesDir = join(process.cwd(), 'src', 'pages');
const files = walk(pagesDir);
let changed = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  const original = content;

  // Remove Footer import line
  content = content.replace(/import\s+Footer\s+from\s+['"][^'"]+Footer\.astro['"];\s*\n/g, '');

  // Remove <Footer /> or <Footer/> usage
  content = content.replace(/\s*<Footer\s*\/>\s*\n?/g, '\n');

  if (content !== original) {
    writeFileSync(file, content, 'utf8');
    changed++;
    console.log(`✓ ${relative(pagesDir, file)}`);
  }
}

console.log(`\nDone: ${changed} files updated.`);
