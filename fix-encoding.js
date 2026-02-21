const fs = require('fs');
const path = require('path');
const glob = require('glob');

glob('src/**/*.astro', { nodir: true }, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    // Fix the encoding issues - UTF-8 bytes being interpreted as Latin-1
    content = content.replace(/â€"/g, '–');  // em dash
    content = content.replace(/â€™/g, "'");  // right single quote
    content = content.replace(/â€œ/g, '"');  // left double quote
    content = content.replace(/â€/g, '"');   // right double quote

    if (content !== original) {
      fs.writeFileSync(filepath, content, 'utf8');
      console.log(`Fixed: ${filepath}`);
    }
  });

  console.log('Done');
});
