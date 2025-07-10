const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../content');

function getAllMdxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMdxFiles(filePath));
    } else if (file.endsWith('.mdx')) {
      results.push(filePath);
    }
  });
  return results;
}

function fixFrontmatter(content) {
  // Normalize line endings
  content = content.replace(/\r\n?/g, '\n');
  // Replace tabs with two spaces
  content = content.replace(/\t/g, '  ');

  // Find frontmatter
  const match = content.match(/^(---\n[\s\S]*?\n---.*?)(\n|$)/);
  if (!match) return { content, changed: false };
  let frontmatter = match[1];
  let rest = content.slice(match[0].length);
  let changed = false;

  // Ensure --- delimiters are correct
  if (!frontmatter.startsWith('---\n')) {
    frontmatter = '---\n' + frontmatter.slice(4);
    changed = true;
  }
  // Fix closing delimiter: ensure it is exactly '---' on its own line
  frontmatter = frontmatter.replace(/\n---[^\n]*$/m, '\n---');

  // Parse frontmatter lines
  let lines = frontmatter.split('\n');
  let hasTitle = false;
  for (let i = 1; i < lines.length - 1; i++) {
    if (lines[i].trim().startsWith('title:')) {
      hasTitle = true;
      break;
    }
  }
  if (!hasTitle) {
    // Insert a placeholder title after the first ---
    lines.splice(1, 0, 'title: PLACEHOLDER_TITLE');
    changed = true;
  }
  // Rebuild frontmatter
  frontmatter = lines.join('\n');

  // Rebuild content
  const newContent = frontmatter + '\n' + rest;
  return { content: newContent, changed: true };
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const { content: newContent, changed } = fixFrontmatter(content);
  if (changed) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Fixed:', filePath);
  }
}

function main() {
  const files = getAllMdxFiles(CONTENT_DIR);
  files.forEach(processFile);
  console.log('Done.');
}

main();
