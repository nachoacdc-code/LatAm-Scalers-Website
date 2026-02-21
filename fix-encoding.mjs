import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.astro')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;

      // More conservative replacements
      // Only replace where appropriate - malformed UTF patterns in attributes/content
      // Replace common malformed quote patterns that appear as loose quotes (not in strings)
      content = content.replace(/(\s) – (\w)/g, '$1– $2');  // em-dash spacing
      content = content.replace(/(\s) – ,/g, ' –,');
      
      // Fix accented em-dashes that appear as standalone entities
      content = content.replace(/â€"/g, '–');
      content = content.replace(/â€™/g, "'");
      content = content.replace(/â€œ/g, '"');
      content = content.replace(/â€/g, '"');
      
      // Check marks
      content = content.replace(/âœ"/g, '✓');
      
      // Non-breaking spaces
      content = content.replace(/Â·/g, '·');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed: ${fullPath}`);
      }
    }
  });
}

walkDir('src');
console.log('Done');
