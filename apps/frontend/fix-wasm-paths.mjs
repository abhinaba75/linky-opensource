/**
 * Post-build script to fix Windows path issues in OpenNext output.
 * Copies WASM files and fixes import paths in handler.mjs.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handlerDir = path.join(__dirname, '.open-next', 'server-functions', 'default', 'apps', 'frontend');
const handlerPath = path.join(handlerDir, 'handler.mjs');

if (!fs.existsSync(handlerPath)) {
  console.error('handler.mjs not found at:', handlerPath);
  process.exit(1);
}

let content = fs.readFileSync(handlerPath, 'utf-8');

// Pattern: import("C:/Users/.../resvg.wasm") or import("C:/Users/.../yoga.wasm")
const wasmImportRegex = /import\("(C:\/[^"]*?([^/\\]+\.wasm))"\)/g;

let matches = [...content.matchAll(wasmImportRegex)];
console.log(`Found ${matches.length} WASM import paths to fix`);

// Collect unique WASM files we need
const wasmFiles = new Map();
for (const match of matches) {
  const absPath = match[1];
  const filename = match[2];
  if (!wasmFiles.has(filename)) {
    wasmFiles.set(filename, absPath);
  }
}

// Find and copy actual WASM files
const nextModulesBase = path.join(__dirname, '..', '..', 'node_modules', '.pnpm');
const wasmDestDir = path.join(handlerDir, '_wasm');
fs.mkdirSync(wasmDestDir, { recursive: true });

for (const [filename, absPath] of wasmFiles) {
  console.log(`\nLooking for: ${filename}`);
  
  // Search for the file in node_modules
  let found = false;
  const searchDirs = [
    path.join(__dirname, '..', '..', 'node_modules'),
  ];
  
  function findFile(dir, target, depth = 0) {
    if (depth > 6) return null;
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isFile() && entry.name === target) {
          return fullPath;
        }
        if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
          // Only recurse into next@16.2.6 pnpm directory
          if (depth === 0 && dir.endsWith('.pnpm') && !entry.name.startsWith('next@16.2.6')) continue;
          const result = findFile(fullPath, target, depth + 1);
          if (result) return result;
        }
      }
    } catch (e) { /* ignore permission errors */ }
    return null;
  }
  
  // Try the exact path first (with normalized separators)
  const normalizedAbsPath = absPath.replace(/\//g, '\\');
  if (fs.existsSync(normalizedAbsPath)) {
    const destPath = path.join(wasmDestDir, filename);
    fs.copyFileSync(normalizedAbsPath, destPath);
    console.log(`  Copied from exact path: ${normalizedAbsPath}`);
    found = true;
  }
  
  if (!found) {
    // Search in pnpm store
    const wasmPath = findFile(nextModulesBase, filename);
    if (wasmPath) {
      const destPath = path.join(wasmDestDir, filename);
      fs.copyFileSync(wasmPath, destPath);
      console.log(`  Copied from: ${wasmPath}`);
      found = true;
    }
  }
  
  if (!found) {
    console.warn(`  WARNING: Could not find ${filename}`);
  }
}

// Now replace all absolute paths with relative paths to our _wasm directory
for (const match of matches) {
  const absPath = match[1];
  const filename = match[2];
  const relativePath = `./_wasm/${filename}`;
  content = content.replaceAll(`import("${absPath}")`, `import("${relativePath}")`);
  console.log(`  Fixed import: ...${filename}`);
}

fs.writeFileSync(handlerPath, content, 'utf-8');
console.log('\nDone! WASM paths fixed.');
