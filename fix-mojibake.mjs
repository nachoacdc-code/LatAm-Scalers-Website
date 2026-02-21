import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.astro') || fullPath.endsWith('.md') || fullPath.endsWith('.ts')) {
      let buf = fs.readFileSync(fullPath);
      let content = buf.toString('utf8');
      const original = content;

      // Mojibake for em-dash (UTF-8 E2 80 93) when read as Latin-1: C3 A2 E2 82 AC E2 80 93
      // Actually: E2 80 93 as Windows-1252 -> â € "
      // The UTF-8 encoding of "â€"" would be: C3 A2 (â) E2 82 AC (€) E2 80 9C (")
      // So we need to replace the 3-byte sequence that represents – with actual –
      content = content.replace(/\u00E2\u20AC\u201C/g, '\u2013');  // â€" -> –
      content = content.replace(/\u00E2\u20AC\u201D/g, '\u2013');  // â€" -> –
      content = content.replace(/\u00E2\u20AC\u0093/g, '\u2013');  // â€" (if 0x93)

      // Ã¢â‚¬" (double-encoded) for em-dash
      content = content.replace(/Ã¢â‚¬"/g, '\u2013');
      // Ã¢â‚¬Å" and Ã¢â‚¬Â (double-encoded curly quotes) - multiple variants
      content = content.replace(/Ã¢â‚¬Å“/g, '"');
      content = content.replace(/Ã¢â‚¬Â"/g, '"');
      content = content.replace(/Ã¢â‚¬Å"/g, '"');
      content = content.replace(/Ã¢â‚¬Â/g, '"');

      // Apostrophe â€™
      content = content.replace(/\u00E2\u20AC\u2122/g, "'");  // â€™ -> '
      content = content.replace(/\u00E2\u20AC\u2019/g, "'");

      // Left double quote â€œ
      content = content.replace(/\u00E2\u20AC\u0153/g, '"');
      content = content.replace(/\u00E2\u20AC\u201C/g, '"');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed:', fullPath);
      }
    }
  });
}

walkDir('src');
console.log('Done');
