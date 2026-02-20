/**
 * deploy-phase.mjs
 * Usage:  node scripts/deploy-phase.mjs <phase-number> "<commit message>"
 * Example: node scripts/deploy-phase.mjs 3 "Phase 3: Homepage redesign"
 *
 * What it does:
 *  1. Verifies clean build
 *  2. Stages all changes
 *  3. Commits with message
 *  4. Pushes to origin (feature branch or main)
 *  5. Waits for Vercel preview deployment
 *  6. Prints the preview URL
 */

import { execSync } from 'child_process';

const [,, phase, ...msgParts] = process.argv;
const message = msgParts.join(' ');

if (!phase || !message) {
  console.error('Usage: node scripts/deploy-phase.mjs <phase-number> "<commit message>"');
  process.exit(1);
}

function run(cmd, label) {
  console.log(`\n▶ ${label}`);
  try {
    const out = execSync(cmd, { encoding: 'utf8', stdio: ['inherit', 'pipe', 'pipe'] });
    if (out) console.log(out.trim());
    return out;
  } catch (err) {
    console.error(`✖ Failed: ${label}`);
    console.error(err.stderr || err.message);
    process.exit(1);
  }
}

// 1. Build check
run('npm run build', 'Verifying build');

// 2. Git branch check
const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
console.log(`\n📌 Current branch: ${branch}`);

// 3. Stage + commit
run('git add -A', 'Staging all changes');
run(`git commit -m "${message}"`, 'Committing changes');

// 4. Push
run(`git push origin ${branch}`, 'Pushing to GitHub');

// 5. Wait and get Vercel URL
// Set VERCEL_TOKEN in your environment or .env.local before running
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const VERCEL_SCOPE = process.env.VERCEL_SCOPE || 'nachos-projects-077b6b9c';

console.log('\n⏳ Waiting 30s for Vercel deployment...');
await new Promise(r => setTimeout(r, 30000));

try {
  const result = execSync(
    `vercel ls --token "${VERCEL_TOKEN}" --scope "${VERCEL_SCOPE}"`,
    { encoding: 'utf8', stdio: ['inherit', 'pipe', 'pipe'] }
  );
  const lines = result.split('\n');
  const urlLine = lines.find(l => l.includes('vercel.app'));
  const url = urlLine?.match(/https:\/\/[^\s]+/)?.[0];
  if (url) {
    console.log(`\n✅ Phase ${phase} deployed!`);
    console.log(`🔗 Preview URL: ${url}`);
    console.log('\n📋 Next step: Share this URL for review, then approve to proceed to next phase.');
  }
} catch {
  console.log('\n✅ Pushed to GitHub. Vercel will auto-deploy. Check https://vercel.com for the preview URL.');
}
