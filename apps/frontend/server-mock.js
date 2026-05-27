const MockComponent = () => null;
const proxy = new Proxy(MockComponent, {
  get: function(target, prop) {
    if (prop === '__esModule') return true;
    if (prop === 'default') return proxy;
    return proxy;
  }
});
module.exports = proxy;
