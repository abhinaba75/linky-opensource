import { dotenvRun } from '@dotenv-run/esbuild';
import { build } from 'esbuild';

// Clean up invalid JS identifier names from process.env (e.g. ProgramFiles(x86) on Windows)
// to prevent esbuild's define plugin from throwing errors.
for (const key of Object.keys(process.env)) {
  if (key.includes('(') || key.includes(')')) {
    delete process.env[key];
  }
}

await build({
  bundle: true,
  platform: 'node',
  format: 'esm',
  outdir: 'dist',
  write: true,
  entryPoints: [`./src/index.ts`],
  inject: ['./cjs-shim.ts'],
  sourcemap: true,
  plugins: [
    dotenvRun({
      verbose: true,
      root: '../',
    }),
  ],
});