import { build } from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Clean up invalid JS identifier names from process.env (e.g. ProgramFiles(x86) on Windows)
// to prevent esbuild's define plugin from throwing errors.
for (const key of Object.keys(process.env)) {
  if (key.includes('(') || key.includes(')')) {
    delete process.env[key];
  }
}

const bannerJs = `
import { createRequire } from 'module';
const _require = createRequire('/');
const wrapCallable = (mod) => {
  if (typeof mod === 'function') return mod;
  if (mod && typeof mod.default === 'function') {
    const fn = mod.default;
    for (const key of Object.keys(mod)) {
      if (key !== 'default') {
        fn[key] = mod[key];
      }
    }
    return fn;
  }
  return mod;
};
const osMock = {
  platform: () => 'linux',
  arch: () => 'x64',
  release: () => '1.0.0',
  type: () => 'Linux',
  uptime: () => 0,
  loadavg: () => [0, 0, 0],
  totalmem: () => 1024 * 1024 * 1024,
  freemem: () => 512 * 1024 * 1024,
  cpus: () => [],
  networkInterfaces: () => ({}),
  homedir: () => '/root',
  tmpdir: () => '/tmp',
  hostname: () => 'cloudflare-worker',
  userInfo: () => ({ username: 'worker', uid: -1, gid: -1, shell: '', homedir: '/root' }),
  EOL: '\\n'
};
const require = (id) => {
  if (id === 'node:process' || id === 'process') return globalThis.process;
  if (id === 'node:os' || id === 'os') return osMock;
  if (id === 'node:buffer' || id === 'buffer') {
    const buf = _require('node:buffer');
    const wrappedBuf = Object.create(Object.prototype);
    Object.assign(wrappedBuf, buf);
    return wrappedBuf;
  }
  if (id === 'node:assert' || id === 'assert') {
    return wrapCallable(_require('node:assert'));
  }
  return _require(id);
};
`.trim().replace(/\n/g, ' ');

await build({
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: path.resolve(__dirname, 'dist-worker/index.js'),
  write: true,
  entryPoints: [path.resolve(__dirname, 'src/worker.ts')],
  sourcemap: true,
  alias: {
    '@sentry/node': path.resolve(__dirname, 'src/lib/sentry-mock.ts'),
    'sharp': path.resolve(__dirname, 'src/lib/sharp-mock.ts'),
    'better-sqlite3': path.resolve(__dirname, 'src/lib/better-sqlite3-mock.ts'),
    '@prisma/adapter-better-sqlite3': path.resolve(__dirname, 'src/lib/better-sqlite3-mock.ts'),
    '@slack/web-api': path.resolve(__dirname, 'src/lib/slack-mock.ts'),
  },
  // Define import.meta.url to prevent fileURLToPath from failing in Cloudflare Worker environment
  define: {
    'import.meta.url': '"file:///worker.js"',
  },
  // We use our custom require function to intercept node:process and node:os requests
  banner: {
    js: bannerJs,
  },
  external: ['cloudflare:*'],
}).catch((err) => {
  console.error('ESBuild error:', err);
  process.exit(1);
});
