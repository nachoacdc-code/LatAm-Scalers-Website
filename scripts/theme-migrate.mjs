/**
 * Mass theme migration: dark -> light for all page files.
 * Run: node scripts/theme-migrate.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const SRC = join(process.cwd(), 'src');
const SKIP = ['index.astro']; // homepage already done

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walk(full));
    } else if (full.endsWith('.astro')) {
      results.push(full);
    }
  }
  return results;
}

const replacements = [
  // Cards and containers
  ['border-slate-800 bg-slate-900/40', 'border-border bg-white shadow-sm'],
  ['border-slate-800 bg-slate-950/40', 'border-border bg-bg-alt'],
  ['border-slate-800 bg-slate-900/60', 'border-white/20 bg-white/5'],
  ['border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-950', 'border-primary/10 bg-primary'],
  ['bg-gradient-to-br from-slate-900/60 to-slate-950', 'bg-primary'],
  ['border-slate-800 bg-slate-950/60', 'border-border bg-bg-light'],
  ['border-slate-800/80 bg-slate-950', 'border-border bg-bg-dark'],
  ['border-slate-800/80', 'border-border'],
  ['border-slate-800', 'border-border'],

  // Buttons
  ['bg-sky-600', 'bg-accent'],
  ['bg-sky-500', 'bg-accent'],
  ['hover:bg-sky-500', 'hover:bg-accent/90'],
  ['hover:bg-sky-400', 'hover:bg-accent/90'],
  ['text-slate-950', 'text-white'],

  // Text colors (content sections)
  ['text-sky-300', 'text-accent'],
  ['hover:text-sky-200', 'hover:text-accent/80'],
  ['text-sky-200', 'text-accent'],

  // Focus rings
  ['ring-sky-300', 'ring-accent'],
  ['ring-offset-slate-950', ''],

  // Hover states
  ['hover:bg-slate-900', 'hover:bg-bg-alt'],
  ['hover:bg-slate-800/70', 'hover:bg-bg-alt'],

  // Blur orbs
  ['bg-sky-500/10', 'bg-accent/5'],
  ['bg-indigo-500/10', 'bg-design/5'],

  // Misc slate refs
  ['bg-slate-900/95', 'bg-primary/95'],
  ['bg-slate-900/50', 'bg-bg-alt'],
  ['bg-slate-900', 'bg-bg-alt'],
  ['bg-slate-950/95', 'bg-primary/95'],
  ['bg-slate-950/40', 'bg-bg-alt'],
  ['bg-slate-950/60', 'bg-bg-light'],
  ['bg-slate-950', 'bg-bg-dark'],
  ['bg-slate-900/40', 'bg-white'],
  ['bg-slate-800/70', 'bg-bg-alt'],
  ['bg-slate-800', 'bg-border'],
];

// Files that should keep certain dark patterns (hero-only components)
const HERO_COMPONENTS = ['Hero.astro', 'HeroA.astro', 'HeroB.astro'];

const pageFiles = walk(join(SRC, 'pages'));
const componentFiles = walk(join(SRC, 'components')).filter(
  f => !f.includes('Nav.astro') && !f.includes('Footer.astro') && !f.includes('Section.astro') &&
       !f.includes('CategoryCard.astro') && !f.includes('TrustBadge.astro') &&
       !f.includes('ui/')
);

const allFiles = [...pageFiles, ...componentFiles];
let totalChanges = 0;

for (const file of allFiles) {
  const rel = relative(SRC, file);
  // Skip homepage (already done)
  if (rel === 'pages\\index.astro' || rel === 'pages/index.astro') continue;

  let content = readFileSync(file, 'utf8');
  const original = content;

  for (const [find, replace] of replacements) {
    if (content.includes(find)) {
      content = content.split(find).join(replace);
    }
  }

  // Now handle text colors that need context awareness
  // In pages: section headings/body should be light-theme
  // But hero sections (bg-primary) keep white text
  // Simple approach: replace all slate text colors, the dark sections already use white
  const textReplacements = [
    ['text-slate-100', 'text-text-primary'],
    ['text-slate-200', 'text-text-secondary'],
    ['text-slate-300', 'text-text-secondary'],
    ['text-slate-400', 'text-text-secondary'],
    ['text-slate-500', 'text-text-secondary'],
  ];

  // Only apply text replacements to page files (not Hero component which needs white text)
  if (file.includes('pages')) {
    for (const [find, replace] of textReplacements) {
      if (content.includes(find)) {
        content = content.split(find).join(replace);
      }
    }
  }

  if (content !== original) {
    writeFileSync(file, content, 'utf8');
    totalChanges++;
    console.log(`✓ ${rel}`);
  }
}

console.log(`\nDone: ${totalChanges} files updated.`);
