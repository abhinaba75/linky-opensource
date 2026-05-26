export function init() {}
export function captureException(err: any) {
  console.error('[Sentry Mock Exception]:', err);
}
export function captureMessage(msg: string) {
  console.log('[Sentry Mock Message]:', msg);
}
export function setupFastifyErrorHandler(fastify: any) {}
