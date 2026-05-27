const fs = require('fs');
const path = require('path');

const handlerPath = path.resolve(__dirname, '.open-next/server-functions/default/apps/frontend/handler.mjs');
if (!fs.existsSync(handlerPath)) {
  console.log('handler.mjs not found');
  process.exit(0);
}

let code = fs.readFileSync(handlerPath, 'utf8');

// Find any string literal that starts with "AGFzbQE and is at least 1 million characters
const wasmMatch = code.match(/("AGFzbQE[^"]{1000000,}")/);

if (wasmMatch) {
  const wasmString = wasmMatch[1];
  console.log(`Found WASM string of length ${wasmString.length}. Deduplicating...`);
  
  // Replace all occurrences with a shared variable
  const newCode = `const __SHARED_WASM__ = ${wasmString};\n` + code.split(wasmString).join('__SHARED_WASM__');
  
  fs.writeFileSync(handlerPath, newCode);
  console.log(`Successfully deduplicated WASM string in handler.mjs! Old size: ${code.length}, New size: ${newCode.length}`);
} else {
  console.log('WASM string not found in handler.mjs');
}
