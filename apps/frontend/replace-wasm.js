const fs = require('fs');
const path = require('path');

const runtimeDir = path.resolve(__dirname, '../../packages/prisma/node_modules/@prisma/client/runtime');

const jsFast = path.join(runtimeDir, 'query_compiler_fast_bg.sqlite.wasm-base64.js');
const jsSmall = path.join(runtimeDir, 'query_compiler_small_bg.sqlite.wasm-base64.js');
const mjsFast = path.join(runtimeDir, 'query_compiler_fast_bg.sqlite.wasm-base64.mjs');
const mjsSmall = path.join(runtimeDir, 'query_compiler_small_bg.sqlite.wasm-base64.mjs');

if (fs.existsSync(jsSmall) && fs.existsSync(jsFast)) {
  fs.copyFileSync(jsSmall, jsFast);
  console.log('Replaced Prisma fast JS compiler with small JS compiler.');
}

const exportMjs = "export { wasm } from './query_compiler_fast_bg.sqlite.wasm-base64.js';";
if (fs.existsSync(mjsFast)) {
  fs.writeFileSync(mjsFast, exportMjs);
  console.log('Replaced Prisma fast MJS compiler with export from JS compiler.');
}
if (fs.existsSync(mjsSmall)) {
  fs.writeFileSync(mjsSmall, exportMjs);
  console.log('Replaced Prisma small MJS compiler with export from JS compiler.');
}
