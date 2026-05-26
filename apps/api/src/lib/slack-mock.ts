export class WebClient {
  constructor() {}
  chat = {
    postMessage: async () => {
      console.log('[Slack Mock] postMessage called');
      return {};
    }
  };
}
