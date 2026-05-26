
import {Buffer} from "node:buffer";
globalThis.Buffer = Buffer;

import {AsyncLocalStorage} from "node:async_hooks";
globalThis.AsyncLocalStorage = AsyncLocalStorage;


const defaultDefineProperty = Object.defineProperty;
Object.defineProperty = function(o, p, a) {
  if(p=== '__import_unsupported' && Boolean(globalThis.__import_unsupported)) {
    return;
  }
  return defaultDefineProperty(o, p, a);
};

  
  
  globalThis.openNextDebug = false;globalThis.openNextVersion = "4.0.2";globalThis.nextVersion = "16.2.6";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/error.js
function isOpenNextError(e) {
  try {
    return "__openNextInternal" in e;
  } catch {
    return false;
  }
}
var init_error = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/error.js"() {
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/adapters/logger.js
function debug(...args) {
  if (globalThis.openNextDebug) {
    console.log(...args);
  }
}
function warn(...args) {
  console.warn(...args);
}
function error(...args) {
  if (args.some((arg) => isDownplayedErrorLog(arg))) {
    return debug(...args);
  }
  if (args.some((arg) => isOpenNextError(arg))) {
    const error2 = args.find((arg) => isOpenNextError(arg));
    if (error2.logLevel < getOpenNextErrorLogLevel()) {
      return;
    }
    if (error2.logLevel === 0) {
      return console.log(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    if (error2.logLevel === 1) {
      return warn(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    return console.error(...args);
  }
  console.error(...args);
}
function getOpenNextErrorLogLevel() {
  const strLevel = process.env.OPEN_NEXT_ERROR_LOG_LEVEL ?? "1";
  switch (strLevel.toLowerCase()) {
    case "debug":
    case "0":
      return 0;
    case "error":
    case "2":
      return 2;
    default:
      return 1;
  }
}
var DOWNPLAYED_ERROR_LOGS, isDownplayedErrorLog;
var init_logger = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/adapters/logger.js"() {
    init_error();
    DOWNPLAYED_ERROR_LOGS = [
      {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
        errorName: "NoSuchKey"
      }
    ];
    isDownplayedErrorLog = (errorLog) => DOWNPLAYED_ERROR_LOGS.some((downplayedInput) => downplayedInput.clientName === errorLog?.clientName && downplayedInput.commandName === errorLog?.commandName && (downplayedInput.errorName === errorLog?.error?.name || downplayedInput.errorName === errorLog?.error?.Code));
  }
});

// ../../node_modules/.pnpm/cookie@1.1.1/node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.pnpm/cookie@1.1.1/node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseCookie = parseCookie;
    exports.parse = parseCookie;
    exports.stringifyCookie = stringifyCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    exports.parseSetCookie = parseSetCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var maxAgeRegExp = /^-?\d+$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parseCookie(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = eqIndex(str, index, len);
        if (eqIdx === -1)
          break;
        const endIdx = endIndex(str, index, len);
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const key = valueSlice(str, index, eqIdx);
        if (obj[key] === void 0) {
          obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function stringifyCookie(cookie, options) {
      const enc = options?.encode || encodeURIComponent;
      const cookieStrings = [];
      for (const name of Object.keys(cookie)) {
        const val = cookie[name];
        if (val === void 0)
          continue;
        if (!cookieNameRegExp.test(name)) {
          throw new TypeError(`cookie name is invalid: ${name}`);
        }
        const value = enc(val);
        if (!cookieValueRegExp.test(value)) {
          throw new TypeError(`cookie val is invalid: ${val}`);
        }
        cookieStrings.push(`${name}=${value}`);
      }
      return cookieStrings.join("; ");
    }
    function stringifySetCookie(_name, _val, _opts) {
      const cookie = typeof _name === "object" ? _name : { ..._opts, name: _name, value: String(_val) };
      const options = typeof _val === "object" ? _val : _opts;
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(cookie.name)) {
        throw new TypeError(`argument name is invalid: ${cookie.name}`);
      }
      const value = cookie.value ? enc(cookie.value) : "";
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${cookie.value}`);
      }
      let str = cookie.name + "=" + value;
      if (cookie.maxAge !== void 0) {
        if (!Number.isInteger(cookie.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
        }
        str += "; Max-Age=" + cookie.maxAge;
      }
      if (cookie.domain) {
        if (!domainValueRegExp.test(cookie.domain)) {
          throw new TypeError(`option domain is invalid: ${cookie.domain}`);
        }
        str += "; Domain=" + cookie.domain;
      }
      if (cookie.path) {
        if (!pathValueRegExp.test(cookie.path)) {
          throw new TypeError(`option path is invalid: ${cookie.path}`);
        }
        str += "; Path=" + cookie.path;
      }
      if (cookie.expires) {
        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${cookie.expires}`);
        }
        str += "; Expires=" + cookie.expires.toUTCString();
      }
      if (cookie.httpOnly) {
        str += "; HttpOnly";
      }
      if (cookie.secure) {
        str += "; Secure";
      }
      if (cookie.partitioned) {
        str += "; Partitioned";
      }
      if (cookie.priority) {
        const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${cookie.priority}`);
        }
      }
      if (cookie.sameSite) {
        const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
        }
      }
      return str;
    }
    function parseSetCookie(str, options) {
      const dec = options?.decode || decode;
      const len = str.length;
      const endIdx = endIndex(str, 0, len);
      const eqIdx = eqIndex(str, 0, endIdx);
      const setCookie = eqIdx === -1 ? { name: "", value: dec(valueSlice(str, 0, endIdx)) } : {
        name: valueSlice(str, 0, eqIdx),
        value: dec(valueSlice(str, eqIdx + 1, endIdx))
      };
      let index = endIdx + 1;
      while (index < len) {
        const endIdx2 = endIndex(str, index, len);
        const eqIdx2 = eqIndex(str, index, endIdx2);
        const attr = eqIdx2 === -1 ? valueSlice(str, index, endIdx2) : valueSlice(str, index, eqIdx2);
        const val = eqIdx2 === -1 ? void 0 : valueSlice(str, eqIdx2 + 1, endIdx2);
        switch (attr.toLowerCase()) {
          case "httponly":
            setCookie.httpOnly = true;
            break;
          case "secure":
            setCookie.secure = true;
            break;
          case "partitioned":
            setCookie.partitioned = true;
            break;
          case "domain":
            setCookie.domain = val;
            break;
          case "path":
            setCookie.path = val;
            break;
          case "max-age":
            if (val && maxAgeRegExp.test(val))
              setCookie.maxAge = Number(val);
            break;
          case "expires":
            if (!val)
              break;
            const date = new Date(val);
            if (Number.isFinite(date.valueOf()))
              setCookie.expires = date;
            break;
          case "priority":
            if (!val)
              break;
            const priority = val.toLowerCase();
            if (priority === "low" || priority === "medium" || priority === "high") {
              setCookie.priority = priority;
            }
            break;
          case "samesite":
            if (!val)
              break;
            const sameSite = val.toLowerCase();
            if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
              setCookie.sameSite = sameSite;
            }
            break;
        }
        index = endIdx2 + 1;
      }
      return setCookie;
    }
    function endIndex(str, min, len) {
      const index = str.indexOf(";", min);
      return index === -1 ? len : index;
    }
    function eqIndex(str, min, max) {
      const index = str.indexOf("=", min);
      return index < max ? index : -1;
    }
    function valueSlice(str, min, max) {
      let start = min;
      let end = max;
      do {
        const code = str.charCodeAt(start);
        if (code !== 32 && code !== 9)
          break;
      } while (++start < end);
      while (end > start) {
        const code = str.charCodeAt(end - 1);
        if (code !== 32 && code !== 9)
          break;
        end--;
      }
      return str.slice(start, end);
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/http/util.js
function parseSetCookieHeader(cookies) {
  if (!cookies) {
    return [];
  }
  if (typeof cookies === "string") {
    return cookies.split(/(?<!Expires=\w+),/i).map((c) => c.trim());
  }
  return cookies;
}
function getQueryFromIterator(it) {
  const query = {};
  for (const [key, value] of it) {
    if (key in query) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    } else {
      query[key] = value;
    }
  }
  return query;
}
var init_util = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/http/util.js"() {
    init_logger();
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/converters/utils.js
function getQueryFromSearchParams(searchParams) {
  return getQueryFromIterator(searchParams.entries());
}
var init_utils = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/converters/utils.js"() {
    init_util();
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/converters/edge.js
var edge_exports = {};
__export(edge_exports, {
  default: () => edge_default
});
import { Buffer as Buffer2 } from "node:buffer";
var import_cookie, NULL_BODY_STATUSES, converter, edge_default;
var init_edge = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/converters/edge.js"() {
    import_cookie = __toESM(require_dist(), 1);
    init_util();
    init_utils();
    NULL_BODY_STATUSES = /* @__PURE__ */ new Set([101, 103, 204, 205, 304]);
    converter = {
      convertFrom: async (event) => {
        const url = new URL(event.url);
        const searchParams = url.searchParams;
        const query = getQueryFromSearchParams(searchParams);
        const headers = {};
        event.headers.forEach((value, key) => {
          headers[key] = value;
        });
        const rawPath = url.pathname;
        const method = event.method;
        const shouldHaveBody = method !== "GET" && method !== "HEAD";
        const body = shouldHaveBody ? Buffer2.from(await event.arrayBuffer()) : void 0;
        const cookieHeader = event.headers.get("cookie");
        const cookies = cookieHeader ? import_cookie.default.parse(cookieHeader) : {};
        return {
          type: "core",
          method,
          rawPath,
          url: event.url,
          body,
          headers,
          remoteAddress: event.headers.get("x-forwarded-for") ?? "::1",
          query,
          cookies
        };
      },
      convertTo: async (result) => {
        if ("internalEvent" in result) {
          const request = new Request(result.internalEvent.url, {
            body: result.internalEvent.body,
            method: result.internalEvent.method,
            headers: {
              ...result.internalEvent.headers,
              "x-forwarded-host": result.internalEvent.headers.host
            }
          });
          if (globalThis.__dangerous_ON_edge_converter_returns_request === true) {
            return request;
          }
          const cfCache = (result.isISR || result.internalEvent.rawPath.startsWith("/_next/image")) && process.env.DISABLE_CACHE !== "true" ? { cacheEverything: true } : {};
          return fetch(request, {
            // This is a hack to make sure that the response is cached by Cloudflare
            // See https://developers.cloudflare.com/workers/examples/cache-using-fetch/#caching-html-resources
            // @ts-expect-error - This is a Cloudflare specific option
            cf: cfCache
          });
        }
        const headers = new Headers();
        for (const [key, value] of Object.entries(result.headers)) {
          if (key === "set-cookie" && typeof value === "string") {
            const cookies = parseSetCookieHeader(value);
            for (const cookie of cookies) {
              headers.append(key, cookie);
            }
            continue;
          }
          if (Array.isArray(value)) {
            for (const v of value) {
              headers.append(key, v);
            }
          } else {
            headers.set(key, value);
          }
        }
        const body = NULL_BODY_STATUSES.has(result.statusCode) ? null : result.body;
        return new Response(body, {
          status: result.statusCode,
          headers
        });
      },
      name: "edge"
    };
    edge_default = converter;
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js
var cloudflare_edge_exports = {};
__export(cloudflare_edge_exports, {
  default: () => cloudflare_edge_default
});
var cfPropNameMapping, handler, cloudflare_edge_default;
var init_cloudflare_edge = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js"() {
    cfPropNameMapping = {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: [encodeURIComponent, "x-open-next-city"],
      country: "x-open-next-country",
      regionCode: "x-open-next-region",
      latitude: "x-open-next-latitude",
      longitude: "x-open-next-longitude"
    };
    handler = async (handler3, converter2) => async (request, env, ctx) => {
      globalThis.process = process;
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
      const internalEvent = await converter2.convertFrom(request);
      const cfProperties = request.cf;
      for (const [propName, mapping] of Object.entries(cfPropNameMapping)) {
        const propValue = cfProperties?.[propName];
        if (propValue != null) {
          const [encode, headerName] = Array.isArray(mapping) ? mapping : [null, mapping];
          internalEvent.headers[headerName] = encode ? encode(propValue) : propValue;
        }
      }
      const response = await handler3(internalEvent, {
        waitUntil: ctx.waitUntil.bind(ctx)
      });
      const result = await converter2.convertTo(response);
      return result;
    };
    cloudflare_edge_default = {
      wrapper: handler,
      name: "cloudflare-edge",
      supportStreaming: true,
      edgeRuntime: true
    };
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js
var pattern_env_exports = {};
__export(pattern_env_exports, {
  default: () => pattern_env_default
});
function initializeOnce() {
  if (initialized)
    return;
  cachedOrigins = JSON.parse(process.env.OPEN_NEXT_ORIGIN ?? "{}");
  const functions = globalThis.openNextConfig.functions ?? {};
  for (const key in functions) {
    if (key !== "default") {
      const value = functions[key];
      const regexes = [];
      for (const pattern of value.patterns) {
        const regexPattern = `/${pattern.replace(/\*\*/g, "(.*)").replace(/\*/g, "([^/]*)").replace(/\//g, "\\/").replace(/\?/g, ".")}`;
        regexes.push(new RegExp(regexPattern));
      }
      cachedPatterns.push({
        key,
        patterns: value.patterns,
        regexes
      });
    }
  }
  initialized = true;
}
var cachedOrigins, cachedPatterns, initialized, envLoader, pattern_env_default;
var init_pattern_env = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js"() {
    init_logger();
    cachedPatterns = [];
    initialized = false;
    envLoader = {
      name: "env",
      resolve: async (_path) => {
        try {
          initializeOnce();
          for (const { key, patterns, regexes } of cachedPatterns) {
            for (const regex of regexes) {
              if (regex.test(_path)) {
                debug("Using origin", key, patterns);
                return cachedOrigins[key];
              }
            }
          }
          if (_path.startsWith("/_next/image") && cachedOrigins.imageOptimizer) {
            debug("Using origin", "imageOptimizer", _path);
            return cachedOrigins.imageOptimizer;
          }
          if (cachedOrigins.default) {
            debug("Using default origin", cachedOrigins.default, _path);
            return cachedOrigins.default;
          }
          return false;
        } catch (e) {
          error("Error while resolving origin", e);
          return false;
        }
      }
    };
    pattern_env_default = envLoader;
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js
var dummy_exports = {};
__export(dummy_exports, {
  default: () => dummy_default
});
var resolver, dummy_default;
var init_dummy = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js"() {
    resolver = {
      name: "dummy"
    };
    dummy_default = resolver;
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/stream.js
import { ReadableStream as ReadableStream2 } from "node:stream/web";
function toReadableStream(value, isBase64) {
  return new ReadableStream2({
    pull(controller) {
      controller.enqueue(Buffer.from(value, isBase64 ? "base64" : "utf8"));
      controller.close();
    }
  }, { highWaterMark: 0 });
}
function emptyReadableStream() {
  if (process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE === "true") {
    return new ReadableStream2({
      pull(controller) {
        maybeSomethingBuffer ??= Buffer.from("SOMETHING");
        controller.enqueue(maybeSomethingBuffer);
        controller.close();
      }
    }, { highWaterMark: 0 });
  }
  return new ReadableStream2({
    start(controller) {
      controller.close();
    }
  });
}
var maybeSomethingBuffer;
var init_stream = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/stream.js"() {
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js
var fetch_exports = {};
__export(fetch_exports, {
  default: () => fetch_default
});
var fetchProxy, fetch_default;
var init_fetch = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js"() {
    init_stream();
    fetchProxy = {
      name: "fetch-proxy",
      // @ts-ignore
      proxy: async (internalEvent) => {
        const { url, headers: eventHeaders, method, body } = internalEvent;
        const headers = Object.fromEntries(Object.entries(eventHeaders).filter(([key]) => key.toLowerCase() !== "cf-connecting-ip"));
        const response = await fetch(url, {
          method,
          headers,
          body
        });
        const responseHeaders = {};
        response.headers.forEach((value, key) => {
          const cur = responseHeaders[key];
          if (cur === void 0) {
            responseHeaders[key] = value;
          } else if (Array.isArray(cur)) {
            cur.push(value);
          } else {
            responseHeaders[key] = [cur, value];
          }
        });
        return {
          type: "core",
          headers: responseHeaders,
          statusCode: response.status,
          isBase64Encoded: true,
          body: response.body ?? emptyReadableStream()
        };
      }
    };
    fetch_default = fetchProxy;
  }
});

// node-built-in-modules:node:async_hooks
var node_async_hooks_exports = {};
import * as node_async_hooks_star from "node:async_hooks";
var init_node_async_hooks = __esm({
  "node-built-in-modules:node:async_hooks"() {
    __reExport(node_async_hooks_exports, node_async_hooks_star);
  }
});

// node-built-in-modules:node:events
var node_events_exports = {};
import * as node_events_star from "node:events";
var init_node_events = __esm({
  "node-built-in-modules:node:events"() {
    __reExport(node_events_exports, node_events_star);
  }
});

// node-built-in-modules:node:buffer
var node_buffer_exports = {};
import * as node_buffer_star from "node:buffer";
var init_node_buffer = __esm({
  "node-built-in-modules:node:buffer"() {
    __reExport(node_buffer_exports, node_buffer_star);
  }
});

// .next/server/edge/chunks/[root-of-the-server]__0jv-o14._.js
var require_root_of_the_server_0jv_o14 = __commonJS({
  ".next/server/edge/chunks/[root-of-the-server]__0jv-o14._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__0jv-o14._.js", 478500, (e, t, r) => {
      t.exports = e.x("node:async_hooks", () => (init_node_async_hooks(), __toCommonJS(node_async_hooks_exports)));
    }, 687769, (e, t, r) => {
      t.exports = e.x("node:events", () => (init_node_events(), __toCommonJS(node_events_exports)));
    }, 951615, (e, t, r) => {
      t.exports = e.x("node:buffer", () => (init_node_buffer(), __toCommonJS(node_buffer_exports)));
    }, 56315, (e, t, r) => {
      self._ENTRIES ||= {};
      let o = Promise.resolve().then(() => e.i(19506));
      o.catch(() => {
      }), self._ENTRIES.middleware_instrumentation = new Proxy(o, { get(e2, t2) {
        if ("then" === t2) return (t3, r3) => e2.then(t3, r3);
        let r2 = (...r3) => e2.then((e3) => (0, e3[t2])(...r3));
        return r2.then = (r3, o2) => e2.then((e3) => e3[t2]).then(r3, o2), r2;
      } });
    }, 19506, (e) => {
      "use strict";
      var t = e.i(919672), r = e.i(674509), o = e.i(570751), n = e.i(315614);
      async function s() {
        await Promise.resolve().then(() => e.i(853403));
      }
      e.s(["onRequestError", 0, function(e2, s2, i) {
        (0, t.withScope)((t2) => {
          t2.setSDKProcessingMetadata({ normalizedRequest: { headers: (0, r.headersToDict)(s2.headers), method: s2.method } }), t2.setContext("nextjs", { request_path: s2.path, router_kind: i.routerKind, router_path: i.routePath, route_type: i.routeType }), t2.setTransactionName(`${s2.method} ${i.routePath}`), (0, o.captureException)(e2, { mechanism: { handled: false, type: "auto.function.nextjs.on_request_error" } }), (0, n.waitUntil)((0, n.flushSafelyWithTimeout)());
        });
      }, "register", 0, s], 19506);
    }]);
  }
});

// .next/server/edge/chunks/_0q~rmu9._.js
var require_q_rmu9 = __commonJS({
  ".next/server/edge/chunks/_0q~rmu9._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/_0q~rmu9._.js", 580302, (e, t, n) => {
      "use strict";
      n._ = function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      };
    }, 63965, (e, t, n) => {
      "use strict";
      t.exports = ["chrome 111", "edge 111", "firefox 111", "safari 16.4"];
    }, 679347, (e, t, n) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: true });
      var r = { UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
        return o;
      }, UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
        return l;
      }, UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return i;
      }, UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return a;
      } };
      for (var s in r) Object.defineProperty(n, s, { enumerable: true, get: r[s] });
      let i = "/_not-found", a = `${i}/page`, o = "/_global-error", l = `${o}/page`;
    }, 681501, (e, t, n) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: true });
      var r, s = { APP_CLIENT_INTERNALS: function() {
        return et;
      }, APP_PATHS_MANIFEST: function() {
        return E;
      }, APP_PATH_ROUTES_MANIFEST: function() {
        return T;
      }, AdapterOutputType: function() {
        return u;
      }, BARREL_OPTIMIZATION_PREFIX: function() {
        return z;
      }, BLOCKED_PAGES: function() {
        return G;
      }, BUILD_ID_FILE: function() {
        return F;
      }, BUILD_MANIFEST: function() {
        return v;
      }, CLIENT_PUBLIC_FILES_PATH: function() {
        return j;
      }, CLIENT_REFERENCE_MANIFEST: function() {
        return W;
      }, CLIENT_STATIC_FILES_PATH: function() {
        return Y;
      }, CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return Q;
      }, CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return ee;
      }, CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return es;
      }, CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return ei;
      }, CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return en;
      }, CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return er;
      }, COMPILER_INDEXES: function() {
        return c;
      }, COMPILER_NAMES: function() {
        return l;
      }, CONFIG_FILES: function() {
        return $;
      }, DEFAULT_RUNTIME_WEBPACK: function() {
        return ea;
      }, DEFAULT_SANS_SERIF_FONT: function() {
        return ep;
      }, DEFAULT_SERIF_FONT: function() {
        return eu;
      }, DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return B;
      }, DEV_CLIENT_PAGES_MANIFEST: function() {
        return P;
      }, DYNAMIC_CSS_MANIFEST: function() {
        return Z;
      }, EDGE_RUNTIME_WEBPACK: function() {
        return eo;
      }, EDGE_UNSUPPORTED_NODE_APIS: function() {
        return eg;
      }, EXPORT_DETAIL: function() {
        return b;
      }, EXPORT_MARKER: function() {
        return A;
      }, FUNCTIONS_CONFIG_MANIFEST: function() {
        return R;
      }, IMAGES_MANIFEST: function() {
        return L;
      }, INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return X;
      }, MIDDLEWARE_BUILD_MANIFEST: function() {
        return q;
      }, MIDDLEWARE_MANIFEST: function() {
        return w;
      }, MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return J;
      }, MODERN_BROWSERSLIST_TARGET: function() {
        return a.default;
      }, NEXT_BUILTIN_DOCUMENT: function() {
        return H;
      }, NEXT_FONT_MANIFEST: function() {
        return I;
      }, PAGES_MANIFEST: function() {
        return S;
      }, PHASE_ANALYZE: function() {
        return d;
      }, PHASE_DEVELOPMENT_SERVER: function() {
        return f;
      }, PHASE_EXPORT: function() {
        return p;
      }, PHASE_INFO: function() {
        return m;
      }, PHASE_PRODUCTION_BUILD: function() {
        return _;
      }, PHASE_PRODUCTION_SERVER: function() {
        return h;
      }, PHASE_TEST: function() {
        return g;
      }, PREFETCH_HINTS: function() {
        return C;
      }, PRERENDER_MANIFEST: function() {
        return O;
      }, REACT_LOADABLE_MANIFEST: function() {
        return x;
      }, ROUTES_MANIFEST: function() {
        return N;
      }, RSC_MODULE_TYPES: function() {
        return ef;
      }, SERVER_DIRECTORY: function() {
        return k;
      }, SERVER_FILES_MANIFEST: function() {
        return D;
      }, SERVER_PROPS_ID: function() {
        return ec;
      }, SERVER_REFERENCE_MANIFEST: function() {
        return K;
      }, STATIC_PROPS_ID: function() {
        return el;
      }, STATIC_STATUS_PAGES: function() {
        return ed;
      }, STRING_LITERAL_DROP_BUNDLE: function() {
        return V;
      }, SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return y;
      }, SYSTEM_ENTRYPOINTS: function() {
        return em;
      }, TRACE_OUTPUT_VERSION: function() {
        return e_;
      }, TURBOPACK_CLIENT_BUILD_MANIFEST: function() {
        return M;
      }, TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return U;
      }, TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return eh;
      }, UNDERSCORE_GLOBAL_ERROR_ROUTE: function() {
        return o.UNDERSCORE_GLOBAL_ERROR_ROUTE;
      }, UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function() {
        return o.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY;
      }, UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return o.UNDERSCORE_NOT_FOUND_ROUTE;
      }, UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return o.UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
      } };
      for (var i in s) Object.defineProperty(n, i, { enumerable: true, get: s[i] });
      let a = e.r(580302)._(e.r(63965)), o = e.r(679347), l = { client: "client", server: "server", edgeServer: "edge-server" }, c = { [l.client]: 0, [l.server]: 1, [l.edgeServer]: 2 };
      var u = ((r = {}).PAGES = "PAGES", r.PAGES_API = "PAGES_API", r.APP_PAGE = "APP_PAGE", r.APP_ROUTE = "APP_ROUTE", r.PRERENDER = "PRERENDER", r.STATIC_FILE = "STATIC_FILE", r.MIDDLEWARE = "MIDDLEWARE", r);
      let p = "phase-export", d = "phase-analyze", _ = "phase-production-build", h = "phase-production-server", f = "phase-development-server", g = "phase-test", m = "phase-info", S = "pages-manifest.json", E = "app-paths-manifest.json", T = "app-path-routes-manifest.json", v = "build-manifest.json", R = "functions-config-manifest.json", y = "subresource-integrity-manifest", I = "next-font-manifest", A = "export-marker.json", b = "export-detail.json", O = "prerender-manifest.json", C = "prefetch-hints.json", N = "routes-manifest.json", L = "images-manifest.json", D = "required-server-files", P = "_devPagesManifest.json", w = "middleware-manifest.json", U = "_clientMiddlewareManifest.js", M = "client-build-manifest.json", B = "_devMiddlewareManifest.json", x = "react-loadable-manifest.json", k = "server", $ = ["next.config.js", "next.config.mjs", "next.config.ts", ...process?.features?.typescript ? ["next.config.mts"] : []], F = "BUILD_ID", G = ["/_document", "/_app", "/_error"], j = "public", Y = "static", V = "__NEXT_DROP_CLIENT_FILE__", H = "__NEXT_BUILTIN_DOCUMENT__", z = "__barrel_optimize__", W = "client-reference-manifest", K = "server-reference-manifest", q = "middleware-build-manifest", J = "middleware-react-loadable-manifest", X = "interception-route-rewrite-manifest", Z = "dynamic-css-manifest", Q = "main", ee = `${Q}-app`, et = "app-pages-internals", en = "react-refresh", er = "webpack", es = "polyfills", ei = Symbol(es), ea = "webpack-runtime", eo = "edge-runtime-webpack", el = "__N_SSG", ec = "__N_SSP", eu = { name: "Times New Roman", xAvgCharWidth: 821, azAvgWidth: 854.3953488372093, unitsPerEm: 2048 }, ep = { name: "Arial", xAvgCharWidth: 904, azAvgWidth: 934.5116279069767, unitsPerEm: 2048 }, ed = ["/500"], e_ = 1, eh = 6e3, ef = { client: "client", server: "server" }, eg = ["clearImmediate", "setImmediate", "BroadcastChannel", "ByteLengthQueuingStrategy", "CompressionStream", "CountQueuingStrategy", "DecompressionStream", "DomException", "MessageChannel", "MessageEvent", "MessagePort", "ReadableByteStreamController", "ReadableStreamBYOBRequest", "ReadableStreamDefaultController", "TransformStreamDefaultController", "WritableStreamDefaultController"], em = /* @__PURE__ */ new Set([Q, en, ee]);
      ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", { value: true }), Object.assign(n.default, n), t.exports = n.default);
    }, 464928, (e, t, n) => {
      t.exports = e.r(681501);
    }, 853403, (e) => {
      "use strict";
      let t, n, r, s, i;
      function a(e10) {
        return Symbol.for(e10);
      }
      class o {
        constructor(e10) {
          const t10 = this;
          t10._currentContext = e10 ? new Map(e10) : /* @__PURE__ */ new Map(), t10.getValue = (e11) => t10._currentContext.get(e11), t10.setValue = (e11, n10) => {
            let r10 = new o(t10._currentContext);
            return r10._currentContext.set(e11, n10), r10;
          }, t10.deleteValue = (e11) => {
            let n10 = new o(t10._currentContext);
            return n10._currentContext.delete(e11), n10;
          };
        }
      }
      let l = new o(), c = "1.9.1", u = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/, p = function(e10) {
        let t10 = /* @__PURE__ */ new Set([e10]), n10 = /* @__PURE__ */ new Set(), r10 = e10.match(u);
        if (!r10) return () => false;
        let s10 = { major: +r10[1], minor: +r10[2], patch: +r10[3], prerelease: r10[4] };
        if (null != s10.prerelease) return function(t11) {
          return t11 === e10;
        };
        function i2(e11) {
          return n10.add(e11), false;
        }
        return function(e11) {
          if (t10.has(e11)) return true;
          if (n10.has(e11)) return false;
          let r11 = e11.match(u);
          if (!r11) return i2(e11);
          let a2 = { major: +r11[1], minor: +r11[2], patch: +r11[3], prerelease: r11[4] };
          if (null != a2.prerelease || s10.major !== a2.major) return i2(e11);
          if (0 === s10.major) return s10.minor === a2.minor && s10.patch <= a2.patch ? (t10.add(e11), true) : i2(e11);
          return s10.minor <= a2.minor ? (t10.add(e11), true) : i2(e11);
        };
      }(c), d = c.split(".")[0], _ = Symbol.for(`opentelemetry.js.api.${d}`), h = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : e.g;
      function f(e10, t10, n10, r10 = false) {
        var s10;
        let i2 = h[_] = null != (s10 = h[_]) ? s10 : { version: c };
        if (!r10 && i2[e10]) {
          let t11 = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e10}`);
          return n10.error(t11.stack || t11.message), false;
        }
        if (i2.version !== c) {
          let t11 = Error(`@opentelemetry/api: Registration of version v${i2.version} for ${e10} does not match previously registered API v${c}`);
          return n10.error(t11.stack || t11.message), false;
        }
        return i2[e10] = t10, n10.debug(`@opentelemetry/api: Registered a global for ${e10} v${c}.`), true;
      }
      function g(e10) {
        var t10, n10;
        let r10 = null == (t10 = h[_]) ? void 0 : t10.version;
        if (r10 && p(r10)) return null == (n10 = h[_]) ? void 0 : n10[e10];
      }
      function m(e10, t10) {
        t10.debug(`@opentelemetry/api: Unregistering a global for ${e10} v${c}.`);
        let n10 = h[_];
        n10 && delete n10[e10];
      }
      class S {
        constructor(e10) {
          this._namespace = e10.namespace || "DiagComponentLogger";
        }
        debug(...e10) {
          return E("debug", this._namespace, e10);
        }
        error(...e10) {
          return E("error", this._namespace, e10);
        }
        info(...e10) {
          return E("info", this._namespace, e10);
        }
        warn(...e10) {
          return E("warn", this._namespace, e10);
        }
        verbose(...e10) {
          return E("verbose", this._namespace, e10);
        }
      }
      function E(e10, t10, n10) {
        let r10 = g("diag");
        if (r10) return r10[e10](t10, ...n10);
      }
      (U = M || (M = {}))[U.NONE = 0] = "NONE", U[U.ERROR = 30] = "ERROR", U[U.WARN = 50] = "WARN", U[U.INFO = 60] = "INFO", U[U.DEBUG = 70] = "DEBUG", U[U.VERBOSE = 80] = "VERBOSE", U[U.ALL = 9999] = "ALL";
      class T {
        static instance() {
          return this._instance || (this._instance = new T()), this._instance;
        }
        constructor() {
          function e10(e11) {
            return function(...t11) {
              let n11 = g("diag");
              if (n11) return n11[e11](...t11);
            };
          }
          const t10 = this, n10 = (e11, n11 = { logLevel: M.INFO }) => {
            var r10, s10, i2;
            if (e11 === t10) {
              let e12 = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
              return t10.error(null != (r10 = e12.stack) ? r10 : e12.message), false;
            }
            "number" == typeof n11 && (n11 = { logLevel: n11 });
            let a2 = g("diag"), o2 = function(e12, t11) {
              function n12(n13, r11) {
                let s11 = t11[n13];
                return "function" == typeof s11 && e12 >= r11 ? s11.bind(t11) : function() {
                };
              }
              return e12 < M.NONE ? e12 = M.NONE : e12 > M.ALL && (e12 = M.ALL), t11 = t11 || {}, { error: n12("error", M.ERROR), warn: n12("warn", M.WARN), info: n12("info", M.INFO), debug: n12("debug", M.DEBUG), verbose: n12("verbose", M.VERBOSE) };
            }(null != (s10 = n11.logLevel) ? s10 : M.INFO, e11);
            if (a2 && !n11.suppressOverrideMessage) {
              let e12 = null != (i2 = Error().stack) ? i2 : "<failed to generate stacktrace>";
              a2.warn(`Current logger will be overwritten from ${e12}`), o2.warn(`Current logger will overwrite one already registered from ${e12}`);
            }
            return f("diag", o2, t10, true);
          };
          t10.setLogger = n10, t10.disable = () => {
            m("diag", t10);
          }, t10.createComponentLogger = (e11) => new S(e11), t10.verbose = e10("verbose"), t10.debug = e10("debug"), t10.info = e10("info"), t10.warn = e10("warn"), t10.error = e10("error");
        }
      }
      let v = "context", R = new class {
        active() {
          return l;
        }
        with(e10, t10, n10, ...r10) {
          return t10.call(n10, ...r10);
        }
        bind(e10, t10) {
          return t10;
        }
        enable() {
          return this;
        }
        disable() {
          return this;
        }
      }();
      class y {
        static getInstance() {
          return this._instance || (this._instance = new y()), this._instance;
        }
        setGlobalContextManager(e10) {
          return f(v, e10, T.instance());
        }
        active() {
          return this._getContextManager().active();
        }
        with(e10, t10, n10, ...r10) {
          return this._getContextManager().with(e10, t10, n10, ...r10);
        }
        bind(e10, t10) {
          return this._getContextManager().bind(e10, t10);
        }
        _getContextManager() {
          return g(v) || R;
        }
        disable() {
          this._getContextManager().disable(), m(v, T.instance());
        }
      }
      let I = y.getInstance();
      var A, b, O, C, N, L, D, P, w, U, M, B, x, k, $, F, G, j, Y, V = e.i(299993), H = e.i(202775), z = e.i(692234), W = e.i(217884);
      let K = {}, q = {};
      function J(e10, t10) {
        K[e10] = K[e10] || [], K[e10].push(t10);
      }
      function X(e10, t10) {
        if (!q[e10]) {
          q[e10] = true;
          try {
            t10();
          } catch (t11) {
            V.DEBUG_BUILD && z.debug.error(`Error while instrumenting ${e10}`, t11);
          }
        }
      }
      function Z(e10, t10) {
        let n10 = e10 && K[e10];
        if (n10) for (let r10 of n10) try {
          r10(t10);
        } catch (t11) {
          V.DEBUG_BUILD && z.debug.error(`Error while triggering instrumentation handler.
Type: ${e10}
Name: ${(0, W.getFunctionName)(r10)}
Error:`, t11);
        }
      }
      let Q = null;
      function ee() {
        Q = H.GLOBAL_OBJ.onerror, H.GLOBAL_OBJ.onerror = function(e10, t10, n10, r10, s10) {
          return Z("error", { column: r10, error: s10, line: n10, msg: e10, url: t10 }), !!Q && Q.apply(this, arguments);
        }, H.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
      }
      let et = null;
      function en() {
        et = H.GLOBAL_OBJ.onunhandledrejection, H.GLOBAL_OBJ.onunhandledrejection = function(e10) {
          return Z("unhandledrejection", e10), !et || et.apply(this, arguments);
        }, H.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
      }
      var er = e.i(386217), es = e.i(780202);
      let ei = false;
      function ea() {
        if (!ei) {
          let t10, n10;
          e10.tag = "sentry_tracingErrorCallback", ei = true, J(t10 = "error", e10), X(t10, ee), J(n10 = "unhandledrejection", e10), X(n10, en);
        }
        function e10() {
          let e11 = (0, er.getActiveSpan)(), t10 = e11 && (0, er.getRootSpan)(e11);
          if (t10) {
            let e12 = "internal_error";
            V.DEBUG_BUILD && z.debug.log(`[Tracing] Root span: ${e12} -> Global error occurred`), t10.setStatus({ code: es.SPAN_STATUS_ERROR, message: e12 });
          }
        }
      }
      var eo = e.i(924163);
      function el(e10, t10, n10 = [t10], r10 = "npm") {
        let s10 = (e10._metadata = e10._metadata || {}).sdk = e10._metadata.sdk || {};
        s10.name || (s10.name = `sentry.javascript.${t10}`, s10.packages = n10.map((e11) => ({ name: `${r10}:@sentry/${e11}`, version: eo.SDK_VERSION })), s10.version = eo.SDK_VERSION);
      }
      var ec = e.i(194602), eu = e.i(790259), ep = e.i(919672);
      function ed(e10) {
        return "isRelative" in e10;
      }
      function e_(e10, t10) {
        let n10 = 0 >= e10.indexOf("://") && 0 !== e10.indexOf("//"), r10 = t10 ?? (n10 ? "thismessage:/" : void 0);
        try {
          if ("canParse" in URL && !URL.canParse(e10, r10)) return;
          let t11 = new URL(e10, r10);
          if (n10) return { isRelative: n10, pathname: t11.pathname, search: t11.search, hash: t11.hash };
          return t11;
        } catch {
        }
      }
      function eh(e10) {
        if (ed(e10)) return e10.pathname;
        let t10 = new URL(e10);
        return t10.search = "", t10.hash = "", ["80", "443"].includes(t10.port) && (t10.port = ""), t10.password && (t10.password = "%filtered%"), t10.username && (t10.username = "%filtered%"), t10.toString();
      }
      function ef(e10) {
        if (!e10) return {};
        let t10 = e10.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t10) return {};
        let n10 = t10[6] || "", r10 = t10[8] || "";
        return { host: t10[4], path: t10[5], protocol: t10[2], search: n10, hash: r10, relative: t10[5] + n10 + r10 };
      }
      function eg(e10) {
        return e10.split(/[?#]/, 1)[0];
      }
      function em(e10) {
        let { protocol: t10, host: n10, path: r10 } = e10, s10 = n10?.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "") || "";
        return `${t10 ? `${t10}://` : ""}${s10}${r10}`;
      }
      function eS(e10, t10 = true) {
        if (e10.startsWith("data:")) {
          let n10 = e10.match(/^data:([^;,]+)/), r10 = n10 ? n10[1] : "text/plain", s10 = e10.includes(";base64,"), i2 = e10.indexOf(","), a2 = "";
          if (t10 && -1 !== i2) {
            let t11 = e10.slice(i2 + 1);
            a2 = t11.length > 10 ? `${t11.slice(0, 10)}... [truncated]` : t11;
          }
          return `data:${r10}${s10 ? ",base64" : ""}${a2 ? `,${a2}` : ""}`;
        }
        return e10;
      }
      let eE = "telemetry.sdk.language", eT = "telemetry.sdk.name", ev = "telemetry.sdk.version";
      var eR = e.i(276420), ey = e.i(898299);
      function eI(e10, t10) {
        var n10, r10, s10, i2;
        let a2, o2 = t10?.getDsn(), l2 = t10?.getOptions().tunnel;
        return n10 = e10, r10 = o2, !(!(a2 = e_(n10)) || ed(a2)) && !!r10 && a2.host.includes(r10.host) && /(^|&|\?)sentry_key=/.test(a2.search) || (s10 = e10, !!(i2 = l2) && eA(s10) === eA(i2));
      }
      function eA(e10) {
        return "/" === e10[e10.length - 1] ? e10.slice(0, -1) : e10;
      }
      var eb = e.i(742485), eO = e.i(580641);
      class eC {
        constructor(e10) {
          this._maxSize = e10, this._cache = /* @__PURE__ */ new Map();
        }
        get size() {
          return this._cache.size;
        }
        get(e10) {
          let t10 = this._cache.get(e10);
          if (void 0 !== t10) return this._cache.delete(e10), this._cache.set(e10, t10), t10;
        }
        set(e10, t10) {
          if (this._cache.size >= this._maxSize) {
            let e11 = this._cache.keys().next().value;
            this._cache.delete(e11);
          }
          this._cache.set(e10, t10);
        }
        remove(e10) {
          let t10 = this._cache.get(e10);
          return t10 && this._cache.delete(e10), t10;
        }
        clear() {
          this._cache.clear();
        }
        keys() {
          return Array.from(this._cache.keys());
        }
        values() {
          let e10 = [];
          return this._cache.forEach((t10) => e10.push(t10)), e10;
        }
      }
      var eN = e.i(864592);
      let eL = "[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:";
      var eD = e.i(736926), eP = e.i(26996), ew = e.i(277212), eU = e.i(263749), eU = eU, eM = e.i(881437), eB = e.i(156833), ex = e.i(268654), ek = eU, e$ = e.i(981379), eF = e.i(570751), eG = e.i(482782), ej = e.i(433029), eY = e.i(242307), eV = e.i(762117), eH = e.i(459827);
      (A = B || (B = {}))[A.NONE = 0] = "NONE", A[A.SAMPLED = 1] = "SAMPLED";
      let ez = "0000000000000000", eW = "00000000000000000000000000000000", eK = { traceId: eW, spanId: ez, traceFlags: B.NONE };
      class eq {
        constructor(e10 = eK) {
          this._spanContext = e10;
        }
        spanContext() {
          return this._spanContext;
        }
        setAttribute(e10, t10) {
          return this;
        }
        setAttributes(e10) {
          return this;
        }
        addEvent(e10, t10) {
          return this;
        }
        addLink(e10) {
          return this;
        }
        addLinks(e10) {
          return this;
        }
        setStatus(e10) {
          return this;
        }
        updateName(e10) {
          return this;
        }
        end(e10) {
        }
        isRecording() {
          return false;
        }
        recordException(e10, t10) {
        }
      }
      let eJ = a("OpenTelemetry Context Key SPAN");
      function eX(e10) {
        return e10.getValue(eJ) || void 0;
      }
      function eZ() {
        return eX(y.getInstance().active());
      }
      function eQ(e10, t10) {
        return e10.setValue(eJ, t10);
      }
      function e0(e10) {
        return e10.deleteValue(eJ);
      }
      function e1(e10, t10) {
        return eQ(e10, new eq(t10));
      }
      function e2(e10) {
        var t10;
        return null == (t10 = eX(e10)) ? void 0 : t10.spanContext();
      }
      let e4 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
      function e5(e10, t10) {
        if ("string" != typeof e10 || e10.length !== t10) return false;
        let n10 = 0;
        for (let t11 = 0; t11 < e10.length; t11 += 4) n10 += (0 | e4[e10.charCodeAt(t11)]) + (0 | e4[e10.charCodeAt(t11 + 1)]) + (0 | e4[e10.charCodeAt(t11 + 2)]) + (0 | e4[e10.charCodeAt(t11 + 3)]);
        return n10 === t10;
      }
      function e3(e10) {
        return e5(e10, 32) && e10 !== eW;
      }
      function e9(e10) {
        var t10;
        return e3(e10.traceId) && e5(t10 = e10.spanId, 16) && t10 !== ez;
      }
      function e6(e10) {
        return new eq(e10);
      }
      let e8 = y.getInstance();
      class e7 {
        startSpan(e10, t10, n10 = e8.active()) {
          var r10;
          if (null == t10 ? void 0 : t10.root) return new eq();
          let s10 = n10 && e2(n10);
          return null !== (r10 = s10) && "object" == typeof r10 && "spanId" in r10 && "string" == typeof r10.spanId && "traceId" in r10 && "string" == typeof r10.traceId && "traceFlags" in r10 && "number" == typeof r10.traceFlags && e9(s10) ? new eq(s10) : new eq();
        }
        startActiveSpan(e10, t10, n10, r10) {
          let s10, i2, a2;
          if (arguments.length < 2) return;
          2 == arguments.length ? a2 = t10 : 3 == arguments.length ? (s10 = t10, a2 = n10) : (s10 = t10, i2 = n10, a2 = r10);
          let o2 = null != i2 ? i2 : e8.active(), l2 = this.startSpan(e10, s10, o2), c2 = eQ(o2, l2);
          return e8.with(c2, a2, void 0, l2);
        }
      }
      let te = new e7();
      class tt {
        constructor(e10, t10, n10, r10) {
          this._provider = e10, this.name = t10, this.version = n10, this.options = r10;
        }
        startSpan(e10, t10, n10) {
          return this._getTracer().startSpan(e10, t10, n10);
        }
        startActiveSpan(e10, t10, n10, r10) {
          let s10 = this._getTracer();
          return Reflect.apply(s10.startActiveSpan, s10, arguments);
        }
        _getTracer() {
          if (this._delegate) return this._delegate;
          let e10 = this._provider.getDelegateTracer(this.name, this.version, this.options);
          return e10 ? (this._delegate = e10, this._delegate) : te;
        }
      }
      let tn = new class {
        getTracer(e10, t10, n10) {
          return new e7();
        }
      }();
      class tr {
        getTracer(e10, t10, n10) {
          var r10;
          return null != (r10 = this.getDelegateTracer(e10, t10, n10)) ? r10 : new tt(this, e10, t10, n10);
        }
        getDelegate() {
          var e10;
          return null != (e10 = this._delegate) ? e10 : tn;
        }
        setDelegate(e10) {
          this._delegate = e10;
        }
        getDelegateTracer(e10, t10, n10) {
          var r10;
          return null == (r10 = this._delegate) ? void 0 : r10.getTracer(e10, t10, n10);
        }
      }
      let ts = "trace";
      class ti {
        constructor() {
          this._proxyTracerProvider = new tr(), this.wrapSpanContext = e6, this.isSpanContextValid = e9, this.deleteSpan = e0, this.getSpan = eX, this.getActiveSpan = eZ, this.getSpanContext = e2, this.setSpan = eQ, this.setSpanContext = e1;
        }
        static getInstance() {
          return this._instance || (this._instance = new ti()), this._instance;
        }
        setGlobalTracerProvider(e10) {
          let t10 = f(ts, this._proxyTracerProvider, T.instance());
          return t10 && this._proxyTracerProvider.setDelegate(e10), t10;
        }
        getTracerProvider() {
          return g(ts) || this._proxyTracerProvider;
        }
        getTracer(e10, t10) {
          return this.getTracerProvider().getTracer(e10, t10);
        }
        disable() {
          m(ts, T.instance()), this._proxyTracerProvider = new tr();
        }
      }
      let ta = ti.getInstance();
      (b = x || (x = {}))[b.INTERNAL = 0] = "INTERNAL", b[b.SERVER = 1] = "SERVER", b[b.CLIENT = 2] = "CLIENT", b[b.PRODUCER = 3] = "PRODUCER", b[b.CONSUMER = 4] = "CONSUMER";
      let to = { get(e10, t10) {
        if (null != e10) return e10[t10];
      }, keys: (e10) => null == e10 ? [] : Object.keys(e10) }, tl = { set(e10, t10, n10) {
        null != e10 && (e10[t10] = n10);
      } }, tc = a("OpenTelemetry Baggage Key");
      function tu(e10) {
        return e10.getValue(tc) || void 0;
      }
      function tp() {
        return tu(y.getInstance().active());
      }
      function td(e10, t10) {
        return e10.setValue(tc, t10);
      }
      function t_(e10) {
        return e10.deleteValue(tc);
      }
      class th {
        constructor(e10) {
          this._entries = e10 ? new Map(e10) : /* @__PURE__ */ new Map();
        }
        getEntry(e10) {
          let t10 = this._entries.get(e10);
          if (t10) return Object.assign({}, t10);
        }
        getAllEntries() {
          return Array.from(this._entries.entries());
        }
        setEntry(e10, t10) {
          let n10 = new th(this._entries);
          return n10._entries.set(e10, t10), n10;
        }
        removeEntry(e10) {
          let t10 = new th(this._entries);
          return t10._entries.delete(e10), t10;
        }
        removeEntries(...e10) {
          let t10 = new th(this._entries);
          for (let n10 of e10) t10._entries.delete(n10);
          return t10;
        }
        clear() {
          return new th();
        }
      }
      let tf = Symbol("BaggageEntryMetadata"), tg = T.instance();
      function tm(e10 = {}) {
        return new th(new Map(Object.entries(e10)));
      }
      let tS = "propagation", tE = new class {
        inject(e10, t10) {
        }
        extract(e10, t10) {
          return e10;
        }
        fields() {
          return [];
        }
      }();
      class tT {
        constructor() {
          this.createBaggage = tm, this.getBaggage = tu, this.getActiveBaggage = tp, this.setBaggage = td, this.deleteBaggage = t_;
        }
        static getInstance() {
          return this._instance || (this._instance = new tT()), this._instance;
        }
        setGlobalPropagator(e10) {
          return f(tS, e10, T.instance());
        }
        inject(e10, t10, n10 = tl) {
          return this._getGlobalPropagator().inject(e10, t10, n10);
        }
        extract(e10, t10, n10 = to) {
          return this._getGlobalPropagator().extract(e10, t10, n10);
        }
        fields() {
          return this._getGlobalPropagator().fields();
        }
        disable() {
          m(tS, T.instance());
        }
        _getGlobalPropagator() {
          return g(tS) || tE;
        }
      }
      let tv = tT.getInstance();
      (O = k || (k = {}))[O.UNSET = 0] = "UNSET", O[O.OK = 1] = "OK", O[O.ERROR = 2] = "ERROR";
      let tR = "[_0-9a-z-*/]", ty = `[a-z]${tR}{0,255}`, tI = `[a-z0-9]${tR}{0,240}@[a-z]${tR}{0,13}`, tA = RegExp(`^(?:${ty}|${tI})$`), tb = /^[ -~]{0,255}[!-~]$/, tO = /,|=/;
      class tC {
        _internalState = /* @__PURE__ */ new Map();
        constructor(e10) {
          e10 && this._parse(e10);
        }
        set(e10, t10) {
          let n10 = this._clone();
          return n10._internalState.has(e10) && n10._internalState.delete(e10), n10._internalState.set(e10, t10), n10;
        }
        unset(e10) {
          let t10 = this._clone();
          return t10._internalState.delete(e10), t10;
        }
        get(e10) {
          return this._internalState.get(e10);
        }
        serialize() {
          return this._keys().reduce((e10, t10) => (e10.push(t10 + "=" + this.get(t10)), e10), []).join(",");
        }
        _parse(e10) {
          !(e10.length > 512) && (this._internalState = e10.split(",").reverse().reduce((e11, t10) => {
            let n10 = t10.trim(), r10 = n10.indexOf("=");
            if (-1 !== r10) {
              let s10 = n10.slice(0, r10), i2 = n10.slice(r10 + 1, t10.length);
              tA.test(s10) && tb.test(i2) && !tO.test(i2) && e11.set(s10, i2);
            }
            return e11;
          }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
        }
        _keys() {
          return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
          let e10 = new tC();
          return e10._internalState = new Map(this._internalState), e10;
        }
      }
      a("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
      let tN = { [eT]: "opentelemetry", "process.runtime.name": "browser", [eE]: "webjs", [ev]: "2.7.0" };
      "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, e.i(478500), e.i(687769), (C = $ || ($ = {}))[C.NOT_RECORD = 0] = "NOT_RECORD", C[C.RECORD = 1] = "RECORD", C[C.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
      let tL = a("sentry_scopes");
      a("sentry_fork_isolation_scope"), a("sentry_fork_set_scope"), a("sentry_fork_set_isolation_scope");
      var tD = e.i(951615), tP = e.i(154877), tw = e.i(309302), tU = e.i(509967), tM = e.i(720444);
      let tB = [];
      function tx(e10, t10) {
        for (let n10 of t10) n10?.afterAllSetup && n10.afterAllSetup(e10);
      }
      function tk(e10, t10, n10) {
        if (n10[t10.name]) {
          V.DEBUG_BUILD && z.debug.log(`Integration skipped because it was already installed: ${t10.name}`);
          return;
        }
        if (n10[t10.name] = t10, tB.includes(t10.name) || "function" != typeof t10.setupOnce || (t10.setupOnce(), tB.push(t10.name)), t10.setup && "function" == typeof t10.setup && t10.setup(e10), "function" == typeof t10.preprocessEvent) {
          let n11 = t10.preprocessEvent.bind(t10);
          e10.on("preprocessEvent", (t11, r10) => n11(t11, r10, e10));
        }
        if ("function" == typeof t10.processEvent) {
          let n11 = t10.processEvent.bind(t10), r10 = Object.assign((t11, r11) => n11(t11, r11, e10), { id: t10.name });
          e10.addEventProcessor(r10);
        }
        ["processSpan", "processSegmentSpan"].forEach((n11) => {
          let r10 = t10[n11];
          "function" == typeof r10 && e10.on(n11, (n12) => r10.call(t10, n12, e10));
        }), V.DEBUG_BUILD && z.debug.log(`Integration installed: ${t10.name}`);
      }
      var t$ = e.i(511913), tF = e.i(428486), tG = e.i(723880), tj = e.i(272465);
      e.i(299247);
      var tY = e.i(932164);
      function tV(e10, t10) {
        var n10, r10, s10, i2;
        let a2, o2 = t10 ?? (i2 = e10, tH().get(i2)) ?? [];
        if (0 === o2.length) return;
        let l2 = e10.getOptions(), c2 = (n10 = l2._metadata, r10 = l2.tunnel, s10 = e10.getDsn(), a2 = {}, n10?.sdk && (a2.sdk = { name: n10.sdk.name, version: n10.sdk.version }), r10 && s10 && (a2.dsn = (0, tP.dsnToString)(s10)), (0, tw.createEnvelope)(a2, [[{ type: "log", item_count: o2.length, content_type: "application/vnd.sentry.items.log+json" }, { items: o2 }]]));
        tH().set(e10, []), e10.emit("flushLogs"), e10.sendEnvelope(c2);
      }
      function tH() {
        return (0, tF.getGlobalSingleton)("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
      }
      function tz(e10, t10) {
        var n10, r10, s10, i2;
        let a2, o2 = t10 ?? (i2 = e10, tW().get(i2)) ?? [];
        if (0 === o2.length) return;
        let l2 = e10.getOptions(), c2 = (n10 = l2._metadata, r10 = l2.tunnel, s10 = e10.getDsn(), a2 = {}, n10?.sdk && (a2.sdk = { name: n10.sdk.name, version: n10.sdk.version }), r10 && s10 && (a2.dsn = (0, tP.dsnToString)(s10)), (0, tw.createEnvelope)(a2, [[{ type: "trace_metric", item_count: o2.length, content_type: "application/vnd.sentry.items.trace-metric+json" }, { items: o2 }]]));
        tW().set(e10, []), e10.emit("flushMetrics"), e10.sendEnvelope(c2);
      }
      function tW() {
        return (0, tF.getGlobalSingleton)("clientToMetricBufferMap", () => /* @__PURE__ */ new WeakMap());
      }
      var tK = e.i(160634), tq = e.i(349063), tJ = e.i(787825);
      function tX(e10) {
        return "object" == typeof e10 && "function" == typeof e10.unref && e10.unref(), e10;
      }
      let tZ = Symbol.for("SentryBufferFullError");
      function tQ(e10 = 100) {
        let t10 = /* @__PURE__ */ new Set();
        return { get $() {
          return Array.from(t10);
        }, add: function(n10) {
          if (!(t10.size < e10)) return (0, tJ.rejectedSyncPromise)(tZ);
          let r10 = n10();
          return t10.add(r10), r10.then(() => {
            t10.delete(r10);
          }, () => {
            t10.delete(r10);
          }), r10;
        }, drain: function(e11) {
          if (!t10.size) return (0, tJ.resolvedSyncPromise)(true);
          let n10 = Promise.allSettled(Array.from(t10)).then(() => true);
          return e11 ? Promise.race([n10, new Promise((t11) => tX(setTimeout(() => t11(false), e11)))]) : n10;
        } };
      }
      var t0 = eU;
      function t1(e10) {
        let t10 = [];
        e10.message && t10.push(e10.message);
        try {
          let n10 = e10.exception.values[e10.exception.values.length - 1];
          n10?.value && (t10.push(n10.value), n10.type && t10.push(`${n10.type}: ${n10.value}`));
        } catch {
        }
        return t10;
      }
      var t2 = e.i(292817), t4 = e.i(783418), t5 = e.i(907894), t3 = eU;
      let t9 = "Not capturing exception because it's already been captured.", t6 = "Discarded session because of missing or non-string release", t8 = Symbol.for("SentryInternalError"), t7 = Symbol.for("SentryDoNotSendEventError");
      function ne(e10) {
        return { message: e10, [t8]: true };
      }
      function nt(e10) {
        return { message: e10, [t7]: true };
      }
      function nn(e10) {
        return !!e10 && "object" == typeof e10 && t8 in e10;
      }
      function nr(e10) {
        return !!e10 && "object" == typeof e10 && t7 in e10;
      }
      function ns(e10, t10, n10, r10, s10) {
        let i2, a2 = 0, o2 = false;
        e10.on(n10, () => {
          a2 = 0, clearTimeout(i2), o2 = false;
        }), e10.on(t10, (t11) => {
          (a2 += r10(t11)) >= 8e5 ? s10(e10) : o2 || (o2 = true, i2 = tX(setTimeout(() => {
            s10(e10);
          }, 5e3)));
        }), e10.on("flush", () => {
          s10(e10);
        });
      }
      class ni {
        constructor(e10) {
          if (this._options = e10, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = tQ(e10.transportOptions?.bufferSize ?? 64), e10.dsn ? this._dsn = (0, tP.makeDsn)(e10.dsn) : V.DEBUG_BUILD && z.debug.warn("No DSN provided, client will not send events."), this._dsn) {
            const t10 = function(e11, t11, n10) {
              let r10, s10, i2;
              return t11 || `${r10 = e11.protocol ? `${e11.protocol}:` : "", s10 = e11.port ? `:${e11.port}` : "", `${r10}//${e11.host}${s10}${e11.path ? `/${e11.path}` : ""}/api/`}${e11.projectId}/envelope/?${i2 = { sentry_version: "7" }, e11.publicKey && (i2.sentry_key = e11.publicKey), n10 && (i2.sentry_client = `${n10.name}/${n10.version}`), new URLSearchParams(i2).toString()}`;
            }(this._dsn, e10.tunnel, e10._metadata ? e10._metadata.sdk : void 0);
            this._transport = e10.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e10.transportOptions, url: t10 });
          }
          this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs, this._options.enableLogs && ns(this, "afterCaptureLog", "flushLogs", nu, tV), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? true) && ns(this, "afterCaptureMetric", "flushMetrics", nc, tz);
        }
        captureException(e10, t10, n10) {
          let r10 = (0, t4.uuid4)();
          if ((0, t4.checkOrSetAlreadyCaught)(e10)) return V.DEBUG_BUILD && z.debug.log(t9), r10;
          let s10 = { event_id: r10, ...t10 };
          return this._process(() => this.eventFromException(e10, s10).then((e11) => this._captureEvent(e11, s10, n10)).then((e11) => e11), "error"), s10.event_id;
        }
        captureMessage(e10, t10, n10, r10) {
          let s10 = { event_id: (0, t4.uuid4)(), ...n10 }, i2 = (0, tG.isParameterizedString)(e10) ? e10 : String(e10), a2 = (0, tG.isPrimitive)(e10), o2 = a2 ? this.eventFromMessage(i2, t10, s10) : this.eventFromException(e10, s10);
          return this._process(() => o2.then((e11) => this._captureEvent(e11, s10, r10)), a2 ? "unknown" : "error"), s10.event_id;
        }
        captureEvent(e10, t10, n10) {
          let r10 = (0, t4.uuid4)();
          if (t10?.originalException && (0, t4.checkOrSetAlreadyCaught)(t10.originalException)) return V.DEBUG_BUILD && z.debug.log(t9), r10;
          let s10 = { event_id: r10, ...t10 }, i2 = e10.sdkProcessingMetadata || {}, a2 = i2.capturedSpanScope, o2 = i2.capturedSpanIsolationScope, l2 = na(e10.type);
          return this._process(() => this._captureEvent(e10, s10, a2 || n10, o2), l2), s10.event_id;
        }
        captureSession(e10) {
          this.sendSession(e10), (0, tK.updateSession)(e10, { init: false });
        }
        getDsn() {
          return this._dsn;
        }
        getOptions() {
          return this._options;
        }
        getSdkMetadata() {
          return this._options._metadata;
        }
        getTransport() {
          return this._transport;
        }
        async flush(e10) {
          let t10 = this._transport;
          if (!t10) return true;
          this.emit("flush");
          let n10 = await this._isClientDoneProcessing(e10), r10 = await t10.flush(e10);
          return n10 && r10;
        }
        async close(e10) {
          tV(this);
          let t10 = await this.flush(e10);
          return this.getOptions().enabled = false, this.emit("close"), t10;
        }
        getEventProcessors() {
          return this._eventProcessors;
        }
        addEventProcessor(e10) {
          this._eventProcessors.push(e10);
        }
        init() {
          (this._isEnabled() || this._options.integrations.some(({ name: e10 }) => e10.startsWith("Spotlight"))) && this._setupIntegrations();
        }
        getIntegrationByName(e10) {
          return this._integrations[e10];
        }
        addIntegration(e10) {
          let t10 = this._integrations[e10.name];
          !t10 && e10.beforeSetup && e10.beforeSetup(this), tk(this, e10, this._integrations), t10 || tx(this, [e10]);
        }
        sendEvent(e10, t10 = {}) {
          this.emit("beforeSendEvent", e10, t10);
          let n10 = (0, tM.createEventEnvelope)(e10, this._dsn, this._options._metadata, this._options.tunnel);
          for (let e11 of t10.attachments || []) n10 = (0, tw.addItemToEnvelope)(n10, (0, tw.createAttachmentEnvelopeItem)(e11));
          this.sendEnvelope(n10).then((t11) => this.emit("afterSendEvent", e10, t11));
        }
        sendSession(e10) {
          let { release: t10, environment: n10 = tU.DEFAULT_ENVIRONMENT } = this._options;
          if ("aggregates" in e10) {
            let r11 = e10.attrs || {};
            if (!r11.release && !t10) {
              V.DEBUG_BUILD && z.debug.warn(t6);
              return;
            }
            r11.release = r11.release || t10, r11.environment = r11.environment || n10, e10.attrs = r11;
          } else {
            if (!e10.release && !t10) {
              V.DEBUG_BUILD && z.debug.warn(t6);
              return;
            }
            e10.release = e10.release || t10, e10.environment = e10.environment || n10;
          }
          this.emit("beforeSendSession", e10);
          let r10 = (0, tM.createSessionEnvelope)(e10, this._dsn, this._options._metadata, this._options.tunnel);
          this.sendEnvelope(r10);
        }
        recordDroppedEvent(e10, t10, n10 = 1) {
          if (this._options.sendClientReports) {
            let r10 = `${e10}:${t10}`;
            V.DEBUG_BUILD && z.debug.log(`Recording outcome: "${r10}"${n10 > 1 ? ` (${n10} times)` : ""}`), this._outcomes[r10] = (this._outcomes[r10] || 0) + n10;
          }
        }
        on(e10, t10) {
          let n10 = this._hooks[e10] = this._hooks[e10] || /* @__PURE__ */ new Set(), r10 = (...e11) => t10(...e11);
          return n10.add(r10), () => {
            n10.delete(r10);
          };
        }
        emit(e10, ...t10) {
          let n10 = this._hooks[e10];
          n10 && n10.forEach((e11) => e11(...t10));
        }
        async sendEnvelope(e10) {
          if (this.emit("beforeEnvelope", e10), this._isEnabled() && this._transport) try {
            return await this._transport.send(e10);
          } catch (e11) {
            return V.DEBUG_BUILD && z.debug.error("Error while sending envelope:", e11), {};
          }
          return V.DEBUG_BUILD && z.debug.error("Transport disabled"), {};
        }
        dispose() {
        }
        _setupIntegrations() {
          var e10;
          let t10, { integrations: n10 } = this._options;
          this._integrations = (e10 = this, t10 = {}, n10.forEach((t11) => {
            t11?.beforeSetup && t11.beforeSetup(e10);
          }), n10.forEach((n11) => {
            n11 && tk(e10, n11, t10);
          }), t10), tx(this, n10);
        }
        _updateSessionFromEvent(e10, t10) {
          let n10 = "fatal" === t10.level, r10 = false, s10 = t10.exception?.values;
          if (s10) {
            for (let e11 of (r10 = true, n10 = false, s10)) if (e11.mechanism?.handled === false) {
              n10 = true;
              break;
            }
          }
          let i2 = "ok" === e10.status;
          (i2 && 0 === e10.errors || i2 && n10) && ((0, tK.updateSession)(e10, { ...n10 && { status: "crashed" }, errors: e10.errors || Number(r10 || n10) }), this.captureSession(e10));
        }
        async _isClientDoneProcessing(e10) {
          let t10 = 0;
          for (; !e10 || t10 < e10; ) {
            if (await new Promise((e11) => setTimeout(e11, 1)), !this._numProcessing) return true;
            t10++;
          }
          return false;
        }
        _isEnabled() {
          return false !== this.getOptions().enabled && void 0 !== this._transport;
        }
        _prepareEvent(e10, t10, n10, r10) {
          let s10 = this.getOptions(), i2 = Object.keys(this._integrations);
          return !t10.integrations && i2?.length && (t10.integrations = i2), this.emit("preprocessEvent", e10, t10), e10.type || r10.setLastEventId(e10.event_id || t10.event_id), (0, t5.prepareEvent)(s10, e10, t10, n10, this, r10).then((e11) => (null === e11 || (this.emit("postprocessEvent", e11, t10), e11.contexts = { trace: { ...e11.contexts?.trace, ...(0, ep.getTraceContextFromScope)(n10) }, ...e11.contexts }, e11.sdkProcessingMetadata = { dynamicSamplingContext: (0, eP.getDynamicSamplingContextFromScope)(this, n10), ...e11.sdkProcessingMetadata }), e11));
        }
        _captureEvent(e10, t10 = {}, n10 = (0, ep.getCurrentScope)(), r10 = (0, ep.getIsolationScope)()) {
          return V.DEBUG_BUILD && no(e10) && z.debug.log(`Captured error event \`${t1(e10)[0] || "<unknown>"}\``), this._processEvent(e10, t10, n10, r10).then((e11) => e11.event_id, (e11) => {
            V.DEBUG_BUILD && (nr(e11) ? z.debug.log(e11.message) : nn(e11) ? z.debug.warn(e11.message) : z.debug.warn(e11));
          });
        }
        _processEvent(e10, t10, n10, r10) {
          let s10 = this.getOptions(), { sampleRate: i2 } = s10, a2 = nl(e10), o2 = no(e10), l2 = e10.type || "error", c2 = `before send for type \`${l2}\``, u2 = void 0 === i2 ? void 0 : (0, eV.parseSampleRate)(i2);
          if (o2 && "number" == typeof u2 && (0, t3.safeMathRandom)() > u2) return this.recordDroppedEvent("sample_rate", "error"), (0, tJ.rejectedSyncPromise)(nt(`Discarding event because it's not included in the random sample (sampling rate = ${i2})`));
          let p2 = na(e10.type);
          return this._prepareEvent(e10, t10, n10, r10).then((e11) => {
            if (null === e11) throw this.recordDroppedEvent("event_processor", p2), nt("An event processor returned `null`, will not send event.");
            return t10.data?.__sentry__ === true ? e11 : function(e12, t11) {
              let n11 = `${t11} must return \`null\` or a valid event.`;
              if ((0, tG.isThenable)(e12)) return e12.then((e13) => {
                if (!(0, tG.isPlainObject)(e13) && null !== e13) throw ne(n11);
                return e13;
              }, (e13) => {
                throw ne(`${t11} rejected with ${e13}`);
              });
              if (!(0, tG.isPlainObject)(e12) && null !== e12) throw ne(n11);
              return e12;
            }(function(e12, t11, n11, r11) {
              let { beforeSend: s11, beforeSendTransaction: i3, ignoreSpans: a3 } = t11, o3 = !(0, tq.isStreamedBeforeSendSpanCallback)(t11.beforeSendSpan) && t11.beforeSendSpan, l3 = n11;
              if (no(l3) && s11) return s11(l3, r11);
              if (nl(l3)) {
                if (o3 || a3) {
                  let t12 = function(e13) {
                    let { trace_id: t13, parent_span_id: n12, span_id: r12, status: s12, origin: i4, data: a4, op: o4 } = e13.contexts?.trace ?? {};
                    return { data: a4 ?? {}, description: e13.transaction, op: o4, parent_span_id: n12, span_id: r12 ?? "", start_timestamp: e13.start_timestamp ?? 0, status: s12, timestamp: e13.timestamp, trace_id: t13 ?? "", origin: i4, profile_id: a4?.[ec.SEMANTIC_ATTRIBUTE_PROFILE_ID], exclusive_time: a4?.[ec.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME], measurements: e13.measurements, is_segment: true };
                  }(l3);
                  if (a3?.length && (0, eY.shouldIgnoreSpan)(t12, a3)) return null;
                  if (o3) {
                    let e13 = o3(t12);
                    if (e13) l3 = (0, t2.merge)(n11, { type: "transaction", timestamp: e13.timestamp, start_timestamp: e13.start_timestamp, transaction: e13.description, contexts: { trace: { trace_id: e13.trace_id, span_id: e13.span_id, parent_span_id: e13.parent_span_id, op: e13.op, status: e13.status, origin: e13.origin, data: { ...e13.data, ...e13.profile_id && { [ec.SEMANTIC_ATTRIBUTE_PROFILE_ID]: e13.profile_id }, ...e13.exclusive_time && { [ec.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: e13.exclusive_time } } } }, measurements: e13.measurements });
                    else (0, er.showSpanDropWarning)();
                  }
                  if (l3.spans) {
                    let t13 = [], n12 = l3.spans;
                    for (let e13 of n12) {
                      if (a3?.length && (0, eY.shouldIgnoreSpan)(e13, a3)) {
                        (0, eY.reparentChildSpans)(n12, e13);
                        continue;
                      }
                      if (o3) {
                        let n13 = o3(e13);
                        n13 ? t13.push(n13) : ((0, er.showSpanDropWarning)(), t13.push(e13));
                      } else t13.push(e13);
                    }
                    let r12 = l3.spans.length - t13.length;
                    r12 && e12.recordDroppedEvent("before_send", "span", r12), l3.spans = t13;
                  }
                }
                if (i3) {
                  if (l3.spans) {
                    let e13 = l3.spans.length;
                    l3.sdkProcessingMetadata = { ...n11.sdkProcessingMetadata, spanCountBeforeProcessing: e13 };
                  }
                  return i3(l3, r11);
                }
              }
              return l3;
            }(this, s10, e11, t10), c2);
          }).then((s11) => {
            if (null === s11) {
              if (this.recordDroppedEvent("before_send", p2), a2) {
                let t11 = 1 + (e10.spans || []).length;
                this.recordDroppedEvent("before_send", "span", t11);
              }
              throw nt(`${c2} returned \`null\`, will not send event.`);
            }
            let i3 = n10.getSession() || r10.getSession();
            if (o2 && i3 && this._updateSessionFromEvent(i3, s11), a2) {
              let e11 = (s11.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) - (s11.spans ? s11.spans.length : 0);
              e11 > 0 && this.recordDroppedEvent("before_send", "span", e11);
            }
            let l3 = s11.transaction_info;
            return a2 && l3 && s11.transaction !== e10.transaction && (s11.transaction_info = { ...l3, source: "custom" }), this.sendEvent(s11, t10), s11;
          }).then(null, (e11) => {
            if (nr(e11) || nn(e11)) throw e11;
            throw this.captureException(e11, { mechanism: { handled: false, type: "internal" }, data: { __sentry__: true }, originalException: e11 }), ne(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e11}`);
          });
        }
        _process(e10, t10) {
          this._numProcessing++, this._promiseBuffer.add(e10).then((e11) => (this._numProcessing--, e11), (e11) => (this._numProcessing--, e11 === tZ && this.recordDroppedEvent("queue_overflow", t10), e11));
        }
        _clearOutcomes() {
          let e10 = this._outcomes;
          return this._outcomes = {}, Object.entries(e10).map(([e11, t10]) => {
            let [n10, r10] = e11.split(":");
            return { reason: n10, category: r10, quantity: t10 };
          });
        }
        _flushOutcomes() {
          var e10;
          let t10;
          V.DEBUG_BUILD && z.debug.log("Flushing outcomes...");
          let n10 = this._clearOutcomes();
          if (0 === n10.length) {
            V.DEBUG_BUILD && z.debug.log("No outcomes to send");
            return;
          }
          if (!this._dsn) {
            V.DEBUG_BUILD && z.debug.log("No dsn provided, will not send outcomes");
            return;
          }
          V.DEBUG_BUILD && z.debug.log("Sending outcomes:", n10);
          let r10 = (e10 = this._options.tunnel && (0, tP.dsnToString)(this._dsn), t10 = [{ type: "client_report" }, { timestamp: (0, tY.dateTimestampInSeconds)(), discarded_events: n10 }], (0, tw.createEnvelope)(e10 ? { dsn: e10 } : {}, [t10]));
          this.sendEnvelope(r10);
        }
      }
      function na(e10) {
        return "replay_event" === e10 ? "replay" : e10 || "error";
      }
      function no(e10) {
        return void 0 === e10.type;
      }
      function nl(e10) {
        return "transaction" === e10.type;
      }
      function nc(e10) {
        let t10 = 0;
        return e10.name && (t10 += 2 * e10.name.length), (t10 += 8) + np(e10.attributes);
      }
      function nu(e10) {
        let t10 = 0;
        return e10.message && (t10 += 2 * e10.message.length), t10 + np(e10.attributes);
      }
      function np(e10) {
        if (!e10) return 0;
        let t10 = 0;
        return Object.values(e10).forEach((e11) => {
          Array.isArray(e11) ? t10 += e11.length * nd(e11[0]) : (0, tG.isPrimitive)(e11) ? t10 += nd(e11) : t10 += 100;
        }), t10;
      }
      function nd(e10) {
        return "string" == typeof e10 ? 2 * e10.length : "number" == typeof e10 ? 8 : 4 * ("boolean" == typeof e10);
      }
      var n_ = e.i(702940);
      function nh(e10, t10) {
        return e10(t10.stack || "", 1);
      }
      function nf(e10, t10) {
        let n10 = { type: t10.name || t10.constructor.name, value: (0, tG.isError)(t10) && "__sentry_fetch_url_host__" in t10 && "string" == typeof t10.__sentry_fetch_url_host__ ? `${t10.message} (${t10.__sentry_fetch_url_host__})` : t10.message }, r10 = nh(e10, t10);
        return r10.length && (n10.stacktrace = { frames: r10 }), n10;
      }
      class ng extends ni {
        constructor(e10) {
          ea(), function(e11) {
            let t10 = e11._metadata?.sdk, n10 = t10?.name && t10?.version ? `${t10?.name}/${t10?.version}` : void 0;
            e11.transportOptions = { ...e11.transportOptions, headers: { ...n10 && { "user-agent": n10 }, ...e11.transportOptions?.headers } };
          }(e10), super(e10), this._setUpMetricsProcessing();
        }
        eventFromException(e10, t10) {
          let n10 = function(e11, t11, n11, r10) {
            let s10 = r10?.data && r10.data.mechanism || { handled: true, type: "generic" }, [i2, a2] = function(e12, t12, n12, r11) {
              if ((0, tG.isError)(n12)) return [n12, void 0];
              if (t12.synthetic = true, (0, tG.isPlainObject)(n12)) {
                let t13 = e12?.getOptions().normalizeDepth, s12 = { __serialized__: (0, n_.normalizeToSize)(n12, t13) }, i3 = function(e13) {
                  for (let t14 in e13) if (Object.prototype.hasOwnProperty.call(e13, t14)) {
                    let n13 = e13[t14];
                    if (n13 instanceof Error) return n13;
                  }
                }(n12);
                if (i3) return [i3, s12];
                let a3 = function(e13) {
                  if ("name" in e13 && "string" == typeof e13.name) {
                    let t15 = `'${e13.name}' captured as exception`;
                    return "message" in e13 && "string" == typeof e13.message && (t15 += ` with message '${e13.message}'`), t15;
                  }
                  if ("message" in e13 && "string" == typeof e13.message) return e13.message;
                  let t14 = (0, ey.extractExceptionKeysForMessage)(e13);
                  if ((0, tG.isErrorEvent)(e13)) return `Event \`ErrorEvent\` captured as exception with message \`${e13.message}\``;
                  let n13 = function(e14) {
                    try {
                      let t15 = Object.getPrototypeOf(e14);
                      return t15 ? t15.constructor.name : void 0;
                    } catch {
                    }
                  }(e13);
                  return `${n13 && "Object" !== n13 ? `'${n13}'` : "Object"} captured as exception with keys: ${t14}`;
                }(n12), o3 = r11?.syntheticException || Error(a3);
                return o3.message = a3, [o3, s12];
              }
              let s11 = r11?.syntheticException || Error(n12);
              return s11.message = `${n12}`, [s11, void 0];
            }(e11, s10, n11, r10), o2 = { exception: { values: [nf(t11, i2)] } };
            return a2 && (o2.extra = a2), (0, t4.addExceptionTypeValue)(o2, void 0, void 0), (0, t4.addExceptionMechanism)(o2, s10), { ...o2, event_id: r10?.event_id };
          }(this, this._options.stackParser, e10, t10);
          return n10.level = "error", (0, tJ.resolvedSyncPromise)(n10);
        }
        eventFromMessage(e10, t10 = "info", n10) {
          return (0, tJ.resolvedSyncPromise)(function(e11, t11, n11 = "info", r10, s10) {
            let i2 = { event_id: r10?.event_id, level: n11 };
            if (s10 && r10?.syntheticException) {
              let n12 = nh(e11, r10.syntheticException);
              n12.length && (i2.exception = { values: [{ value: t11, stacktrace: { frames: n12 } }] }, (0, t4.addExceptionMechanism)(i2, { synthetic: true }));
            }
            if ((0, tG.isParameterizedString)(t11)) {
              let { __sentry_template_string__: e12, __sentry_template_values__: n12 } = t11;
              return i2.logentry = { message: e12, params: n12 }, i2;
            }
            return i2.message = t11, i2;
          }(this._options.stackParser, e10, t10, n10, this._options.attachStacktrace));
        }
        captureException(e10, t10, n10) {
          return nm(t10), super.captureException(e10, t10, n10);
        }
        captureEvent(e10, t10, n10) {
          return !e10.type && e10.exception?.values && e10.exception.values.length > 0 && nm(t10), super.captureEvent(e10, t10, n10);
        }
        captureCheckIn(e10, t10, n10) {
          var r10, s10, i2;
          let a2, o2, l2 = "checkInId" in e10 && e10.checkInId ? e10.checkInId : (0, t4.uuid4)();
          if (!this._isEnabled()) return V.DEBUG_BUILD && z.debug.warn("SDK not enabled, will not capture check-in."), l2;
          let { release: c2, environment: u2, tunnel: p2 } = this.getOptions(), d2 = { check_in_id: l2, monitor_slug: e10.monitorSlug, status: e10.status, release: c2, environment: u2 };
          "duration" in e10 && (d2.duration = e10.duration), t10 && (d2.monitor_config = { schedule: t10.schedule, checkin_margin: t10.checkinMargin, max_runtime: t10.maxRuntime, timezone: t10.timezone, failure_issue_threshold: t10.failureIssueThreshold, recovery_threshold: t10.recoveryThreshold });
          let [_2, h2] = (r10 = this, n10 ? (0, ep.withScope)(n10, () => {
            let e11 = (0, er.getActiveSpan)(), t11 = e11 ? (0, er.spanToTraceContext)(e11) : (0, ep.getTraceContextFromScope)(n10);
            return [e11 ? (0, eP.getDynamicSamplingContextFromSpan)(e11) : (0, eP.getDynamicSamplingContextFromScope)(r10, n10), t11];
          }) : [void 0, void 0]);
          h2 && (d2.contexts = { trace: h2 });
          let f2 = (s10 = this.getSdkMetadata(), i2 = this.getDsn(), a2 = { sent_at: (/* @__PURE__ */ new Date()).toISOString() }, s10?.sdk && (a2.sdk = { name: s10.sdk.name, version: s10.sdk.version }), p2 && i2 && (a2.dsn = (0, tP.dsnToString)(i2)), _2 && (a2.trace = _2), o2 = [{ type: "check_in" }, d2], (0, tw.createEnvelope)(a2, [o2]));
          return V.DEBUG_BUILD && z.debug.log("Sending checkin:", e10.monitorSlug, e10.status), this.sendEnvelope(f2), l2;
        }
        dispose() {
          for (let e10 of (V.DEBUG_BUILD && z.debug.log("Disposing client..."), Object.keys(this._hooks))) this._hooks[e10]?.clear();
          this._hooks = {}, this._eventProcessors.length = 0, this._integrations = {}, this._outcomes = {}, this._transport = void 0, this._promiseBuffer = tQ(64);
        }
        _prepareEvent(e10, t10, n10, r10) {
          return this._options.platform && (e10.platform = e10.platform || this._options.platform), this._options.runtime && (e10.contexts = { ...e10.contexts, runtime: e10.contexts?.runtime || this._options.runtime }), this._options.serverName && (e10.server_name = e10.server_name || this._options.serverName), super._prepareEvent(e10, t10, n10, r10);
        }
        _setUpMetricsProcessing() {
          this.on("processMetric", (e10) => {
            this._options.serverName && (e10.attributes = { "server.address": this._options.serverName, ...e10.attributes });
          });
        }
      }
      function nm(e10) {
        let t10 = (0, ep.getIsolationScope)().getScopeData().sdkProcessingMetadata.requestSession;
        if (t10) {
          let n10 = e10?.mechanism?.handled ?? true;
          n10 && "crashed" !== t10.status ? t10.status = "errored" : n10 || (t10.status = "crashed");
        }
      }
      var eU = eU, ek = eU;
      function nS(e10, t10) {
        return !!e10 && "object" == typeof e10 && !!e10[t10];
      }
      function nE(e10) {
        return "string" == typeof e10 ? e10 : e10 ? nS(e10, "url") ? e10.url : e10.toString ? e10.toString() : "" : "";
      }
      H.GLOBAL_OBJ;
      var nT = e.i(35759), nv = e.i(610615);
      function nR(e10) {
        return "string" == typeof e10 && e10.split(",").some((e11) => e11.trim().startsWith(eb.SENTRY_BAGGAGE_KEY_PREFIX));
      }
      function ny(e10, t10, n10, r10) {
        let s10 = { url: eS(e10), type: "fetch", "http.method": n10, [ec.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: r10, [ec.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client" };
        return t10 && (ed(t10) || (s10["http.url"] = eS(t10.href), s10["server.address"] = t10.host), t10.search && (s10["http.query"] = t10.search), t10.hash && (s10["http.fragment"] = t10.hash)), s10;
      }
      function nI(e10, t10) {
        let n10 = (0, ep.getClient)(), r10 = (0, ep.getIsolationScope)();
        if (!n10) return;
        let { beforeBreadcrumb: s10 = null, maxBreadcrumbs: i2 = 100 } = n10.getOptions();
        if (i2 <= 0) return;
        let a2 = { timestamp: (0, tY.dateTimestampInSeconds)(), ...e10 }, o2 = s10 ? (0, z.consoleSandbox)(() => s10(a2, t10)) : a2;
        null !== o2 && (n10.emit && n10.emit("beforeAddBreadcrumb", o2, t10), r10.addBreadcrumb(o2, i2));
      }
      function nA(e10) {
        return parseInt(e10 || "", 10) || void 0;
      }
      function nb(e10, t10) {
        let n10 = (0, W.getFramesFromEvent)(e10), r10 = (0, W.getFramesFromEvent)(t10);
        if (!n10 && !r10) return true;
        if (n10 && !r10 || !n10 && r10 || r10.length !== n10.length) return false;
        for (let e11 = 0; e11 < r10.length; e11++) {
          let t11 = r10[e11], s10 = n10[e11];
          if (t11.filename !== s10.filename || t11.lineno !== s10.lineno || t11.colno !== s10.colno || t11.function !== s10.function) return false;
        }
        return true;
      }
      function nO(e10, t10) {
        let n10 = e10.fingerprint, r10 = t10.fingerprint;
        if (!n10 && !r10) return true;
        if (n10 && !r10 || !n10 && r10) return false;
        try {
          return n10.join("") === r10.join("");
        } catch {
          return false;
        }
      }
      function nC(e10) {
        return e10.exception?.values?.[0];
      }
      let nN = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /^Java exception was raised during method invocation$/];
      function nL(e10 = {}, t10 = {}) {
        return { allowUrls: [...e10.allowUrls || [], ...t10.allowUrls || []], denyUrls: [...e10.denyUrls || [], ...t10.denyUrls || []], ignoreErrors: [...e10.ignoreErrors || [], ...t10.ignoreErrors || [], ...e10.disableErrorDefaults ? [] : nN], ignoreTransactions: [...e10.ignoreTransactions || [], ...t10.ignoreTransactions || []] };
      }
      function nD(e10) {
        try {
          let t10 = [...e10.exception?.values ?? []].reverse().find((e11) => e11.mechanism?.parent_id === void 0 && e11.stacktrace?.frames?.length), n10 = t10?.stacktrace?.frames;
          return n10 ? function(e11 = []) {
            for (let t11 = e11.length - 1; t11 >= 0; t11--) {
              let n11 = e11[t11];
              if (n11 && "<anonymous>" !== n11.filename && "[native code]" !== n11.filename) return n11.filename || null;
            }
            return null;
          }(n10) : null;
        } catch {
          return V.DEBUG_BUILD && z.debug.error(`Cannot extract url for event ${(0, t4.getEventDescription)(e10)}`), null;
        }
      }
      let nP = /* @__PURE__ */ new WeakMap();
      function nw(e10) {
        return Array.isArray(e10.errors);
      }
      function nU(e10, t10, n10) {
        e10.mechanism = { handled: true, type: "auto.core.linked_errors", ...nw(n10) && { is_exception_group: true }, ...e10.mechanism, exception_id: t10 };
      }
      function nM(e10, t10, n10, r10) {
        e10.mechanism = { handled: true, ...e10.mechanism, type: "chained", source: t10, exception_id: n10, parent_id: r10 };
      }
      function nB() {
        "console" in H.GLOBAL_OBJ && z.CONSOLE_LEVELS.forEach(function(e10) {
          e10 in H.GLOBAL_OBJ.console && (0, ey.fill)(H.GLOBAL_OBJ.console, e10, function(t10) {
            return z.originalConsoleMethods[e10] = t10, function(...t11) {
              Z("console", { args: t11, level: e10 });
              let n10 = z.originalConsoleMethods[e10];
              n10?.apply(H.GLOBAL_OBJ.console, t11);
            };
          });
        });
      }
      function nx(e10) {
        return "util" in H.GLOBAL_OBJ && "function" == typeof H.GLOBAL_OBJ.util.format ? H.GLOBAL_OBJ.util.format(...e10) : (0, eN.safeJoin)(e10, " ");
      }
      let nk = ["X-Client-IP", "X-Forwarded-For", "Fly-Client-IP", "CF-Connecting-IP", "Fastly-Client-Ip", "True-Client-Ip", "X-Real-IP", "X-Cluster-Client-IP", "X-Forwarded", "Forwarded-For", "Forwarded", "X-Vercel-Forwarded-For"], n$ = { cookies: true, data: true, headers: true, query_string: true, url: true };
      function nF(e10, t10) {
        let n10 = e10.attributes ?? (e10.attributes = {});
        Object.entries(t10).forEach(([e11, t11]) => {
          null == t11 || e11 in n10 || (n10[e11] = t11);
        });
      }
      class nG {
        constructor(e10, t10) {
          this._traceBuckets = /* @__PURE__ */ new Map(), this._client = e10;
          const { maxSpanLimit: n10, flushInterval: r10, maxTraceWeightInBytes: s10 } = t10 ?? {};
          this._maxSpanLimit = n10 && n10 > 0 && n10 <= 1e3 ? n10 : 1e3, this._flushInterval = r10 && r10 > 0 ? r10 : 5e3, this._maxTraceWeight = s10 && s10 > 0 ? s10 : 5e6, this._client.on("flush", () => {
            this.drain();
          }), this._client.on("close", () => {
            this._traceBuckets.forEach((e11) => {
              clearTimeout(e11.timeout);
            }), this._traceBuckets.clear();
          });
        }
        add(e10) {
          let t10 = e10.trace_id, n10 = this._traceBuckets.get(t10);
          n10 || (n10 = { spans: /* @__PURE__ */ new Set(), size: 0, timeout: tX(setTimeout(() => {
            this.flush(t10);
          }, this._flushInterval)) }, this._traceBuckets.set(t10, n10)), n10.spans.add(e10), n10.size += function(e11) {
            let t11;
            if (t11 = 156 + 2 * e11.name.length + (0, t$.estimateTypedAttributesSizeInBytes)(e11.attributes), e11.links && e11.links.length > 0) {
              let n11 = e11.links[0], r10 = n11?.attributes;
              t11 += (100 + (r10 ? (0, t$.estimateTypedAttributesSizeInBytes)(r10) : 0)) * e11.links.length;
            }
            return t11;
          }(e10), (n10.spans.size >= this._maxSpanLimit || n10.size >= this._maxTraceWeight) && this.flush(t10);
        }
        drain() {
          this._traceBuckets.size && (V.DEBUG_BUILD && z.debug.log(`Flushing span tree map with ${this._traceBuckets.size} traces`), this._traceBuckets.forEach((e10, t10) => {
            this.flush(t10);
          }));
        }
        flush(e10) {
          var t10, n10;
          let r10, s10, i2, a2, o2, l2 = this._traceBuckets.get(e10);
          if (!l2) return;
          if (!l2.spans.size) return void this._removeTrace(e10);
          let c2 = Array.from(l2.spans), u2 = c2[0]?._segmentSpan;
          if (!u2) {
            V.DEBUG_BUILD && z.debug.warn("No segment span reference found on span JSON, cannot compute DSC"), this._removeTrace(e10);
            return;
          }
          let p2 = (0, eP.getDynamicSamplingContextFromSpan)(u2), d2 = c2.map((e11) => {
            let { _segmentSpan: t11, ...n11 } = e11;
            return n11;
          }), _2 = (r10 = (t10 = this._client).getDsn(), s10 = t10.getOptions().tunnel, i2 = (0, tw.getSdkMetadataForEnvelopeHeader)(t10.getOptions()._metadata), a2 = { sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...!!(n10 = p2).trace_id && !!n10.public_key && { trace: p2 }, ...i2 && { sdk: i2 }, ...!!s10 && r10 && { dsn: (0, tP.dsnToString)(r10) } }, o2 = [{ type: "span", item_count: d2.length, content_type: "application/vnd.sentry.items.span.v2+json" }, { items: d2 }], (0, tw.createEnvelope)(a2, [o2]));
          V.DEBUG_BUILD && z.debug.log(`Sending span envelope for trace ${e10} with ${d2.length} spans`), this._client.sendEnvelope(_2).then(null, (e11) => {
            V.DEBUG_BUILD && z.debug.error("Error while sending streamed span envelope:", e11);
          }), this._removeTrace(e10);
        }
        _removeTrace(e10) {
          let t10 = this._traceBuckets.get(e10);
          t10 && clearTimeout(t10.timeout), this._traceBuckets.delete(e10);
        }
      }
      class nj {
      }
      class nY {
        addCallback(e10) {
        }
        removeCallback(e10) {
        }
      }
      let nV = new class {
        createGauge(e10, t10) {
          return nz;
        }
        createHistogram(e10, t10) {
          return nW;
        }
        createCounter(e10, t10) {
          return nH;
        }
        createUpDownCounter(e10, t10) {
          return nK;
        }
        createObservableGauge(e10, t10) {
          return nJ;
        }
        createObservableCounter(e10, t10) {
          return nq;
        }
        createObservableUpDownCounter(e10, t10) {
          return nX;
        }
        addBatchObservableCallback(e10, t10) {
        }
        removeBatchObservableCallback(e10) {
        }
      }(), nH = new class extends nj {
        add(e10, t10) {
        }
      }(), nz = new class extends nj {
        record(e10, t10) {
        }
      }(), nW = new class extends nj {
        record(e10, t10) {
        }
      }(), nK = new class extends nj {
        add(e10, t10) {
        }
      }(), nq = new class extends nY {
      }(), nJ = new class extends nY {
      }(), nX = new class extends nY {
      }();
      (N = F || (F = {}))[N.NOT_RECORD = 0] = "NOT_RECORD", N[N.RECORD = 1] = "RECORD", N[N.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
      let nZ = T.instance(), nQ = (e10) => null !== e10 && "object" == typeof e10 && "function" == typeof e10.then;
      class n0 {
        _rawAttributes;
        _asyncAttributesPending = false;
        _schemaUrl;
        _memoizedAttributes;
        static FromAttributeList(e10, t10) {
          let n10 = new n0({}, t10);
          return n10._rawAttributes = n1(e10), n10._asyncAttributesPending = e10.filter(([e11, t11]) => nQ(t11)).length > 0, n10;
        }
        constructor(e10, t10) {
          const n10 = e10.attributes ?? {};
          this._rawAttributes = Object.entries(n10).map(([e11, t11]) => (nQ(t11) && (this._asyncAttributesPending = true), [e11, t11])), this._rawAttributes = n1(this._rawAttributes), this._schemaUrl = function(e11) {
            if ("string" == typeof e11 || void 0 === e11) return e11;
            nZ.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", e11);
          }(t10?.schemaUrl);
        }
        get asyncAttributesPending() {
          return this._asyncAttributesPending;
        }
        async waitForAsyncAttributes() {
          if (this.asyncAttributesPending) {
            for (let e10 = 0; e10 < this._rawAttributes.length; e10++) {
              let [t10, n10] = this._rawAttributes[e10];
              this._rawAttributes[e10] = [t10, nQ(n10) ? await n10 : n10];
            }
            this._asyncAttributesPending = false;
          }
        }
        get attributes() {
          if (this.asyncAttributesPending && nZ.error("Accessing resource attributes before async attributes settled"), this._memoizedAttributes) return this._memoizedAttributes;
          let e10 = {};
          for (let [t10, n10] of this._rawAttributes) {
            if (nQ(n10)) {
              nZ.debug(`Unsettled resource attribute ${t10} skipped`);
              continue;
            }
            null != n10 && (e10[t10] ??= n10);
          }
          return this._asyncAttributesPending || (this._memoizedAttributes = e10), e10;
        }
        getRawAttributes() {
          return this._rawAttributes;
        }
        get schemaUrl() {
          return this._schemaUrl;
        }
        merge(e10) {
          var t10, n10;
          let r10, s10, i2;
          if (null == e10) return this;
          let a2 = (t10 = this, n10 = e10, r10 = t10?.schemaUrl, i2 = void 0 === (s10 = n10?.schemaUrl) || "" === s10, void 0 === r10 || "" === r10 ? s10 : i2 || r10 === s10 ? r10 : void nZ.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', r10, s10));
          return n0.FromAttributeList([...e10.getRawAttributes(), ...this.getRawAttributes()], a2 ? { schemaUrl: a2 } : void 0);
        }
      }
      function n1(e10) {
        return e10.map(([e11, t10]) => nQ(t10) ? [e11, t10.catch((t11) => {
          nZ.debug("promise rejection for resource attribute: %s - %s", e11, t11);
        })] : [e11, t10]);
      }
      void 0 === globalThis.performance && (globalThis.performance = { timeOrigin: 0, now: () => Date.now() });
      class n2 extends ng {
        constructor(e10) {
          el(e10, "vercel-edge"), e10._metadata = e10._metadata || {}, super({ ...e10, platform: "javascript", runtime: e10.runtime || { name: "vercel-edge" }, serverName: e10.serverName || process.env.SENTRY_NAME });
        }
        async flush(e10) {
          let t10 = this.traceProvider;
          return await t10?.forceFlush(), this.getOptions().sendClientReports && this._flushOutcomes(), super.flush(e10);
        }
      }
      let n4 = a("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
      function n5(e10) {
        return e10.setValue(n4, true);
      }
      function n3(e10) {
        return true === e10.getValue(n4);
      }
      let n9 = "baggage";
      class n6 {
        inject(e10, t10, n10) {
          let r10 = tv.getBaggage(e10);
          if (!r10 || n3(e10)) return;
          let s10 = r10.getAllEntries().map(([e11, t11]) => {
            let n11 = `${encodeURIComponent(e11)}=${encodeURIComponent(t11.value)}`;
            return void 0 !== t11.metadata && (n11 += ";" + t11.metadata.toString()), n11;
          }).filter((e11) => e11.length <= 4096).slice(0, 180).reduce((e11, t11) => {
            let n11 = `${e11}${"" !== e11 ? "," : ""}${t11}`;
            return n11.length > 8192 ? e11 : n11;
          }, "");
          s10.length > 0 && n10.set(t10, n9, s10);
        }
        extract(e10, t10, n10) {
          let r10 = n10.get(t10, n9), s10 = Array.isArray(r10) ? r10.join(",") : r10;
          if (!s10) return e10;
          let i2 = {};
          return 0 === s10.length || (s10.split(",").forEach((e11) => {
            let t11 = function(e12) {
              let t12, n11, r11;
              if (!e12) return;
              let s11 = e12.indexOf(";"), i3 = -1 === s11 ? e12 : e12.substring(0, s11), a2 = i3.indexOf("=");
              if (a2 <= 0) return;
              let o2 = i3.substring(0, a2).trim(), l2 = i3.substring(a2 + 1).trim();
              if (o2 && l2) {
                try {
                  t12 = decodeURIComponent(o2), n11 = decodeURIComponent(l2);
                } catch {
                  return;
                }
                if (-1 !== s11 && s11 < e12.length - 1) {
                  var c2;
                  "string" != typeof (c2 = e12.substring(s11 + 1)) && (tg.error(`Cannot create baggage metadata from unknown type: ${typeof c2}`), c2 = ""), r11 = { __TYPE__: tf, toString: () => c2 };
                }
                return { key: t12, value: n11, metadata: r11 };
              }
            }(e11);
            if (t11) {
              let e12 = { value: t11.value };
              t11.metadata && (e12.metadata = t11.metadata), i2[t11.key] = e12;
            }
          }), 0 === Object.entries(i2).length) ? e10 : tv.setBaggage(e10, tv.createBaggage(i2));
        }
        fields() {
          return [n9];
        }
      }
      function n8(e10) {
        let t10 = {};
        if ("object" != typeof e10 || null == e10) return t10;
        for (let r10 in e10) {
          var n10;
          if (!Object.prototype.hasOwnProperty.call(e10, r10)) continue;
          if ("string" != typeof (n10 = r10) || "" === n10) {
            nZ.warn(`Invalid attribute key: ${r10}`);
            continue;
          }
          let s10 = e10[r10];
          if (!n7(s10)) {
            nZ.warn(`Invalid attribute value set for key: ${r10}`);
            continue;
          }
          Array.isArray(s10) ? t10[r10] = s10.slice() : t10[r10] = s10;
        }
        return t10;
      }
      function n7(e10) {
        return null == e10 || (Array.isArray(e10) ? function(e11) {
          let t10;
          for (let n10 of e11) {
            if (null == n10) continue;
            let e12 = typeof n10;
            if (e12 !== t10) {
              if (!t10 && re(e12)) {
                t10 = e12;
                continue;
              }
              return false;
            }
          }
          return true;
        }(e10) : re(typeof e10));
      }
      function re(e10) {
        switch (e10) {
          case "number":
          case "boolean":
          case "string":
            return true;
        }
        return false;
      }
      function rt(e10) {
        try {
          var t10;
          nZ.error((t10 = e10, "string" == typeof t10 ? t10 : JSON.stringify(function(e11) {
            let t11 = {}, n10 = e11;
            for (; null !== n10; ) Object.getOwnPropertyNames(n10).forEach((e12) => {
              if (t11[e12]) return;
              let r10 = n10[e12];
              r10 && (t11[e12] = String(r10));
            }), n10 = Object.getPrototypeOf(n10);
            return t11;
          }(t10))));
        } catch {
        }
      }
      function rn(e10) {
        let t10 = process.env[e10];
        if (null == t10 || "" === t10.trim()) return;
        let n10 = Number(t10);
        return isNaN(n10) ? void nZ.warn(`Unknown value ${JSON.stringify(t10, null, 2)} for ${e10}, expected a number, using defaults`) : n10;
      }
      let rr = "http.method", rs = "http.url", ri = "http.status_code", ra = "exception.message", ro = "exception.type", rl = "http.request.method", rc = "http.response.status_code", ru = "telemetry.sdk.language", rp = "telemetry.sdk.name", rd = "telemetry.sdk.version", r_ = "url.full", rh = { [rp]: "opentelemetry", "process.runtime.name": "node", [ru]: "nodejs", [rd]: "2.6.1" }, rf = performance;
      function rg(e10) {
        return [Math.trunc(e10 / 1e3), Math.round(e10 % 1e3 * 1e6)];
      }
      function rm(e10) {
        return Array.isArray(e10) && 2 === e10.length && "number" == typeof e10[0] && "number" == typeof e10[1];
      }
      function rS(e10) {
        return rm(e10) || "number" == typeof e10 || e10 instanceof Date;
      }
      function rE(e10, t10) {
        let n10 = [e10[0] + t10[0], e10[1] + t10[1]];
        return n10[1] >= 1e9 && (n10[1] -= 1e9, n10[0] += 1), n10;
      }
      let rT = "[_0-9a-z-*/]", rv = `[a-z]${rT}{0,255}`, rR = `[a-z0-9]${rT}{0,240}@[a-z]${rT}{0,13}`, ry = RegExp(`^(?:${rv}|${rR})$`), rI = /^[ -~]{0,255}[!-~]$/, rA = /,|=/;
      class rb {
        __init() {
          this._internalState = /* @__PURE__ */ new Map();
        }
        constructor(e10) {
          rb.prototype.__init.call(this), e10 && this._parse(e10);
        }
        set(e10, t10) {
          let n10 = this._clone();
          return n10._internalState.has(e10) && n10._internalState.delete(e10), n10._internalState.set(e10, t10), n10;
        }
        unset(e10) {
          let t10 = this._clone();
          return t10._internalState.delete(e10), t10;
        }
        get(e10) {
          return this._internalState.get(e10);
        }
        serialize() {
          return this._keys().reduce((e10, t10) => (e10.push(t10 + "=" + this.get(t10)), e10), []).join(",");
        }
        _parse(e10) {
          !(e10.length > 512) && (this._internalState = e10.split(",").reverse().reduce((e11, t10) => {
            let n10 = t10.trim(), r10 = n10.indexOf("=");
            if (-1 !== r10) {
              let s10 = n10.slice(0, r10), i2 = n10.slice(r10 + 1, t10.length);
              ry.test(s10) && rI.test(i2) && !rA.test(i2) && e11.set(s10, i2);
            }
            return e11;
          }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
        }
        _keys() {
          return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
          let e10 = new rb();
          return e10._internalState = new Map(this._internalState), e10;
        }
      }
      let rO = Function.prototype.toString, rC = rO.call(Object), rN = Object.getPrototypeOf, rL = Object.prototype, rD = rL.hasOwnProperty, rP = Symbol ? Symbol.toStringTag : void 0, rw = rL.toString;
      function rU(e10) {
        var t10, n10, r10;
        if (null == (t10 = e10) || "object" != typeof t10 || "[object Object]" !== (null == (n10 = e10) ? void 0 === n10 ? "[object Undefined]" : "[object Null]" : rP && rP in Object(n10) ? function(e11) {
          let t11 = rD.call(e11, rP), n11 = e11[rP], r11 = false;
          try {
            e11[rP] = void 0, r11 = true;
          } catch {
          }
          let s11 = rw.call(e11);
          return r11 && (t11 ? e11[rP] = n11 : delete e11[rP]), s11;
        }(n10) : (r10 = n10, rw.call(r10)))) return false;
        let s10 = rN(e10);
        if (null === s10) return true;
        let i2 = rD.call(s10, "constructor") && s10.constructor;
        return "function" == typeof i2 && i2 instanceof i2 && rO.call(i2) === rC;
      }
      function rM(e10) {
        return rx(e10) ? e10.slice() : e10;
      }
      function rB(e10, t10, n10) {
        let r10 = n10.get(e10[t10]) || [];
        for (let n11 = 0, s10 = r10.length; n11 < s10; n11++) {
          let s11 = r10[n11];
          if (s11.key === t10 && s11.obj === e10) return true;
        }
        return false;
      }
      function rx(e10) {
        return Array.isArray(e10);
      }
      function rk(e10) {
        return "function" == typeof e10;
      }
      function r$(e10) {
        return !rF(e10) && !rx(e10) && !rk(e10) && "object" == typeof e10;
      }
      function rF(e10) {
        return "string" == typeof e10 || "number" == typeof e10 || "boolean" == typeof e10 || void 0 === e10 || e10 instanceof Date || e10 instanceof RegExp || null === e10;
      }
      class rG {
        __init() {
          this.attributes = {};
        }
        __init2() {
          this.links = [];
        }
        __init3() {
          this.events = [];
        }
        __init4() {
          this._droppedAttributesCount = 0;
        }
        __init5() {
          this._droppedEventsCount = 0;
        }
        __init6() {
          this._droppedLinksCount = 0;
        }
        __init7() {
          this._attributesCount = 0;
        }
        __init8() {
          this.status = { code: k.UNSET };
        }
        __init9() {
          this.endTime = [0, 0];
        }
        __init10() {
          this._ended = false;
        }
        __init11() {
          this._duration = [-1, -1];
        }
        constructor(e10) {
          rG.prototype.__init.call(this), rG.prototype.__init2.call(this), rG.prototype.__init3.call(this), rG.prototype.__init4.call(this), rG.prototype.__init5.call(this), rG.prototype.__init6.call(this), rG.prototype.__init7.call(this), rG.prototype.__init8.call(this), rG.prototype.__init9.call(this), rG.prototype.__init10.call(this), rG.prototype.__init11.call(this);
          const t10 = Date.now();
          if (this._spanContext = e10.spanContext, this._performanceStartTime = rf.now(), this._performanceOffset = t10 - (this._performanceStartTime + rf.timeOrigin), this._startTimeProvided = null != e10.startTime, this._spanLimits = e10.spanLimits, this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit ?? 0, this._spanProcessor = e10.spanProcessor, this.name = e10.name, this.parentSpanContext = e10.parentSpanContext, this.kind = e10.kind, e10.links) for (const t11 of e10.links) this.addLink(t11);
          this.startTime = this._getTime(e10.startTime ?? t10), this.resource = e10.resource, this.instrumentationScope = e10.scope, this._recordEndMetrics = e10.recordEndMetrics, null != e10.attributes && this.setAttributes(e10.attributes), this._spanProcessor.onStart(this, e10.context);
        }
        spanContext() {
          return this._spanContext;
        }
        setAttribute(e10, t10) {
          if (null == t10 || this._isSpanEnded()) return this;
          if (0 === e10.length) return nZ.warn(`Invalid attribute key: ${e10}`), this;
          if (!n7(t10)) return nZ.warn(`Invalid attribute value set for key: ${e10}`), this;
          let { attributeCountLimit: n10 } = this._spanLimits, r10 = !Object.prototype.hasOwnProperty.call(this.attributes, e10);
          return void 0 !== n10 && this._attributesCount >= n10 && r10 ? this._droppedAttributesCount++ : (this.attributes[e10] = this._truncateToSize(t10), r10 && this._attributesCount++), this;
        }
        setAttributes(e10) {
          for (let t10 in e10) Object.prototype.hasOwnProperty.call(e10, t10) && this.setAttribute(t10, e10[t10]);
          return this;
        }
        addEvent(e10, t10, n10) {
          if (this._isSpanEnded()) return this;
          let { eventCountLimit: r10 } = this._spanLimits;
          if (0 === r10) return nZ.warn("No events allowed."), this._droppedEventsCount++, this;
          void 0 !== r10 && this.events.length >= r10 && (0 === this._droppedEventsCount && nZ.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), rS(t10) && (rS(n10) || (n10 = t10), t10 = void 0);
          let s10 = n8(t10), { attributePerEventCountLimit: i2 } = this._spanLimits, a2 = {}, o2 = 0, l2 = 0;
          for (let e11 in s10) {
            if (!Object.prototype.hasOwnProperty.call(s10, e11)) continue;
            let t11 = s10[e11];
            if (void 0 !== i2 && l2 >= i2) {
              o2++;
              continue;
            }
            a2[e11] = this._truncateToSize(t11), l2++;
          }
          return this.events.push({ name: e10, attributes: a2, time: this._getTime(n10), droppedAttributesCount: o2 }), this;
        }
        addLink(e10) {
          if (this._isSpanEnded()) return this;
          let { linkCountLimit: t10 } = this._spanLimits;
          if (0 === t10) return this._droppedLinksCount++, this;
          void 0 !== t10 && this.links.length >= t10 && (0 === this._droppedLinksCount && nZ.debug("Dropping extra links."), this.links.shift(), this._droppedLinksCount++);
          let { attributePerLinkCountLimit: n10 } = this._spanLimits, r10 = n8(e10.attributes), s10 = {}, i2 = 0, a2 = 0;
          for (let e11 in r10) {
            if (!Object.prototype.hasOwnProperty.call(r10, e11)) continue;
            let t11 = r10[e11];
            if (void 0 !== n10 && a2 >= n10) {
              i2++;
              continue;
            }
            s10[e11] = this._truncateToSize(t11), a2++;
          }
          let o2 = { context: e10.context };
          return a2 > 0 && (o2.attributes = s10), i2 > 0 && (o2.droppedAttributesCount = i2), this.links.push(o2), this;
        }
        addLinks(e10) {
          for (let t10 of e10) this.addLink(t10);
          return this;
        }
        setStatus(e10) {
          if (this._isSpanEnded() || e10.code === k.UNSET || this.status.code === k.OK) return this;
          let t10 = { code: e10.code };
          return e10.code === k.ERROR && ("string" == typeof e10.message ? t10.message = e10.message : null != e10.message && nZ.warn(`Dropping invalid status.message of type '${typeof e10.message}', expected 'string'`)), this.status = t10, this;
        }
        updateName(e10) {
          return this._isSpanEnded() || (this.name = e10), this;
        }
        end(e10) {
          var t10, n10;
          let r10, s10;
          this._isSpanEnded() ? nZ.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`) : (this.endTime = this._getTime(e10), this._duration = (t10 = this.startTime, r10 = (n10 = this.endTime)[0] - t10[0], (s10 = n10[1] - t10[1]) < 0 && (r10 -= 1, s10 += 1e9), [r10, s10]), this._duration[0] < 0 && (nZ.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && nZ.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`), this._droppedLinksCount > 0 && nZ.warn(`Dropped ${this._droppedLinksCount} links because linkCountLimit reached`), this._spanProcessor.onEnding && this._spanProcessor.onEnding(this), this._recordEndMetrics?.(), this._ended = true, this._spanProcessor.onEnd(this));
        }
        _getTime(e10) {
          if ("number" == typeof e10 && e10 <= rf.now()) {
            var t10;
            return t10 = e10 + this._performanceOffset, rE(rg(rf.timeOrigin), rg("number" == typeof t10 ? t10 : rf.now()));
          }
          if ("number" == typeof e10) return rg(e10);
          if (e10 instanceof Date) return rg(e10.getTime());
          if (rm(e10)) return e10;
          if (this._startTimeProvided) return rg(Date.now());
          let n10 = rf.now() - this._performanceStartTime;
          return rE(this.startTime, rg(n10));
        }
        isRecording() {
          return false === this._ended;
        }
        recordException(e10, t10) {
          let n10 = {};
          "string" == typeof e10 ? n10[ra] = e10 : e10 && (e10.code ? n10[ro] = e10.code.toString() : e10.name && (n10[ro] = e10.name), e10.message && (n10[ra] = e10.message), e10.stack && (n10["exception.stacktrace"] = e10.stack)), n10[ro] || n10[ra] ? this.addEvent("exception", n10, t10) : nZ.warn(`Failed to record an exception ${e10}`);
        }
        get duration() {
          return this._duration;
        }
        get ended() {
          return this._ended;
        }
        get droppedAttributesCount() {
          return this._droppedAttributesCount;
        }
        get droppedEventsCount() {
          return this._droppedEventsCount;
        }
        get droppedLinksCount() {
          return this._droppedLinksCount;
        }
        _isSpanEnded() {
          if (this._ended) {
            let e10 = Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
            nZ.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, e10);
          }
          return this._ended;
        }
        _truncateToLimitUtil(e10, t10) {
          return e10.length <= t10 ? e10 : e10.substring(0, t10);
        }
        _truncateToSize(e10) {
          let t10 = this._attributeValueLengthLimit;
          return t10 <= 0 ? (nZ.warn(`Attribute value limit must be positive, got ${t10}`), e10) : "string" == typeof e10 ? this._truncateToLimitUtil(e10, t10) : Array.isArray(e10) ? e10.map((e11) => "string" == typeof e11 ? this._truncateToLimitUtil(e11, t10) : e11) : e10;
        }
      }
      (L = G || (G = {}))[L.NOT_RECORD = 0] = "NOT_RECORD", L[L.RECORD = 1] = "RECORD", L[L.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
      class rj {
        shouldSample() {
          return { decision: G.NOT_RECORD };
        }
        toString() {
          return "AlwaysOffSampler";
        }
      }
      class rY {
        shouldSample() {
          return { decision: G.RECORD_AND_SAMPLED };
        }
        toString() {
          return "AlwaysOnSampler";
        }
      }
      class rV {
        constructor(e10) {
          this._root = e10.root, this._root || (rt(Error("ParentBasedSampler must have a root sampler configured")), this._root = new rY()), this._remoteParentSampled = e10.remoteParentSampled ?? new rY(), this._remoteParentNotSampled = e10.remoteParentNotSampled ?? new rj(), this._localParentSampled = e10.localParentSampled ?? new rY(), this._localParentNotSampled = e10.localParentNotSampled ?? new rj();
        }
        shouldSample(e10, t10, n10, r10, s10, i2) {
          let a2 = ta.getSpanContext(e10);
          return a2 && e9(a2) ? a2.isRemote ? a2.traceFlags & B.SAMPLED ? this._remoteParentSampled.shouldSample(e10, t10, n10, r10, s10, i2) : this._remoteParentNotSampled.shouldSample(e10, t10, n10, r10, s10, i2) : a2.traceFlags & B.SAMPLED ? this._localParentSampled.shouldSample(e10, t10, n10, r10, s10, i2) : this._localParentNotSampled.shouldSample(e10, t10, n10, r10, s10, i2) : this._root.shouldSample(e10, t10, n10, r10, s10, i2);
        }
        toString() {
          return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
        }
      }
      class rH {
        constructor(e10 = 0) {
          this._ratio = this._normalize(e10), this._upperBound = Math.floor(4294967295 * this._ratio);
        }
        shouldSample(e10, t10) {
          return { decision: e3(t10) && this._accumulate(t10) < this._upperBound ? G.RECORD_AND_SAMPLED : G.NOT_RECORD };
        }
        toString() {
          return `TraceIdRatioBased{${this._ratio}}`;
        }
        _normalize(e10) {
          return "number" != typeof e10 || isNaN(e10) ? 0 : e10 >= 1 ? 1 : e10 <= 0 ? 0 : e10;
        }
        _accumulate(e10) {
          let t10 = 0;
          for (let n10 = 0; n10 < e10.length / 8; n10++) {
            let r10 = 8 * n10;
            t10 = (t10 ^ parseInt(e10.slice(r10, r10 + 8), 16)) >>> 0;
          }
          return t10;
        }
      }
      function rz() {
        return { sampler: rW(), forceFlushTimeoutMillis: 3e4, generalLimits: { attributeValueLengthLimit: rn("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0, attributeCountLimit: rn("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128 }, spanLimits: { attributeValueLengthLimit: rn("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0, attributeCountLimit: rn("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128, linkCountLimit: rn("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128, eventCountLimit: rn("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128, attributePerEventCountLimit: rn("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128, attributePerLinkCountLimit: rn("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128 } };
      }
      function rW() {
        let e10 = function(e11) {
          let t10 = process.env[e11];
          if (null != t10 && "" !== t10.trim()) return t10;
        }("OTEL_TRACES_SAMPLER") ?? j.ParentBasedAlwaysOn;
        switch (e10) {
          case j.AlwaysOn:
            return new rY();
          case j.AlwaysOff:
            return new rj();
          case j.ParentBasedAlwaysOn:
            return new rV({ root: new rY() });
          case j.ParentBasedAlwaysOff:
            return new rV({ root: new rj() });
          case j.TraceIdRatio:
            return new rH(rK());
          case j.ParentBasedTraceIdRatio:
            return new rV({ root: new rH(rK()) });
          default:
            return nZ.error(`OTEL_TRACES_SAMPLER value "${e10}" invalid, defaulting to "${j.ParentBasedAlwaysOn}".`), new rV({ root: new rY() });
        }
      }
      function rK() {
        let e10 = rn("OTEL_TRACES_SAMPLER_ARG");
        return null == e10 ? (nZ.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1."), 1) : e10 < 0 || e10 > 1 ? (nZ.error(`OTEL_TRACES_SAMPLER_ARG=${e10} was given, but it is out of range ([0..1]), defaulting to 1.`), 1) : e10;
      }
      (D = j || (j = {})).AlwaysOff = "always_off", D.AlwaysOn = "always_on", D.ParentBasedAlwaysOff = "parentbased_always_off", D.ParentBasedAlwaysOn = "parentbased_always_on", D.ParentBasedTraceIdRatio = "parentbased_traceidratio", D.TraceIdRatio = "traceidratio";
      let rq = 1 / 0;
      class rJ {
        constructor() {
          rJ.prototype.__init.call(this), rJ.prototype.__init2.call(this);
        }
        __init() {
          this.generateTraceId = rZ(16);
        }
        __init2() {
          this.generateSpanId = rZ(8);
        }
      }
      let rX = tD.Buffer.allocUnsafe(16);
      function rZ(e10) {
        return function() {
          for (let t10 = 0; t10 < e10 / 4; t10++) rX.writeUInt32BE(4294967296 * Math.random() >>> 0, 4 * t10);
          for (let t10 = 0; t10 < e10; t10++) if (rX[t10] > 0) break;
          else t10 === e10 - 1 && (rX[e10 - 1] = 1);
          return rX.toString("hex", 0, e10);
        };
      }
      let rQ = "otel.span.sampling_result";
      class r0 {
        constructor(e10) {
          this.startedSpans = e10.createCounter("otel.sdk.span.started", { unit: "{span}", description: "The number of created spans." }), this.liveSpans = e10.createUpDownCounter("otel.sdk.span.live", { unit: "{span}", description: "The number of currently live spans." });
        }
        startSpan(e10, t10) {
          var n10;
          let r10 = function(e11) {
            switch (e11) {
              case G.RECORD_AND_SAMPLED:
                return "RECORD_AND_SAMPLE";
              case G.RECORD:
                return "RECORD_ONLY";
              case G.NOT_RECORD:
                return "DROP";
            }
          }(t10);
          if (this.startedSpans.add(1, { "otel.span.parent.origin": (n10 = e10) ? n10.isRemote ? "remote" : "local" : "none", [rQ]: r10 }), t10 === G.NOT_RECORD) return () => {
          };
          let s10 = { [rQ]: r10 };
          return this.liveSpans.add(1, s10), () => {
            this.liveSpans.add(-1, s10);
          };
        }
      }
      class r1 {
        constructor(e10, t10, n10, r10) {
          const s10 = function(e11) {
            let t11 = { sampler: rW() }, n11 = rz(), r11 = Object.assign({}, n11, t11, e11);
            return r11.generalLimits = Object.assign({}, n11.generalLimits, e11.generalLimits || {}), r11.spanLimits = Object.assign({}, n11.spanLimits, e11.spanLimits || {}), r11;
          }(t10);
          this._sampler = s10.sampler, this._generalLimits = s10.generalLimits, this._spanLimits = s10.spanLimits, this._idGenerator = t10.idGenerator || new rJ(), this._resource = n10, this._spanProcessor = r10, this.instrumentationScope = e10;
          const i2 = s10.meterProvider ? s10.meterProvider.getMeter("@opentelemetry/sdk-trace", "2.6.1") : nV;
          this._tracerMetrics = new r0(i2);
        }
        startSpan(e10, t10 = {}, n10 = I.active()) {
          let r10, s10, i2;
          t10.root && (n10 = ta.deleteSpan(n10));
          let a2 = ta.getSpan(n10);
          if (n3(n10)) return nZ.debug("Instrumentation suppressed, returning Noop Span"), ta.wrapSpanContext(eK);
          let o2 = a2?.spanContext(), l2 = this._idGenerator.generateSpanId();
          o2 && ta.isSpanContextValid(o2) ? (s10 = o2.traceId, i2 = o2.traceState, r10 = o2) : s10 = this._idGenerator.generateTraceId();
          let c2 = t10.kind ?? x.INTERNAL, u2 = (t10.links ?? []).map((e11) => ({ context: e11.context, attributes: n8(e11.attributes) })), p2 = n8(t10.attributes), d2 = this._sampler.shouldSample(n10, s10, e10, c2, p2, u2), _2 = this._tracerMetrics.startSpan(o2, d2.decision);
          i2 = d2.traceState ?? i2;
          let h2 = { traceId: s10, spanId: l2, traceFlags: d2.decision === F.RECORD_AND_SAMPLED ? B.SAMPLED : B.NONE, traceState: i2 };
          if (d2.decision === F.NOT_RECORD) return nZ.debug("Recording is off, propagating context in a non-recording span"), ta.wrapSpanContext(h2);
          let f2 = n8(Object.assign(p2, d2.attributes));
          return new rG({ resource: this._resource, scope: this.instrumentationScope, context: n10, spanContext: h2, name: e10, kind: c2, links: u2, parentSpanContext: r10, attributes: f2, startTime: t10.startTime, spanProcessor: this._spanProcessor, spanLimits: this._spanLimits, recordEndMetrics: _2 });
        }
        startActiveSpan(e10, t10, n10, r10) {
          let s10, i2, a2;
          if (arguments.length < 2) return;
          2 == arguments.length ? a2 = t10 : 3 == arguments.length ? (s10 = t10, a2 = n10) : (s10 = t10, i2 = n10, a2 = r10);
          let o2 = i2 ?? I.active(), l2 = this.startSpan(e10, s10, o2), c2 = ta.setSpan(o2, l2);
          return I.with(c2, a2, void 0, l2);
        }
        getGeneralLimits() {
          return this._generalLimits;
        }
        getSpanLimits() {
          return this._spanLimits;
        }
      }
      class r2 {
        constructor(e10) {
          this._spanProcessors = e10;
        }
        forceFlush() {
          let e10 = [];
          for (let t10 of this._spanProcessors) e10.push(t10.forceFlush());
          return new Promise((t10) => {
            Promise.all(e10).then(() => {
              t10();
            }).catch((e11) => {
              rt(e11 || Error("MultiSpanProcessor: forceFlush failed")), t10();
            });
          });
        }
        onStart(e10, t10) {
          for (let n10 of this._spanProcessors) n10.onStart(e10, t10);
        }
        onEnding(e10) {
          for (let t10 of this._spanProcessors) t10.onEnding && t10.onEnding(e10);
        }
        onEnd(e10) {
          for (let t10 of this._spanProcessors) t10.onEnd(e10);
        }
        shutdown() {
          let e10 = [];
          for (let t10 of this._spanProcessors) e10.push(t10.shutdown());
          return new Promise((t10, n10) => {
            Promise.all(e10).then(() => {
              t10();
            }, n10);
          });
        }
      }
      (P = Y || (Y = {}))[P.resolved = 0] = "resolved", P[P.timeout = 1] = "timeout", P[P.error = 2] = "error", P[P.unresolved = 3] = "unresolved";
      class r4 {
        __init() {
          this._tracers = /* @__PURE__ */ new Map();
        }
        constructor(e10 = {}) {
          r4.prototype.__init.call(this);
          const t10 = function(...e11) {
            let t11 = e11.shift(), n10 = /* @__PURE__ */ new WeakMap();
            for (; e11.length > 0; ) t11 = function e12(t12, n11, r11 = 0, s10) {
              let i2;
              if (!(r11 > 20)) {
                if (r11++, rF(t12) || rF(n11) || rk(n11)) i2 = rM(n11);
                else if (rx(t12)) {
                  if (i2 = t12.slice(), rx(n11)) for (let e13 = 0, t13 = n11.length; e13 < t13; e13++) i2.push(rM(n11[e13]));
                  else if (r$(n11)) {
                    let e13 = Object.keys(n11);
                    for (let t13 = 0, r12 = e13.length; t13 < r12; t13++) {
                      let r13 = e13[t13];
                      i2[r13] = rM(n11[r13]);
                    }
                  }
                } else if (r$(t12)) if (r$(n11)) {
                  var a2, o2;
                  if (a2 = t12, o2 = n11, !(rU(a2) && rU(o2))) return n11;
                  i2 = Object.assign({}, t12);
                  let l2 = Object.keys(n11);
                  for (let a3 = 0, o3 = l2.length; a3 < o3; a3++) {
                    let o4 = l2[a3], c2 = n11[o4];
                    if (rF(c2)) void 0 === c2 ? delete i2[o4] : i2[o4] = c2;
                    else {
                      let a4 = i2[o4];
                      if (rB(t12, o4, s10) || rB(n11, o4, s10)) delete i2[o4];
                      else {
                        if (r$(a4) && r$(c2)) {
                          let e13 = s10.get(a4) || [], r12 = s10.get(c2) || [];
                          e13.push({ obj: t12, key: o4 }), r12.push({ obj: n11, key: o4 }), s10.set(a4, e13), s10.set(c2, r12);
                        }
                        i2[o4] = e12(i2[o4], c2, r11, s10);
                      }
                    }
                  }
                } else i2 = n11;
                return i2;
              }
            }(t11, e11.shift(), 0, n10);
            return t11;
          }({}, rz(), function(e11) {
            let t11 = Object.assign({}, e11.spanLimits);
            return t11.attributeCountLimit = e11.spanLimits?.attributeCountLimit ?? e11.generalLimits?.attributeCountLimit ?? rn("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? rn("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128, t11.attributeValueLengthLimit = e11.spanLimits?.attributeValueLengthLimit ?? e11.generalLimits?.attributeValueLengthLimit ?? rn("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? rn("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? rq, Object.assign({}, e11, { spanLimits: t11 });
          }(e10));
          this._resource = t10.resource ?? function() {
            var e11;
            return e11 = { "service.name": function() {
              if (void 0 === n) try {
                let e12 = globalThis.process.argv0;
                n = e12 ? `unknown_service:${e12}` : "unknown_service";
              } catch {
                n = "unknown_service";
              }
              return n;
            }(), [eE]: tN[eE], [eT]: tN[eT], [ev]: tN[ev] }, n0.FromAttributeList(Object.entries(e11), void 0);
          }(), this._config = Object.assign({}, t10, { resource: this._resource });
          const r10 = [];
          e10.spanProcessors?.length && r10.push(...e10.spanProcessors), this._activeSpanProcessor = new r2(r10);
        }
        getTracer(e10, t10, n10) {
          let r10 = `${e10}@${t10 || ""}:${n10?.schemaUrl || ""}`;
          return this._tracers.has(r10) || this._tracers.set(r10, new r1({ name: e10, version: t10, schemaUrl: n10?.schemaUrl }, this._config, this._resource, this._activeSpanProcessor)), this._tracers.get(r10);
        }
        forceFlush() {
          let e10 = this._config.forceFlushTimeoutMillis, t10 = this._activeSpanProcessor._spanProcessors.map((t11) => new Promise((n10) => {
            let r10, s10 = setTimeout(() => {
              n10(Error(`Span processor did not completed within timeout period of ${e10} ms`)), r10 = Y.timeout;
            }, e10);
            t11.forceFlush().then(() => {
              clearTimeout(s10), r10 !== Y.timeout && n10(r10 = Y.resolved);
            }).catch((e11) => {
              clearTimeout(s10), r10 = Y.error, n10(e11);
            });
          }));
          return new Promise((e11, n10) => {
            Promise.all(t10).then((t11) => {
              let r10 = t11.filter((e12) => e12 !== Y.resolved);
              r10.length > 0 ? n10(r10) : e11();
            }).catch((e12) => n10([e12]));
          });
        }
        shutdown() {
          return this._activeSpanProcessor.shutdown();
        }
      }
      let r5 = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, r3 = "sentry.parentIsRemote";
      function r9(e10) {
        return "parentSpanId" in e10 ? e10.parentSpanId : "parentSpanContext" in e10 ? e10.parentSpanContext?.spanId : void 0;
      }
      function r6(e10) {
        return !!e10.attributes && "object" == typeof e10.attributes;
      }
      let r8 = "sentry-trace", r7 = "baggage", se = "sentry.dsc", st = "sentry.sampled_not_recording", sn = "sentry.url", sr = "sentry.ignored", ss = "sentry.segment_ignored", si = a("sentry_scopes"), sa = a("sentry_fork_isolation_scope"), so = a("sentry_fork_set_scope"), sl = a("sentry_fork_set_isolation_scope"), sc = "_scopeContext";
      function su(e10) {
        return e10.getValue(si);
      }
      function sp(e10, t10) {
        return e10.setValue(si, t10);
      }
      function sd(e10) {
        return (0, eR.derefWeakRef)(e10[sc]);
      }
      function s_(e10) {
        let { traceFlags: t10, traceState: n10 } = e10, r10 = !!n10 && "1" === n10.get(st);
        if (t10 === B.SAMPLED) return true;
        if (r10) return false;
        let s10 = n10 ? n10.get(se) : void 0, i2 = s10 ? (0, eb.baggageHeaderToDynamicSamplingContext)(s10) : void 0;
        return i2?.sampled === "true" || i2?.sampled !== "false" && void 0;
      }
      function sh(e10, t10, n10) {
        let r10 = t10[rl] || t10[rr];
        if (r10) return function({ name: e11, kind: t11, attributes: n11 }, r11) {
          var s11, i3;
          let a3, o3, l2, c2, u2, p2, d2, _2 = ["http"];
          switch (t11) {
            case x.CLIENT:
              _2.push("client");
              break;
            case x.SERVER:
              _2.push("server");
          }
          n11["sentry.http.prefetch"] && _2.push("prefetch");
          let { urlPath: h2, url: f2, query: g2, fragment: m2, hasRoute: S2 } = (s11 = n11, i3 = t11, a3 = s11["http.target"], o3 = s11[rs] || s11[r_], l2 = s11["http.route"], u2 = (c2 = "string" == typeof o3 ? ef(o3) : void 0) ? em(c2) : void 0, p2 = c2?.search || void 0, d2 = c2?.hash || void 0, "string" == typeof l2 ? { urlPath: l2, url: u2, query: p2, fragment: d2, hasRoute: true } : i3 === x.SERVER && "string" == typeof a3 ? { urlPath: eg(a3), url: u2, query: p2, fragment: d2, hasRoute: false } : c2 ? { urlPath: u2, url: u2, query: p2, fragment: d2, hasRoute: false } : "string" == typeof a3 ? { urlPath: eg(a3), url: u2, query: p2, fragment: d2, hasRoute: false } : { urlPath: void 0, url: u2, query: p2, fragment: d2, hasRoute: false });
          if (!h2) return { ...sg(e11, n11), op: _2.join(".") };
          let E2 = n11["sentry.graphql.operation"], T2 = `${r11} ${h2}`, v2 = E2 ? `${T2} (${function(e12) {
            if (Array.isArray(e12)) {
              let t12 = e12.slice().sort();
              return t12.length <= 5 ? t12.join(", ") : `${t12.slice(0, 5).join(", ")}, +${t12.length - 5}`;
            }
            return `${e12}`;
          }(E2)})` : T2, R2 = {};
          f2 && (R2.url = f2), g2 && (R2["http.query"] = g2), m2 && (R2["http.fragment"] = m2);
          let y2 = t11 === x.CLIENT || t11 === x.SERVER, I2 = n11[ec.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] || "manual", A2 = !`${I2}`.startsWith("auto"), b2 = "custom" === n11[ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE], O2 = n11[ec.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME], { description: C2, source: N2 } = b2 || null != O2 || !y2 && A2 ? sg(e11, n11) : { description: v2, source: S2 || "/" === h2 ? "route" : "url" };
          return { op: _2.join("."), description: C2, source: N2, data: R2 };
        }({ attributes: t10, name: e10, kind: n10 }, r10);
        let s10 = t10["db.system.name"] || t10["db.system"], i2 = "string" == typeof t10[ec.SEMANTIC_ATTRIBUTE_SENTRY_OP] && t10[ec.SEMANTIC_ATTRIBUTE_SENTRY_OP].startsWith("cache.");
        if (s10 && !i2) return function({ attributes: e11, name: t11 }) {
          let n11 = e11[ec.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
          if ("string" == typeof n11) return { op: "db", description: n11, source: e11[ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || "custom" };
          if ("custom" === e11[ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]) return { op: "db", description: t11, source: "custom" };
          let r11 = e11["db.statement"];
          return { op: "db", description: r11 ? r11.toString() : t11, source: "task" };
        }({ attributes: t10, name: e10 });
        let a2 = "custom" === t10[ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] ? "custom" : "route";
        if (t10["rpc.service"]) return { ...sg(e10, t10, "route"), op: "rpc" };
        if (t10["messaging.system"]) return { ...sg(e10, t10, a2), op: "message" };
        let o2 = t10["faas.trigger"];
        return o2 ? { ...sg(e10, t10, a2), op: o2.toString() } : { op: void 0, description: e10, source: "custom" };
      }
      function sf(e10) {
        let t10 = r6(e10) ? e10.attributes : {};
        return sh(e10.name ? e10.name : "<unknown>", t10, "number" == typeof e10.kind ? e10.kind : x.INTERNAL);
      }
      function sg(e10, t10, n10 = "custom") {
        let r10 = t10[ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || n10, s10 = t10[ec.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
        return s10 && "string" == typeof s10 ? { description: s10, source: r10 } : { description: e10, source: r10 };
      }
      function sm() {
        return ta.getActiveSpan();
      }
      function sS({ dsc: e10, sampled: t10 }) {
        let n10 = e10 ? (0, eb.dynamicSamplingContextToSentryBaggageHeader)(e10) : void 0, r10 = new rb(), s10 = n10 ? r10.set(se, n10) : r10;
        return false === t10 ? s10.set(st, "1") : s10;
      }
      let sE = /* @__PURE__ */ new Set();
      function sT(e10) {
        sE.add(e10);
      }
      class sv extends n6 {
        constructor() {
          super(), sT("SentryPropagator"), this._urlMatchesTargetsMap = new eC(100);
        }
        inject(e10, t10, n10) {
          if (n3(e10)) {
            r5 && z.debug.log("[Tracing] Not injecting trace data for url because tracing is suppressed.");
            return;
          }
          let r10 = ta.getSpan(e10), s10 = r10 && function(e11) {
            let t11 = (0, er.spanToJSON)(e11).data, n11 = t11[rs] || t11[r_];
            if ("string" == typeof n11) return n11;
            let r11 = e11.spanContext().traceState?.get(sn);
            if (r11) return r11;
          }(r10), { tracePropagationTargets: i2, propagateTraceparent: a2 } = (0, ep.getClient)()?.getOptions() || {};
          if (!function(e11, t11, n11) {
            if ("string" != typeof e11 || !t11) return true;
            let r11 = n11?.get(e11);
            if (void 0 !== r11) return V.DEBUG_BUILD && !r11 && z.debug.log(eL, e11), r11;
            let s11 = (0, eN.stringMatchesSomePattern)(e11, t11);
            return n11?.set(e11, s11), V.DEBUG_BUILD && !s11 && z.debug.log(eL, e11), s11;
          }(s10, i2, this._urlMatchesTargetsMap)) {
            r5 && z.debug.log("[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:", s10);
            return;
          }
          let o2 = function(e11) {
            try {
              let t11 = e11[r7];
              return Array.isArray(t11) ? t11.join(",") : t11;
            } catch {
              return;
            }
          }(t10), l2 = function(e11) {
            try {
              return e11[r8];
            } catch {
              return;
            }
          }(t10), c2 = tv.getBaggage(e10) || tv.createBaggage({}), { dynamicSamplingContext: u2, traceId: p2, spanId: d2, sampled: _2 } = sR(e10);
          if (o2) {
            let e11 = (0, eb.parseBaggageHeader)(o2);
            e11 && Object.entries(e11).forEach(([e12, t11]) => {
              !l2 && e12.startsWith(eb.SENTRY_BAGGAGE_KEY_PREFIX) || (c2 = c2.setEntry(e12, { value: t11 }));
            });
          }
          !l2 && u2 && (c2 = Object.entries(u2).reduce((e11, [t11, n11]) => n11 ? e11.setEntry(`${eb.SENTRY_BAGGAGE_KEY_PREFIX}${t11}`, { value: n11 }) : e11, c2)), !l2 && p2 && p2 !== eW && (n10.set(t10, r8, (0, eD.generateSentryTraceHeader)(p2, d2, _2)), a2 && n10.set(t10, "traceparent", (0, eD.generateTraceparentHeader)(p2, d2, _2))), super.inject(tv.setBaggage(e10, c2), t10, n10);
        }
        extract(e10, t10, n10) {
          let r10 = n10.get(t10, r8), s10 = n10.get(t10, r7);
          return sI(sy(e10, { sentryTrace: r10 ? Array.isArray(r10) ? r10[0] : r10 : void 0, baggage: s10 }));
        }
        fields() {
          return [r8, r7, "traceparent"];
        }
      }
      function sR(e10, t10 = {}) {
        let n10 = ta.getSpan(e10);
        if (n10?.spanContext().isRemote) {
          let e11 = n10.spanContext();
          return { dynamicSamplingContext: (0, eP.getDynamicSamplingContextFromSpan)(n10), traceId: e11.traceId, spanId: void 0, sampled: s_(e11) };
        }
        if (n10) {
          let e11 = n10.spanContext();
          return { dynamicSamplingContext: (0, eP.getDynamicSamplingContextFromSpan)(n10), traceId: e11.traceId, spanId: e11.spanId, sampled: s_(e11) };
        }
        let r10 = t10.scope || su(e10)?.scope || (0, ep.getCurrentScope)(), s10 = t10.client || (0, ep.getClient)(), i2 = r10.getPropagationContext();
        return { dynamicSamplingContext: s10 ? (0, eP.getDynamicSamplingContextFromScope)(s10, r10) : void 0, traceId: i2.traceId, spanId: i2.propagationSpanId, sampled: i2.sampled };
      }
      function sy(e10, { sentryTrace: t10, baggage: n10 }) {
        let { traceId: r10, parentSpanId: s10, sampled: i2, dsc: a2 } = (0, eD.propagationContextFromHeaders)(t10, n10), o2 = (0, ep.getClient)(), l2 = (0, eb.baggageHeaderToDynamicSamplingContext)(n10);
        if (!s10 || o2 && !(0, eD.shouldContinueTrace)(o2, l2?.org_id)) return e10;
        let c2 = function({ spanId: e11, traceId: t11, sampled: n11, dsc: r11 }) {
          let s11 = sS({ dsc: r11, sampled: n11 });
          return { traceId: t11, spanId: e11, isRemote: true, traceFlags: n11 ? B.SAMPLED : B.NONE, traceState: s11 };
        }({ traceId: r10, spanId: s10, sampled: i2, dsc: a2 });
        return ta.setSpanContext(e10, c2);
      }
      function sI(e10) {
        let t10 = su(e10);
        return sp(e10, { scope: t10 ? t10.scope : (0, ep.getCurrentScope)().clone(), isolationScope: t10 ? t10.isolationScope : (0, ep.getIsolationScope)() });
      }
      function sA(e10, t10, n10) {
        let r10 = sL(), { name: s10, parentSpan: i2 } = e10;
        return sx(i2)(() => {
          let i3 = sU(e10.scope, e10.forceTransaction), a2 = e10.onlyIfParent && !ta.getSpan(i3), o2 = a2 ? n5(i3) : i3;
          a2 && (0, ep.getClient)()?.recordDroppedEvent("no_parent_span", "span");
          let l2 = sD(e10);
          if (!(0, eO.hasSpansEnabled)()) {
            let e11 = n3(o2) ? o2 : n5(o2);
            return I.with(e11, () => r10.startActiveSpan(s10, l2, e11, (e12) => (sw(e12), I.with(i3, () => (0, eM.handleCallbackErrors)(() => t10(e12), () => {
              void 0 === (0, er.spanToJSON)(e12).status && e12.setStatus({ code: k.ERROR });
            }, n10 ? () => e12.end() : void 0)))));
          }
          return r10.startActiveSpan(s10, l2, o2, (e11) => (sw(e11), (0, eM.handleCallbackErrors)(() => t10(e11), () => {
            void 0 === (0, er.spanToJSON)(e11).status && e11.setStatus({ code: k.ERROR });
          }, n10 ? () => e11.end() : void 0)));
        });
      }
      function sb(e10, t10) {
        return sA(e10, t10, true);
      }
      function sO(e10, t10) {
        return sA(e10, (e11) => t10(e11, () => e11.end()), false);
      }
      function sC(e10) {
        let t10 = sL(), { name: n10, parentSpan: r10 } = e10;
        return sx(r10)(() => {
          let r11 = sU(e10.scope, e10.forceTransaction), s10 = e10.onlyIfParent && !ta.getSpan(r11), i2 = s10 ? n5(r11) : r11;
          s10 && (0, ep.getClient)()?.recordDroppedEvent("no_parent_span", "span");
          let a2 = sD(e10);
          (0, eO.hasSpansEnabled)() || (i2 = n3(i2) ? i2 : n5(i2));
          let o2 = t10.startSpan(n10, a2, i2);
          return sw(o2), o2;
        });
      }
      function sN(e10, t10) {
        let n10 = e10 ? ta.setSpan(I.active(), e10) : ta.deleteSpan(I.active());
        return I.with(n10, () => t10((0, ep.getCurrentScope)()));
      }
      function sL() {
        let e10 = (0, ep.getClient)();
        return e10?.tracer || ta.getTracer("@sentry/opentelemetry", eo.SDK_VERSION);
      }
      function sD(e10) {
        let { startTime: t10, attributes: n10, kind: r10, op: s10, links: i2 } = e10, a2 = "number" == typeof t10 ? sP(t10) : t10;
        return { attributes: s10 ? { [ec.SEMANTIC_ATTRIBUTE_SENTRY_OP]: s10, ...n10 } : n10, kind: r10, links: i2, startTime: a2 };
      }
      function sP(e10) {
        return e10 < 9999999999 ? 1e3 * e10 : e10;
      }
      function sw(e10) {
        let t10 = e10.end.bind(e10);
        e10.end = (e11) => t10("number" == typeof e11 ? sP(e11) : e11);
      }
      function sU(e10, t10) {
        let n10 = function(e11) {
          if (e11) {
            let t11 = sd(e11);
            if (t11) return t11;
          }
          return I.active();
        }(e10), r10 = ta.getSpan(n10);
        if (!r10 || !t10) return n10;
        let s10 = ta.deleteSpan(n10), { spanId: i2, traceId: a2 } = r10.spanContext(), o2 = s_(r10.spanContext()), l2 = (0, er.getRootSpan)(r10), c2 = sS({ dsc: (0, eP.getDynamicSamplingContextFromSpan)(l2), sampled: o2 }), u2 = { traceId: a2, spanId: i2, isRemote: true, traceFlags: o2 ? B.SAMPLED : B.NONE, traceState: c2 };
        return ta.setSpanContext(s10, u2);
      }
      function sM(e10, t10) {
        var n10;
        let r10;
        return n10 = I.active(), r10 = sI(sy(n10, e10)), I.with(r10, t10);
      }
      function sB(e10) {
        let t10 = (0, ew.generateTraceId)(), n10 = { traceId: t10, spanId: (0, ew.generateSpanId)(), isRemote: true, traceFlags: B.NONE }, r10 = ta.setSpanContext(I.active(), n10);
        return I.with(r10, () => ((0, ep.getCurrentScope)().setPropagationContext({ traceId: t10, sampleRand: (0, eU.safeMathRandom)() }), e10()));
      }
      function sx(e10) {
        return void 0 !== e10 ? (t10) => sN(e10, t10) : (e11) => e11();
      }
      function sk(e10) {
        let t10 = n5(I.active());
        return I.with(t10, e10);
      }
      function s$({ span: e10, scope: t10, client: n10, propagateTraceparent: r10 } = {}) {
        let s10 = (t10 && sd(t10)) ?? I.active();
        if (e10) {
          let { scope: t11 } = (0, eu.getCapturedScopesOnSpan)(e10);
          s10 = t11 && sd(t11) || ta.setSpan(I.active(), e10);
        }
        let { traceId: i2, spanId: a2, sampled: o2, dynamicSamplingContext: l2 } = sR(s10, { scope: t10, client: n10 }), c2 = { "sentry-trace": (0, eD.generateSentryTraceHeader)(i2, a2, o2), baggage: (0, eb.dynamicSamplingContextToSentryBaggageHeader)(l2) };
        return r10 && (c2.traceparent = (0, eD.generateTraceparentHeader)(i2, a2, o2)), c2;
      }
      function sF(e10) {
        return true === e10.attributes[r3] ? void 0 : r9(e10);
      }
      function sG(e10, t10) {
        let n10 = e10.get(t10.id);
        return n10?.span ? n10 : n10 && !n10.span ? (n10.span = t10.span, n10.parentNode = t10.parentNode, n10) : (e10.set(t10.id, t10), t10);
      }
      let sj = { 1: "cancelled", 2: "unknown_error", 3: "invalid_argument", 4: "deadline_exceeded", 5: "not_found", 6: "already_exists", 7: "permission_denied", 8: "resource_exhausted", 9: "failed_precondition", 10: "aborted", 11: "out_of_range", 12: "unimplemented", 13: "internal_error", 14: "unavailable", 15: "data_loss", 16: "unauthenticated" };
      function sY(e10) {
        let t10 = r6(e10) ? e10.attributes : {}, n10 = e10.status ? e10.status : void 0;
        if (n10) {
          if (n10.code === k.OK) return { code: es.SPAN_STATUS_OK };
          else if (n10.code === k.ERROR) {
            let e11;
            if (void 0 === n10.message) {
              let e12 = sV(t10);
              if (e12) return e12;
            }
            return n10.message && (e11 = n10.message, Object.values(sj).includes(e11)) ? { code: es.SPAN_STATUS_ERROR, message: n10.message } : { code: es.SPAN_STATUS_ERROR, message: "internal_error" };
          }
        }
        let r10 = sV(t10);
        return r10 || (n10?.code === k.UNSET ? { code: es.SPAN_STATUS_OK } : { code: es.SPAN_STATUS_ERROR, message: "unknown_error" });
      }
      function sV(e10) {
        let t10 = e10[rc] || e10[ri], n10 = e10["rpc.grpc.status_code"], r10 = "number" == typeof t10 ? t10 : "string" == typeof t10 ? parseInt(t10) : void 0;
        return "number" == typeof r10 ? (0, es.getSpanStatusFromHttpCode)(r10) : "string" == typeof n10 ? { code: es.SPAN_STATUS_ERROR, message: sj[n10] || "unknown_error" } : void 0;
      }
      class sH {
        constructor(e10) {
          this._finishedSpanBucketSize = e10?.timeout || 300, this._finishedSpanBuckets = Array(this._finishedSpanBucketSize).fill(void 0), this._lastCleanupTimestampInS = Math.floor((0, ek.safeDateNow)() / 1e3), this._spansToBucketEntry = /* @__PURE__ */ new WeakMap(), this._sentSpans = /* @__PURE__ */ new Map(), this._debouncedFlush = function(e11, t10) {
            let n10, r10, s10, i2 = t10?.maxWait ? Math.max(t10.maxWait, 1) : 0, a2 = t10?.setTimeoutImpl || setTimeout;
            function o2() {
              return l2(), n10 = e11();
            }
            function l2() {
              void 0 !== r10 && clearTimeout(r10), void 0 !== s10 && clearTimeout(s10), r10 = s10 = void 0;
            }
            function c2() {
              return r10 && clearTimeout(r10), r10 = a2(o2, 1), i2 && void 0 === s10 && (s10 = a2(o2, i2)), n10;
            }
            return c2.cancel = l2, c2.flush = function() {
              return void 0 !== r10 || void 0 !== s10 ? o2() : n10;
            }, c2;
          }(this.flush.bind(this), { maxWait: 100 });
        }
        export(e10) {
          let t10 = Math.floor((0, ek.safeDateNow)() / 1e3);
          if (this._lastCleanupTimestampInS !== t10) {
            let e11 = 0;
            this._finishedSpanBuckets.forEach((n11, r11) => {
              n11 && n11.timestampInS <= t10 - this._finishedSpanBucketSize && (e11 += n11.spans.size, this._finishedSpanBuckets[r11] = void 0);
            }), e11 > 0 && r5 && z.debug.log(`SpanExporter dropped ${e11} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`), this._lastCleanupTimestampInS = t10;
          }
          let n10 = t10 % this._finishedSpanBucketSize, r10 = this._finishedSpanBuckets[n10] || { timestampInS: t10, spans: /* @__PURE__ */ new Set() };
          this._finishedSpanBuckets[n10] = r10, r10.spans.add(e10), this._spansToBucketEntry.set(e10, r10);
          let s10 = sF(e10);
          (!s10 || this._sentSpans.has(s10)) && this._debouncedFlush();
        }
        flush() {
          let e10 = this._finishedSpanBuckets.flatMap((e11) => e11 ? Array.from(e11.spans) : []);
          this._flushSentSpanCache();
          let t10 = this._maybeSend(e10), n10 = t10.size, r10 = e10.length - n10;
          r5 && z.debug.log(`SpanExporter exported ${n10} spans, ${r10} spans are waiting for their parent spans to finish`);
          let s10 = (0, ek.safeDateNow)() + 3e5;
          for (let e11 of t10) {
            this._sentSpans.set(e11.spanContext().spanId, s10);
            let t11 = this._spansToBucketEntry.get(e11);
            t11 && t11.spans.delete(e11);
          }
          this._debouncedFlush.cancel();
        }
        clear() {
          this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0), this._sentSpans.clear(), this._debouncedFlush.cancel();
        }
        _maybeSend(e10) {
          let t10 = function(e11) {
            let t11 = /* @__PURE__ */ new Map();
            for (let n11 of e11) !function(e12, t12) {
              let n12 = t12.spanContext().spanId, r10 = sF(t12);
              if (!r10) return sG(e12, { id: n12, span: t12, children: [] });
              let s10 = function(e13, t13) {
                let n13 = e13.get(t13);
                return n13 || sG(e13, { id: t13, children: [] });
              }(e12, r10), i2 = sG(e12, { id: n12, span: t12, parentNode: s10, children: [] });
              s10.children.push(i2);
            }(t11, n11);
            return Array.from(t11, function([e12, t12]) {
              return t12;
            });
          }(e10), n10 = /* @__PURE__ */ new Set();
          for (let e11 of this._getCompletedRootNodes(t10)) {
            let t11 = e11.span;
            n10.add(t11);
            let r10 = function(e12) {
              let { op: t12, description: n11, data: r11, origin: s11 = "manual", source: i3 } = sz(e12), a2 = (0, eu.getCapturedScopesOnSpan)(e12), o2 = e12.attributes[ec.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE], l2 = { [ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: i3, [ec.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: o2, [ec.SEMANTIC_ATTRIBUTE_SENTRY_OP]: t12, [ec.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: s11, ...r11, ...sW(e12.attributes) }, { links: c2 } = e12, { traceId: u2, spanId: p2 } = e12.spanContext(), d2 = r9(e12), _2 = sY(e12), h2 = { parent_span_id: d2, span_id: p2, trace_id: u2, data: l2, origin: s11, op: t12, status: (0, er.getStatusMessage)(_2), links: (0, er.convertSpanLinksForEnvelope)(c2) }, f2 = l2[rc];
              return { contexts: { trace: h2, otel: { resource: e12.resource.attributes }, ..."number" == typeof f2 ? { response: { status_code: f2 } } : void 0 }, spans: [], start_timestamp: (0, er.spanTimeInputToSeconds)(e12.startTime), timestamp: (0, er.spanTimeInputToSeconds)(e12.endTime), transaction: n11, type: "transaction", sdkProcessingMetadata: { capturedSpanScope: a2.scope, capturedSpanIsolationScope: a2.isolationScope, sampleRate: o2, dynamicSamplingContext: (0, eP.getDynamicSamplingContextFromSpan)(e12) }, ...i3 && { transaction_info: { source: i3 } } };
            }(t11);
            if (e11.parentNode && this._sentSpans.has(e11.parentNode.id)) {
              let e12 = r10.contexts?.trace?.data;
              e12 && (e12["sentry.parent_span_already_sent"] = true);
            }
            let s10 = r10.spans || [];
            for (let t12 of e11.children) !function e12(t13, n11, r11) {
              let s11 = t13.span;
              if (s11 && r11.add(s11), !s11) return void t13.children.forEach((t14) => {
                e12(t14, n11, r11);
              });
              let i3 = s11.spanContext().spanId, a2 = s11.spanContext().traceId, o2 = r9(s11), { attributes: l2, startTime: c2, endTime: u2, links: p2 } = s11, { op: d2, description: _2, data: h2, origin: f2 = "manual" } = sz(s11), g2 = { [ec.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f2, [ec.SEMANTIC_ATTRIBUTE_SENTRY_OP]: d2, ...sW(l2), ...h2 }, m2 = sY(s11), S2 = { span_id: i3, trace_id: a2, data: g2, description: _2, parent_span_id: o2, start_timestamp: (0, er.spanTimeInputToSeconds)(c2), timestamp: (0, er.spanTimeInputToSeconds)(u2) || void 0, status: (0, er.getStatusMessage)(m2), op: d2, origin: f2, measurements: (0, e$.timedEventsToMeasurements)(s11.events), links: (0, er.convertSpanLinksForEnvelope)(p2) };
              n11.push(S2), t13.children.forEach((t14) => {
                e12(t14, n11, r11);
              });
            }(t12, s10, n10);
            r10.spans = s10.length > 1e3 ? s10.sort((e12, t12) => e12.start_timestamp - t12.start_timestamp).slice(0, 1e3) : s10;
            let i2 = (0, e$.timedEventsToMeasurements)(t11.events);
            i2 && (r10.measurements = i2), (0, eF.captureEvent)(r10);
          }
          return n10;
        }
        _flushSentSpanCache() {
          let e10 = (0, ek.safeDateNow)();
          for (let [t10, n10] of this._sentSpans.entries()) n10 <= e10 && this._sentSpans.delete(t10);
        }
        _nodeIsCompletedRootNodeOrHasSentParent(e10) {
          return !!e10.span && (!e10.parentNode || this._sentSpans.has(e10.parentNode.id));
        }
        _getCompletedRootNodes(e10) {
          return e10.filter((e11) => this._nodeIsCompletedRootNodeOrHasSentParent(e11));
        }
      }
      function sz(e10) {
        var t10;
        let n10, r10, s10, i2, a2, o2, { op: l2, source: c2, origin: u2 } = (o2 = (a2 = e10.attributes)[ec.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], { origin: o2, op: a2[ec.SEMANTIC_ATTRIBUTE_SENTRY_OP], source: a2[ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] }), { op: p2, description: d2, source: _2, data: h2 } = sf(e10);
        return { op: l2 || p2, description: d2, source: c2 || _2, origin: u2, data: { ...h2, ...(n10 = (t10 = e10).attributes, r10 = {}, t10.kind !== x.INTERNAL && (r10["otel.kind"] = x[t10.kind]), (s10 = n10[ri]) && (r10[rc] = s10), (i2 = function(e11) {
          if (!r6(e11)) return {};
          let t11 = e11.attributes[r_] || e11.attributes[rs], n11 = { url: t11, "http.method": e11.attributes[rl] || e11.attributes[rr] };
          !n11["http.method"] && n11.url && (n11["http.method"] = "GET");
          try {
            if ("string" == typeof t11) {
              let e12 = ef(t11);
              n11.url = em(e12), e12.search && (n11["http.query"] = e12.search), e12.hash && (n11["http.fragment"] = e12.hash);
            }
          } catch {
          }
          return n11;
        }(t10)).url && (r10.url = i2.url), i2["http.query"] && (r10["http.query"] = i2["http.query"].slice(1)), i2["http.fragment"] && (r10["http.fragment"] = i2["http.fragment"].slice(1)), r10) } };
      }
      function sW(e10) {
        let t10 = { ...e10 };
        return delete t10[ec.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE], delete t10[r3], delete t10[ec.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME], t10;
      }
      class sK {
        constructor(e10) {
          sT("SentrySpanProcessor"), this._exporter = new sH(e10);
        }
        async forceFlush() {
          this._exporter.flush();
        }
        async shutdown() {
          this._exporter.clear();
        }
        onStart(e10, t10) {
          let n10 = ta.getSpan(t10), r10 = su(t10);
          n10 && !n10.spanContext().isRemote && (0, er.addChildSpanToSpan)(n10, e10), n10?.spanContext().isRemote && e10.setAttribute(r3, true), t10 === l && (r10 = { scope: (0, ex.getDefaultCurrentScope)(), isolationScope: (0, ex.getDefaultIsolationScope)() }), r10 && (0, eu.setCapturedScopesOnSpan)(e10, r10.scope, r10.isolationScope), (0, eG.logSpanStart)(e10);
          let s10 = (0, ep.getClient)();
          s10?.emit("spanStart", e10);
        }
        onEnd(e10) {
          (0, eG.logSpanEnd)(e10);
          let t10 = (0, ep.getClient)();
          t10?.emit("spanEnd", e10), t10 && (0, ej.hasSpanStreamingEnabled)(t10) ? t10.emit("afterSpanEnd", e10) : this._exporter.export(e10);
        }
      }
      class sq {
        constructor(e10) {
          this._client = e10, this._isSpanStreaming = (0, ej.hasSpanStreamingEnabled)(e10), sT("SentrySampler");
        }
        shouldSample(e10, t10, n10, r10, s10, i2) {
          var a2;
          let o2, l2 = this._client.getOptions(), { ignoreSpans: c2 } = l2, u2 = (a2 = e10, (o2 = ta.getSpan(a2)) && e9(o2.spanContext()) ? o2 : void 0), p2 = u2?.spanContext();
          if (!(0, eO.hasSpansEnabled)(l2)) return sJ({ decision: void 0, context: e10, spanAttributes: s10 });
          let d2 = s10[rr] || s10[rl];
          if (r10 === x.CLIENT && d2 && (!u2 || p2?.isRemote)) return this._client.recordDroppedEvent("no_parent_span", "span"), sJ({ decision: void 0, context: e10, spanAttributes: s10 });
          let _2 = u2 ? function(e11, t11, n11) {
            let r11 = e11.spanContext();
            if (e9(r11) && r11.traceId === t11) {
              if (r11.isRemote) {
                let t13 = s_(e11.spanContext());
                return r5 && z.debug.log(`[Tracing] Inheriting remote parent's sampled decision for ${n11}: ${t13}`), t13;
              }
              let t12 = s_(r11);
              return r5 && z.debug.log(`[Tracing] Inheriting parent's sampled decision for ${n11}: ${t12}`), t12;
            }
          }(u2, t10, n10) : void 0;
          if (!(!u2 || p2?.isRemote)) {
            if (this._isSpanStreaming) {
              if (_2 && c2?.length) {
                let { description: t11, op: i3 } = sh(n10, s10, r10);
                if ((0, eY.shouldIgnoreSpan)({ description: t11, op: s10[ec.SEMANTIC_ATTRIBUTE_SENTRY_OP] ?? i3 }, c2)) return this._client.recordDroppedEvent("ignored", "span"), sJ({ decision: G.NOT_RECORD, context: e10, spanAttributes: s10, ignoredChildSpan: true });
              }
              if (!_2) {
                let e11 = p2?.traceState?.get(ss) === "1";
                this._client.recordDroppedEvent(e11 ? "ignored" : "sample_rate", "span");
              }
            }
            return sJ({ decision: _2 ? G.RECORD_AND_SAMPLED : G.NOT_RECORD, context: e10, spanAttributes: s10 });
          }
          let { description: h2, data: f2, op: g2 } = sh(n10, s10, r10), m2 = { ...f2, ...s10 };
          if (g2 && (m2[ec.SEMANTIC_ATTRIBUTE_SENTRY_OP] = g2), this._isSpanStreaming && c2?.length && (0, eY.shouldIgnoreSpan)({ description: h2, op: m2[ec.SEMANTIC_ATTRIBUTE_SENTRY_OP] ?? g2 }, c2)) return this._client.recordDroppedEvent("ignored", "span"), sJ({ decision: G.NOT_RECORD, context: e10, spanAttributes: s10, ignoredSegmentSpan: true });
          let S2 = { decision: true };
          if (this._client.emit("beforeSampling", { spanAttributes: m2, spanName: h2, parentSampled: _2, parentContext: p2 }, S2), !S2.decision) return sJ({ decision: void 0, context: e10, spanAttributes: s10 });
          let { isolationScope: E2 } = su(e10) ?? {}, T2 = p2?.traceState ? p2.traceState.get(se) : void 0, v2 = T2 ? (0, eb.baggageHeaderToDynamicSamplingContext)(T2) : void 0, R2 = (0, eV.parseSampleRate)(v2?.sample_rand) ?? (0, eU.safeMathRandom)(), [y2, I2, A2] = (0, eH.sampleSpan)(l2, { name: h2, attributes: m2, normalizedRequest: E2?.getScopeData().sdkProcessingMetadata.normalizedRequest, parentSampled: _2, parentSampleRate: (0, eV.parseSampleRate)(v2?.sample_rate) }, R2), b2 = `${d2}`.toUpperCase();
          return "OPTIONS" === b2 || "HEAD" === b2 ? (r5 && z.debug.log(`[Tracing] Not sampling span because HTTP method is '${b2}' for ${n10}`), sJ({ decision: G.NOT_RECORD, context: e10, spanAttributes: s10, sampleRand: R2, downstreamTraceSampleRate: 0 })) : (y2 || void 0 !== _2 || (r5 && z.debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), this._client.recordDroppedEvent("sample_rate", this._isSpanStreaming ? "span" : "transaction")), { ...sJ({ decision: y2 ? G.RECORD_AND_SAMPLED : G.NOT_RECORD, context: e10, spanAttributes: s10, sampleRand: R2, downstreamTraceSampleRate: A2 ? I2 : void 0 }), attributes: { [ec.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: A2 ? I2 : void 0 } });
        }
        toString() {
          return "SentrySampler";
        }
      }
      function sJ({ decision: e10, context: t10, spanAttributes: n10, sampleRand: r10, downstreamTraceSampleRate: s10, ignoredChildSpan: i2, ignoredSegmentSpan: a2 }) {
        var o2, l2;
        let c2, u2, p2, d2, _2 = (o2 = t10, l2 = n10, c2 = ta.getSpan(o2), u2 = c2?.spanContext(), p2 = u2?.traceState || new rb(), (d2 = l2[rs] || l2[r_]) && "string" == typeof d2 && (p2 = p2.set(sn, d2)), p2);
        return (void 0 !== s10 && (_2 = _2.set("sentry.sample_rate", `${s10}`)), void 0 !== r10 && (_2 = _2.set("sentry.sample_rand", `${r10}`)), i2 && (_2 = _2.set(sr, "1")), a2 && (_2 = _2.set(ss, "1")), void 0 == e10) ? { decision: G.NOT_RECORD, traceState: _2 } : e10 === G.NOT_RECORD ? { decision: e10, traceState: _2.set(st, "1") } : { decision: e10, traceState: _2 };
      }
      class sX {
        constructor(e10) {
          this._attributes = e10;
        }
        get attributes() {
          return this._attributes;
        }
        merge(e10) {
          return e10 ? new sX({ ...this._attributes, ...e10.attributes }) : this;
        }
        getRawAttributes() {
          return Object.entries(this._attributes);
        }
      }
      let sZ = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, sQ = /* @__PURE__ */ new WeakMap();
      class s0 {
        constructor(e10 = 30) {
          this.$ = [], this._taskProducers = [], this._bufferSize = e10;
        }
        add(e10) {
          return this._taskProducers.length >= this._bufferSize ? Promise.reject(tZ) : (this._taskProducers.push(e10), Promise.resolve({}));
        }
        drain(e10) {
          let t10 = [...this._taskProducers];
          return this._taskProducers = [], new Promise((n10) => {
            let r10 = setTimeout(() => {
              e10 && e10 > 0 && n10(false);
            }, e10);
            Promise.all(t10.map((e11) => e11().then(null, () => {
            }))).then(() => {
              clearTimeout(r10), n10(true);
            });
          });
        }
      }
      function s1(e10) {
        return function(e11, t10, n10 = tQ(e11.bufferSize || 64)) {
          let r10 = {};
          return { send: function(s10) {
            let i2 = [];
            if ((0, tw.forEachEnvelopeItem)(s10, (t11, n11) => {
              let s11 = (0, tw.envelopeItemTypeToDataCategory)(n11);
              !function(e12, t12, n12 = (0, t0.safeDateNow)()) {
                return (e12[t12] || e12.all || 0) > n12;
              }(r10, s11) ? i2.push(t11) : e11.recordDroppedEvent("ratelimit_backoff", s11);
            }), 0 === i2.length) return Promise.resolve({});
            let a2 = (0, tw.createEnvelope)(s10[0], i2), o2 = (t11) => {
              if ((0, tw.envelopeContainsItemType)(a2, ["client_report"])) {
                V.DEBUG_BUILD && z.debug.warn(`Dropping client report. Will not send outcomes (reason: ${t11}).`);
                return;
              }
              (0, tw.forEachEnvelopeItem)(a2, (n11, r11) => {
                e11.recordDroppedEvent(t11, (0, tw.envelopeItemTypeToDataCategory)(r11));
              });
            };
            return n10.add(() => t10({ body: (0, tw.serializeEnvelope)(a2) }).then((e12) => (413 === e12.statusCode ? (V.DEBUG_BUILD && z.debug.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), o2("send_error")) : (V.DEBUG_BUILD && void 0 !== e12.statusCode && (e12.statusCode < 200 || e12.statusCode >= 300) && z.debug.warn(`Sentry responded with status code ${e12.statusCode} to sent event.`), r10 = function(e13, { statusCode: t11, headers: n11 }, r11 = (0, t0.safeDateNow)()) {
              let s11 = { ...e13 }, i3 = n11?.["x-sentry-rate-limits"], a3 = n11?.["retry-after"];
              if (i3) for (let e14 of i3.trim().split(",")) {
                let [t12, n12, , , i4] = e14.split(":", 5), a4 = parseInt(t12, 10), o3 = (isNaN(a4) ? 60 : a4) * 1e3;
                if (n12) for (let e15 of n12.split(";")) "metric_bucket" === e15 ? (!i4 || i4.split(";").includes("custom")) && (s11[e15] = r11 + o3) : s11[e15] = r11 + o3;
                else s11.all = r11 + o3;
              }
              else a3 ? s11.all = r11 + function(e14, t12 = (0, t0.safeDateNow)()) {
                let n12 = parseInt(`${e14}`, 10);
                if (!isNaN(n12)) return 1e3 * n12;
                let r12 = Date.parse(`${e14}`);
                return isNaN(r12) ? 6e4 : r12 - t12;
              }(a3, r11) : 429 === t11 && (s11.all = r11 + 6e4);
              return s11;
            }(r10, e12)), e12), (e12) => {
              throw o2("network_error"), V.DEBUG_BUILD && z.debug.error("Encountered error running transport request:", e12), e12;
            })).then((e12) => e12, (e12) => {
              if (e12 === tZ) return V.DEBUG_BUILD && z.debug.error("Skipped sending event because buffer is full."), o2("queue_overflow"), Promise.resolve({});
              throw e12;
            });
          }, flush: (e12) => n10.drain(e12) };
        }(e10, function(t10) {
          let n10 = { body: t10.body, method: "POST", headers: e10.headers, ...e10.fetchOptions };
          return (0, nv.suppressTracing)(() => fetch(e10.url, n10).then((e11) => ({ statusCode: e11.status, headers: { "x-sentry-rate-limits": e11.headers.get("X-Sentry-Rate-Limits"), "retry-after": e11.headers.get("Retry-After") } })));
        }, new s0(e10.bufferSize));
      }
      let s2 = ["addListener", "on", "once", "prependListener", "prependOnceListener"];
      class s4 {
        constructor() {
          s4.prototype.__init.call(this), s4.prototype.__init2.call(this);
        }
        bind(e10, t10) {
          return "object" == typeof t10 && null !== t10 && "on" in t10 ? this._bindEventEmitter(e10, t10) : "function" == typeof t10 ? this._bindFunction(e10, t10) : t10;
        }
        _bindFunction(e10, t10) {
          let n10 = this, r10 = function(...r11) {
            return n10.with(e10, () => t10.apply(this, r11));
          };
          return Object.defineProperty(r10, "length", { enumerable: false, configurable: true, writable: false, value: t10.length }), r10;
        }
        _bindEventEmitter(e10, t10) {
          return void 0 !== this._getPatchMap(t10) || (this._createPatchMap(t10), s2.forEach((n10) => {
            void 0 !== t10[n10] && (t10[n10] = this._patchAddListener(t10, t10[n10], e10));
          }), "function" == typeof t10.removeListener && (t10.removeListener = this._patchRemoveListener(t10, t10.removeListener)), "function" == typeof t10.off && (t10.off = this._patchRemoveListener(t10, t10.off)), "function" == typeof t10.removeAllListeners && (t10.removeAllListeners = this._patchRemoveAllListeners(t10, t10.removeAllListeners))), t10;
        }
        _patchRemoveListener(e10, t10) {
          let n10 = this;
          return function(r10, s10) {
            let i2 = n10._getPatchMap(e10)?.[r10];
            if (void 0 === i2) return t10.call(this, r10, s10);
            let a2 = i2.get(s10);
            return t10.call(this, r10, a2 || s10);
          };
        }
        _patchRemoveAllListeners(e10, t10) {
          let n10 = this;
          return function(r10) {
            let s10 = n10._getPatchMap(e10);
            return void 0 !== s10 && (0 == arguments.length ? n10._createPatchMap(e10) : void 0 !== s10[r10] && delete s10[r10]), t10.apply(this, arguments);
          };
        }
        _patchAddListener(e10, t10, n10) {
          let r10 = this;
          return function(s10, i2) {
            if (r10._wrapped) return t10.call(this, s10, i2);
            let a2 = r10._getPatchMap(e10);
            void 0 === a2 && (a2 = r10._createPatchMap(e10));
            let o2 = a2[s10];
            void 0 === o2 && (o2 = /* @__PURE__ */ new WeakMap(), a2[s10] = o2);
            let l2 = r10.bind(n10, i2);
            o2.set(i2, l2), r10._wrapped = true;
            try {
              return t10.call(this, s10, l2);
            } finally {
              r10._wrapped = false;
            }
          };
        }
        _createPatchMap(e10) {
          let t10 = /* @__PURE__ */ Object.create(null);
          return e10[this._kOtListeners] = t10, t10;
        }
        _getPatchMap(e10) {
          return e10[this._kOtListeners];
        }
        __init() {
          this._kOtListeners = Symbol("OtListeners");
        }
        __init2() {
          this._wrapped = false;
        }
      }
      class s5 extends s4 {
        constructor() {
          super();
          const e10 = H.GLOBAL_OBJ.AsyncLocalStorage;
          e10 ? this._asyncLocalStorage = new e10() : (sZ && z.debug.warn("Tried to register AsyncLocalStorage async context strategy in a runtime that doesn't support AsyncLocalStorage."), this._asyncLocalStorage = { getStore() {
          }, run(e11, t10, ...n10) {
            return t10.apply(this, n10);
          }, disable() {
          } });
        }
        active() {
          return this._asyncLocalStorage.getStore() ?? l;
        }
        with(e10, t10, n10, ...r10) {
          let s10 = null == n10 ? t10 : t10.bind(n10);
          return this._asyncLocalStorage.run(e10, s10, ...r10);
        }
        enable() {
          return this;
        }
        disable() {
          return this._asyncLocalStorage.disable(), this;
        }
      }
      let s3 = (0, W.createStackParser)([90, (w = void 0, r = /^\s*[-]{4,}$/, s = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/, i = /at (?:async )?(.+?) \(data:(.*?),/, (e10) => {
        let t10 = e10.match(i);
        if (t10) return { filename: `<data:${t10[2]}>`, function: t10[1] };
        let n10 = e10.match(s);
        if (n10) {
          let e11, t11, r10, s10, i2;
          if (n10[1]) {
            let i3 = (r10 = n10[1]).lastIndexOf(".");
            if ("." === r10[i3 - 1] && i3--, i3 > 0) {
              e11 = r10.slice(0, i3), t11 = r10.slice(i3 + 1);
              let n11 = e11.indexOf(".Module");
              n11 > 0 && (r10 = r10.slice(n11 + 1), e11 = e11.slice(0, n11));
            }
            s10 = void 0;
          }
          t11 && (s10 = e11, i2 = t11), "<anonymous>" === t11 && (i2 = void 0, r10 = void 0), void 0 === r10 && (i2 = i2 || W.UNKNOWN_FUNCTION, r10 = s10 ? `${s10}.${i2}` : i2);
          let a2 = (0, W.normalizeStackTracePath)(n10[2]), o2 = "native" === n10[5];
          a2 || !n10[5] || o2 || (a2 = n10[5]);
          let l2 = a2 ? function(e12) {
            try {
              return decodeURI(e12);
            } catch {
              return;
            }
          }(a2) : void 0;
          return { filename: l2 ?? a2, module: l2 && w?.(l2), function: r10, lineno: nA(n10[3]), colno: nA(n10[4]), in_app: function(e12, t12 = false) {
            return !(t12 || e12 && !e12.startsWith("/") && !e12.match(/^[A-Z]:/) && !e12.startsWith(".") && !e12.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && void 0 !== e12 && !e12.includes("node_modules/");
          }(a2 || "", o2) };
        }
        if (e10.match(r)) return { filename: e10 };
      })]);
      function s9(e10) {
        let n10;
        return [{ name: "Dedupe", processEvent(e11) {
          if (e11.type) return e11;
          try {
            var t10, r10, s10, i2, a2, o2;
            let l2, c2, u2, p2;
            if (t10 = e11, (r10 = n10) && (s10 = t10, i2 = r10, l2 = s10.message, c2 = i2.message, (l2 || c2) && (!l2 || c2) && (l2 || !c2) && l2 === c2 && nO(s10, i2) && nb(s10, i2) && 1 || (a2 = t10, o2 = r10, u2 = nC(o2), p2 = nC(a2), u2 && p2 && u2.type === p2.type && u2.value === p2.value && nO(a2, o2) && nb(a2, o2)))) return V.DEBUG_BUILD && z.debug.warn("Event dropped due to being a duplicate of previously captured event."), null;
          } catch {
          }
          return n10 = e11;
        } }, ((e11 = {}) => ({ .../* @__PURE__ */ ((e12 = {}) => {
          let t10;
          return { name: "EventFilters", setup(n11) {
            t10 = nL(e12, n11.getOptions());
          }, processEvent: (n11, r10, s10) => (t10 || (t10 = nL(e12, s10.getOptions())), !function(e13, t11) {
            if (e13.type) {
              if ("transaction" === e13.type && function(e14, t12) {
                if (!t12?.length) return false;
                let n13 = e14.transaction;
                return !!n13 && (0, eN.stringMatchesSomePattern)(n13, t12);
              }(e13, t11.ignoreTransactions)) return V.DEBUG_BUILD && z.debug.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, t4.getEventDescription)(e13)}`), true;
            } else {
              var n12, r11, s11;
              if (n12 = e13, r11 = t11.ignoreErrors, r11?.length && t1(n12).some((e14) => (0, eN.stringMatchesSomePattern)(e14, r11))) return V.DEBUG_BUILD && z.debug.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, t4.getEventDescription)(e13)}`), true;
              if (s11 = e13, s11.exception?.values?.length && !s11.message && !s11.exception.values.some((e14) => e14.stacktrace || e14.type && "Error" !== e14.type || e14.value)) return V.DEBUG_BUILD && z.debug.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, t4.getEventDescription)(e13)}`), true;
              if (function(e14, t12) {
                if (!t12?.length) return false;
                let n13 = nD(e14);
                return !!n13 && (0, eN.stringMatchesSomePattern)(n13, t12);
              }(e13, t11.denyUrls)) return V.DEBUG_BUILD && z.debug.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, t4.getEventDescription)(e13)}.
Url: ${nD(e13)}`), true;
              if (!function(e14, t12) {
                if (!t12?.length) return true;
                let n13 = nD(e14);
                return !n13 || (0, eN.stringMatchesSomePattern)(n13, t12);
              }(e13, t11.allowUrls)) return V.DEBUG_BUILD && z.debug.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, t4.getEventDescription)(e13)}.
Url: ${nD(e13)}`), true;
            }
            return false;
          }(n11, t10) ? n11 : null) };
        })(e11), name: "InboundFilters" }))(), { name: "FunctionToString", setupOnce() {
          t = Function.prototype.toString;
          try {
            Function.prototype.toString = function(...e11) {
              let n11 = (0, ey.getOriginalFunction)(this), r10 = nP.has((0, ep.getClient)()) && void 0 !== n11 ? n11 : this;
              return t.apply(r10, e11);
            };
          } catch {
          }
        }, setup(e11) {
          nP.set(e11, true);
        } }, { name: "ConversationId", setup(e11) {
          e11.on("spanStart", (e12) => {
            let t10 = (0, ep.getCurrentScope)().getScopeData(), n11 = (0, ep.getIsolationScope)().getScopeData(), r10 = t10.conversationId || n11.conversationId;
            if (r10) {
              let { op: t11, data: n12, description: s10 } = (0, er.spanToJSON)(e12);
              if (!t11?.startsWith("gen_ai.") && !n12["ai.operationId"] && !s10?.startsWith("ai.")) return;
              e12.setAttribute(ec.GEN_AI_CONVERSATION_ID_ATTRIBUTE, r10);
            }
          });
        } }, ((e11 = {}) => {
          let t10 = e11.limit || 5, n11 = e11.key || "cause";
          return { name: "LinkedErrors", preprocessEvent(e12, r10, s10) {
            !function(e13, t11, n12, r11, s11, i2) {
              if (!s11.exception?.values || !i2 || !(0, tG.isInstanceOf)(i2.originalException, Error)) return;
              let a2 = s11.exception.values.length > 0 ? s11.exception.values[s11.exception.values.length - 1] : void 0;
              a2 && (s11.exception.values = function e14(t12, n13, r12, s12, i3, a3, o2, l2) {
                if (a3.length >= r12 + 1) return a3;
                let c2 = [...a3];
                if ((0, tG.isInstanceOf)(s12[i3], Error)) {
                  nU(o2, l2, s12);
                  let a4 = t12(n13, s12[i3]), u2 = c2.length;
                  nM(a4, i3, u2, l2), c2 = e14(t12, n13, r12, s12[i3], i3, [a4, ...c2], a4, u2);
                }
                return nw(s12) && s12.errors.forEach((a4, u2) => {
                  if ((0, tG.isInstanceOf)(a4, Error)) {
                    nU(o2, l2, s12);
                    let p2 = t12(n13, a4), d2 = c2.length;
                    nM(p2, `errors[${u2}]`, d2, l2), c2 = e14(t12, n13, r12, a4, i3, [p2, ...c2], p2, d2);
                  }
                }), c2;
              }(e13, t11, r11, i2.originalException, n12, s11.exception.values, a2, 0));
            }(nf, s10.getOptions().stackParser, n11, t10, e12, r10);
          } };
        })(), ((e11 = {}) => {
          let t10 = void 0 === e11.breadcrumbs || e11.breadcrumbs, n11 = e11.shouldCreateSpanForRequest, r10 = new eC(100), s10 = new eC(100), i2 = {};
          function a2(e12) {
            let t11 = (0, ep.getClient)();
            if (!t11) return false;
            let n12 = t11.getOptions();
            if (void 0 === n12.tracePropagationTargets) return true;
            let r11 = s10.get(e12);
            if (void 0 !== r11) return r11;
            let i3 = (0, eN.stringMatchesSomePattern)(e12, n12.tracePropagationTargets);
            return s10.set(e12, i3), i3;
          }
          function o2(e12) {
            if (void 0 === n11) return true;
            let t11 = r10.get(e12);
            if (void 0 !== t11) return t11;
            let s11 = n11(e12);
            return r10.set(e12, s11), s11;
          }
          return { name: "WinterCGFetch", setupOnce() {
            let e12;
            J(e12 = "fetch", (e13) => {
              let n12 = (0, ep.getClient)();
              n12 && sQ.get(n12) && !eI(e13.fetchData.url, n12) && (!function(e14, t11, n13, r11, s11) {
                if (!e14.fetchData) return;
                let { method: i3, url: a3 } = e14.fetchData, o3 = (0, eO.hasSpansEnabled)() && t11(a3);
                if (e14.endTimestamp) {
                  var l2, c2, u2;
                  let t12, n14 = e14.fetchData.__span;
                  if (!n14) return;
                  let i4 = r11[n14];
                  i4 && (o3 && (function(e15, t13) {
                    if (t13.response) {
                      (0, es.setHttpStatus)(e15, t13.response.status);
                      let n15 = t13.response?.headers?.get("content-length");
                      if (n15) {
                        let t14 = parseInt(n15);
                        t14 > 0 && e15.setAttribute("http.response_content_length", t14);
                      }
                    } else t13.error && e15.setStatus({ code: es.SPAN_STATUS_ERROR, message: "internal_error" });
                    e15.end();
                  }(i4, e14), l2 = i4, c2 = e14, t12 = "object" == typeof (u2 = s11) && null !== u2 ? u2.onRequestSpanEnd : void 0, t12?.(l2, { headers: c2.response?.headers, error: c2.error })), delete r11[n14]);
                  return;
                }
                let { spanOrigin: p2 = "auto.http.browser", propagateTraceparent: d2 = false } = "object" == typeof s11 ? s11 : { spanOrigin: s11 }, _2 = (0, ep.getClient)(), h2 = !!(0, er.getActiveSpan)(), f2 = o3 && h2 ? (0, nv.startInactiveSpan)(function(e15, t12, n14) {
                  if (e15.startsWith("data:")) {
                    let r13 = eS(e15);
                    return { name: `${t12} ${r13}`, attributes: ny(e15, void 0, t12, n14) };
                  }
                  let r12 = e_(e15), s12 = r12 ? eh(r12) : e15;
                  return { name: `${t12} ${s12}`, attributes: ny(e15, r12, t12, n14) };
                }(a3, i3, p2)) : new nT.SentryNonRecordingSpan();
                if (o3 && !h2 && _2?.recordDroppedEvent("no_parent_span", "span"), e14.fetchData.__span = f2.spanContext().spanId, r11[f2.spanContext().spanId] = f2, n13(e14.fetchData.url)) {
                  let t12 = e14.args[0], n14 = { ...e14.args[1] || {} }, r12 = function(e15, t13, n15, r13) {
                    var s12, i4;
                    let a4 = function(e16 = {}) {
                      let t14 = e16.client || (0, ep.getClient)();
                      if (!(0, eF.isEnabled)() || !t14) return {};
                      let n16 = (0, tF.getMainCarrier)(), r14 = (0, eB.getAsyncContextStrategy)(n16);
                      if (r14.getTraceData) return r14.getTraceData(e16);
                      let s13 = e16.scope || (0, ep.getCurrentScope)(), i5 = e16.span || (0, er.getActiveSpan)();
                      if (!i5 && (0, ep.hasExternalPropagationContext)()) return {};
                      let a5 = i5 ? (0, er.spanToTraceHeader)(i5) : function(e17) {
                        let { traceId: t15, sampled: n17, propagationSpanId: r15 } = e17.getPropagationContext();
                        return (0, eD.generateSentryTraceHeader)(t15, r15, n17);
                      }(s13), o5 = i5 ? (0, eP.getDynamicSamplingContextFromSpan)(i5) : (0, eP.getDynamicSamplingContextFromScope)(t14, s13), l4 = (0, eb.dynamicSamplingContextToSentryBaggageHeader)(o5);
                      if (!eD.TRACEPARENT_REGEXP.test(a5)) return z.debug.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
                      let c4 = { "sentry-trace": a5, baggage: l4 };
                      return e16.propagateTraceparent && (c4.traceparent = i5 ? (0, er.spanToTraceparentHeader)(i5) : function(e17) {
                        let { traceId: t15, sampled: n17, propagationSpanId: r15 } = e17.getPropagationContext();
                        return (0, eD.generateTraceparentHeader)(t15, r15, n17);
                      }(s13)), c4;
                    }({ span: n15, propagateTraceparent: r13 }), o4 = a4["sentry-trace"], l3 = a4.baggage, c3 = a4.traceparent;
                    if (!o4) return;
                    let u3 = t13.headers || ((0, tG.isRequest)(e15) ? e15.headers : void 0);
                    if (!u3) return { ...a4 };
                    if (s12 = u3, "u" > typeof Headers && (0, tG.isInstanceOf)(s12, Headers)) {
                      let e16 = new Headers(u3);
                      if (e16.get("sentry-trace") || e16.set("sentry-trace", o4), r13 && c3 && !e16.get("traceparent") && e16.set("traceparent", c3), l3) {
                        let t14 = e16.get("baggage");
                        t14 ? nR(t14) || e16.set("baggage", `${t14},${l3}`) : e16.set("baggage", l3);
                      }
                      return e16;
                    }
                    if (Array.isArray(i4 = u3) && i4.every((e16) => Array.isArray(e16) && 2 === e16.length && "string" == typeof e16[0])) {
                      let e16 = [...u3];
                      e16.find((e17) => "sentry-trace" === e17[0]) || e16.push(["sentry-trace", o4]), r13 && c3 && !e16.find((e17) => "traceparent" === e17[0]) && e16.push(["traceparent", c3]);
                      let t14 = u3.find((e17) => "baggage" === e17[0] && "string" == typeof e17[1] && nR(e17[1]));
                      return l3 && !t14 && e16.push(["baggage", l3]), e16;
                    }
                    {
                      let e16 = "sentry-trace" in u3 ? u3["sentry-trace"] : void 0, t14 = "traceparent" in u3 ? u3.traceparent : void 0, n16 = "baggage" in u3 ? u3.baggage : void 0, s13 = n16 ? Array.isArray(n16) ? [...n16] : [n16] : [], i5 = n16 && (Array.isArray(n16) ? n16.find((e17) => nR(e17)) : nR(n16));
                      l3 && !i5 && s13.push(l3);
                      let a5 = Object.assign({}, u3, { "sentry-trace": e16 ?? o4, baggage: s13.length > 0 ? s13.join(",") : void 0 });
                      return r13 && c3 && !t14 && (a5.traceparent = c3), a5;
                    }
                  }(t12, n14, (0, eO.hasSpansEnabled)() && h2 ? f2 : void 0, d2);
                  r12 && (e14.args[1] = n14, n14.headers = r12);
                }
                if (_2) {
                  let t12 = { input: e14.args, response: e14.response, startTimestamp: e14.startTimestamp, endTimestamp: e14.endTimestamp };
                  _2.emit("beforeOutgoingRequestSpan", f2, t12);
                }
              }(e13, o2, a2, i2, { spanOrigin: "auto.http.wintercg_fetch" }), t10 && function(e14) {
                let { startTimestamp: t11, endTimestamp: n13 } = e14;
                if (!n13) return;
                let r11 = { method: e14.fetchData.method, url: e14.fetchData.url };
                if (e14.error) nI({ category: "fetch", data: r11, level: "error", type: "http" }, { data: e14.error, input: e14.args, startTimestamp: t11, endTimestamp: n13 });
                else {
                  let s11 = e14.response;
                  r11.request_body_size = e14.fetchData.request_body_size, r11.response_body_size = e14.fetchData.response_body_size, r11.status_code = s11?.status;
                  let i3 = { input: e14.args, response: s11, startTimestamp: t11, endTimestamp: n13 }, a3 = function(e15) {
                    if (void 0 !== e15) return e15 >= 400 && e15 < 500 ? "warning" : e15 >= 500 ? "error" : void 0;
                  }(r11.status_code);
                  nI({ category: "fetch", data: r11, type: "http", level: a3 }, i3);
                }
              }(e13));
            }), X(e12, () => function(e13, t11 = false) {
              (0, ey.fill)(H.GLOBAL_OBJ, "fetch", function(t12) {
                return function(...n12) {
                  let r11 = Error(), { method: s11, url: i3 } = function(e14) {
                    if (0 === e14.length) return { method: "GET", url: "" };
                    if (2 === e14.length) {
                      let [t14, n13] = e14;
                      return { url: nE(t14), method: nS(n13, "method") ? String(n13.method).toUpperCase() : (0, tG.isRequest)(t14) && nS(t14, "method") ? String(t14.method).toUpperCase() : "GET" };
                    }
                    let t13 = e14[0];
                    return { url: nE(t13), method: nS(t13, "method") ? String(t13.method).toUpperCase() : "GET" };
                  }(n12), a3 = { args: n12, fetchData: { method: s11, url: i3 }, startTimestamp: 1e3 * (0, tY.timestampInSeconds)(), virtualError: r11, headers: function(e14) {
                    let [t13, n13] = e14;
                    try {
                      if ("object" == typeof n13 && null !== n13 && "headers" in n13 && n13.headers) return new Headers(n13.headers);
                      if ((0, tG.isRequest)(t13)) return new Headers(t13.headers);
                    } catch {
                    }
                  }(n12) };
                  return e13 || Z("fetch", { ...a3 }), t12.apply(H.GLOBAL_OBJ, n12).then(async (t13) => (e13 ? e13(t13) : Z("fetch", { ...a3, endTimestamp: 1e3 * (0, tY.timestampInSeconds)(), response: t13 }), t13), (e14) => {
                    Z("fetch", { ...a3, endTimestamp: 1e3 * (0, tY.timestampInSeconds)(), error: e14 }), (0, tG.isError)(e14) && void 0 === e14.stack && (e14.stack = r11.stack, (0, ey.addNonEnumerableProperty)(e14, "framesToPop", 1));
                    let t13 = (0, ep.getClient)(), n13 = t13?.getOptions().enhanceFetchErrorMessages ?? "always";
                    if (false !== n13 && e14 instanceof TypeError && ("Failed to fetch" === e14.message || "Load failed" === e14.message || "NetworkError when attempting to fetch resource." === e14.message)) try {
                      let t14 = new URL(a3.fetchData.url).host;
                      "always" === n13 ? e14.message = `${e14.message} (${t14})` : (0, ey.addNonEnumerableProperty)(e14, "__sentry_fetch_url_host__", t14);
                    } catch {
                    }
                    throw e14;
                  });
                };
              });
            }(void 0, void 0));
          }, setup(e12) {
            sQ.set(e12, true);
          } };
        })(), ((e11 = {}) => {
          let t10 = new Set(e11.levels || z.CONSOLE_LEVELS);
          return { name: "Console", setup(e12) {
            let n11;
            J(n11 = "console", ({ args: n12, level: r10 }) => {
              (0, ep.getClient)() === e12 && t10.has(r10) && function(e13, t11) {
                let n13 = { category: "console", data: { arguments: t11, logger: "console" }, level: "warn" === e13 ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e13) ? e13 : "log", message: nx(t11) };
                if ("assert" === e13) if (false !== t11[0]) return;
                else {
                  let e14 = t11.slice(1);
                  n13.message = e14.length > 0 ? `Assertion failed: ${nx(e14)}` : "Assertion failed", n13.data.arguments = e14;
                }
                nI(n13, { input: t11, level: e13 });
              }(r10, n12);
            }), X(n11, nB);
          } };
        })(), ...e10.sendDefaultPii ? [((e11 = {}) => {
          let t10 = { ...n$, ...e11.include };
          return { name: "RequestData", processEvent(e12, n11, r10) {
            let { sdkProcessingMetadata: s10 = {} } = e12, { normalizedRequest: i2, ipAddress: a2 } = s10, o2 = { ...t10, ip: t10.ip ?? r10.getOptions().sendDefaultPii };
            return i2 && function(e13, t11, n12, r11) {
              var s11, i3;
              let a3, o3;
              if (e13.request = { ...e13.request, ...(s11 = t11, i3 = r11, a3 = {}, o3 = { ...s11.headers }, i3.headers && (a3.headers = o3, i3.cookies || delete o3.cookie, i3.ip || nk.forEach((e14) => {
                delete o3[e14];
              })), a3.method = s11.method, i3.url && (a3.url = s11.url), i3.cookies && (a3.cookies = s11.cookies || (o3?.cookie ? function(e14) {
                let t12 = {}, n13 = 0;
                for (; n13 < e14.length; ) {
                  let r12 = e14.indexOf("=", n13);
                  if (-1 === r12) break;
                  let s12 = e14.indexOf(";", n13);
                  if (-1 === s12) s12 = e14.length;
                  else if (s12 < r12) {
                    n13 = e14.lastIndexOf(";", r12 - 1) + 1;
                    continue;
                  }
                  let i4 = e14.slice(n13, r12).trim();
                  if (void 0 === t12[i4]) {
                    let n14 = e14.slice(r12 + 1, s12).trim();
                    34 === n14.charCodeAt(0) && (n14 = n14.slice(1, -1));
                    try {
                      t12[i4] = -1 !== n14.indexOf("%") ? decodeURIComponent(n14) : n14;
                    } catch {
                      t12[i4] = n14;
                    }
                  }
                  n13 = s12 + 1;
                }
                return t12;
              }(o3.cookie) : void 0) || {}), i3.query_string && (a3.query_string = s11.query_string), i3.data && (a3.data = s11.data), a3) }, r11.ip) {
                let r12 = t11.headers && function(e14) {
                  let t12 = {};
                  for (let n13 of Object.keys(e14)) t12[n13.toLowerCase()] = e14[n13];
                  return nk.map((e15) => {
                    let n13 = t12[e15.toLowerCase()], r13 = Array.isArray(n13) ? n13.join(";") : n13;
                    return "Forwarded" === e15 ? function(e16) {
                      if (!e16) return null;
                      for (let t13 of e16.split(";")) if (t13.startsWith("for=")) return t13.slice(4);
                      return null;
                    }(r13) : r13?.split(",").map((e16) => e16.trim());
                  }).reduce((e15, t13) => t13 ? e15.concat(t13) : e15, []).find((e15) => {
                    var t13;
                    return null !== e15 && (t13 = e15, /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(t13));
                  }) || null;
                }(t11.headers) || n12.ipAddress;
                r12 && (e13.user = { ...e13.user, ip_address: r12 });
              }
            }(e12, i2, { ipAddress: a2 }, o2), e12;
          } };
        })()] : []];
      }
      var s6 = e.i(815842);
      let s8 = "next.span_type", s7 = "sentry.drop_transaction";
      var ie = e.i(674509);
      let it = H.GLOBAL_OBJ;
      var ir = e.i(464928), is = e.i(315614);
      let ii = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
      function ia(...e10) {
        let t10 = "", n10 = false;
        for (let r10 = e10.length - 1; r10 >= -1 && !n10; r10--) {
          let s10 = r10 >= 0 ? e10[r10] : "/";
          s10 && (t10 = `${s10}/${t10}`, n10 = "/" === s10.charAt(0));
        }
        return t10 = function(e11, t11) {
          let n11 = 0;
          for (let t12 = e11.length - 1; t12 >= 0; t12--) {
            let r10 = e11[t12];
            "." === r10 ? e11.splice(t12, 1) : ".." === r10 ? (e11.splice(t12, 1), n11++) : n11 && (e11.splice(t12, 1), n11--);
          }
          if (t11) for (; n11--; ) e11.unshift("..");
          return e11;
        }(t10.split("/").filter((e11) => !!e11), !n10).join("/"), (n10 ? "/" : "") + t10 || ".";
      }
      function io(e10) {
        let t10 = 0;
        for (; t10 < e10.length && "" === e10[t10]; t10++) ;
        let n10 = e10.length - 1;
        for (; n10 >= 0 && "" === e10[n10]; n10--) ;
        return t10 > n10 ? [] : e10.slice(t10, n10 - t10 + 1);
      }
      let il = H.GLOBAL_OBJ, ic = process.env.NEXT_PUBLIC_SENTRY_DSN;
      ic && function(e10 = {}) {
        if (ea(), process.env.NEXT_PHASE === ir.PHASE_PRODUCTION_BUILD) return;
        !s6.DEBUG_BUILD && e10.debug && console.warn("[@sentry/nextjs] You have enabled `debug: true`, but Sentry debug logging was removed from your bundle (likely via `withSentryConfig({ disableLogger: true })` / `webpack.treeshake.removeDebugLogging: true`). Set that option to `false` to see Sentry debug output.");
        let t10 = s9(e10), n10 = process.env._sentryRewriteFramesDistDir || il._sentryRewriteFramesDistDir;
        n10 && t10.push((({ distDirName: e11 }) => {
          let t11 = e11.replace(/(\/|\\)$/, ""), n11 = RegExp(`.*${t11.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")}`);
          return { ...((e12 = {}) => {
            let t12 = e12.root, n12 = e12.prefix || "app:///", r11 = "window" in H.GLOBAL_OBJ && !!H.GLOBAL_OBJ.window, s11 = e12.iteratee || function({ isBrowser: e13, root: t13, prefix: n13 }) {
              return (r12) => {
                if (!r12.filename) return r12;
                let s12 = /^[a-zA-Z]:\\/.test(r12.filename) || r12.filename.includes("\\") && !r12.filename.includes("/"), i3 = /^\//.test(r12.filename);
                if (e13) {
                  if (t13) {
                    let e14 = r12.filename;
                    0 === e14.indexOf(t13) && (r12.filename = e14.replace(t13, n13));
                  }
                } else if (s12 || i3) {
                  let e14, i4, a2 = s12 ? r12.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : r12.filename, o2 = t13 ? function(e15, t14) {
                    e15 = ia(e15).slice(1), t14 = ia(t14).slice(1);
                    let n14 = io(e15.split("/")), r13 = io(t14.split("/")), s13 = Math.min(n14.length, r13.length), i5 = s13;
                    for (let e16 = 0; e16 < s13; e16++) if (n14[e16] !== r13[e16]) {
                      i5 = e16;
                      break;
                    }
                    let a3 = [];
                    for (let e16 = i5; e16 < n14.length; e16++) a3.push("..");
                    return (a3 = a3.concat(r13.slice(i5))).join("/");
                  }(t13, a2) : (e14 = a2.length > 1024 ? `<truncated>${a2.slice(-1024)}` : a2, (i4 = ii.exec(e14)) ? i4.slice(1) : [])[2] || "";
                  r12.filename = `${n13}${o2}`;
                }
                return r12;
              };
            }({ isBrowser: r11, root: t12, prefix: n12 });
            return { name: "RewriteFrames", processEvent(e13) {
              let t13 = e13;
              return e13.exception && Array.isArray(e13.exception.values) && (t13 = function(e14) {
                try {
                  return { ...e14, exception: { ...e14.exception, values: e14.exception.values.map((e15) => {
                    var t14;
                    return { ...e15, ...e15.stacktrace && { stacktrace: { ...t14 = e15.stacktrace, frames: t14?.frames?.map((e16) => s11(e16)) } } };
                  }) } };
                } catch {
                  return e14;
                }
              }(t13)), t13;
            } };
          })({ iteratee: (e12) => (e12.filename = e12.filename?.replace(n11, "app:///_next"), e12) }), name: "DistDirRewriteFrames" };
        })({ distDirName: n10 }));
        let r10 = (0, is.isCloudflareWaitUntilAvailable)(), s10 = { defaultIntegrations: t10, environment: e10.environment || process.env.SENTRY_ENVIRONMENT, release: process.env._sentryRelease || il._sentryRelease, ...e10, ...r10 && { runtime: { name: "cloudflare" } } };
        r10 ? el(s10, "nextjs", ["nextjs", "cloudflare"]) : el(s10, "nextjs", ["nextjs", "vercel-edge"]);
        let i2 = function(e11 = {}) {
          var t11, n11;
          let r11, s11, i3;
          function a2() {
            let e12 = su(I.active());
            return e12 || { scope: (0, ex.getDefaultCurrentScope)(), isolationScope: (0, ex.getDefaultIsolationScope)() };
          }
          function o2() {
            return a2().scope;
          }
          function l2() {
            return a2().isolationScope;
          }
          if ((0, eB.setAsyncContextStrategy)({ withScope: function(e12) {
            let t12 = I.active();
            return I.with(t12, () => e12(o2()));
          }, withSetScope: function(e12, t12) {
            let n12 = sd(e12) || I.active();
            return I.with(n12.setValue(so, e12), () => t12(e12));
          }, withSetIsolationScope: function(e12, t12) {
            let n12 = I.active();
            return I.with(n12.setValue(sl, e12), () => t12(l2()));
          }, withIsolationScope: function(e12) {
            let t12 = I.active();
            return I.with(t12.setValue(sa, true), () => e12(l2()));
          }, getCurrentScope: o2, getIsolationScope: l2, startSpan: sb, startSpanManual: sO, startInactiveSpan: sC, getActiveSpan: sm, suppressTracing: sk, getTraceData: s$, continueTrace: sM, startNewTrace: sB, withActiveSpan: sN }), (0, ep.getCurrentScope)().update(e11.initialScope), void 0 === e11.defaultIntegrations && (e11.defaultIntegrations = s9(e11)), void 0 === e11.dsn && process.env.SENTRY_DSN && (e11.dsn = process.env.SENTRY_DSN), void 0 === e11.tracesSampleRate && process.env.SENTRY_TRACES_SAMPLE_RATE) {
            let t12 = parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE);
            isFinite(t12) && (e11.tracesSampleRate = t12);
          }
          if (void 0 === e11.release) {
            let t12 = function() {
              if (process.env.SENTRY_RELEASE) return process.env.SENTRY_RELEASE;
              if (H.GLOBAL_OBJ.SENTRY_RELEASE?.id) return H.GLOBAL_OBJ.SENTRY_RELEASE.id;
              let e12 = process.env.GITHUB_SHA || process.env.CI_MERGE_REQUEST_SOURCE_BRANCH_SHA || process.env.CI_BUILD_REF || process.env.CI_COMMIT_SHA || process.env.BITBUCKET_COMMIT, t13 = process.env.APPVEYOR_PULL_REQUEST_HEAD_COMMIT || process.env.APPVEYOR_REPO_COMMIT || process.env.CODEBUILD_RESOLVED_SOURCE_VERSION || process.env.AWS_COMMIT_ID || process.env.BUILD_SOURCEVERSION || process.env.GIT_CLONE_COMMIT_HASH || process.env.BUDDY_EXECUTION_REVISION || process.env.BUILDKITE_COMMIT || process.env.CIRCLE_SHA1 || process.env.CIRRUS_CHANGE_IN_REPO || process.env.CF_REVISION || process.env.CM_COMMIT || process.env.CF_PAGES_COMMIT_SHA || process.env.DRONE_COMMIT_SHA || process.env.FC_GIT_COMMIT_SHA || process.env.HEROKU_TEST_RUN_COMMIT_VERSION || process.env.HEROKU_BUILD_COMMIT || process.env.HEROKU_SLUG_COMMIT || process.env.RAILWAY_GIT_COMMIT_SHA || process.env.RENDER_GIT_COMMIT || process.env.SEMAPHORE_GIT_SHA || process.env.TRAVIS_PULL_REQUEST_SHA || process.env.VERCEL_GIT_COMMIT_SHA || process.env.VERCEL_GITHUB_COMMIT_SHA || process.env.VERCEL_GITLAB_COMMIT_SHA || process.env.VERCEL_BITBUCKET_COMMIT_SHA || process.env.ZEIT_GITHUB_COMMIT_SHA || process.env.ZEIT_GITLAB_COMMIT_SHA || process.env.ZEIT_BITBUCKET_COMMIT_SHA, n12 = process.env.CI_COMMIT_ID || process.env.SOURCE_COMMIT || process.env.SOURCE_VERSION || process.env.GIT_COMMIT || process.env.COMMIT_REF || process.env.BUILD_VCS_NUMBER || process.env.CI_COMMIT_SHA;
              return e12 || t13 || n12 || void 0;
            }();
            void 0 !== t12 && (e11.release = t12);
          }
          e11.environment = e11.environment || process.env.SENTRY_ENVIRONMENT || ((r11 = process.env.VERCEL_ENV) ? `vercel-${r11}` : void 0) || "production";
          let c2 = function(e12) {
            let t12, n12, r12 = e12.defaultIntegrations || [], s12 = e12.integrations;
            if (r12.forEach((e13) => {
              e13.isDefaultInstance = true;
            }), Array.isArray(s12)) t12 = [...r12, ...s12];
            else if ("function" == typeof s12) {
              let e13 = s12(r12);
              t12 = Array.isArray(e13) ? e13 : [e13];
            } else t12 = r12;
            return n12 = {}, t12.forEach((e13) => {
              let { name: t13 } = e13, r13 = n12[t13];
              r13 && !r13.isDefaultInstance && e13.isDefaultInstance || (n12[t13] = e13);
            }), Object.values(n12);
          }(e11);
          "stream" !== e11.traceLifecycle || c2.some((e12) => "SpanStreaming" === e12.name) || c2.push({ name: "SpanStreaming", setup(e12) {
            let t12 = "SpanStreaming integration requires", n12 = "Falling back to static trace lifecycle.", r12 = e12.getOptions();
            if (!(0, ej.hasSpanStreamingEnabled)(e12)) {
              r12.traceLifecycle = "static", V.DEBUG_BUILD && z.debug.warn(`${t12} \`traceLifecycle\` to be set to "stream"! ${n12}`);
              return;
            }
            let s12 = r12.beforeSendSpan;
            if (s12 && !(0, tq.isStreamedBeforeSendSpanCallback)(s12)) {
              r12.traceLifecycle = "static", V.DEBUG_BUILD && z.debug.warn(`${t12} a beforeSendSpan callback using \`withStreamedSpan\`! ${n12}`);
              return;
            }
            let i4 = new nG(e12);
            e12.on("afterSpanEnd", (t13) => {
              (0, er.spanIsSampled)(t13) && i4.add(function(e13, t14) {
                let n13, r13 = (0, er.spanToStreamedSpanJSON)(e13), s13 = (0, er.INTERNAL_getSegmentSpan)(e13), i5 = (0, er.spanToStreamedSpanJSON)(s13), { isolationScope: a3, scope: o3 } = (0, eu.getCapturedScopesOnSpan)(e13);
                (function(e14, t15, n14, r14) {
                  let s14 = n14.getSdkMetadata(), { release: i6, environment: a4, sendDefaultPii: o4 } = n14.getOptions();
                  nF(e14, { [ec.SEMANTIC_ATTRIBUTE_SENTRY_RELEASE]: i6, [ec.SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT]: a4, [ec.SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_NAME]: t15.name, [ec.SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_ID]: t15.span_id, [ec.SEMANTIC_ATTRIBUTE_SENTRY_SDK_NAME]: s14?.sdk?.name, [ec.SEMANTIC_ATTRIBUTE_SENTRY_SDK_VERSION]: s14?.sdk?.version, ...o4 ? { [ec.SEMANTIC_ATTRIBUTE_USER_ID]: r14.user?.id, [ec.SEMANTIC_ATTRIBUTE_USER_EMAIL]: r14.user?.email, [ec.SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS]: r14.user?.ip_address, [ec.SEMANTIC_ATTRIBUTE_USER_USERNAME]: r14.user?.username } : {}, ...r14.attributes });
                })(r13, i5, t14, (0, tj.getCombinedScopeData)(a3, o3)), r13.is_segment && t14.emit("processSegmentSpan", r13), t14.emit("processSpan", r13);
                let { beforeSendSpan: l3 } = t14.getOptions(), c3 = l3 && (0, tq.isStreamedBeforeSendSpanCallback)(l3) ? (n13 = l3(r13)) || ((0, er.showSpanDropWarning)(), r13) : r13, u3 = c3.attributes?.[ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
                return u3 && nF(c3, { "sentry.span.source": u3 }), { ...(0, er.streamedSpanJsonToSerializedSpan)(c3), _segmentSpan: s13 };
              }(t13, e12));
            });
          } });
          let u2 = new n2({ ...e11, stackParser: (0, W.stackParserFromStackParserOptions)(e11.stackParser || s3), integrations: c2, transport: e11.transport || s1 });
          return (0, ep.getCurrentScope)().setClient(u2), u2.init(), e11.skipOpenTelemetrySetup || ((t11 = u2).getOptions().debug && (nZ.disable(), nZ.setLogger({ error: z.debug.error, warn: z.debug.warn, info: z.debug.log, debug: z.debug.log, verbose: z.debug.log }, M.DEBUG)), s11 = new r4({ sampler: new sq(t11), resource: new sX({ "service.name": "edge", "service.namespace": "sentry", "service.version": eo.SDK_VERSION, [ru]: rh[ru], [rp]: rh[rp], [rd]: rh[rd] }), forceFlushTimeoutMillis: 500, spanProcessors: [new sK({ timeout: t11.getOptions().maxSpanWaitDuration })] }), i3 = (n11 = s5, class extends n11 {
            constructor(...e12) {
              super(...e12), sT("SentryContextManager");
            }
            with(e12, t12, n12, ...r12) {
              let s12 = function(e13, t13) {
                let n13, r13 = ta.getSpan(e13);
                if (r13?.spanContext().traceState?.get(sr) === "1") {
                  let r14 = ta.deleteSpan(e13), s14 = ta.getSpan(t13);
                  n13 = s14 ? ta.setSpan(r14, s14) : r14;
                } else n13 = e13;
                let s13 = su(n13), i4 = s13?.scope || (0, ep.getCurrentScope)(), a3 = s13?.isolationScope || (0, ep.getIsolationScope)(), o3 = true === n13.getValue(sa), l3 = n13.getValue(so), c3 = n13.getValue(sl), u3 = l3 || i4.clone(), p2 = sp(n13, { scope: u3, isolationScope: c3 || (o3 ? a3.clone() : a3) }).deleteValue(sa).deleteValue(so).deleteValue(sl);
                return (0, ey.addNonEnumerableProperty)(u3, sc, (0, eR.makeWeakRef)(p2)), p2;
              }(e12, this.active());
              return super.with(s12, t12, n12, ...r12);
            }
            getAsyncLocalStorageLookup() {
              return { asyncLocalStorage: this._asyncLocalStorage, contextSymbol: si };
            }
          }), ta.setGlobalTracerProvider(s11), tv.setGlobalPropagator(new sv()), I.setGlobalContextManager(new i3()), t11.traceProvider = s11, function() {
            if (!sZ) return;
            let e12 = Array.from(sE), t12 = ["SentryContextManager", "SentryPropagator"];
            for (let n12 of ((0, eO.hasSpansEnabled)() && t12.push("SentrySpanProcessor"), t12)) e12.includes(n12) || z.debug.error(`You have to set up the ${n12}. Without this, the OpenTelemetry & Sentry integration will not work properly.`);
            e12.includes("SentrySampler") || z.debug.warn("You have to set up the SentrySampler. Without this, the OpenTelemetry & Sentry integration may still work, but sample rates set for the Sentry SDK will not be respected. If you use a custom sampler, make sure to use `wrapSamplingDecision`.");
          }()), u2.on("createDsc", (e12, t12) => {
            if (!t12) return;
            let n12 = (0, er.spanToJSON)(t12).data[ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE], { description: r12 } = t12.name ? sf(t12) : { description: void 0 };
            if ("url" !== n12 && r12 && (e12.transaction = r12), (0, eO.hasSpansEnabled)()) {
              let n13 = s_(t12.spanContext());
              e12.sampled = void 0 == n13 ? void 0 : String(n13);
            }
          }), u2.on("preprocessEvent", (e12) => {
            let t12 = sm();
            if (!t12 || "transaction" === e12.type) return;
            e12.contexts = { trace: (0, er.spanToTraceContext)(t12), ...e12.contexts };
            let n12 = (0, er.getRootSpan)(t12);
            return e12.sdkProcessingMetadata = { dynamicSamplingContext: (0, eP.getDynamicSamplingContextFromSpan)(n12), ...e12.sdkProcessingMetadata }, e12;
          }), u2;
        }(s10);
        i2?.on("spanStart", (e11) => {
          let t11 = (0, er.spanToJSON)(e11).data, n11 = (0, er.getRootSpan)(e11), r11 = e11 === n11;
          if (!function(e12, t12) {
            if ((0, ep.getClient)()?.getOptions()?.skipOpenTelemetrySetup) return;
            let n12 = t12?.[s8] === "Middleware.execute", r12 = t12?.[ec.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] === "auto.http.otel.node_fetch", s11 = t12?.[s8] === "BaseServer.handleRequest";
            if (!n12 && !r12 && !s11) return;
            let i3 = function(e13) {
              let t13 = it._sentryRewritesTunnelPath || process.env._sentryRewritesTunnelPath;
              if (!t13) return false;
              let n13 = e13["http.target"];
              if ("string" == typeof n13) {
                let e14 = n13.split("?")[0] || "";
                return e14 === t13 || e14.startsWith(`${t13}/`);
              }
              return false;
            }(t12 || {}), a2 = function(e13) {
              if (!(e13.attributes && "object" == typeof e13.attributes)) return false;
              let { attributes: t13 } = e13, n13 = t13["http.url"] || t13["url.full"];
              return !!n13 && eI(n13.toString(), (0, ep.getClient)());
            }(e12);
            (i3 || a2) && e12.setAttribute(s7, true);
          }(e11, t11), t11?.["next.span_type"] !== void 0 && e11.setAttribute(ec.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto"), t11?.["next.span_type"] === "Middleware.execute" && (e11.setAttribute(ec.SEMANTIC_ATTRIBUTE_SENTRY_OP, "http.server.middleware"), e11.setAttribute(ec.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url")), t11?.[s8] === "BaseServer.handleRequest" && r11) {
            let t12 = (0, eu.getCapturedScopesOnSpan)(e11), n12 = (t12.isolationScope || (0, ep.getIsolationScope)()).clone(), r12 = t12.scope || (0, ep.getCurrentScope)(), s11 = I.active().getValue(tL);
            s11 && (s11.isolationScope = n12), (0, eu.setCapturedScopesOnSpan)(e11, r12, n12);
          }
          r11 && function(e12, t12) {
            if (!e12) return;
            let n12 = e12 instanceof Headers || "object" == typeof e12 && "get" in e12 ? (0, ie.winterCGHeadersToDict)(e12) : e12, r12 = (0, ie.httpHeadersToSpanAttributes)(n12, (0, ep.getClient)()?.getOptions().sendDefaultPii ?? false);
            t12 && t12.setAttributes(r12);
          }((0, ep.getIsolationScope)().getScopeData().sdkProcessingMetadata?.normalizedRequest?.headers, n11);
        }), i2?.on("preprocessEvent", (e11) => {
          if ("transaction" === e11.type && e11.contexts?.trace?.data?.["next.span_type"] === "Middleware.execute" && e11.contexts?.trace?.data?.["next.span_name"] && e11.transaction) {
            let t11 = e11.contexts.trace.data["next.span_name"];
            if ("string" == typeof t11) {
              let n11 = t11.match(/^middleware (GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS)/);
              n11 ? e11.transaction = `middleware ${n11[1]}` : e11.transaction = eg(e11.contexts.trace.data["next.span_name"]);
            }
          }
          !function(e12) {
            var t11;
            let n11;
            if ("transaction" !== e12.type || e12.contexts?.trace?.op !== "http.server" || !e12.contexts?.trace?.data) return;
            let r11 = (0, ep.getClient)();
            if (!r11?.getOptions().sendDefaultPii) return;
            let s11 = e12.contexts.trace.data, i3 = s11["next.route"] || s11["http.route"], a2 = s11["http.target"];
            if (!i3) return;
            let o2 = e12.sdkProcessingMetadata?.capturedSpanIsolationScope?.getScopeData(), l2 = o2?.sdkProcessingMetadata?.normalizedRequest?.headers, c2 = (t11 = a2?.toString(), (n11 = function(e13) {
              let t12 = e13?.referer;
              if (t12) try {
                let e14 = new URL(t12);
                return eh(e14);
              } catch {
                return;
              }
            }(l2)) || function(e13, t12, n12) {
              let r12, s12 = n12 ?? ((r12 = e13.split("/").filter((e14) => e14 && !(e14.startsWith("(") && e14.endsWith(")")))).length > 0 ? `/${r12.join("/")}` : "/"), i4 = t12?.["x-forwarded-proto"], a3 = t12?.["x-forwarded-host"] || t12?.host;
              if (!i4 || !a3) return s12;
              let o3 = e_(`${i4}://${a3}${s12}`);
              return o3 ? eh(o3) : s12;
            }(i3, l2, t11));
            c2 && o2?.sdkProcessingMetadata && (o2.sdkProcessingMetadata.normalizedRequest = o2.sdkProcessingMetadata.normalizedRequest || {}, o2.sdkProcessingMetadata.normalizedRequest.url = c2);
          }(e11);
        }), i2?.on("spanEnd", (e11) => {
          e11 === (0, er.getRootSpan)(e11) && (0, is.waitUntil)((0, is.flushSafelyWithTimeout)());
        }), (0, ep.getGlobalScope)().addEventProcessor(Object.assign((e11) => "transaction" !== e11.type ? e11 : e11.contexts?.trace?.data?.[s7] ? null : e11, { id: "NextLowQualityTransactionsFilter" }));
        try {
          (0, ep.getGlobalScope)().setTag("turbopack", true);
        } catch {
        }
      }({ dsn: ic, tracesSampleRate: 1 }), e.s([], 853403);
    }]);
  }
});

// .next/server/edge/chunks/node_modules__pnpm_0cze60p._.js
var require_node_modules_pnpm_0cze60p = __commonJS({
  ".next/server/edge/chunks/node_modules__pnpm_0cze60p._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/node_modules__pnpm_0cze60p._.js", 924163, (t) => {
      "use strict";
      t.s(["SDK_VERSION", 0, "10.50.0"]);
    }, 202775, (t) => {
      "use strict";
      let e = globalThis;
      t.s(["GLOBAL_OBJ", 0, e]);
    }, 428486, (t) => {
      "use strict";
      var e = t.i(924163), n = t.i(202775);
      function r(t2) {
        let n2 = t2.__SENTRY__ = t2.__SENTRY__ || {};
        return n2.version = n2.version || e.SDK_VERSION, n2[e.SDK_VERSION] = n2[e.SDK_VERSION] || {};
      }
      t.s(["getGlobalSingleton", 0, function(t2, r2, i = n.GLOBAL_OBJ) {
        let s = i.__SENTRY__ = i.__SENTRY__ || {}, a = s[e.SDK_VERSION] = s[e.SDK_VERSION] || {};
        return a[t2] || (a[t2] = r2());
      }, "getMainCarrier", 0, function() {
        return r(n.GLOBAL_OBJ), n.GLOBAL_OBJ;
      }, "getSentryCarrier", 0, r]);
    }, 299993, (t) => {
      "use strict";
      let e = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      t.s(["DEBUG_BUILD", 0, e]);
    }, 515370, 723880, (t) => {
      "use strict";
      let e = Object.prototype.toString;
      function n(t2, n2) {
        return e.call(t2) === `[object ${n2}]`;
      }
      function r(t2) {
        return n(t2, "String");
      }
      function i(t2) {
        return "object" == typeof t2 && null !== t2 && "__sentry_template_string__" in t2 && "__sentry_template_values__" in t2;
      }
      function s(t2) {
        return n(t2, "Object");
      }
      function a(t2, e2) {
        try {
          return t2 instanceof e2;
        } catch {
          return false;
        }
      }
      t.s(["isElement", 0, function(t2) {
        return "u" > typeof Element && a(t2, Element);
      }, "isError", 0, function(t2) {
        switch (e.call(t2)) {
          case "[object Error]":
          case "[object Exception]":
          case "[object DOMException]":
          case "[object WebAssembly.Exception]":
            return true;
          default:
            return a(t2, Error);
        }
      }, "isErrorEvent", 0, function(t2) {
        return n(t2, "ErrorEvent");
      }, "isEvent", 0, function(t2) {
        return "u" > typeof Event && a(t2, Event);
      }, "isInstanceOf", 0, a, "isParameterizedString", 0, i, "isPlainObject", 0, s, "isPrimitive", 0, function(t2) {
        return null === t2 || i(t2) || "object" != typeof t2 && "function" != typeof t2;
      }, "isRegExp", 0, function(t2) {
        return n(t2, "RegExp");
      }, "isRequest", 0, function(t2) {
        return "u" > typeof Request && a(t2, Request);
      }, "isString", 0, r, "isSyntheticEvent", 0, function(t2) {
        return s(t2) && "nativeEvent" in t2 && "preventDefault" in t2 && "stopPropagation" in t2;
      }, "isThenable", 0, function(t2) {
        return !!(t2?.then && "function" == typeof t2.then);
      }, "isVueViewModel", 0, function(t2) {
        return !!("object" == typeof t2 && null !== t2 && (t2.__isVue || t2._isVue || t2.__v_isVNode));
      }], 723880);
      let o = t.i(202775).GLOBAL_OBJ;
      t.s(["htmlTreeAsString", 0, function(t2, e2 = {}) {
        if (!t2) return "<unknown>";
        try {
          let n2, i2 = t2, s2 = [], a2 = 0, c = 0, u = Array.isArray(e2) ? e2 : e2.keyAttrs, p = !Array.isArray(e2) && e2.maxStringLength || 80;
          for (; i2 && a2++ < 5 && (n2 = function(t3, e3) {
            let n3 = [];
            if (!t3?.tagName) return "";
            if (o.HTMLElement && t3 instanceof HTMLElement && t3.dataset) {
              if (t3.dataset.sentryComponent) return t3.dataset.sentryComponent;
              if (t3.dataset.sentryElement) return t3.dataset.sentryElement;
            }
            n3.push(t3.tagName.toLowerCase());
            let i3 = e3?.length ? e3.filter((e4) => t3.getAttribute(e4)).map((e4) => [e4, t3.getAttribute(e4)]) : null;
            if (i3?.length) i3.forEach((t4) => {
              n3.push(`[${t4[0]}="${t4[1]}"]`);
            });
            else {
              t3.id && n3.push(`#${t3.id}`);
              let e4 = t3.className;
              if (e4 && r(e4)) for (let t4 of e4.split(/\s+/)) n3.push(`.${t4}`);
            }
            for (let e4 of ["aria-label", "type", "name", "title", "alt"]) {
              let r2 = t3.getAttribute(e4);
              r2 && n3.push(`[${e4}="${r2}"]`);
            }
            return n3.join("");
          }(i2, u), "html" !== n2 && (!(a2 > 1) || !(c + 3 * s2.length + n2.length >= p))); ) s2.push(n2), c += n2.length, i2 = i2.parentNode;
          return s2.reverse().join(" > ");
        } catch {
          return "<unknown>";
        }
      }], 515370);
    }, 692234, (t) => {
      "use strict";
      var e = t.i(428486), n = t.i(299993), r = t.i(202775);
      let i = {};
      function s(t2) {
        if (!("console" in r.GLOBAL_OBJ)) return t2();
        let e2 = r.GLOBAL_OBJ.console, n2 = {}, s2 = Object.keys(i);
        s2.forEach((t3) => {
          let r2 = i[t3];
          n2[t3] = e2[t3], e2[t3] = r2;
        });
        try {
          return t2();
        } finally {
          s2.forEach((t3) => {
            e2[t3] = n2[t3];
          });
        }
      }
      function a() {
        return c().enabled;
      }
      function o(t2, ...e2) {
        n.DEBUG_BUILD && a() && s(() => {
          r.GLOBAL_OBJ.console[t2](`Sentry Logger [${t2}]:`, ...e2);
        });
      }
      function c() {
        return n.DEBUG_BUILD ? (0, e.getGlobalSingleton)("loggerSettings", () => ({ enabled: false })) : { enabled: false };
      }
      t.s(["CONSOLE_LEVELS", 0, ["debug", "info", "warn", "error", "log", "assert", "trace"], "consoleSandbox", 0, s, "debug", 0, { enable: function() {
        c().enabled = true;
      }, disable: function() {
        c().enabled = false;
      }, isEnabled: a, log: function(...t2) {
        o("log", ...t2);
      }, warn: function(...t2) {
        o("warn", ...t2);
      }, error: function(...t2) {
        o("error", ...t2);
      } }, "originalConsoleMethods", 0, i]);
    }, 898299, 263749, (t) => {
      "use strict";
      let e;
      var n = t.i(299993), r = t.i(515370), i = t.i(692234), s = t.i(723880);
      function a(t2, e2, r2) {
        try {
          Object.defineProperty(t2, e2, { value: r2, writable: true, configurable: true });
        } catch {
          n.DEBUG_BUILD && i.debug.log(`Failed to add non-enumerable property "${e2}" to object`, t2);
        }
      }
      function o(t2) {
        if ((0, s.isError)(t2)) return { message: t2.message, name: t2.name, stack: t2.stack, ...u(t2) };
        if (!(0, s.isEvent)(t2)) return t2;
        {
          let e2 = { type: t2.type, target: c(t2.target), currentTarget: c(t2.currentTarget), ...u(t2) };
          return "u" > typeof CustomEvent && (0, s.isInstanceOf)(t2, CustomEvent) && (e2.detail = t2.detail), e2;
        }
      }
      function c(t2) {
        try {
          return (0, s.isElement)(t2) ? (0, r.htmlTreeAsString)(t2) : Object.prototype.toString.call(t2);
        } catch {
          return "<unknown>";
        }
      }
      function u(t2) {
        return "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2)) : {};
      }
      t.s(["addNonEnumerableProperty", 0, a, "convertToPlainObject", 0, o, "extractExceptionKeysForMessage", 0, function(t2) {
        let e2 = Object.keys(o(t2));
        return e2.sort(), e2[0] ? e2.join(", ") : "[object has no keys]";
      }, "fill", 0, function(t2, e2, r2) {
        if (!(e2 in t2)) return;
        let s2 = t2[e2];
        if ("function" != typeof s2) return;
        let o2 = r2(s2);
        "function" == typeof o2 && function(t3, e3) {
          try {
            let n2 = e3.prototype || {};
            t3.prototype = e3.prototype = n2, a(t3, "__sentry_original__", e3);
          } catch {
          }
        }(o2, s2);
        try {
          t2[e2] = o2;
        } catch {
          n.DEBUG_BUILD && i.debug.log(`Failed to replace method "${e2}" in object`, t2);
        }
      }, "getOriginalFunction", 0, function(t2) {
        return t2.__sentry_original__;
      }], 898299);
      var p = t.i(202775);
      function l(t2) {
        if (void 0 !== e) return e ? e(t2) : t2();
        let n2 = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__"), r2 = p.GLOBAL_OBJ;
        return n2 in r2 && "function" == typeof r2[n2] ? (e = r2[n2])(t2) : (e = null, t2());
      }
      t.s(["safeDateNow", 0, function() {
        return l(() => Date.now());
      }, "safeMathRandom", 0, function() {
        return l(() => Math.random());
      }, "withRandomSafeContext", 0, l], 263749);
    }, 217884, (t) => {
      "use strict";
      let e = /\(error: (.*)\)/, n = /captureMessage|captureException/;
      function r(...t2) {
        let s2 = t2.sort((t3, e2) => t3[0] - e2[0]).map((t3) => t3[1]);
        return (t3, r2 = 0, a = 0) => {
          let o = [], c = t3.split("\n");
          for (let t4 = r2; t4 < c.length; t4++) {
            let n2 = c[t4];
            n2.length > 1024 && (n2 = n2.slice(0, 1024));
            let r3 = e.test(n2) ? n2.replace(e, "$1") : n2;
            if (!r3.includes("Error: ")) {
              for (let t5 of s2) {
                let e2 = t5(r3);
                if (e2) {
                  o.push(e2);
                  break;
                }
              }
              if (o.length >= 50 + a) break;
            }
          }
          var u = o.slice(a);
          if (!u.length) return [];
          let p = Array.from(u);
          return /sentryWrapped/.test(i(p).function || "") && p.pop(), p.reverse(), n.test(i(p).function || "") && (p.pop(), n.test(i(p).function || "") && p.pop()), p.slice(0, 50).map((t4) => ({ ...t4, filename: t4.filename || i(p).filename, function: t4.function || "?" }));
        };
      }
      function i(t2) {
        return t2[t2.length - 1] || {};
      }
      let s = "<anonymous>";
      t.s(["UNKNOWN_FUNCTION", 0, "?", "createStackParser", 0, r, "getFramesFromEvent", 0, function(t2) {
        let e2 = t2.exception;
        if (e2) {
          let t3 = [];
          try {
            return e2.values.forEach((e3) => {
              e3.stacktrace.frames && t3.push(...e3.stacktrace.frames);
            }), t3;
          } catch {
          }
        }
      }, "getFunctionName", 0, function(t2) {
        try {
          if (!t2 || "function" != typeof t2) return s;
          return t2.name || s;
        } catch {
          return s;
        }
      }, "getVueInternalName", 0, function(t2) {
        return "__v_isVNode" in t2 && t2.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
      }, "normalizeStackTracePath", 0, function(t2) {
        let e2 = t2?.startsWith("file://") ? t2.slice(7) : t2;
        return e2?.match(/\/[A-Z]:/) && (e2 = e2.slice(1)), e2;
      }, "stackParserFromStackParserOptions", 0, function(t2) {
        return Array.isArray(t2) ? r(...t2) : t2;
      }]);
    }, 156833, 864592, 783418, 932164, 160634, 292817, 277212, 299247, 86154, 268654, 643548, (t) => {
      "use strict";
      let e, n;
      var r = t.i(428486), i = t.i(299993), s = t.i(898299), a = t.i(263749), o = t.i(723880), c = t.i(217884);
      function u(t2, e2 = 0) {
        return "string" != typeof t2 || 0 === e2 || t2.length <= e2 ? t2 : `${t2.slice(0, e2)}...`;
      }
      function p(t2, e2, n2 = false) {
        return !!(0, o.isString)(t2) && ((0, o.isRegExp)(e2) ? e2.test(t2) : (0, o.isString)(e2) ? n2 ? t2 === e2 : t2.includes(e2) : "function" == typeof e2 && e2(t2));
      }
      t.s(["isMatchingPattern", 0, p, "safeJoin", 0, function(t2, e2) {
        if (!Array.isArray(t2)) return "";
        let n2 = [];
        for (let e3 = 0; e3 < t2.length; e3++) {
          let r2 = t2[e3];
          try {
            (0, o.isVueViewModel)(r2) ? n2.push((0, c.getVueInternalName)(r2)) : n2.push(String(r2));
          } catch {
            n2.push("[value cannot be serialized]");
          }
        }
        return n2.join(e2);
      }, "snipLine", 0, function(t2, e2) {
        let n2 = t2, r2 = n2.length;
        if (r2 <= 150) return n2;
        e2 > r2 && (e2 = r2);
        let i2 = Math.max(e2 - 60, 0);
        i2 < 5 && (i2 = 0);
        let s2 = Math.min(i2 + 140, r2);
        return s2 > r2 - 5 && (s2 = r2), s2 === r2 && (i2 = Math.max(s2 - 140, 0)), n2 = n2.slice(i2, s2), i2 > 0 && (n2 = `'{snip} ${n2}`), s2 < r2 && (n2 += " {snip}"), n2;
      }, "stringMatchesSomePattern", 0, function(t2, e2 = [], n2 = false) {
        return e2.some((e3) => p(t2, e3, n2));
      }, "truncate", 0, u], 864592);
      var l = t.i(202775);
      function d(t2 = function() {
        let t3 = l.GLOBAL_OBJ;
        return t3.crypto || t3.msCrypto;
      }()) {
        try {
          if (t2?.randomUUID) return (0, a.withRandomSafeContext)(() => t2.randomUUID()).replace(/-/g, "");
        } catch {
        }
        return e || (e = "10000000100040008000100000000000"), e.replace(/[018]/g, (t3) => (t3 ^ (15 & 16 * (0, a.safeMathRandom)()) >> t3 / 4).toString(16));
      }
      function _(t2) {
        return t2.exception?.values?.[0];
      }
      function g() {
        return (0, a.safeDateNow)() / 1e3;
      }
      function f() {
        return (n ?? (n = function() {
          let { performance: t2 } = l.GLOBAL_OBJ;
          if (!t2?.now || !t2.timeOrigin) return g;
          let e2 = t2.timeOrigin;
          return () => (e2 + (0, a.withRandomSafeContext)(() => t2.now())) / 1e3;
        }()))();
      }
      function h(t2, e2 = {}) {
        if (e2.user && (!t2.ipAddress && e2.user.ip_address && (t2.ipAddress = e2.user.ip_address), t2.did || e2.did || (t2.did = e2.user.id || e2.user.email || e2.user.username)), t2.timestamp = e2.timestamp || f(), e2.abnormal_mechanism && (t2.abnormal_mechanism = e2.abnormal_mechanism), e2.ignoreDuration && (t2.ignoreDuration = e2.ignoreDuration), e2.sid && (t2.sid = 32 === e2.sid.length ? e2.sid : d()), void 0 !== e2.init && (t2.init = e2.init), !t2.did && e2.did && (t2.did = `${e2.did}`), "number" == typeof e2.started && (t2.started = e2.started), t2.ignoreDuration) t2.duration = void 0;
        else if ("number" == typeof e2.duration) t2.duration = e2.duration;
        else {
          let e3 = t2.timestamp - t2.started;
          t2.duration = e3 >= 0 ? e3 : 0;
        }
        e2.release && (t2.release = e2.release), e2.environment && (t2.environment = e2.environment), !t2.ipAddress && e2.ipAddress && (t2.ipAddress = e2.ipAddress), !t2.userAgent && e2.userAgent && (t2.userAgent = e2.userAgent), "number" == typeof e2.errors && (t2.errors = e2.errors), e2.status && (t2.status = e2.status);
      }
      t.s(["addExceptionMechanism", 0, function(t2, e2) {
        let n2 = _(t2);
        if (!n2) return;
        let r2 = n2.mechanism;
        if (n2.mechanism = { type: "generic", handled: true, ...r2, ...e2 }, e2 && "data" in e2) {
          let t3 = { ...r2?.data, ...e2.data };
          n2.mechanism.data = t3;
        }
      }, "addExceptionTypeValue", 0, function(t2, e2, n2) {
        let r2 = t2.exception = t2.exception || {}, i2 = r2.values = r2.values || [], s2 = i2[0] = i2[0] || {};
        s2.value || (s2.value = e2 || ""), s2.type || (s2.type = n2 || "Error");
      }, "checkOrSetAlreadyCaught", 0, function(t2) {
        if (function(t3) {
          try {
            return t3.__sentry_captured__;
          } catch {
          }
        }(t2)) return true;
        try {
          (0, s.addNonEnumerableProperty)(t2, "__sentry_captured__", true);
        } catch {
        }
        return false;
      }, "getEventDescription", 0, function(t2) {
        let { message: e2, event_id: n2 } = t2;
        if (e2) return e2;
        let r2 = _(t2);
        return r2 ? r2.type && r2.value ? `${r2.type}: ${r2.value}` : r2.type || r2.value || n2 || "<unknown>" : n2 || "<unknown>";
      }, "uuid4", 0, d], 783418), t.s(["dateTimestampInSeconds", 0, g, "timestampInSeconds", 0, f], 932164), t.s(["closeSession", 0, function(t2, e2) {
        let n2 = {};
        e2 ? n2 = { status: e2 } : "ok" === t2.status && (n2 = { status: "exited" }), h(t2, n2);
      }, "makeSession", 0, function(t2) {
        let e2 = f(), n2 = { sid: d(), init: true, timestamp: e2, started: e2, duration: 0, status: "ok", errors: 0, ignoreDuration: false, toJSON: () => {
          var t3;
          return t3 = n2, { sid: `${t3.sid}`, init: t3.init, started: new Date(1e3 * t3.started).toISOString(), timestamp: new Date(1e3 * t3.timestamp).toISOString(), status: t3.status, errors: t3.errors, did: "number" == typeof t3.did || "string" == typeof t3.did ? `${t3.did}` : void 0, duration: t3.duration, abnormal_mechanism: t3.abnormal_mechanism, attrs: { release: t3.release, environment: t3.environment, ip_address: t3.ipAddress, user_agent: t3.userAgent } };
        } };
        return t2 && h(n2, t2), n2;
      }, "updateSession", 0, h], 160634);
      var S = t.i(692234);
      function m(t2, e2, n2 = 2) {
        if (!e2 || "object" != typeof e2 || n2 <= 0) return e2;
        if (t2 && 0 === Object.keys(e2).length) return t2;
        let r2 = { ...t2 };
        for (let t3 in e2) Object.prototype.hasOwnProperty.call(e2, t3) && (r2[t3] = m(r2[t3], e2[t3], n2 - 1));
        return r2;
      }
      function E() {
        return d();
      }
      t.s(["merge", 0, m], 292817), t.s(["generateSpanId", 0, function() {
        return d().substring(16);
      }, "generateTraceId", 0, E], 277212);
      let T = "_sentrySpan";
      function y(t2, e2) {
        e2 ? (0, s.addNonEnumerableProperty)(t2, T, e2) : delete t2[T];
      }
      function b(t2) {
        return t2[T];
      }
      t.s(["_getSpanForScope", 0, b, "_setSpanForScope", 0, y], 299247);
      class I {
        constructor() {
          this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._attributes = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: E(), sampleRand: (0, a.safeMathRandom)() };
        }
        clone() {
          let t2 = new I();
          return t2._breadcrumbs = [...this._breadcrumbs], t2._tags = { ...this._tags }, t2._attributes = { ...this._attributes }, t2._extra = { ...this._extra }, t2._contexts = { ...this._contexts }, this._contexts.flags && (t2._contexts.flags = { values: [...this._contexts.flags.values] }), t2._user = this._user, t2._level = this._level, t2._session = this._session, t2._transactionName = this._transactionName, t2._fingerprint = this._fingerprint, t2._eventProcessors = [...this._eventProcessors], t2._attachments = [...this._attachments], t2._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t2._propagationContext = { ...this._propagationContext }, t2._client = this._client, t2._lastEventId = this._lastEventId, t2._conversationId = this._conversationId, y(t2, b(this)), t2;
        }
        setClient(t2) {
          this._client = t2;
        }
        setLastEventId(t2) {
          this._lastEventId = t2;
        }
        getClient() {
          return this._client;
        }
        lastEventId() {
          return this._lastEventId;
        }
        addScopeListener(t2) {
          this._scopeListeners.push(t2);
        }
        addEventProcessor(t2) {
          return this._eventProcessors.push(t2), this;
        }
        setUser(t2) {
          return this._user = t2 || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && h(this._session, { user: t2 }), this._notifyScopeListeners(), this;
        }
        getUser() {
          return this._user;
        }
        setConversationId(t2) {
          return this._conversationId = t2 || void 0, this._notifyScopeListeners(), this;
        }
        setTags(t2) {
          return this._tags = { ...this._tags, ...t2 }, this._notifyScopeListeners(), this;
        }
        setTag(t2, e2) {
          return this.setTags({ [t2]: e2 });
        }
        setAttributes(t2) {
          return this._attributes = { ...this._attributes, ...t2 }, this._notifyScopeListeners(), this;
        }
        setAttribute(t2, e2) {
          return this.setAttributes({ [t2]: e2 });
        }
        removeAttribute(t2) {
          return t2 in this._attributes && (delete this._attributes[t2], this._notifyScopeListeners()), this;
        }
        setExtras(t2) {
          return this._extra = { ...this._extra, ...t2 }, this._notifyScopeListeners(), this;
        }
        setExtra(t2, e2) {
          return this._extra = { ...this._extra, [t2]: e2 }, this._notifyScopeListeners(), this;
        }
        setFingerprint(t2) {
          return this._fingerprint = t2, this._notifyScopeListeners(), this;
        }
        setLevel(t2) {
          return this._level = t2, this._notifyScopeListeners(), this;
        }
        setTransactionName(t2) {
          return this._transactionName = t2, this._notifyScopeListeners(), this;
        }
        setContext(t2, e2) {
          return null === e2 ? delete this._contexts[t2] : this._contexts[t2] = e2, this._notifyScopeListeners(), this;
        }
        setSession(t2) {
          return t2 ? this._session = t2 : delete this._session, this._notifyScopeListeners(), this;
        }
        getSession() {
          return this._session;
        }
        update(t2) {
          if (!t2) return this;
          let e2 = "function" == typeof t2 ? t2(this) : t2, { tags: n2, attributes: r2, extra: i2, user: s2, contexts: a2, level: c2, fingerprint: u2 = [], propagationContext: p2, conversationId: l2 } = (e2 instanceof I ? e2.getScopeData() : (0, o.isPlainObject)(e2) ? t2 : void 0) || {};
          return this._tags = { ...this._tags, ...n2 }, this._attributes = { ...this._attributes, ...r2 }, this._extra = { ...this._extra, ...i2 }, this._contexts = { ...this._contexts, ...a2 }, s2 && Object.keys(s2).length && (this._user = s2), c2 && (this._level = c2), u2.length && (this._fingerprint = u2), p2 && (this._propagationContext = p2), l2 && (this._conversationId = l2), this;
        }
        clear() {
          return this._breadcrumbs = [], this._tags = {}, this._attributes = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, this._conversationId = void 0, y(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: E(), sampleRand: (0, a.safeMathRandom)() }), this._notifyScopeListeners(), this;
        }
        addBreadcrumb(t2, e2) {
          let n2 = "number" == typeof e2 ? e2 : 100;
          if (n2 <= 0) return this;
          let r2 = { timestamp: g(), ...t2, message: t2.message ? u(t2.message, 2048) : t2.message };
          return this._breadcrumbs.push(r2), this._breadcrumbs.length > n2 && (this._breadcrumbs = this._breadcrumbs.slice(-n2), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
        }
        getLastBreadcrumb() {
          return this._breadcrumbs[this._breadcrumbs.length - 1];
        }
        clearBreadcrumbs() {
          return this._breadcrumbs = [], this._notifyScopeListeners(), this;
        }
        addAttachment(t2) {
          return this._attachments.push(t2), this;
        }
        clearAttachments() {
          return this._attachments = [], this;
        }
        getScopeData() {
          return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, attributes: this._attributes, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: b(this), conversationId: this._conversationId };
        }
        setSDKProcessingMetadata(t2) {
          return this._sdkProcessingMetadata = m(this._sdkProcessingMetadata, t2, 2), this;
        }
        setPropagationContext(t2) {
          return this._propagationContext = t2, this;
        }
        getPropagationContext() {
          return this._propagationContext;
        }
        captureException(t2, e2) {
          let n2 = e2?.event_id || d();
          if (!this._client) return i.DEBUG_BUILD && S.debug.warn("No client configured on scope - will not capture exception!"), n2;
          let r2 = Error("Sentry syntheticException");
          return this._client.captureException(t2, { originalException: t2, syntheticException: r2, ...e2, event_id: n2 }, this), n2;
        }
        captureMessage(t2, e2, n2) {
          let r2 = n2?.event_id || d();
          if (!this._client) return i.DEBUG_BUILD && S.debug.warn("No client configured on scope - will not capture message!"), r2;
          let s2 = n2?.syntheticException ?? Error(t2);
          return this._client.captureMessage(t2, e2, { originalException: t2, syntheticException: s2, ...n2, event_id: r2 }, this), r2;
        }
        captureEvent(t2, e2) {
          let n2 = t2.event_id || e2?.event_id || d();
          return this._client ? this._client.captureEvent(t2, { ...e2, event_id: n2 }, this) : i.DEBUG_BUILD && S.debug.warn("No client configured on scope - will not capture event!"), n2;
        }
        _notifyScopeListeners() {
          this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach((t2) => {
            t2(this);
          }), this._notifyingListeners = false);
        }
      }
      function v() {
        return (0, r.getGlobalSingleton)("defaultCurrentScope", () => new I());
      }
      function A() {
        return (0, r.getGlobalSingleton)("defaultIsolationScope", () => new I());
      }
      t.s(["Scope", 0, I], 86154), t.s(["getDefaultCurrentScope", 0, v, "getDefaultIsolationScope", 0, A], 268654);
      let N = (t2) => t2 instanceof Promise && !t2[C], C = Symbol("chained PromiseLike"), R = (t2, e2, n2) => {
        let r2 = t2.then((t3) => (e2(t3), t3), (t3) => {
          throw n2(t3), t3;
        });
        return N(r2) && N(t2) ? r2 : x(t2, r2);
      }, x = (t2, e2) => {
        let n2 = false;
        for (let r2 in t2) {
          if (r2 in e2) continue;
          n2 = true;
          let i2 = t2[r2];
          "function" == typeof i2 ? Object.defineProperty(e2, r2, { value: (...e3) => i2.apply(t2, e3), enumerable: true, configurable: true, writable: true }) : e2[r2] = i2;
        }
        return n2 && Object.assign(e2, { [C]: true }), e2;
      };
      t.s(["chainAndCopyPromiseLike", 0, R], 643548);
      class O {
        constructor(t2, e2) {
          let n2, r2;
          n2 = t2 || new I(), r2 = e2 || new I(), this._stack = [{ scope: n2 }], this._isolationScope = r2;
        }
        withScope(t2) {
          let e2, n2 = this._pushScope();
          try {
            e2 = t2(n2);
          } catch (t3) {
            throw this._popScope(), t3;
          }
          return (0, o.isThenable)(e2) ? R(e2, () => this._popScope(), () => this._popScope()) : (this._popScope(), e2);
        }
        getClient() {
          return this.getStackTop().client;
        }
        getScope() {
          return this.getStackTop().scope;
        }
        getIsolationScope() {
          return this._isolationScope;
        }
        getStackTop() {
          return this._stack[this._stack.length - 1];
        }
        _pushScope() {
          let t2 = this.getScope().clone();
          return this._stack.push({ client: this.getClient(), scope: t2 }), t2;
        }
        _popScope() {
          return !(this._stack.length <= 1) && !!this._stack.pop();
        }
      }
      function D() {
        let t2 = (0, r.getMainCarrier)(), e2 = (0, r.getSentryCarrier)(t2);
        return e2.stack = e2.stack || new O(v(), A());
      }
      function U(t2) {
        return D().withScope(t2);
      }
      function k(t2, e2) {
        let n2 = D();
        return n2.withScope(() => (n2.getStackTop().scope = t2, e2(t2)));
      }
      function M(t2) {
        return D().withScope(() => t2(D().getIsolationScope()));
      }
      t.s(["getAsyncContextStrategy", 0, function(t2) {
        let e2 = (0, r.getSentryCarrier)(t2);
        return e2.acs ? e2.acs : { withIsolationScope: M, withScope: U, withSetScope: k, withSetIsolationScope: (t3, e3) => M(e3), getCurrentScope: () => D().getScope(), getIsolationScope: () => D().getIsolationScope() };
      }, "setAsyncContextStrategy", 0, function(t2) {
        let e2 = (0, r.getMainCarrier)();
        (0, r.getSentryCarrier)(e2).acs = t2;
      }], 156833);
    }, 919672, (t) => {
      "use strict";
      let e;
      var n = t.i(156833), r = t.i(428486), i = t.i(86154), s = t.i(277212);
      function a() {
        let t2 = (0, r.getMainCarrier)();
        return (0, n.getAsyncContextStrategy)(t2).getCurrentScope();
      }
      t.s(["getClient", 0, function() {
        return a().getClient();
      }, "getCurrentScope", 0, a, "getGlobalScope", 0, function() {
        return (0, r.getGlobalSingleton)("globalScope", () => new i.Scope());
      }, "getIsolationScope", 0, function() {
        let t2 = (0, r.getMainCarrier)();
        return (0, n.getAsyncContextStrategy)(t2).getIsolationScope();
      }, "getTraceContextFromScope", 0, function(t2) {
        let n2 = e?.();
        if (n2) return { trace_id: n2.traceId, span_id: n2.spanId };
        let { traceId: r2, parentSpanId: i2, propagationSpanId: a2 } = t2.getPropagationContext(), o = { trace_id: r2, span_id: a2 || (0, s.generateSpanId)() };
        return i2 && (o.parent_span_id = i2), o;
      }, "hasExternalPropagationContext", 0, function() {
        return void 0 !== e;
      }, "withIsolationScope", 0, function(...t2) {
        let e2 = (0, r.getMainCarrier)(), i2 = (0, n.getAsyncContextStrategy)(e2);
        if (2 === t2.length) {
          let [e3, n2] = t2;
          return e3 ? i2.withSetIsolationScope(e3, n2) : i2.withIsolationScope(n2);
        }
        return i2.withIsolationScope(t2[0]);
      }, "withScope", 0, function(...t2) {
        let e2 = (0, r.getMainCarrier)(), i2 = (0, n.getAsyncContextStrategy)(e2);
        if (2 === t2.length) {
          let [e3, n2] = t2;
          return e3 ? i2.withSetScope(e3, n2) : i2.withScope(n2);
        }
        return i2.withScope(t2[0]);
      }]);
    }, 674509, (t) => {
      "use strict";
      let e = ["auth", "token", "secret", "session", "password", "passwd", "pwd", "key", "jwt", "bearer", "sso", "saml", "csrf", "xsrf", "credentials", "set-cookie", "cookie"], n = ["x-forwarded-", "-user"];
      function r(t2) {
        return t2.replace(/-/g, "_");
      }
      function i(t2, i2, s, a, o, c) {
        var u, p;
        let l = (u = s || i2, p = a, (o ? e.some((t3) => u.includes(t3)) : [...n, ...e].some((t3) => u.includes(t3))) ? "[Filtered]" : Array.isArray(p) ? p.map((t3) => null != t3 ? String(t3) : t3).join(";") : "string" == typeof p ? p : void 0);
        null == l || (t2[`http.${c}.header.${r(i2)}${s ? `.${r(s)}` : ""}`] = l);
      }
      t.s(["headersToDict", 0, function(t2) {
        let e2 = /* @__PURE__ */ Object.create(null);
        try {
          Object.entries(t2).forEach(([t3, n2]) => {
            "string" == typeof n2 && (e2[t3] = n2);
          });
        } catch {
        }
        return e2;
      }, "httpHeadersToSpanAttributes", 0, function(t2, e2 = false, n2 = "request") {
        let r2 = {};
        try {
          Object.entries(t2).forEach(([t3, s]) => {
            if (null == s) return;
            let a = t3.toLowerCase();
            if (("cookie" === a || "set-cookie" === a) && "string" == typeof s && "" !== s) {
              let t4 = "set-cookie" === a, o = s.indexOf(";"), c = t4 && -1 !== o ? s.substring(0, o) : s;
              for (let s2 of t4 ? [c] : c.split("; ")) {
                let t5 = s2.indexOf("="), o2 = -1 !== t5 ? s2.substring(0, t5) : s2, c2 = -1 !== t5 ? s2.substring(t5 + 1) : "", u = o2.toLowerCase();
                i(r2, a, u, c2, e2, n2);
              }
            } else i(r2, a, "", s, e2, n2);
          });
        } catch {
        }
        return r2;
      }, "winterCGHeadersToDict", 0, function(t2) {
        let e2 = {};
        try {
          t2.forEach((t3, n2) => {
            "string" == typeof t3 && (e2[n2] = t3);
          });
        } catch {
        }
        return e2;
      }]);
    }, 194602, (t) => {
      "use strict";
      t.s(["GEN_AI_CONVERSATION_ID_ATTRIBUTE", 0, "gen_ai.conversation.id", "SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME", 0, "sentry.exclusive_time", "SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD", 0, "http.request.method", "SEMANTIC_ATTRIBUTE_PROFILE_ID", 0, "sentry.profile_id", "SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME", 0, "sentry.custom_span_name", "SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT", 0, "sentry.environment", "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT", 0, "sentry.measurement_unit", "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE", 0, "sentry.measurement_value", "SEMANTIC_ATTRIBUTE_SENTRY_OP", 0, "sentry.op", "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", 0, "sentry.origin", "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE", 0, "sentry.previous_trace_sample_rate", "SEMANTIC_ATTRIBUTE_SENTRY_RELEASE", 0, "sentry.release", "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", 0, "sentry.sample_rate", "SEMANTIC_ATTRIBUTE_SENTRY_SDK_NAME", 0, "sentry.sdk.name", "SEMANTIC_ATTRIBUTE_SENTRY_SDK_VERSION", 0, "sentry.sdk.version", "SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_ID", 0, "sentry.segment.id", "SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_NAME", 0, "sentry.segment.name", "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE", 0, "sentry.source", "SEMANTIC_ATTRIBUTE_URL_FULL", 0, "url.full", "SEMANTIC_ATTRIBUTE_USER_EMAIL", 0, "user.email", "SEMANTIC_ATTRIBUTE_USER_ID", 0, "user.id", "SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS", 0, "user.ip_address", "SEMANTIC_ATTRIBUTE_USER_USERNAME", 0, "user.name"]);
    }, 742485, (t) => {
      "use strict";
      var e = t.i(299993), n = t.i(692234), r = t.i(723880);
      let i = "sentry-";
      function s(t2) {
        if (t2 && ((0, r.isString)(t2) || Array.isArray(t2))) return Array.isArray(t2) ? t2.reduce((t3, e2) => (Object.entries(a(e2)).forEach(([e3, n2]) => {
          t3[e3] = n2;
        }), t3), {}) : a(t2);
      }
      function a(t2) {
        return t2.split(",").map((t3) => {
          let e2 = t3.indexOf("=");
          return -1 === e2 ? [] : [t3.slice(0, e2), t3.slice(e2 + 1)].map((t4) => {
            try {
              return decodeURIComponent(t4.trim());
            } catch {
              return;
            }
          });
        }).reduce((t3, [e2, n2]) => (e2 && n2 && (t3[e2] = n2), t3), {});
      }
      t.s(["SENTRY_BAGGAGE_KEY_PREFIX", 0, i, "baggageHeaderToDynamicSamplingContext", 0, function(t2) {
        let e2 = s(t2);
        if (!e2) return;
        let n2 = Object.entries(e2).reduce((t3, [e3, n3]) => (e3.startsWith(i) && (t3[e3.slice(i.length)] = n3), t3), {});
        return Object.keys(n2).length > 0 ? n2 : void 0;
      }, "dynamicSamplingContextToSentryBaggageHeader", 0, function(t2) {
        if (t2) {
          var r2 = Object.entries(t2).reduce((t3, [e2, n2]) => (n2 && (t3[`${i}${e2}`] = n2), t3), {});
          return 0 !== Object.keys(r2).length ? Object.entries(r2).reduce((t3, [r3, i2], s2) => {
            let a2 = `${encodeURIComponent(r3)}=${encodeURIComponent(i2)}`, o = 0 === s2 ? a2 : `${t3},${a2}`;
            return o.length > 8192 ? (e.DEBUG_BUILD && n.debug.warn(`Not adding key: ${r3} with val: ${i2} to baggage header due to exceeding baggage size limits.`), t3) : o;
          }, "") : void 0;
        }
      }, "parseBaggageHeader", 0, s]);
    }, 881437, (t) => {
      "use strict";
      var e = t.i(643548), n = t.i(723880);
      t.s(["handleCallbackErrors", 0, function(t2, r, i = () => {
      }, s = () => {
      }) {
        var a, o, c, u;
        let p;
        try {
          p = t2();
        } catch (t3) {
          throw r(t3), i(), t3;
        }
        return a = p, o = r, c = i, u = s, (0, n.isThenable)(a) ? (0, e.chainAndCopyPromiseLike)(a, (t3) => {
          c(), u(t3);
        }, (t3) => {
          o(t3), c();
        }) : (c(), u(a), a);
      }]);
    }, 580641, (t) => {
      "use strict";
      var e = t.i(919672);
      t.s(["hasSpansEnabled", 0, function(t2) {
        if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return false;
        let n = t2 || (0, e.getClient)()?.getOptions();
        return !!n && (null != n.tracesSampleRate || !!n.tracesSampler);
      }]);
    }, 242307, 433029, (t) => {
      "use strict";
      var e = t.i(299993), n = t.i(692234), r = t.i(864592);
      function i(t2) {
        n.debug.log(`Ignoring span ${t2.op} - ${t2.description} because it matches \`ignoreSpans\`.`);
      }
      t.s(["reparentChildSpans", 0, function(t2, e2) {
        let n2 = e2.parent_span_id, r2 = e2.span_id;
        if (n2) for (let e3 of t2) e3.parent_span_id === r2 && (e3.parent_span_id = n2);
      }, "shouldIgnoreSpan", 0, function(t2, n2) {
        if (!n2?.length || !t2.description) return false;
        for (let a of n2) {
          var s;
          if ("string" == typeof (s = a) || s instanceof RegExp) {
            if ((0, r.isMatchingPattern)(t2.description, a)) return e.DEBUG_BUILD && i(t2), true;
            continue;
          }
          if (!a.name && !a.op) continue;
          let n3 = !a.name || (0, r.isMatchingPattern)(t2.description, a.name), o = !a.op || t2.op && (0, r.isMatchingPattern)(t2.op, a.op);
          if (n3 && o) return e.DEBUG_BUILD && i(t2), true;
        }
        return false;
      }], 242307), t.s(["hasSpanStreamingEnabled", 0, function(t2) {
        return "stream" === t2.getOptions().traceLifecycle;
      }], 433029);
    }, 762117, (t) => {
      "use strict";
      t.s(["parseSampleRate", 0, function(t2) {
        if ("boolean" == typeof t2) return Number(t2);
        let e = "string" == typeof t2 ? parseFloat(t2) : t2;
        if (!("number" != typeof e || isNaN(e)) && !(e < 0) && !(e > 1)) return e;
      }]);
    }, 511913, (t) => {
      "use strict";
      var e = t.i(723880);
      function n(t2) {
        return "string" == typeof t2 ? 2 * t2.length : "boolean" == typeof t2 ? 4 : 8 * ("number" == typeof t2);
      }
      t.s(["estimateTypedAttributesSizeInBytes", 0, function(t2) {
        if (!t2) return 0;
        let r = 0;
        for (let [i, s] of Object.entries(t2)) {
          r += 2 * i.length, r += 2 * s.type.length, r += (s.unit?.length ?? 0) * 2;
          let t3 = s.value;
          Array.isArray(t3) ? r += n(t3[0]) * t3.length : (0, e.isPrimitive)(t3) ? r += n(t3) : r += 100;
        }
        return r;
      }, "serializeAttributes", 0, function(t2, e2 = false) {
        let n2 = {};
        for (let [r, i] of Object.entries(t2 ?? {})) {
          let t3 = function(t4, e3) {
            let { value: n3, unit: r2 } = "object" == typeof t4 && null != t4 && !Array.isArray(t4) && Object.keys(t4).includes("value") ? t4 : { value: t4, unit: void 0 }, i2 = function(t5) {
              let e4 = "string" == typeof t5 ? "string" : "boolean" == typeof t5 ? "boolean" : "number" != typeof t5 || Number.isNaN(t5) ? null : Number.isInteger(t5) ? "integer" : "double";
              if (e4) return { value: t5, type: e4 };
            }(n3), s = r2 && "string" == typeof r2 ? { unit: r2 } : {};
            if (i2) return { ...i2, ...s };
            if (!e3 || "skip-undefined" === e3 && void 0 === n3) return;
            let a = "";
            try {
              a = JSON.stringify(n3) ?? "";
            } catch {
            }
            return { value: a, type: "string", ...s };
          }(i, e2);
          t3 && (n2[r] = t3);
        }
        return n2;
      }]);
    }, 780202, 276420, 790259, (t) => {
      "use strict";
      function e(t2) {
        if (t2 < 400 && t2 >= 100) return { code: 1 };
        if (t2 >= 400 && t2 < 500) switch (t2) {
          case 401:
            return { code: 2, message: "unauthenticated" };
          case 403:
            return { code: 2, message: "permission_denied" };
          case 404:
            return { code: 2, message: "not_found" };
          case 409:
            return { code: 2, message: "already_exists" };
          case 413:
            return { code: 2, message: "failed_precondition" };
          case 429:
            return { code: 2, message: "resource_exhausted" };
          case 499:
            return { code: 2, message: "cancelled" };
          default:
            return { code: 2, message: "invalid_argument" };
        }
        if (t2 >= 500 && t2 < 600) switch (t2) {
          case 501:
            return { code: 2, message: "unimplemented" };
          case 503:
            return { code: 2, message: "unavailable" };
          case 504:
            return { code: 2, message: "deadline_exceeded" };
        }
        return { code: 2, message: "internal_error" };
      }
      t.s(["SPAN_STATUS_ERROR", 0, 2, "SPAN_STATUS_OK", 0, 1, "SPAN_STATUS_UNSET", 0, 0, "getSpanStatusFromHttpCode", 0, e, "setHttpStatus", 0, function(t2, n2) {
        t2.setAttribute("http.response.status_code", n2);
        let r2 = e(n2);
        "unknown_error" !== r2.message && t2.setStatus(r2);
      }], 780202);
      var n = t.i(898299), r = t.i(202775);
      function i(t2) {
        try {
          let e2 = r.GLOBAL_OBJ.WeakRef;
          if ("function" == typeof e2) return new e2(t2);
        } catch {
        }
        return t2;
      }
      function s(t2) {
        if (t2) {
          if ("object" == typeof t2 && "deref" in t2 && "function" == typeof t2.deref) try {
            return t2.deref();
          } catch {
            return;
          }
          return t2;
        }
      }
      t.s(["derefWeakRef", 0, s, "makeWeakRef", 0, i], 276420);
      let a = "_sentryScope", o = "_sentryIsolationScope";
      t.s(["getCapturedScopesOnSpan", 0, function(t2) {
        return { scope: t2[a], isolationScope: s(t2[o]) };
      }, "setCapturedScopesOnSpan", 0, function(t2, e2, r2) {
        t2 && ((0, n.addNonEnumerableProperty)(t2, o, i(r2)), (0, n.addNonEnumerableProperty)(t2, a, e2));
      }], 790259);
    }, 154877, (t) => {
      "use strict";
      var e = t.i(299993), n = t.i(692234);
      let r = /^o(\d+)\./, i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
      function s(t2) {
        return { protocol: t2.protocol, publicKey: t2.publicKey || "", pass: t2.pass || "", host: t2.host, port: t2.port || "", path: t2.path || "", projectId: t2.projectId };
      }
      t.s(["dsnToString", 0, function(t2, e2 = false) {
        let { host: n2, path: r2, pass: i2, port: s2, projectId: a, protocol: o, publicKey: c } = t2;
        return `${o}://${c}${e2 && i2 ? `:${i2}` : ""}@${n2}${s2 ? `:${s2}` : ""}/${r2 ? `${r2}/` : r2}${a}`;
      }, "extractOrgIdFromClient", 0, function(t2) {
        let e2, n2 = t2.getOptions(), { host: i2 } = t2.getDsn() || {};
        if (n2.orgId) e2 = String(n2.orgId);
        else {
          let t3;
          i2 && (t3 = i2.match(r), e2 = t3?.[1]);
        }
        return e2;
      }, "makeDsn", 0, function(t2) {
        let r2 = "string" == typeof t2 ? function(t3) {
          let e2 = i.exec(t3);
          if (!e2) return void (0, n.consoleSandbox)(() => {
            console.error(`Invalid Sentry Dsn: ${t3}`);
          });
          let [r3, a, o = "", c = "", u = "", p = ""] = e2.slice(1), l = "", d = p, _ = d.split("/");
          if (_.length > 1 && (l = _.slice(0, -1).join("/"), d = _.pop()), d) {
            let t4 = d.match(/^\d+/);
            t4 && (d = t4[0]);
          }
          return s({ host: c, pass: o, path: l, projectId: d, port: u, protocol: r3, publicKey: a });
        }(t2) : s(t2);
        if (r2 && function(t3) {
          if (!e.DEBUG_BUILD) return true;
          let { port: r3, projectId: i2, protocol: s2 } = t3;
          return !["protocol", "publicKey", "host", "projectId"].find((e2) => !t3[e2] && (n.debug.error(`Invalid Sentry Dsn: ${e2} missing`), true)) && (i2.match(/^\d+$/) ? "http" !== s2 && "https" !== s2 ? (n.debug.error(`Invalid Sentry Dsn: Invalid protocol ${s2}`), false) : !(r3 && isNaN(parseInt(r3, 10))) || (n.debug.error(`Invalid Sentry Dsn: Invalid port ${r3}`), false) : (n.debug.error(`Invalid Sentry Dsn: Invalid projectId ${i2}`), false));
        }(r2)) return r2;
      }]);
    }, 386217, 736926, (t) => {
      "use strict";
      var e = t.i(156833), n = t.i(511913), r = t.i(428486), i = t.i(919672), s = t.i(194602), a = t.i(780202), o = t.i(790259), c = t.i(898299), u = t.i(277212), p = t.i(932164), l = t.i(692234), d = t.i(742485), _ = t.i(154877), g = t.i(762117), f = t.i(263749);
      let h = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
      function S(t2 = (0, u.generateTraceId)(), e2 = (0, u.generateSpanId)(), n2) {
        let r2 = "";
        return void 0 !== n2 && (r2 = n2 ? "-1" : "-0"), `${t2}-${e2}${r2}`;
      }
      function m(t2 = (0, u.generateTraceId)(), e2 = (0, u.generateSpanId)(), n2) {
        return `00-${t2}-${e2}-${n2 ? "01" : "00"}`;
      }
      t.s(["TRACEPARENT_REGEXP", 0, h, "generateSentryTraceHeader", 0, S, "generateTraceparentHeader", 0, m, "propagationContextFromHeaders", 0, function(t2, e2) {
        let n2 = function(t3) {
          let e3;
          if (!t3) return;
          let n3 = t3.match(h);
          if (n3) return "1" === n3[3] ? e3 = true : "0" === n3[3] && (e3 = false), { traceId: n3[1], parentSampled: e3, parentSpanId: n3[2] };
        }(t2), r2 = (0, d.baggageHeaderToDynamicSamplingContext)(e2);
        if (!n2?.traceId) return { traceId: (0, u.generateTraceId)(), sampleRand: (0, f.safeMathRandom)() };
        let i2 = function(t3, e3) {
          let n3 = (0, g.parseSampleRate)(e3?.sample_rand);
          if (void 0 !== n3) return n3;
          let r3 = (0, g.parseSampleRate)(e3?.sample_rate);
          return r3 && t3?.parentSampled !== void 0 ? t3.parentSampled ? (0, f.safeMathRandom)() * r3 : r3 + (0, f.safeMathRandom)() * (1 - r3) : (0, f.safeMathRandom)();
        }(n2, r2);
        r2 && (r2.sample_rand = i2.toString());
        let { traceId: s2, parentSpanId: a2, parentSampled: o2 } = n2;
        return { traceId: s2, parentSpanId: a2, sampled: o2, dsc: r2 || {}, sampleRand: i2 };
      }, "shouldContinueTrace", 0, function(t2, e2) {
        let n2 = (0, _.extractOrgIdFromClient)(t2);
        return e2 && n2 && e2 !== n2 ? (l.debug.log(`Won't continue trace because org IDs don't match (incoming baggage: ${e2}, SDK options: ${n2})`), false) : !t2.getOptions().strictTraceContinuation || (!e2 || !!n2) && (!!e2 || !n2) || (l.debug.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${e2}, Sentry client: ${n2})`), false);
      }], 736926);
      var E = t.i(299247);
      let T = false;
      function y(t2) {
        return t2 && t2.length > 0 ? t2.map(({ context: { spanId: t3, traceId: e2, traceFlags: n2, ...r2 }, attributes: i2 }) => ({ span_id: t3, trace_id: e2, sampled: 1 === n2, attributes: i2, ...r2 })) : void 0;
      }
      function b(t2) {
        return t2?.length ? t2.map(({ context: { spanId: t3, traceId: e2, traceFlags: n2 }, attributes: r2 }) => ({ span_id: t3, trace_id: e2, sampled: 1 === n2, attributes: r2 })) : void 0;
      }
      function I(t2) {
        return "number" == typeof t2 ? v(t2) : Array.isArray(t2) ? t2[0] + t2[1] / 1e9 : t2 instanceof Date ? v(t2.getTime()) : (0, p.timestampInSeconds)();
      }
      function v(t2) {
        return t2 > 9999999999 ? t2 / 1e3 : t2;
      }
      function A(t2) {
        if (R(t2)) return t2.getSpanJSON();
        let { spanId: e2, traceId: n2 } = t2.spanContext();
        if (C(t2)) {
          let { attributes: r2, startTime: i2, name: a2, endTime: o2, status: c2, links: u2 } = t2;
          return { span_id: e2, trace_id: n2, data: r2, description: a2, parent_span_id: N(t2), start_timestamp: I(i2), timestamp: I(o2) || void 0, status: O(c2), op: r2[s.SEMANTIC_ATTRIBUTE_SENTRY_OP], origin: r2[s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], links: y(u2) };
        }
        return { span_id: e2, trace_id: n2, start_timestamp: 0, data: {} };
      }
      function N(t2) {
        return "parentSpanId" in t2 ? t2.parentSpanId : "parentSpanContext" in t2 ? t2.parentSpanContext?.spanId : void 0;
      }
      function C(t2) {
        return !!t2.attributes && !!t2.startTime && !!t2.name && !!t2.endTime && !!t2.status;
      }
      function R(t2) {
        return "function" == typeof t2.getSpanJSON;
      }
      function x(t2) {
        let { traceFlags: e2 } = t2.spanContext();
        return 1 === e2;
      }
      function O(t2) {
        if (t2 && t2.code !== a.SPAN_STATUS_UNSET) return t2.code === a.SPAN_STATUS_OK ? "ok" : t2.message || "internal_error";
      }
      function D(t2) {
        return t2 && t2.code !== a.SPAN_STATUS_OK && t2.code !== a.SPAN_STATUS_UNSET && "cancelled" !== t2.message ? "error" : "ok";
      }
      let U = "_sentryChildSpans", k = "_sentryRootSpan";
      function M(t2) {
        return t2[k] || t2;
      }
      t.s(["INTERNAL_getSegmentSpan", 0, M, "TRACE_FLAG_NONE", 0, 0, "TRACE_FLAG_SAMPLED", 0, 1, "addChildSpanToSpan", 0, function(t2, e2) {
        let n2 = t2[k] || t2;
        (0, c.addNonEnumerableProperty)(e2, k, n2), t2[U] ? t2[U].add(e2) : (0, c.addNonEnumerableProperty)(t2, U, /* @__PURE__ */ new Set([e2]));
      }, "convertSpanLinksForEnvelope", 0, y, "getActiveSpan", 0, function() {
        let t2 = (0, r.getMainCarrier)(), n2 = (0, e.getAsyncContextStrategy)(t2);
        return n2.getActiveSpan ? n2.getActiveSpan() : (0, E._getSpanForScope)((0, i.getCurrentScope)());
      }, "getRootSpan", 0, M, "getSimpleStatusMessage", 0, D, "getSpanDescendants", 0, function(t2) {
        let e2 = /* @__PURE__ */ new Set();
        return !function t3(n2) {
          if (!e2.has(n2) && x(n2)) for (let r2 of (e2.add(n2), n2[U] ? Array.from(n2[U]) : [])) t3(r2);
        }(t2), Array.from(e2);
      }, "getStatusMessage", 0, O, "getStreamedSpanLinks", 0, b, "showSpanDropWarning", 0, function() {
        T || ((0, l.consoleSandbox)(() => {
          console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
        }), T = true);
      }, "spanIsSampled", 0, x, "spanTimeInputToSeconds", 0, I, "spanToJSON", 0, A, "spanToStreamedSpanJSON", 0, function(t2) {
        if (R(t2)) return t2.getStreamedSpanJSON();
        let { spanId: e2, traceId: n2 } = t2.spanContext();
        if (C(t2)) {
          let { attributes: r2, startTime: i2, name: s2, endTime: a2, status: o2, links: c2 } = t2;
          return { name: s2, span_id: e2, trace_id: n2, parent_span_id: N(t2), start_timestamp: I(i2), end_timestamp: I(a2), is_segment: t2 === M(t2), status: D(o2), attributes: r2, links: b(c2) };
        }
        return { span_id: e2, trace_id: n2, start_timestamp: 0, name: "", end_timestamp: 0, status: "ok", is_segment: t2 === M(t2) };
      }, "spanToTraceContext", 0, function(t2) {
        let { spanId: e2, traceId: n2, isRemote: r2 } = t2.spanContext(), i2 = r2 ? e2 : A(t2).parent_span_id, s2 = (0, o.getCapturedScopesOnSpan)(t2).scope;
        return { parent_span_id: i2, span_id: r2 ? s2?.getPropagationContext().propagationSpanId || (0, u.generateSpanId)() : e2, trace_id: n2 };
      }, "spanToTraceHeader", 0, function(t2) {
        let { traceId: e2, spanId: n2 } = t2.spanContext();
        return S(e2, n2, x(t2));
      }, "spanToTraceparentHeader", 0, function(t2) {
        let { traceId: e2, spanId: n2 } = t2.spanContext();
        return m(e2, n2, x(t2));
      }, "spanToTransactionTraceContext", 0, function(t2) {
        let { spanId: e2, traceId: n2 } = t2.spanContext(), { data: r2, op: i2, parent_span_id: s2, status: a2, origin: o2, links: c2 } = A(t2);
        return { parent_span_id: s2, span_id: e2, trace_id: n2, data: r2, op: i2, status: a2, origin: o2, links: c2 };
      }, "streamedSpanJsonToSerializedSpan", 0, function(t2) {
        return { ...t2, attributes: (0, n.serializeAttributes)(t2.attributes), links: t2.links?.map((t3) => ({ ...t3, attributes: (0, n.serializeAttributes)(t3.attributes) })) };
      }], 386217);
    }, 26996, 509967, (t) => {
      "use strict";
      let e = "production";
      t.s(["DEFAULT_ENVIRONMENT", 0, e], 509967);
      var n = t.i(919672), r = t.i(194602), i = t.i(742485), s = t.i(154877), a = t.i(580641), o = t.i(898299), c = t.i(386217), u = t.i(790259);
      let p = "_frozenDsc";
      function l(t2, n2) {
        let r2 = n2.getOptions(), { publicKey: i2 } = n2.getDsn() || {}, a2 = { environment: r2.environment || e, release: r2.release, public_key: i2, trace_id: t2, org_id: (0, s.extractOrgIdFromClient)(n2) };
        return n2.emit("createDsc", a2), a2;
      }
      t.s(["freezeDscOnSpan", 0, function(t2, e2) {
        (0, o.addNonEnumerableProperty)(t2, p, e2);
      }, "getDynamicSamplingContextFromScope", 0, function(t2, e2) {
        let n2 = e2.getPropagationContext();
        return n2.dsc || l(n2.traceId, t2);
      }, "getDynamicSamplingContextFromSpan", 0, function(t2) {
        let e2 = (0, n.getClient)();
        if (!e2) return {};
        let s2 = (0, c.getRootSpan)(t2), o2 = (0, c.spanToJSON)(s2), d = o2.data, _ = s2.spanContext().traceState, g = _?.get("sentry.sample_rate") ?? d[r.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE] ?? d[r.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE];
        function f(t3) {
          return ("number" == typeof g || "string" == typeof g) && (t3.sample_rate = `${g}`), t3;
        }
        let h = s2[p];
        if (h) return f(h);
        let S = _?.get("sentry.dsc"), m = S && (0, i.baggageHeaderToDynamicSamplingContext)(S);
        if (m) return f(m);
        let E = l(t2.spanContext().traceId, e2), T = d[r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] ?? d["sentry.span.source"], y = o2.description;
        return "url" !== T && y && (E.transaction = y), (0, a.hasSpansEnabled)() && (E.sampled = String((0, c.spanIsSampled)(s2)), E.sample_rand = _?.get("sentry.sample_rand") ?? (0, u.getCapturedScopesOnSpan)(s2).scope?.getPropagationContext().sampleRand.toString()), f(E), e2.emit("createDsc", E, s2), E;
      }], 26996);
    }, 482782, 459827, 35759, 349063, 702940, 309302, 720444, (t) => {
      "use strict";
      var e = t.i(299993), n = t.i(692234), r = t.i(386217);
      t.s(["logSpanEnd", 0, function(t2) {
        if (!e.DEBUG_BUILD) return;
        let { description: i2 = "< unknown name >", op: s2 = "< unknown op >" } = (0, r.spanToJSON)(t2), { spanId: a2 } = t2.spanContext(), o2 = (0, r.getRootSpan)(t2) === t2, c2 = `[Tracing] Finishing "${s2}" ${o2 ? "root " : ""}span "${i2}" with ID ${a2}`;
        n.debug.log(c2);
      }, "logSpanStart", 0, function(t2) {
        if (!e.DEBUG_BUILD) return;
        let { description: i2 = "< unknown name >", op: s2 = "< unknown op >", parent_span_id: a2 } = (0, r.spanToJSON)(t2), { spanId: o2 } = t2.spanContext(), c2 = (0, r.spanIsSampled)(t2), u2 = (0, r.getRootSpan)(t2), p2 = u2 === t2, l2 = `[Tracing] Starting ${c2 ? "sampled" : "unsampled"} ${p2 ? "root " : ""}span`, d2 = [`op: ${s2}`, `name: ${i2}`, `ID: ${o2}`];
        if (a2 && d2.push(`parent ID: ${a2}`), !p2) {
          let { op: t3, description: e2 } = (0, r.spanToJSON)(u2);
          d2.push(`root ID: ${u2.spanContext().spanId}`), t3 && d2.push(`root op: ${t3}`), e2 && d2.push(`root description: ${e2}`);
        }
        n.debug.log(`${l2}
  ${d2.join("\n  ")}`);
      }], 482782);
      var i = t.i(580641), s = t.i(762117);
      t.s(["sampleSpan", 0, function(t2, r2, a2) {
        let o2, c2;
        if (!(0, i.hasSpansEnabled)(t2)) return [false];
        "function" == typeof t2.tracesSampler ? (o2 = t2.tracesSampler({ ...r2, inheritOrSampleWith: (t3) => "number" == typeof r2.parentSampleRate ? r2.parentSampleRate : "boolean" == typeof r2.parentSampled ? Number(r2.parentSampled) : t3 }), c2 = true) : void 0 !== r2.parentSampled ? o2 = r2.parentSampled : void 0 !== t2.tracesSampleRate && (o2 = t2.tracesSampleRate, c2 = true);
        let u2 = (0, s.parseSampleRate)(o2);
        if (void 0 === u2) return e.DEBUG_BUILD && n.debug.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o2)} of type ${JSON.stringify(typeof o2)}.`), [false];
        if (!u2) return e.DEBUG_BUILD && n.debug.log(`[Tracing] Discarding transaction because ${"function" == typeof t2.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [false, u2, c2];
        let p2 = a2 < u2;
        return !p2 && e.DEBUG_BUILD && n.debug.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(o2)})`), [p2, u2, c2];
      }], 459827);
      var a = t.i(277212);
      t.s(["SentryNonRecordingSpan", 0, class {
        constructor(t2 = {}) {
          this._traceId = t2.traceId || (0, a.generateTraceId)(), this._spanId = t2.spanId || (0, a.generateSpanId)(), this.dropReason = t2.dropReason;
        }
        spanContext() {
          return { spanId: this._spanId, traceId: this._traceId, traceFlags: r.TRACE_FLAG_NONE };
        }
        end(t2) {
        }
        setAttribute(t2, e2) {
          return this;
        }
        setAttributes(t2) {
          return this;
        }
        setStatus(t2) {
          return this;
        }
        updateName(t2) {
          return this;
        }
        isRecording() {
          return false;
        }
        addEvent(t2, e2, n2) {
          return this;
        }
        addLink(t2) {
          return this;
        }
        addLinks(t2) {
          return this;
        }
        recordException(t2, e2) {
        }
      }], 35759);
      var o = t.i(26996), c = t.i(898299);
      function u(t2) {
        return !!t2 && "function" == typeof t2 && "_streamed" in t2 && !!t2._streamed;
      }
      t.s(["isStreamedBeforeSendSpanCallback", 0, u], 349063);
      var p = t.i(154877), l = t.i(428486), d = t.i(723880), _ = t.i(217884);
      function g(e2, n2 = 100, r2 = Infinity) {
        try {
          return function e3(n3, r3, i2 = Infinity, s2 = Infinity, a2 = /* @__PURE__ */ function() {
            let t2 = /* @__PURE__ */ new WeakSet();
            return [function(e4) {
              return !!t2.has(e4) || (t2.add(e4), false);
            }, function(e4) {
              t2.delete(e4);
            }];
          }()) {
            let [o2, u2] = a2;
            if (null == r3 || ["boolean", "string"].includes(typeof r3) || "number" == typeof r3 && Number.isFinite(r3)) return r3;
            let p2 = function(e4, n4) {
              try {
                var r4;
                let i3;
                if ("domain" === e4 && n4 && "object" == typeof n4 && n4._events) return "[Domain]";
                if ("domainEmitter" === e4) return "[DomainEmitter]";
                if (n4 === t.g) return "[Global]";
                if ("u" > typeof document && n4 === document) return "[Document]";
                if ((0, d.isVueViewModel)(n4)) return (0, _.getVueInternalName)(n4);
                if ((0, d.isSyntheticEvent)(n4)) return "[SyntheticEvent]";
                if ("number" == typeof n4 && !Number.isFinite(n4)) return `[${n4}]`;
                if ("function" == typeof n4) return `[Function: ${(0, _.getFunctionName)(n4)}]`;
                if ("symbol" == typeof n4) return `[${String(n4)}]`;
                if ("bigint" == typeof n4) return `[BigInt: ${String(n4)}]`;
                let s3 = (r4 = n4, i3 = Object.getPrototypeOf(r4), i3?.constructor ? i3.constructor.name : "null prototype");
                if (/^HTML(\w*)Element$/.test(s3)) return `[HTMLElement: ${s3}]`;
                return `[object ${s3}]`;
              } catch (t2) {
                return `**non-serializable** (${t2})`;
              }
            }(n3, r3);
            if (!p2.startsWith("[object ")) return p2;
            if (r3.__sentry_skip_normalization__) return r3;
            let l2 = "number" == typeof r3.__sentry_override_normalization_depth__ ? r3.__sentry_override_normalization_depth__ : i2;
            if (0 === l2) return p2.replace("object ", "");
            if (o2(r3)) return "[Circular ~]";
            if (r3 && "function" == typeof r3.toJSON) try {
              let t2 = r3.toJSON();
              return e3("", t2, l2 - 1, s2, a2);
            } catch {
            }
            let g2 = Array.isArray(r3) ? [] : {}, f2 = 0, h2 = (0, c.convertToPlainObject)(r3);
            for (let t2 in h2) {
              if (!Object.prototype.hasOwnProperty.call(h2, t2)) continue;
              if (f2 >= s2) {
                g2[t2] = "[MaxProperties ~]";
                break;
              }
              let n4 = h2[t2];
              g2[t2] = e3(t2, n4, l2 - 1, s2, a2), f2++;
            }
            return u2(r3), g2;
          }("", e2, n2, r2);
        } catch (t2) {
          return { ERROR: `**non-serializable** (${t2})` };
        }
      }
      t.s(["normalize", 0, g, "normalizeToSize", 0, function t2(e2, n2 = 3, r2 = 102400) {
        let i2 = g(e2, n2);
        return ~-encodeURI(JSON.stringify(i2)).split(/%..|./).length > r2 ? t2(e2, n2 - 1, r2) : i2;
      }], 702940);
      var f = t.i(202775);
      function h(t2, e2 = []) {
        return [t2, e2];
      }
      function S(t2, e2) {
        for (let n2 of t2[1]) {
          let t3 = n2[0].type;
          if (e2(n2, t3)) return true;
        }
        return false;
      }
      function m(t2) {
        let e2 = (0, l.getSentryCarrier)(f.GLOBAL_OBJ);
        return e2.encodePolyfill ? e2.encodePolyfill(t2) : new TextEncoder().encode(t2);
      }
      function E(t2) {
        return [{ type: "span" }, t2];
      }
      let T = { sessions: "session", event: "error", client_report: "internal", user_report: "default", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", raw_security: "security", log: "log_item", trace_metric: "metric" };
      function y(t2) {
        if (!t2?.sdk) return;
        let { name: e2, version: n2 } = t2.sdk;
        return { name: e2, version: n2 };
      }
      function b(t2, e2, n2, r2) {
        let i2 = t2.sdkProcessingMetadata?.dynamicSamplingContext;
        return { event_id: t2.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...e2 && { sdk: e2 }, ...!!n2 && r2 && { dsn: (0, p.dsnToString)(r2) }, ...i2 && { trace: i2 } };
      }
      t.s(["addItemToEnvelope", 0, function(t2, e2) {
        let [n2, r2] = t2;
        return [n2, [...r2, e2]];
      }, "createAttachmentEnvelopeItem", 0, function(t2) {
        let e2 = "string" == typeof t2.data ? m(t2.data) : t2.data;
        return [{ type: "attachment", length: e2.length, filename: t2.filename, content_type: t2.contentType, attachment_type: t2.attachmentType }, e2];
      }, "createEnvelope", 0, h, "createEventEnvelopeHeaders", 0, b, "createSpanEnvelopeItem", 0, E, "envelopeContainsItemType", 0, function(t2, e2) {
        return S(t2, (t3, n2) => e2.includes(n2));
      }, "envelopeItemTypeToDataCategory", 0, function(t2) {
        return t2 in T ? T[t2] : t2;
      }, "forEachEnvelopeItem", 0, S, "getSdkMetadataForEnvelopeHeader", 0, y, "serializeEnvelope", 0, function(t2) {
        let [e2, n2] = t2, r2 = JSON.stringify(e2);
        function i2(t3) {
          "string" == typeof r2 ? r2 = "string" == typeof t3 ? r2 + t3 : [m(r2), t3] : r2.push("string" == typeof t3 ? m(t3) : t3);
        }
        for (let t3 of n2) {
          let [e3, n3] = t3;
          if (i2(`
${JSON.stringify(e3)}
`), "string" == typeof n3 || n3 instanceof Uint8Array) i2(n3);
          else {
            let t4;
            try {
              t4 = JSON.stringify(n3);
            } catch {
              t4 = JSON.stringify(g(n3));
            }
            i2(t4);
          }
        }
        return "string" == typeof r2 ? r2 : function(t3) {
          let e3 = new Uint8Array(t3.reduce((t4, e4) => t4 + e4.length, 0)), n3 = 0;
          for (let r3 of t3) e3.set(r3, n3), n3 += r3.length;
          return e3;
        }(r2);
      }], 309302);
      var I = t.i(242307);
      t.s(["createEventEnvelope", 0, function(t2, e2, n2, r2) {
        let i2 = y(n2), s2 = t2.type && "replay_event" !== t2.type ? t2.type : "event";
        !function(t3, e3) {
          if (!e3) return;
          let n3 = t3.sdk || {};
          t3.sdk = { ...n3, name: n3.name || e3.name, version: n3.version || e3.version, integrations: [...t3.sdk?.integrations || [], ...e3.integrations || []], packages: [...t3.sdk?.packages || [], ...e3.packages || []], settings: t3.sdk?.settings || e3.settings ? { ...t3.sdk?.settings, ...e3.settings } : void 0 };
        }(t2, n2?.sdk);
        let a2 = b(t2, i2, r2, e2);
        return delete t2.sdkProcessingMetadata, h(a2, [[{ type: s2 }, t2]]);
      }, "createSessionEnvelope", 0, function(t2, e2, n2, r2) {
        let i2 = y(n2);
        return h({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i2 && { sdk: i2 }, ...!!r2 && e2 && { dsn: (0, p.dsnToString)(e2) } }, ["aggregates" in t2 ? [{ type: "sessions" }, t2] : [{ type: "session" }, t2.toJSON()]]);
      }, "createSpanEnvelope", 0, function(t2, e2) {
        let n2 = (0, o.getDynamicSamplingContextFromSpan)(t2[0]), i2 = e2?.getDsn(), s2 = e2?.getOptions().tunnel, a2 = { sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...!!n2.trace_id && !!n2.public_key && { trace: n2 }, ...!!s2 && i2 && { dsn: (0, p.dsnToString)(i2) } }, { beforeSendSpan: c2, ignoreSpans: l2 } = e2?.getOptions() || {}, d2 = l2?.length ? t2.filter((t3) => !(0, I.shouldIgnoreSpan)((0, r.spanToJSON)(t3), l2)) : t2, _2 = t2.length - d2.length;
        _2 && e2?.recordDroppedEvent("before_send", "span", _2);
        let g2 = c2 ? (t3) => {
          let e3 = (0, r.spanToJSON)(t3), n3 = u(c2) ? e3 : c2(e3);
          return n3 || ((0, r.showSpanDropWarning)(), e3);
        } : r.spanToJSON, f2 = [];
        for (let t3 of d2) {
          let e3 = g2(t3);
          e3 && f2.push(E(e3));
        }
        return h(a2, f2);
      }], 720444);
    }, 981379, (t) => {
      "use strict";
      t.i(299993);
      var e = t.i(194602);
      t.i(692234), t.i(386217), t.s(["timedEventsToMeasurements", 0, function(t2) {
        if (!t2 || 0 === t2.length) return;
        let n = {};
        return t2.forEach((t3) => {
          let r = t3.attributes || {}, i = r[e.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT], s = r[e.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
          "string" == typeof i && "number" == typeof s && (n[t3.name] = { value: s, unit: i });
        }), n;
      }]);
    }, 570751, 610615, 787825, 272465, 907894, (t) => {
      "use strict";
      let e, n, r, i;
      var s = t.i(919672), a = t.i(299993);
      t.i(160634);
      var o = t.i(156833), c = t.i(428486), u = t.i(194602);
      t.i(742485);
      var p = t.i(692234);
      t.i(881437);
      var l = t.i(580641), d = t.i(242307), _ = t.i(433029), g = t.i(762117), f = t.i(277212), h = t.i(263749), S = t.i(299247), m = t.i(386217);
      t.i(736926);
      var E = t.i(26996), T = t.i(482782), y = t.i(459827), b = t.i(35759), I = t.i(720444), v = t.i(932164), A = t.i(981379), N = t.i(790259);
      class C {
        constructor(t2 = {}) {
          this._traceId = t2.traceId || (0, f.generateTraceId)(), this._spanId = t2.spanId || (0, f.generateSpanId)(), this._startTime = t2.startTimestamp || (0, v.timestampInSeconds)(), this._links = t2.links, this._attributes = {}, this.setAttributes({ [u.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual", [u.SEMANTIC_ATTRIBUTE_SENTRY_OP]: t2.op, ...t2.attributes }), this._name = t2.name, t2.parentSpanId && (this._parentSpanId = t2.parentSpanId), "sampled" in t2 && (this._sampled = t2.sampled), t2.endTimestamp && (this._endTime = t2.endTimestamp), this._events = [], this._isStandaloneSpan = t2.isStandalone, this._endTime && this._onSpanEnded();
        }
        addLink(t2) {
          return this._links ? this._links.push(t2) : this._links = [t2], this;
        }
        addLinks(t2) {
          return this._links ? this._links.push(...t2) : this._links = t2, this;
        }
        recordException(t2, e2) {
        }
        spanContext() {
          let { _spanId: t2, _traceId: e2, _sampled: n2 } = this;
          return { spanId: t2, traceId: e2, traceFlags: n2 ? m.TRACE_FLAG_SAMPLED : m.TRACE_FLAG_NONE };
        }
        setAttribute(t2, e2) {
          return void 0 === e2 ? delete this._attributes[t2] : this._attributes[t2] = e2, this;
        }
        setAttributes(t2) {
          return Object.keys(t2).forEach((e2) => this.setAttribute(e2, t2[e2])), this;
        }
        updateStartTime(t2) {
          this._startTime = (0, m.spanTimeInputToSeconds)(t2);
        }
        setStatus(t2) {
          return this._status = t2, this;
        }
        updateName(t2) {
          return this._name = t2, this.setAttribute(u.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"), this;
        }
        end(t2) {
          this._endTime || (this._endTime = (0, m.spanTimeInputToSeconds)(t2), (0, T.logSpanEnd)(this), this._onSpanEnded());
        }
        getSpanJSON() {
          return { data: this._attributes, description: this._name, op: this._attributes[u.SEMANTIC_ATTRIBUTE_SENTRY_OP], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: (0, m.getStatusMessage)(this._status), timestamp: this._endTime, trace_id: this._traceId, origin: this._attributes[u.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], profile_id: this._attributes[u.SEMANTIC_ATTRIBUTE_PROFILE_ID], exclusive_time: this._attributes[u.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME], measurements: (0, A.timedEventsToMeasurements)(this._events), is_segment: this._isStandaloneSpan && (0, m.getRootSpan)(this) === this || void 0, segment_id: this._isStandaloneSpan ? (0, m.getRootSpan)(this).spanContext().spanId : void 0, links: (0, m.convertSpanLinksForEnvelope)(this._links) };
        }
        getStreamedSpanJSON() {
          return { name: this._name ?? "", span_id: this._spanId, trace_id: this._traceId, parent_span_id: this._parentSpanId, start_timestamp: this._startTime, end_timestamp: this._endTime ?? this._startTime, is_segment: this._isStandaloneSpan || this === (0, m.getRootSpan)(this), status: (0, m.getSimpleStatusMessage)(this._status), attributes: this._attributes, links: (0, m.getStreamedSpanLinks)(this._links) };
        }
        isRecording() {
          return !this._endTime && !!this._sampled;
        }
        addEvent(t2, e2, n2) {
          a.DEBUG_BUILD && p.debug.log("[Tracing] Adding an event to span:", t2);
          let r2 = R(e2) ? e2 : n2 || (0, v.timestampInSeconds)(), i2 = R(e2) ? {} : e2 || {}, s2 = { name: t2, time: (0, m.spanTimeInputToSeconds)(r2), attributes: i2 };
          return this._events.push(s2), this;
        }
        isStandaloneSpan() {
          return !!this._isStandaloneSpan;
        }
        _onSpanEnded() {
          let t2 = (0, s.getClient)();
          if (t2 && (t2.emit("spanEnd", this), this._isStandaloneSpan || t2.emit("afterSpanEnd", this)), !(this._isStandaloneSpan || this === (0, m.getRootSpan)(this))) return;
          if (this._isStandaloneSpan) return void (this._sampled ? function(t3) {
            let e3 = (0, s.getClient)();
            if (!e3) return;
            let n2 = t3[1];
            n2 && 0 !== n2.length ? e3.sendEnvelope(t3) : e3.recordDroppedEvent("before_send", "span");
          }((0, I.createSpanEnvelope)([this], t2)) : (a.DEBUG_BUILD && p.debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), t2 && t2.recordDroppedEvent("sample_rate", "span")));
          if (t2 && (0, _.hasSpanStreamingEnabled)(t2)) return void t2.emit("afterSegmentSpanEnd", this);
          let e2 = this._convertSpanToTransaction();
          e2 && ((0, N.getCapturedScopesOnSpan)(this).scope || (0, s.getCurrentScope)()).captureEvent(e2);
        }
        _convertSpanToTransaction() {
          if (!x((0, m.spanToJSON)(this))) return;
          this._name || (a.DEBUG_BUILD && p.debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
          let { scope: t2, isolationScope: e2 } = (0, N.getCapturedScopesOnSpan)(this), n2 = t2?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
          if (true !== this._sampled) return;
          let r2 = (0, m.getSpanDescendants)(this).filter((t3) => {
            var e3;
            return t3 !== this && !((e3 = t3) instanceof C && e3.isStandaloneSpan());
          }).map((t3) => (0, m.spanToJSON)(t3)).filter(x), i2 = this._attributes[u.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
          delete this._attributes[u.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME], r2.forEach((t3) => {
            delete t3.data[u.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
          });
          let s2 = { contexts: { trace: (0, m.spanToTransactionTraceContext)(this) }, spans: r2.length > 1e3 ? r2.sort((t3, e3) => t3.start_timestamp - e3.start_timestamp).slice(0, 1e3) : r2, start_timestamp: this._startTime, timestamp: this._endTime, transaction: this._name, type: "transaction", sdkProcessingMetadata: { capturedSpanScope: t2, capturedSpanIsolationScope: e2, dynamicSamplingContext: (0, E.getDynamicSamplingContextFromSpan)(this) }, request: n2, ...i2 && { transaction_info: { source: i2 } } }, o2 = (0, A.timedEventsToMeasurements)(this._events);
          return o2 && Object.keys(o2).length && (a.DEBUG_BUILD && p.debug.log("[Measurements] Adding measurements to transaction event", JSON.stringify(o2, void 0, 2)), s2.measurements = o2), s2;
        }
      }
      function R(t2) {
        return t2 && "number" == typeof t2 || t2 instanceof Date || Array.isArray(t2);
      }
      function x(t2) {
        return !!t2.start_timestamp && !!t2.timestamp && !!t2.span_id && !!t2.trace_id;
      }
      t.i(780202);
      let O = "__SENTRY_SUPPRESS_TRACING__";
      function D(t2, e2) {
        let n2 = U();
        return n2.withActiveSpan ? n2.withActiveSpan(t2, e2) : (0, s.withScope)((n3) => ((0, S._setSpanForScope)(n3, t2 || void 0), e2(n3)));
      }
      function U() {
        let t2 = (0, c.getMainCarrier)();
        return (0, o.getAsyncContextStrategy)(t2);
      }
      function k(t2, e2, n2) {
        let r2 = (0, s.getClient)(), i2 = r2?.getOptions() || {}, { name: o2 = "" } = t2, c2 = { spanAttributes: { ...t2.attributes }, spanName: o2, parentSampled: n2 };
        r2?.emit("beforeSampling", c2, { decision: false });
        let l2 = c2.parentSampled ?? n2, d2 = c2.spanAttributes, f2 = e2.getPropagationContext(), h2 = M(e2), [S2, m2, E2] = h2 ? [false] : (0, y.sampleSpan)(i2, { name: o2, parentSampled: l2, attributes: d2, parentSampleRate: (0, g.parseSampleRate)(f2.dsc?.sample_rate) }, f2.sampleRand), T2 = new C({ ...t2, attributes: { [u.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [u.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: void 0 !== m2 && E2 ? m2 : void 0, ...d2 }, sampled: S2 });
        return S2 || !r2 || h2 || (a.DEBUG_BUILD && p.debug.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), r2.recordDroppedEvent("sample_rate", (0, _.hasSpanStreamingEnabled)(r2) ? "span" : "transaction")), r2 && r2.emit("spanStart", T2), T2;
      }
      function M(t2) {
        return true === t2.getScopeData().sdkProcessingMetadata[O];
      }
      t.s(["startInactiveSpan", 0, function(t2) {
        let e2 = U();
        if (e2.startInactiveSpan) return e2.startInactiveSpan(t2);
        let n2 = function(t3) {
          let e3 = { isStandalone: (t3.experimental || {}).standalone, ...t3 };
          if (t3.startTime) {
            let n3 = { ...e3 };
            return n3.startTimestamp = (0, m.spanTimeInputToSeconds)(t3.startTime), delete n3.startTime, n3;
          }
          return e3;
        }(t2), { forceTransaction: r2, parentSpan: i2 } = t2;
        return (t2.scope ? (e3) => (0, s.withScope)(t2.scope, e3) : void 0 !== i2 ? (t3) => D(i2, t3) : (t3) => t3())(() => {
          let e3 = (0, s.getCurrentScope)(), a2 = function(t3, e4) {
            if (e4) return e4;
            if (null === e4) return;
            let n3 = (0, S._getSpanForScope)(t3);
            if (!n3) return;
            let r3 = (0, s.getClient)();
            return (r3 ? r3.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, m.getRootSpan)(n3) : n3;
          }(e3, i2), o2 = (0, s.getClient)();
          return t2.onlyIfParent && !a2 ? (o2?.recordDroppedEvent("no_parent_span", "span"), new b.SentryNonRecordingSpan()) : function({ parentSpan: t3, spanArguments: e4, forceTransaction: n3, scope: r3 }) {
            var i3, a3;
            let o3, c2;
            if (!(0, l.hasSpansEnabled)()) {
              let r4 = new b.SentryNonRecordingSpan();
              if (n3 || !t3) {
                let t4 = { sampled: "false", sample_rate: "0", transaction: e4.name, ...(0, E.getDynamicSamplingContextFromSpan)(r4) };
                (0, E.freezeDscOnSpan)(r4, t4);
              }
              return r4;
            }
            let p2 = (0, s.getClient)();
            if (i3 = p2, a3 = e4, c2 = i3?.getOptions().ignoreSpans, i3 && (0, _.hasSpanStreamingEnabled)(i3) && c2?.length && (0, d.shouldIgnoreSpan)({ description: a3.name || "", op: a3.attributes?.[u.SEMANTIC_ATTRIBUTE_SENTRY_OP] || a3.op }, c2)) return M(r3) || p2?.recordDroppedEvent("ignored", "span"), new b.SentryNonRecordingSpan({ dropReason: "ignored", traceId: t3?.spanContext().traceId ?? r3.getPropagationContext().traceId });
            let g2 = (0, s.getIsolationScope)();
            if (t3 && !n3) o3 = function(t4, e5, n4) {
              let { spanId: r4, traceId: i4 } = t4.spanContext(), a4 = M(e5), o4 = !a4 && (0, m.spanIsSampled)(t4), c3 = o4 ? new C({ ...n4, parentSpanId: r4, traceId: i4, sampled: o4 }) : new b.SentryNonRecordingSpan({ traceId: i4 });
              (0, m.addChildSpanToSpan)(t4, c3);
              let u2 = (0, s.getClient)();
              return u2 && ((0, _.hasSpanStreamingEnabled)(u2) && c3 instanceof b.SentryNonRecordingSpan && (t4 instanceof b.SentryNonRecordingSpan && t4.dropReason ? (c3.dropReason = t4.dropReason, u2.recordDroppedEvent(t4.dropReason, "span")) : a4 || (c3.dropReason = "sample_rate", u2.recordDroppedEvent("sample_rate", "span"))), u2.emit("spanStart", c3), n4.endTimestamp && (u2.emit("spanEnd", c3), u2.emit("afterSpanEnd", c3))), c3;
            }(t3, r3, e4), (0, m.addChildSpanToSpan)(t3, o3);
            else if (t3) {
              let n4 = (0, E.getDynamicSamplingContextFromSpan)(t3), { traceId: i4, spanId: s2 } = t3.spanContext(), a4 = (0, m.spanIsSampled)(t3);
              o3 = k({ traceId: i4, parentSpanId: s2, ...e4 }, r3, a4), (0, E.freezeDscOnSpan)(o3, n4);
            } else {
              let { traceId: t4, dsc: n4, parentSpanId: i4, sampled: s2 } = { ...g2.getPropagationContext(), ...r3.getPropagationContext() };
              o3 = k({ traceId: t4, parentSpanId: i4, ...e4 }, r3, s2), n4 && (0, E.freezeDscOnSpan)(o3, n4);
            }
            return (0, T.logSpanStart)(o3), (0, N.setCapturedScopesOnSpan)(o3, r3, g2), o3;
          }({ parentSpan: a2, spanArguments: n2, forceTransaction: r2, scope: e3 });
        });
      }, "startNewTrace", 0, function(t2) {
        let e2 = U();
        return e2.startNewTrace ? e2.startNewTrace(t2) : (0, s.withScope)((e3) => (e3.setPropagationContext({ traceId: (0, f.generateTraceId)(), sampleRand: (0, h.safeMathRandom)() }), a.DEBUG_BUILD && p.debug.log(`Starting a new trace with id ${e3.getPropagationContext().traceId}`), D(null, t2)));
      }, "suppressTracing", 0, function(t2) {
        let e2 = U();
        return e2.suppressTracing ? e2.suppressTracing(t2) : (0, s.withScope)((e3) => {
          e3.setSDKProcessingMetadata({ [O]: true });
          let n2 = t2();
          return e3.setSDKProcessingMetadata({ [O]: void 0 }), n2;
        });
      }], 610615);
      var B = t.i(723880), L = t.i(783418), w = t.i(509967);
      function P(t2) {
        return new G((e2) => {
          e2(t2);
        });
      }
      function $(t2) {
        return new G((e2, n2) => {
          n2(t2);
        });
      }
      class G {
        constructor(t2) {
          this._state = 0, this._handlers = [], this._runExecutor(t2);
        }
        then(t2, e2) {
          return new G((n2, r2) => {
            this._handlers.push([false, (e3) => {
              if (t2) try {
                n2(t2(e3));
              } catch (t3) {
                r2(t3);
              }
              else n2(e3);
            }, (t3) => {
              if (e2) try {
                n2(e2(t3));
              } catch (t4) {
                r2(t4);
              }
              else r2(t3);
            }]), this._executeHandlers();
          });
        }
        catch(t2) {
          return this.then((t3) => t3, t2);
        }
        finally(t2) {
          return new G((e2, n2) => {
            let r2, i2;
            return this.then((e3) => {
              i2 = false, r2 = e3, t2 && t2();
            }, (e3) => {
              i2 = true, r2 = e3, t2 && t2();
            }).then(() => {
              i2 ? n2(r2) : e2(r2);
            });
          });
        }
        _executeHandlers() {
          if (0 === this._state) return;
          let t2 = this._handlers.slice();
          this._handlers = [], t2.forEach((t3) => {
            t3[0] || (1 === this._state && t3[1](this._value), 2 === this._state && t3[2](this._value), t3[0] = true);
          });
        }
        _runExecutor(t2) {
          let e2 = (t3, e3) => {
            if (0 === this._state) {
              if ((0, B.isThenable)(e3)) return void e3.then(n2, r2);
              this._state = t3, this._value = e3, this._executeHandlers();
            }
          }, n2 = (t3) => {
            e2(1, t3);
          }, r2 = (t3) => {
            e2(2, t3);
          };
          try {
            t2(n2, r2);
          } catch (t3) {
            r2(t3);
          }
        }
      }
      t.s(["rejectedSyncPromise", 0, $, "resolvedSyncPromise", 0, P], 787825);
      var j = t.i(86154);
      t.i(217884);
      var F = t.i(202775), J = t.i(702940), Y = t.i(292817);
      function V(t2, e2) {
        var n2, r2, i2, s2, a2, o2, c2, u2;
        let p2, l2, d2, { fingerprint: _2, span: g2, breadcrumbs: f2, sdkProcessingMetadata: h2 } = e2;
        (function(t3, e3) {
          let { extra: n3, tags: r3, user: i3, contexts: s3, level: a3, transactionName: o3 } = e3;
          Object.keys(n3).length && (t3.extra = { ...n3, ...t3.extra }), Object.keys(r3).length && (t3.tags = { ...r3, ...t3.tags }), Object.keys(i3).length && (t3.user = { ...i3, ...t3.user }), Object.keys(s3).length && (t3.contexts = { ...s3, ...t3.contexts }), a3 && (t3.level = a3), o3 && "transaction" !== t3.type && (t3.transaction = o3);
        })(t2, e2), g2 && (n2 = t2, r2 = g2, n2.contexts = { trace: (0, m.spanToTraceContext)(r2), ...n2.contexts }, n2.sdkProcessingMetadata = { dynamicSamplingContext: (0, E.getDynamicSamplingContextFromSpan)(r2), ...n2.sdkProcessingMetadata }, p2 = (0, m.getRootSpan)(r2), (l2 = (0, m.spanToJSON)(p2).description) && !n2.transaction && "transaction" === n2.type && (n2.transaction = l2)), i2 = t2, s2 = _2, i2.fingerprint = i2.fingerprint ? Array.isArray(i2.fingerprint) ? i2.fingerprint : [i2.fingerprint] : [], s2 && (i2.fingerprint = i2.fingerprint.concat(s2)), i2.fingerprint.length || delete i2.fingerprint, a2 = t2, o2 = f2, d2 = [...a2.breadcrumbs || [], ...o2], a2.breadcrumbs = d2.length ? d2 : void 0, c2 = t2, u2 = h2, c2.sdkProcessingMetadata = { ...c2.sdkProcessingMetadata, ...u2 };
      }
      function z(t2, e2) {
        let { extra: n2, tags: r2, attributes: i2, user: s2, contexts: a2, level: o2, sdkProcessingMetadata: c2, breadcrumbs: u2, fingerprint: p2, eventProcessors: l2, attachments: d2, propagationContext: _2, transactionName: g2, span: f2 } = e2;
        H(t2, "extra", n2), H(t2, "tags", r2), H(t2, "attributes", i2), H(t2, "user", s2), H(t2, "contexts", a2), t2.sdkProcessingMetadata = (0, Y.merge)(t2.sdkProcessingMetadata, c2, 2), o2 && (t2.level = o2), g2 && (t2.transactionName = g2), f2 && (t2.span = f2), u2.length && (t2.breadcrumbs = [...t2.breadcrumbs, ...u2]), p2.length && (t2.fingerprint = [...t2.fingerprint, ...p2]), l2.length && (t2.eventProcessors = [...t2.eventProcessors, ...l2]), d2.length && (t2.attachments = [...t2.attachments, ...d2]), t2.propagationContext = { ...t2.propagationContext, ..._2 };
      }
      function H(t2, e2, n2) {
        t2[e2] = (0, Y.merge)(t2[e2], n2, 1);
      }
      function K(t2, e2) {
        let n2 = (0, s.getGlobalScope)().getScopeData();
        return t2 && z(n2, t2.getScopeData()), e2 && z(n2, e2.getScopeData()), n2;
      }
      t.s(["applyScopeDataToEvent", 0, V, "getCombinedScopeData", 0, K], 272465);
      var W = t.i(864592);
      function q(t2) {
        if (t2) {
          var e2;
          return (e2 = t2) instanceof j.Scope || "function" == typeof e2 || Object.keys(t2).some((t3) => X.includes(t3)) ? { captureContext: t2 } : t2;
        }
      }
      let X = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
      async function Q(t2) {
        let e2 = (0, s.getClient)();
        return e2 ? e2.flush(t2) : (a.DEBUG_BUILD && p.debug.warn("Cannot flush events. No client defined."), Promise.resolve(false));
      }
      t.s(["parseEventHintOrCaptureContext", 0, q, "prepareEvent", 0, function(t2, s2, o2, c2, u2, l2) {
        var d2, _2, g2;
        let f2, { normalizeDepth: h2 = 3, normalizeMaxBreadth: S2 = 1e3 } = t2, m2 = { ...s2, event_id: s2.event_id || o2.event_id || (0, L.uuid4)(), timestamp: s2.timestamp || (0, v.dateTimestampInSeconds)() }, E2 = o2.integrations || t2.integrations.map((t3) => t3.name);
        (function(t3, e2) {
          let { environment: n2, release: r2, dist: i2, maxValueLength: s3 } = e2;
          t3.environment = t3.environment || n2 || w.DEFAULT_ENVIRONMENT, !t3.release && r2 && (t3.release = r2), !t3.dist && i2 && (t3.dist = i2);
          let a2 = t3.request;
          a2?.url && s3 && (a2.url = (0, W.truncate)(a2.url, s3)), s3 && t3.exception?.values?.forEach((t4) => {
            t4.value && (t4.value = (0, W.truncate)(t4.value, s3));
          });
        })(m2, t2), d2 = m2, (_2 = E2).length > 0 && (d2.sdk = d2.sdk || {}, d2.sdk.integrations = [...d2.sdk.integrations || [], ..._2]), u2 && u2.emit("applyFrameMetadata", s2), void 0 === s2.type && (g2 = m2, f2 = function(t3) {
          let s3 = F.GLOBAL_OBJ._sentryDebugIds, a2 = F.GLOBAL_OBJ._debugIds;
          if (!s3 && !a2) return {};
          let o3 = s3 ? Object.keys(s3) : [], c3 = a2 ? Object.keys(a2) : [];
          if (i && o3.length === n && c3.length === r) return i;
          n = o3.length, r = c3.length, i = {}, e || (e = {});
          let u3 = (n2, r2) => {
            for (let s4 of n2) {
              let n3 = r2[s4], a3 = e?.[s4];
              if (a3 && i && n3) i[a3[0]] = n3, e && (e[s4] = [a3[0], n3]);
              else if (n3) {
                let r3 = t3(s4);
                for (let t4 = r3.length - 1; t4 >= 0; t4--) {
                  let a4 = r3[t4], o4 = a4?.filename;
                  if (o4 && i && e) {
                    i[o4] = n3, e[s4] = [o4, n3];
                    break;
                  }
                }
              }
            }
          };
          return s3 && u3(o3, s3), a2 && u3(c3, a2), i;
        }(t2.stackParser), g2.exception?.values?.forEach((t3) => {
          t3.stacktrace?.frames?.forEach((t4) => {
            t4.filename && (t4.debug_id = f2[t4.filename]);
          });
        }));
        let T2 = function(t3, e2) {
          if (!e2) return t3;
          let n2 = t3 ? t3.clone() : new j.Scope();
          return n2.update(e2), n2;
        }(c2, o2.captureContext);
        o2.mechanism && (0, L.addExceptionMechanism)(m2, o2.mechanism);
        let y2 = u2 ? u2.getEventProcessors() : [], b2 = K(l2, T2), I2 = [...o2.attachments || [], ...b2.attachments];
        I2.length && (o2.attachments = I2), V(m2, b2);
        let A2 = [...y2, ...b2.eventProcessors];
        return (o2.data && true === o2.data.__sentry__ ? P(m2) : function(t3, e2, n2, r2 = 0) {
          try {
            let i2 = function t4(e3, n3, r3, i3) {
              let s3 = r3[i3];
              if (!e3 || !s3) return e3;
              let o3 = s3({ ...e3 }, n3);
              return (a.DEBUG_BUILD && null === o3 && p.debug.log(`Event processor "${s3.id || "?"}" dropped event`), (0, B.isThenable)(o3)) ? o3.then((e4) => t4(e4, n3, r3, i3 + 1)) : t4(o3, n3, r3, i3 + 1);
            }(e2, n2, t3, r2);
            return (0, B.isThenable)(i2) ? i2 : P(i2);
          } catch (t4) {
            return $(t4);
          }
        }(A2, m2, o2)).then((t3) => (t3 && function(t4) {
          let e2 = {};
          if (t4.exception?.values?.forEach((t5) => {
            t5.stacktrace?.frames?.forEach((t6) => {
              t6.debug_id && (t6.abs_path ? e2[t6.abs_path] = t6.debug_id : t6.filename && (e2[t6.filename] = t6.debug_id), delete t6.debug_id);
            });
          }), 0 === Object.keys(e2).length) return;
          t4.debug_meta = t4.debug_meta || {}, t4.debug_meta.images = t4.debug_meta.images || [];
          let n2 = t4.debug_meta.images;
          Object.entries(e2).forEach(([t5, e3]) => {
            n2.push({ type: "sourcemap", code_file: t5, debug_id: e3 });
          });
        }(t3), "number" == typeof h2 && h2 > 0) ? function(t4, e2, n2) {
          if (!t4) return null;
          let r2 = { ...t4, ...t4.breadcrumbs && { breadcrumbs: t4.breadcrumbs.map((t5) => ({ ...t5, ...t5.data && { data: (0, J.normalize)(t5.data, e2, n2) } })) }, ...t4.user && { user: (0, J.normalize)(t4.user, e2, n2) }, ...t4.contexts && { contexts: (0, J.normalize)(t4.contexts, e2, n2) }, ...t4.extra && { extra: (0, J.normalize)(t4.extra, e2, n2) } };
          return t4.contexts?.trace && r2.contexts && (r2.contexts.trace = t4.contexts.trace, t4.contexts.trace.data && (r2.contexts.trace.data = (0, J.normalize)(t4.contexts.trace.data, e2, n2))), t4.spans && (r2.spans = t4.spans.map((t5) => ({ ...t5, ...t5.data && { data: (0, J.normalize)(t5.data, e2, n2) } }))), t4.contexts?.flags && r2.contexts && (r2.contexts.flags = (0, J.normalize)(t4.contexts.flags, 3, n2)), r2;
        }(t3, h2, S2) : t3);
      }], 907894), t.s(["captureEvent", 0, function(t2, e2) {
        return (0, s.getCurrentScope)().captureEvent(t2, e2);
      }, "captureException", 0, function(t2, e2) {
        return (0, s.getCurrentScope)().captureException(t2, q(e2));
      }, "flush", 0, Q, "isEnabled", 0, function() {
        let t2 = (0, s.getClient)();
        return t2?.getOptions().enabled !== false && !!t2?.getTransport();
      }], 570751);
    }, 261272, (t) => {
      "use strict";
      var e = t.i(202775);
      t.s(["vercelWaitUntil", 0, function(t2) {
        let n = e.GLOBAL_OBJ[Symbol.for("@vercel/request-context")], r = n?.get?.();
        r?.waitUntil && r.waitUntil(t2);
      }]);
    }, 815842, (t) => {
      "use strict";
      let e = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
      t.s(["DEBUG_BUILD", 0, e]);
    }, 315614, (t) => {
      "use strict";
      var e = t.i(261272), n = t.i(692234), r = t.i(570751), i = t.i(202775), s = t.i(815842);
      async function a() {
        try {
          s.DEBUG_BUILD && n.debug.log("Flushing events..."), await (0, r.flush)(2e3), s.DEBUG_BUILD && n.debug.log("Done flushing events");
        } catch (t2) {
          s.DEBUG_BUILD && n.debug.log("Error while flushing events:\n", t2);
        }
      }
      function o() {
        let t2 = Symbol.for("__cloudflare-context__");
        return i.GLOBAL_OBJ[t2]?.ctx;
      }
      function c() {
        return "function" == typeof o()?.waitUntil;
      }
      t.s(["flushSafelyWithTimeout", 0, a, "isCloudflareWaitUntilAvailable", 0, c, "waitUntil", 0, function(t2) {
        var n2;
        c() ? (n2 = t2, o()?.waitUntil(n2)) : (0, e.vercelWaitUntil)(t2);
      }]);
    }]);
  }
});

// .next/server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_0gxqhyr.js
var require_y_next_dist_esm_build_templates_edge_wrapper_0gxqhyr = __commonJS({
  ".next/server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_0gxqhyr.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/126y_next_dist_esm_build_templates_edge-wrapper_0gxqhyr.js", { otherChunks: ["chunks/[root-of-the-server]__0jv-o14._.js", "chunks/_0q~rmu9._.js", "chunks/node_modules__pnpm_0cze60p._.js"], runtimeModuleIds: [56315] }]), (() => {
      let e;
      if (!Array.isArray(globalThis.TURBOPACK)) return;
      let t = ["NEXT_DEPLOYMENT_ID", "NEXT_CLIENT_ASSET_SUFFIX"];
      var r, n = ((r = n || {})[r.Runtime = 0] = "Runtime", r[r.Parent = 1] = "Parent", r[r.Update = 2] = "Update", r);
      let o = /* @__PURE__ */ new WeakMap();
      function u(e2, t2) {
        this.m = e2, this.e = t2;
      }
      let l = u.prototype, i = Object.prototype.hasOwnProperty, a = "u" > typeof Symbol && Symbol.toStringTag;
      function s(e2, t2, r2) {
        i.call(e2, t2) || Object.defineProperty(e2, t2, r2);
      }
      function c(e2, t2) {
        let r2 = e2[t2];
        return r2 || (r2 = f(t2), e2[t2] = r2), r2;
      }
      function f(e2) {
        return { exports: {}, error: void 0, id: e2, namespaceObject: void 0 };
      }
      function h(e2, t2) {
        s(e2, "__esModule", { value: true }), a && s(e2, a, { value: "Module" });
        let r2 = 0;
        for (; r2 < t2.length; ) {
          let n2 = t2[r2++], o2 = t2[r2++];
          if ("number" == typeof o2) if (0 === o2) s(e2, n2, { value: t2[r2++], enumerable: true, writable: false });
          else throw Error(`unexpected tag: ${o2}`);
          else "function" == typeof t2[r2] ? s(e2, n2, { get: o2, set: t2[r2++], enumerable: true }) : s(e2, n2, { get: o2, enumerable: true });
        }
        Object.seal(e2);
      }
      function d(e2, t2) {
        (null != t2 ? c(this.c, t2) : this.m).exports = e2;
      }
      l.s = function(e2, t2) {
        let r2, n2;
        null != t2 ? n2 = (r2 = c(this.c, t2)).exports : (r2 = this.m, n2 = this.e), r2.namespaceObject = n2, h(n2, e2);
      }, l.j = function(e2, t2) {
        var r2, n2;
        let u2, l2, a2;
        null != t2 ? l2 = (u2 = c(this.c, t2)).exports : (u2 = this.m, l2 = this.e);
        let s2 = (r2 = u2, n2 = l2, (a2 = o.get(r2)) || (o.set(r2, a2 = []), r2.exports = r2.namespaceObject = new Proxy(n2, { get(e3, t3) {
          if (i.call(e3, t3) || "default" === t3 || "__esModule" === t3) return Reflect.get(e3, t3);
          for (let e4 of a2) {
            let r3 = Reflect.get(e4, t3);
            if (void 0 !== r3) return r3;
          }
        }, ownKeys(e3) {
          let t3 = Reflect.ownKeys(e3);
          for (let e4 of a2) for (let r3 of Reflect.ownKeys(e4)) "default" === r3 || t3.includes(r3) || t3.push(r3);
          return t3;
        } })), a2);
        "object" == typeof e2 && null !== e2 && s2.push(e2);
      }, l.v = d, l.n = function(e2, t2) {
        let r2;
        (r2 = null != t2 ? c(this.c, t2) : this.m).exports = r2.namespaceObject = e2;
      };
      let p = Object.getPrototypeOf ? (e2) => Object.getPrototypeOf(e2) : (e2) => e2.__proto__, m = [null, p({}), p([]), p(p)];
      function b(e2, t2, r2) {
        let n2 = [], o2 = -1;
        for (let t3 = e2; ("object" == typeof t3 || "function" == typeof t3) && !m.includes(t3); t3 = p(t3)) for (let r3 of Object.getOwnPropertyNames(t3)) n2.push(r3, /* @__PURE__ */ function(e3, t4) {
          return () => e3[t4];
        }(e2, r3)), -1 === o2 && "default" === r3 && (o2 = n2.length - 1);
        return r2 && o2 >= 0 || (o2 >= 0 ? n2.splice(o2, 1, 0, e2) : n2.push("default", 0, e2)), h(t2, n2), t2;
      }
      function y(e2) {
        return "function" == typeof e2 ? function(...t2) {
          return e2.apply(this, t2);
        } : /* @__PURE__ */ Object.create(null);
      }
      function g(e2) {
        let t2 = K(e2, this.m);
        if (t2.namespaceObject) return t2.namespaceObject;
        let r2 = t2.exports;
        return t2.namespaceObject = b(r2, y(r2), r2 && r2.__esModule);
      }
      function w(e2) {
        let t2 = e2.indexOf("#");
        -1 !== t2 && (e2 = e2.substring(0, t2));
        let r2 = e2.indexOf("?");
        return -1 !== r2 && (e2 = e2.substring(0, r2)), e2;
      }
      function O(e2) {
        return "string" == typeof e2 ? e2 : e2.path;
      }
      function _() {
        let e2, t2;
        return { promise: new Promise((r2, n2) => {
          t2 = n2, e2 = r2;
        }), resolve: e2, reject: t2 };
      }
      l.i = g, l.A = function(e2) {
        return this.r(e2)(g.bind(this));
      }, l.t = "function" == typeof __require ? __require : function() {
        throw Error("Unexpected use of runtime require");
      }, l.r = function(e2) {
        return K(e2, this.m).exports;
      }, l.f = function(e2) {
        function t2(t3) {
          if (t3 = w(t3), i.call(e2, t3)) return e2[t3].module();
          let r2 = Error(`Cannot find module '${t3}'`);
          throw r2.code = "MODULE_NOT_FOUND", r2;
        }
        return t2.keys = () => Object.keys(e2), t2.resolve = (t3) => {
          if (t3 = w(t3), i.call(e2, t3)) return e2[t3].id();
          let r2 = Error(`Cannot find module '${t3}'`);
          throw r2.code = "MODULE_NOT_FOUND", r2;
        }, t2.import = async (e3) => await t2(e3), t2;
      };
      let k = Symbol("turbopack queues"), j = Symbol("turbopack exports"), C = Symbol("turbopack error");
      function P(e2) {
        e2 && 1 !== e2.status && (e2.status = 1, e2.forEach((e3) => e3.queueCount--), e2.forEach((e3) => e3.queueCount-- ? e3.queueCount++ : e3()));
      }
      l.a = function(e2, t2) {
        let r2 = this.m, n2 = t2 ? Object.assign([], { status: -1 }) : void 0, o2 = /* @__PURE__ */ new Set(), { resolve: u2, reject: l2, promise: i2 } = _(), a2 = Object.assign(i2, { [j]: r2.exports, [k]: (e3) => {
          n2 && e3(n2), o2.forEach(e3), a2.catch(() => {
          });
        } }), s2 = { get: () => a2, set(e3) {
          e3 !== a2 && (a2[j] = e3);
        } };
        Object.defineProperty(r2, "exports", s2), Object.defineProperty(r2, "namespaceObject", s2), e2(function(e3) {
          let t3 = e3.map((e4) => {
            if (null !== e4 && "object" == typeof e4) {
              if (k in e4) return e4;
              if (null != e4 && "object" == typeof e4 && "then" in e4 && "function" == typeof e4.then) {
                let t4 = Object.assign([], { status: 0 }), r4 = { [j]: {}, [k]: (e5) => e5(t4) };
                return e4.then((e5) => {
                  r4[j] = e5, P(t4);
                }, (e5) => {
                  r4[C] = e5, P(t4);
                }), r4;
              }
            }
            return { [j]: e4, [k]: () => {
            } };
          }), r3 = () => t3.map((e4) => {
            if (e4[C]) throw e4[C];
            return e4[j];
          }), { promise: u3, resolve: l3 } = _(), i3 = Object.assign(() => l3(r3), { queueCount: 0 });
          function a3(e4) {
            e4 !== n2 && !o2.has(e4) && (o2.add(e4), e4 && 0 === e4.status && (i3.queueCount++, e4.push(i3)));
          }
          return t3.map((e4) => e4[k](a3)), i3.queueCount ? u3 : r3();
        }, function(e3) {
          e3 ? l2(a2[C] = e3) : u2(a2[j]), P(n2);
        }), n2 && -1 === n2.status && (n2.status = 0);
      };
      let v = function(e2) {
        let t2 = new URL(e2, "x:/"), r2 = {};
        for (let e3 in t2) r2[e3] = t2[e3];
        for (let t3 in r2.href = e2, r2.pathname = e2.replace(/[?#].*/, ""), r2.origin = r2.protocol = "", r2.toString = r2.toJSON = (...t4) => e2, r2) Object.defineProperty(this, t3, { enumerable: true, configurable: true, value: r2[t3] });
      };
      function E(e2, t2) {
        throw Error(`Invariant: ${t2(e2)}`);
      }
      v.prototype = URL.prototype, l.U = v, l.z = function(e2) {
        throw Error("dynamic usage of require is not supported");
      }, l.g = globalThis;
      let U = u.prototype, R = /* @__PURE__ */ new Map();
      l.M = R;
      let x = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
      async function $(e2, t2, r2) {
        let n2;
        if ("string" == typeof r2) return q(e2, t2, A(r2));
        let o2 = r2.included || [], u2 = o2.map((e3) => !!R.has(e3) || x.get(e3));
        if (u2.length > 0 && u2.every((e3) => e3)) return void await Promise.all(u2);
        let l2 = r2.moduleChunks || [], i2 = l2.map((e3) => M.get(e3)).filter((e3) => e3);
        if (i2.length > 0) {
          if (i2.length === l2.length) return void await Promise.all(i2);
          let r3 = /* @__PURE__ */ new Set();
          for (let e3 of l2) M.has(e3) || r3.add(e3);
          for (let n3 of r3) {
            let r4 = q(e2, t2, A(n3));
            M.set(n3, r4), i2.push(r4);
          }
          n2 = Promise.all(i2);
        } else {
          for (let o3 of (n2 = q(e2, t2, A(r2.path)), l2)) M.has(o3) || M.set(o3, n2);
        }
        for (let e3 of o2) x.has(e3) || x.set(e3, n2);
        await n2;
      }
      U.l = function(e2) {
        return $(n.Parent, this.m.id, e2);
      };
      let T = Promise.resolve(void 0), S = /* @__PURE__ */ new WeakMap();
      function q(t2, r2, o2) {
        let u2 = e.loadChunkCached(t2, o2), l2 = S.get(u2);
        if (void 0 === l2) {
          let e2 = S.set.bind(S, u2, T);
          l2 = u2.then(e2).catch((e3) => {
            let u3;
            switch (t2) {
              case n.Runtime:
                u3 = `as a runtime dependency of chunk ${r2}`;
                break;
              case n.Parent:
                u3 = `from module ${r2}`;
                break;
              case n.Update:
                u3 = "from an HMR update";
                break;
              default:
                E(t2, (e4) => `Unknown source type: ${e4}`);
            }
            let l3 = Error(`Failed to load chunk ${o2} ${u3}${e3 ? `: ${e3}` : ""}`, e3 ? { cause: e3 } : void 0);
            throw l3.name = "ChunkLoadError", l3;
          }), S.set(u2, l2);
        }
        return l2;
      }
      function A(e2) {
        return `${e2.split("/").map((e3) => encodeURIComponent(e3)).join("/")}`;
      }
      U.L = function(e2) {
        return q(n.Parent, this.m.id, e2);
      }, U.R = function(e2) {
        let t2 = this.r(e2);
        return t2?.default ?? t2;
      }, U.P = function(e2) {
        return `/ROOT/${e2 ?? ""}`;
      }, U.q = function(e2, t2) {
        d.call(this, `${e2}`, t2);
      }, U.b = function(e2, r2, n2, o2) {
        let u2 = "SharedWorker" === e2.name, l2 = [n2.map((e3) => A(e3)).reverse(), ""];
        for (let e3 of t) l2.push(globalThis[e3]);
        let i2 = new URL(A(r2), location.origin), a2 = JSON.stringify(l2);
        return u2 ? i2.searchParams.set("params", a2) : i2.hash = "#params=" + encodeURIComponent(a2), new e2(i2, o2 ? { ...o2, type: void 0 } : void 0);
      };
      let N = /\.js(?:\?[^#]*)?(?:#.*)?$/;
      l.w = function(t2, r2, o2) {
        return e.loadWebAssembly(n.Parent, this.m.id, t2, r2, o2);
      }, l.u = function(t2, r2) {
        return e.loadWebAssemblyModule(n.Parent, this.m.id, t2, r2);
      };
      let I = {};
      l.c = I;
      let K = (e2, t2) => {
        let r2 = I[e2];
        if (r2) {
          if (r2.error) throw r2.error;
          return r2;
        }
        return L(e2, n.Parent, t2.id);
      };
      function L(e2, t2, r2) {
        let n2 = R.get(e2);
        if ("function" != typeof n2) throw Error(function(e3, t3, r3) {
          let n3;
          switch (t3) {
            case 0:
              n3 = `as a runtime entry of chunk ${r3}`;
              break;
            case 1:
              n3 = `because it was required from module ${r3}`;
              break;
            case 2:
              n3 = "because of an HMR update";
              break;
            default:
              E(t3, (e4) => `Unknown source type: ${e4}`);
          }
          return `Module ${e3} was instantiated ${n3}, but the module factory is not available.`;
        }(e2, t2, r2));
        let o2 = f(e2), l2 = o2.exports;
        I[e2] = o2;
        let i2 = new u(o2, l2);
        try {
          n2(i2, o2, l2);
        } catch (e3) {
          throw o2.error = e3, e3;
        }
        return o2.namespaceObject && o2.exports !== o2.namespaceObject && b(o2.exports, o2.namespaceObject), o2;
      }
      function W(t2) {
        let r2, n2 = function(e2) {
          if ("string" == typeof e2) return e2;
          if (e2) return { src: e2.getAttribute("src") };
          if ("u" > typeof TURBOPACK_NEXT_CHUNK_URLS) return { src: TURBOPACK_NEXT_CHUNK_URLS.pop() };
          throw Error("chunk path empty but not in a worker");
        }(t2[0]);
        return 2 === t2.length ? r2 = t2[1] : (r2 = void 0, !function(e2, t3) {
          let r3 = 1;
          for (; r3 < e2.length; ) {
            let n3, o2 = r3 + 1;
            for (; o2 < e2.length && "function" != typeof e2[o2]; ) o2++;
            if (o2 === e2.length) throw Error("malformed chunk format, expected a factory function");
            let u2 = e2[o2];
            for (let u3 = r3; u3 < o2; u3++) {
              let r4 = e2[u3], o3 = t3.get(r4);
              if (o3) {
                n3 = o3;
                break;
              }
            }
            let l2 = n3 ?? u2, i2 = false;
            for (let n4 = r3; n4 < o2; n4++) {
              let r4 = e2[n4];
              t3.has(r4) || (i2 || (l2 === u2 && Object.defineProperty(u2, "name", { value: "module evaluation" }), i2 = true), t3.set(r4, l2));
            }
            r3 = o2 + 1;
          }
        }(t2, R)), e.registerChunk(n2, r2);
      }
      function B(e2, t2, r2 = false) {
        let n2;
        try {
          n2 = t2();
        } catch (t3) {
          throw Error(`Failed to load external module ${e2}: ${t3}`);
        }
        return !r2 || n2.__esModule ? n2 : b(n2, y(n2), true);
      }
      l.y = async function(e2) {
        let t2;
        try {
          t2 = await import(e2);
        } catch (t3) {
          throw Error(`Failed to load external module ${e2}: ${t3}`);
        }
        return t2 && t2.__esModule && t2.default && "default" in t2.default ? b(t2.default, y(t2), true) : t2;
      }, B.resolve = (e2, t2) => __require.resolve(e2, t2), l.x = B, e = { registerChunk(e2, t2) {
        let r2 = function(e3) {
          if ("string" == typeof e3) return e3;
          let t3 = decodeURIComponent(e3.src.replace(/[?#].*$/, ""));
          return t3.startsWith("") ? t3.slice(0) : t3;
        }(e2);
        F.add(r2), function(e3) {
          let t3 = D.get(e3);
          if (null != t3) {
            for (let r3 of t3) r3.requiredChunks.delete(e3), 0 === r3.requiredChunks.size && X(r3.runtimeModuleIds, r3.chunkPath);
            D.delete(e3);
          }
        }(r2), null != t2 && (0 === t2.otherChunks.length ? X(t2.runtimeModuleIds, r2) : function(e3, t3, r3) {
          let n2 = /* @__PURE__ */ new Set(), o2 = { runtimeModuleIds: r3, chunkPath: e3, requiredChunks: n2 };
          for (let e4 of t3) {
            let t4 = O(e4);
            if (F.has(t4)) continue;
            n2.add(t4);
            let r4 = D.get(t4);
            null == r4 && (r4 = /* @__PURE__ */ new Set(), D.set(t4, r4)), r4.add(o2);
          }
          0 === o2.requiredChunks.size && X(o2.runtimeModuleIds, o2.chunkPath);
        }(r2, t2.otherChunks.filter((e3) => {
          var t3;
          return t3 = O(e3), N.test(t3);
        }), t2.runtimeModuleIds));
      }, loadChunkCached(e2, t2) {
        throw Error("chunk loading is not supported");
      }, async loadWebAssembly(e2, t2, r2, n2, o2) {
        let u2 = await z(r2, n2);
        return await WebAssembly.instantiate(u2, o2);
      }, loadWebAssemblyModule: async (e2, t2, r2, n2) => z(r2, n2) };
      let F = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map();
      function X(e2, t2) {
        for (let r2 of e2) !function(e3, t3) {
          let r3 = I[t3];
          if (r3) {
            if (r3.error) throw r3.error;
            return;
          }
          L(t3, n.Runtime, e3);
        }(t2, r2);
      }
      async function z(e2, t2) {
        let r2;
        try {
          r2 = t2();
        } catch (e3) {
        }
        if (!r2) throw Error(`dynamically loading WebAssembly is not supported in this runtime as global was not injected for chunk '${e2}'`);
        return r2;
      }
      let H = globalThis.TURBOPACK;
      globalThis.TURBOPACK = { push: W }, H.forEach(W);
    })();
  }
});

// .next/server/edge/chunks/[root-of-the-server]__0u.y4l9._.js
var require_root_of_the_server_0u_y4l9 = __commonJS({
  ".next/server/edge/chunks/[root-of-the-server]__0u.y4l9._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__0u.y4l9._.js", 478500, (e, r, o) => {
      r.exports = e.x("node:async_hooks", () => (init_node_async_hooks(), __toCommonJS(node_async_hooks_exports)));
    }, 951615, (e, r, o) => {
      r.exports = e.x("node:buffer", () => (init_node_buffer(), __toCommonJS(node_buffer_exports)));
    }, 816476, (e, r, o) => {
      self._ENTRIES ||= {};
      let n = Promise.resolve().then(() => e.i(290578));
      n.catch(() => {
      }), self._ENTRIES.middleware_middleware = new Proxy(n, { get(e2, r2) {
        if ("then" === r2) return (r3, o3) => e2.then(r3, o3);
        let o2 = (...o3) => e2.then((e3) => (0, e3[r2])(...o3));
        return o2.then = (o3, n2) => e2.then((e3) => e3[r2]).then(o3, n2), o2;
      } });
    }]);
  }
});

// .next/server/edge/chunks/node_modules__pnpm_0_hdeb6._.js
var require_node_modules_pnpm_0_hdeb6 = __commonJS({
  ".next/server/edge/chunks/node_modules__pnpm_0_hdeb6._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/node_modules__pnpm_0_hdeb6._.js", 736411, (e, t, r) => {
    }, 938123, (e, t, r) => {
      "use strict";
      var n = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.prototype.hasOwnProperty, s = {}, l = { RequestCookies: () => g, ResponseCookies: () => m, parseCookie: () => d, parseSetCookie: () => h, stringifyCookie: () => c };
      for (var u in l) n(s, u, { get: l[u], enumerable: true });
      function c(e2) {
        var t2;
        let r2 = ["path" in e2 && e2.path && `Path=${e2.path}`, "expires" in e2 && (e2.expires || 0 === e2.expires) && `Expires=${("number" == typeof e2.expires ? new Date(e2.expires) : e2.expires).toUTCString()}`, "maxAge" in e2 && "number" == typeof e2.maxAge && `Max-Age=${e2.maxAge}`, "domain" in e2 && e2.domain && `Domain=${e2.domain}`, "secure" in e2 && e2.secure && "Secure", "httpOnly" in e2 && e2.httpOnly && "HttpOnly", "sameSite" in e2 && e2.sameSite && `SameSite=${e2.sameSite}`, "partitioned" in e2 && e2.partitioned && "Partitioned", "priority" in e2 && e2.priority && `Priority=${e2.priority}`].filter(Boolean), n2 = `${e2.name}=${encodeURIComponent(null != (t2 = e2.value) ? t2 : "")}`;
        return 0 === r2.length ? n2 : `${n2}; ${r2.join("; ")}`;
      }
      function d(e2) {
        let t2 = /* @__PURE__ */ new Map();
        for (let r2 of e2.split(/; */)) {
          if (!r2) continue;
          let e3 = r2.indexOf("=");
          if (-1 === e3) {
            t2.set(r2, "true");
            continue;
          }
          let [n2, i2] = [r2.slice(0, e3), r2.slice(e3 + 1)];
          try {
            t2.set(n2, decodeURIComponent(null != i2 ? i2 : "true"));
          } catch {
          }
        }
        return t2;
      }
      function h(e2) {
        if (!e2) return;
        let [[t2, r2], ...n2] = d(e2), { domain: i2, expires: a2, httponly: o2, maxage: s2, path: l2, samesite: u2, secure: c2, partitioned: h2, priority: g2 } = Object.fromEntries(n2.map(([e3, t3]) => [e3.toLowerCase().replace(/-/g, ""), t3]));
        {
          var m2, v, b = { name: t2, value: decodeURIComponent(r2), domain: i2, ...a2 && { expires: new Date(a2) }, ...o2 && { httpOnly: true }, ..."string" == typeof s2 && { maxAge: Number(s2) }, path: l2, ...u2 && { sameSite: p.includes(m2 = (m2 = u2).toLowerCase()) ? m2 : void 0 }, ...c2 && { secure: true }, ...g2 && { priority: f.includes(v = (v = g2).toLowerCase()) ? v : void 0 }, ...h2 && { partitioned: true } };
          let e3 = {};
          for (let t3 in b) b[t3] && (e3[t3] = b[t3]);
          return e3;
        }
      }
      t.exports = ((e2, t2, r2, s2) => {
        if (t2 && "object" == typeof t2 || "function" == typeof t2) for (let l2 of a(t2)) o.call(e2, l2) || l2 === r2 || n(e2, l2, { get: () => t2[l2], enumerable: !(s2 = i(t2, l2)) || s2.enumerable });
        return e2;
      })(n({}, "__esModule", { value: true }), s);
      var p = ["strict", "lax", "none"], f = ["low", "medium", "high"], g = class {
        constructor(e2) {
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          const t2 = e2.get("cookie");
          if (t2) for (const [e3, r2] of d(t2)) this._parsed.set(e3, { name: e3, value: r2 });
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed);
          if (!e2.length) return r2.map(([e3, t3]) => t3);
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter(([e3]) => e3 === n2).map(([e3, t3]) => t3);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2, n2 = this._parsed;
          return n2.set(t2, { name: t2, value: r2 }), this._headers.set("cookie", Array.from(n2).map(([e3, t3]) => c(t3)).join("; ")), this;
        }
        delete(e2) {
          let t2 = this._parsed, r2 = Array.isArray(e2) ? e2.map((e3) => t2.delete(e3)) : t2.delete(e2);
          return this._headers.set("cookie", Array.from(t2).map(([e3, t3]) => c(t3)).join("; ")), r2;
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map((e2) => `${e2.name}=${encodeURIComponent(e2.value)}`).join("; ");
        }
      }, m = class {
        constructor(e2) {
          var t2, r2, n2;
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          const i2 = null != (n2 = null != (r2 = null == (t2 = e2.getSetCookie) ? void 0 : t2.call(e2)) ? r2 : e2.get("set-cookie")) ? n2 : [];
          for (const e3 of Array.isArray(i2) ? i2 : function(e4) {
            if (!e4) return [];
            var t3, r3, n3, i3, a2, o2 = [], s2 = 0;
            function l2() {
              for (; s2 < e4.length && /\s/.test(e4.charAt(s2)); ) s2 += 1;
              return s2 < e4.length;
            }
            for (; s2 < e4.length; ) {
              for (t3 = s2, a2 = false; l2(); ) if ("," === (r3 = e4.charAt(s2))) {
                for (n3 = s2, s2 += 1, l2(), i3 = s2; s2 < e4.length && "=" !== (r3 = e4.charAt(s2)) && ";" !== r3 && "," !== r3; ) s2 += 1;
                s2 < e4.length && "=" === e4.charAt(s2) ? (a2 = true, s2 = i3, o2.push(e4.substring(t3, n3)), t3 = s2) : s2 = n3 + 1;
              } else s2 += 1;
              (!a2 || s2 >= e4.length) && o2.push(e4.substring(t3, e4.length));
            }
            return o2;
          }(i2)) {
            const t3 = h(e3);
            t3 && this._parsed.set(t3.name, t3);
          }
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed.values());
          if (!e2.length) return r2;
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter((e3) => e3.name === n2);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2, n2] = 1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2, i2 = this._parsed;
          return i2.set(t2, function(e3 = { name: "", value: "" }) {
            return "number" == typeof e3.expires && (e3.expires = new Date(e3.expires)), e3.maxAge && (e3.expires = new Date(Date.now() + 1e3 * e3.maxAge)), (null === e3.path || void 0 === e3.path) && (e3.path = "/"), e3;
          }({ name: t2, value: r2, ...n2 })), function(e3, t3) {
            for (let [, r3] of (t3.delete("set-cookie"), e3)) {
              let e4 = c(r3);
              t3.append("set-cookie", e4);
            }
          }(i2, this._headers), this;
        }
        delete(...e2) {
          let [t2, r2] = "string" == typeof e2[0] ? [e2[0]] : [e2[0].name, e2[0]];
          return this.set({ ...r2, name: t2, value: "", expires: /* @__PURE__ */ new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map(c).join("; ");
        }
      };
    }, 949540, (e) => {
      "use strict";
      var t, r, n, i, a, o, s, l, u, c, d, h;
      function p(e2) {
        return Symbol.for(e2);
      }
      class f {
        constructor(e2) {
          const t2 = this;
          t2._currentContext = e2 ? new Map(e2) : /* @__PURE__ */ new Map(), t2.getValue = (e3) => t2._currentContext.get(e3), t2.setValue = (e3, r2) => {
            let n2 = new f(t2._currentContext);
            return n2._currentContext.set(e3, r2), n2;
          }, t2.deleteValue = (e3) => {
            let r2 = new f(t2._currentContext);
            return r2._currentContext.delete(e3), r2;
          };
        }
      }
      let g = new f(), m = "1.9.1", v = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/, b = function(e2) {
        let t2 = /* @__PURE__ */ new Set([e2]), r2 = /* @__PURE__ */ new Set(), n2 = e2.match(v);
        if (!n2) return () => false;
        let i2 = { major: +n2[1], minor: +n2[2], patch: +n2[3], prerelease: n2[4] };
        if (null != i2.prerelease) return function(t3) {
          return t3 === e2;
        };
        function a2(e3) {
          return r2.add(e3), false;
        }
        return function(e3) {
          if (t2.has(e3)) return true;
          if (r2.has(e3)) return false;
          let n3 = e3.match(v);
          if (!n3) return a2(e3);
          let o2 = { major: +n3[1], minor: +n3[2], patch: +n3[3], prerelease: n3[4] };
          if (null != o2.prerelease || i2.major !== o2.major) return a2(e3);
          if (0 === i2.major) return i2.minor === o2.minor && i2.patch <= o2.patch ? (t2.add(e3), true) : a2(e3);
          return i2.minor <= o2.minor ? (t2.add(e3), true) : a2(e3);
        };
      }(m), w = m.split(".")[0], y = Symbol.for(`opentelemetry.js.api.${w}`), _ = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : e.g;
      function x(e2, t2, r2, n2 = false) {
        var i2;
        let a2 = _[y] = null != (i2 = _[y]) ? i2 : { version: m };
        if (!n2 && a2[e2]) {
          let t3 = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e2}`);
          return r2.error(t3.stack || t3.message), false;
        }
        if (a2.version !== m) {
          let t3 = Error(`@opentelemetry/api: Registration of version v${a2.version} for ${e2} does not match previously registered API v${m}`);
          return r2.error(t3.stack || t3.message), false;
        }
        return a2[e2] = t2, r2.debug(`@opentelemetry/api: Registered a global for ${e2} v${m}.`), true;
      }
      function E(e2) {
        var t2, r2;
        let n2 = null == (t2 = _[y]) ? void 0 : t2.version;
        if (n2 && b(n2)) return null == (r2 = _[y]) ? void 0 : r2[e2];
      }
      function C(e2, t2) {
        t2.debug(`@opentelemetry/api: Unregistering a global for ${e2} v${m}.`);
        let r2 = _[y];
        r2 && delete r2[e2];
      }
      class R {
        constructor(e2) {
          this._namespace = e2.namespace || "DiagComponentLogger";
        }
        debug(...e2) {
          return S("debug", this._namespace, e2);
        }
        error(...e2) {
          return S("error", this._namespace, e2);
        }
        info(...e2) {
          return S("info", this._namespace, e2);
        }
        warn(...e2) {
          return S("warn", this._namespace, e2);
        }
        verbose(...e2) {
          return S("verbose", this._namespace, e2);
        }
      }
      function S(e2, t2, r2) {
        let n2 = E("diag");
        if (n2) return n2[e2](t2, ...r2);
      }
      (s = t || (t = {}))[s.NONE = 0] = "NONE", s[s.ERROR = 30] = "ERROR", s[s.WARN = 50] = "WARN", s[s.INFO = 60] = "INFO", s[s.DEBUG = 70] = "DEBUG", s[s.VERBOSE = 80] = "VERBOSE", s[s.ALL = 9999] = "ALL";
      class T {
        static instance() {
          return this._instance || (this._instance = new T()), this._instance;
        }
        constructor() {
          function e2(e3) {
            return function(...t2) {
              let r3 = E("diag");
              if (r3) return r3[e3](...t2);
            };
          }
          const r2 = this, n2 = (e3, n3 = { logLevel: t.INFO }) => {
            var i2, a2, o2;
            if (e3 === r2) {
              let e4 = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
              return r2.error(null != (i2 = e4.stack) ? i2 : e4.message), false;
            }
            "number" == typeof n3 && (n3 = { logLevel: n3 });
            let s2 = E("diag"), l2 = function(e4, r3) {
              function n4(t2, n5) {
                let i3 = r3[t2];
                return "function" == typeof i3 && e4 >= n5 ? i3.bind(r3) : function() {
                };
              }
              return e4 < t.NONE ? e4 = t.NONE : e4 > t.ALL && (e4 = t.ALL), r3 = r3 || {}, { error: n4("error", t.ERROR), warn: n4("warn", t.WARN), info: n4("info", t.INFO), debug: n4("debug", t.DEBUG), verbose: n4("verbose", t.VERBOSE) };
            }(null != (a2 = n3.logLevel) ? a2 : t.INFO, e3);
            if (s2 && !n3.suppressOverrideMessage) {
              let e4 = null != (o2 = Error().stack) ? o2 : "<failed to generate stacktrace>";
              s2.warn(`Current logger will be overwritten from ${e4}`), l2.warn(`Current logger will overwrite one already registered from ${e4}`);
            }
            return x("diag", l2, r2, true);
          };
          r2.setLogger = n2, r2.disable = () => {
            C("diag", r2);
          }, r2.createComponentLogger = (e3) => new R(e3), r2.verbose = e2("verbose"), r2.debug = e2("debug"), r2.info = e2("info"), r2.warn = e2("warn"), r2.error = e2("error");
        }
      }
      let P = "context", O = new class {
        active() {
          return g;
        }
        with(e2, t2, r2, ...n2) {
          return t2.call(r2, ...n2);
        }
        bind(e2, t2) {
          return t2;
        }
        enable() {
          return this;
        }
        disable() {
          return this;
        }
      }();
      class k {
        static getInstance() {
          return this._instance || (this._instance = new k()), this._instance;
        }
        setGlobalContextManager(e2) {
          return x(P, e2, T.instance());
        }
        active() {
          return this._getContextManager().active();
        }
        with(e2, t2, r2, ...n2) {
          return this._getContextManager().with(e2, t2, r2, ...n2);
        }
        bind(e2, t2) {
          return this._getContextManager().bind(e2, t2);
        }
        _getContextManager() {
          return E(P) || O;
        }
        disable() {
          this._getContextManager().disable(), C(P, T.instance());
        }
      }
      let A = k.getInstance(), N = T.instance();
      class I {
      }
      class M {
        addCallback(e2) {
        }
        removeCallback(e2) {
        }
      }
      let j = new class {
        createGauge(e2, t2) {
          return L;
        }
        createHistogram(e2, t2) {
          return $;
        }
        createCounter(e2, t2) {
          return D;
        }
        createUpDownCounter(e2, t2) {
          return q;
        }
        createObservableGauge(e2, t2) {
          return H;
        }
        createObservableCounter(e2, t2) {
          return U;
        }
        createObservableUpDownCounter(e2, t2) {
          return F;
        }
        addBatchObservableCallback(e2, t2) {
        }
        removeBatchObservableCallback(e2) {
        }
      }(), D = new class extends I {
        add(e2, t2) {
        }
      }(), L = new class extends I {
        record(e2, t2) {
        }
      }(), $ = new class extends I {
        record(e2, t2) {
        }
      }(), q = new class extends I {
        add(e2, t2) {
        }
      }(), U = new class extends M {
      }(), H = new class extends M {
      }(), F = new class extends M {
      }(), B = new class {
        getMeter(e2, t2, r2) {
          return j;
        }
      }(), z = "metrics";
      class X {
        static getInstance() {
          return this._instance || (this._instance = new X()), this._instance;
        }
        setGlobalMeterProvider(e2) {
          return x(z, e2, T.instance());
        }
        getMeterProvider() {
          return E(z) || B;
        }
        getMeter(e2, t2, r2) {
          return this.getMeterProvider().getMeter(e2, t2, r2);
        }
        disable() {
          C(z, T.instance());
        }
      }
      let G = X.getInstance(), W = { get(e2, t2) {
        if (null != e2) return e2[t2];
      }, keys: (e2) => null == e2 ? [] : Object.keys(e2) }, V = { set(e2, t2, r2) {
        null != e2 && (e2[t2] = r2);
      } }, J = p("OpenTelemetry Baggage Key");
      function K(e2) {
        return e2.getValue(J) || void 0;
      }
      function Q() {
        return K(k.getInstance().active());
      }
      function Y(e2, t2) {
        return e2.setValue(J, t2);
      }
      function Z(e2) {
        return e2.deleteValue(J);
      }
      class ee {
        constructor(e2) {
          this._entries = e2 ? new Map(e2) : /* @__PURE__ */ new Map();
        }
        getEntry(e2) {
          let t2 = this._entries.get(e2);
          if (t2) return Object.assign({}, t2);
        }
        getAllEntries() {
          return Array.from(this._entries.entries());
        }
        setEntry(e2, t2) {
          let r2 = new ee(this._entries);
          return r2._entries.set(e2, t2), r2;
        }
        removeEntry(e2) {
          let t2 = new ee(this._entries);
          return t2._entries.delete(e2), t2;
        }
        removeEntries(...e2) {
          let t2 = new ee(this._entries);
          for (let r2 of e2) t2._entries.delete(r2);
          return t2;
        }
        clear() {
          return new ee();
        }
      }
      let et = Symbol("BaggageEntryMetadata"), er = T.instance();
      function en(e2 = {}) {
        return new ee(new Map(Object.entries(e2)));
      }
      let ei = "propagation", ea = new class {
        inject(e2, t2) {
        }
        extract(e2, t2) {
          return e2;
        }
        fields() {
          return [];
        }
      }();
      class eo {
        constructor() {
          this.createBaggage = en, this.getBaggage = K, this.getActiveBaggage = Q, this.setBaggage = Y, this.deleteBaggage = Z;
        }
        static getInstance() {
          return this._instance || (this._instance = new eo()), this._instance;
        }
        setGlobalPropagator(e2) {
          return x(ei, e2, T.instance());
        }
        inject(e2, t2, r2 = V) {
          return this._getGlobalPropagator().inject(e2, t2, r2);
        }
        extract(e2, t2, r2 = W) {
          return this._getGlobalPropagator().extract(e2, t2, r2);
        }
        fields() {
          return this._getGlobalPropagator().fields();
        }
        disable() {
          C(ei, T.instance());
        }
        _getGlobalPropagator() {
          return E(ei) || ea;
        }
      }
      let es = eo.getInstance();
      (l = r || (r = {}))[l.NONE = 0] = "NONE", l[l.SAMPLED = 1] = "SAMPLED";
      let el = "0000000000000000", eu = "00000000000000000000000000000000", ec = { traceId: eu, spanId: el, traceFlags: r.NONE };
      class ed {
        constructor(e2 = ec) {
          this._spanContext = e2;
        }
        spanContext() {
          return this._spanContext;
        }
        setAttribute(e2, t2) {
          return this;
        }
        setAttributes(e2) {
          return this;
        }
        addEvent(e2, t2) {
          return this;
        }
        addLink(e2) {
          return this;
        }
        addLinks(e2) {
          return this;
        }
        setStatus(e2) {
          return this;
        }
        updateName(e2) {
          return this;
        }
        end(e2) {
        }
        isRecording() {
          return false;
        }
        recordException(e2, t2) {
        }
      }
      let eh = p("OpenTelemetry Context Key SPAN");
      function ep(e2) {
        return e2.getValue(eh) || void 0;
      }
      function ef() {
        return ep(k.getInstance().active());
      }
      function eg(e2, t2) {
        return e2.setValue(eh, t2);
      }
      function em(e2) {
        return e2.deleteValue(eh);
      }
      function ev(e2, t2) {
        return eg(e2, new ed(t2));
      }
      function eb(e2) {
        var t2;
        return null == (t2 = ep(e2)) ? void 0 : t2.spanContext();
      }
      let ew = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]);
      function ey(e2, t2) {
        if ("string" != typeof e2 || e2.length !== t2) return false;
        let r2 = 0;
        for (let t3 = 0; t3 < e2.length; t3 += 4) r2 += (0 | ew[e2.charCodeAt(t3)]) + (0 | ew[e2.charCodeAt(t3 + 1)]) + (0 | ew[e2.charCodeAt(t3 + 2)]) + (0 | ew[e2.charCodeAt(t3 + 3)]);
        return r2 === t2;
      }
      function e_(e2) {
        return ey(e2, 32) && e2 !== eu;
      }
      function ex(e2) {
        return ey(e2, 16) && e2 !== el;
      }
      function eE(e2) {
        return e_(e2.traceId) && ex(e2.spanId);
      }
      function eC(e2) {
        return new ed(e2);
      }
      let eR = k.getInstance();
      class eS {
        startSpan(e2, t2, r2 = eR.active()) {
          var n2;
          if (null == t2 ? void 0 : t2.root) return new ed();
          let i2 = r2 && eb(r2);
          return null !== (n2 = i2) && "object" == typeof n2 && "spanId" in n2 && "string" == typeof n2.spanId && "traceId" in n2 && "string" == typeof n2.traceId && "traceFlags" in n2 && "number" == typeof n2.traceFlags && eE(i2) ? new ed(i2) : new ed();
        }
        startActiveSpan(e2, t2, r2, n2) {
          let i2, a2, o2;
          if (arguments.length < 2) return;
          2 == arguments.length ? o2 = t2 : 3 == arguments.length ? (i2 = t2, o2 = r2) : (i2 = t2, a2 = r2, o2 = n2);
          let s2 = null != a2 ? a2 : eR.active(), l2 = this.startSpan(e2, i2, s2), u2 = eg(s2, l2);
          return eR.with(u2, o2, void 0, l2);
        }
      }
      let eT = new eS();
      class eP {
        constructor(e2, t2, r2, n2) {
          this._provider = e2, this.name = t2, this.version = r2, this.options = n2;
        }
        startSpan(e2, t2, r2) {
          return this._getTracer().startSpan(e2, t2, r2);
        }
        startActiveSpan(e2, t2, r2, n2) {
          let i2 = this._getTracer();
          return Reflect.apply(i2.startActiveSpan, i2, arguments);
        }
        _getTracer() {
          if (this._delegate) return this._delegate;
          let e2 = this._provider.getDelegateTracer(this.name, this.version, this.options);
          return e2 ? (this._delegate = e2, this._delegate) : eT;
        }
      }
      let eO = new class {
        getTracer(e2, t2, r2) {
          return new eS();
        }
      }();
      class ek {
        getTracer(e2, t2, r2) {
          var n2;
          return null != (n2 = this.getDelegateTracer(e2, t2, r2)) ? n2 : new eP(this, e2, t2, r2);
        }
        getDelegate() {
          var e2;
          return null != (e2 = this._delegate) ? e2 : eO;
        }
        setDelegate(e2) {
          this._delegate = e2;
        }
        getDelegateTracer(e2, t2, r2) {
          var n2;
          return null == (n2 = this._delegate) ? void 0 : n2.getTracer(e2, t2, r2);
        }
      }
      let eA = "trace";
      class eN {
        constructor() {
          this._proxyTracerProvider = new ek(), this.wrapSpanContext = eC, this.isSpanContextValid = eE, this.deleteSpan = em, this.getSpan = ep, this.getActiveSpan = ef, this.getSpanContext = eb, this.setSpan = eg, this.setSpanContext = ev;
        }
        static getInstance() {
          return this._instance || (this._instance = new eN()), this._instance;
        }
        setGlobalTracerProvider(e2) {
          let t2 = x(eA, this._proxyTracerProvider, T.instance());
          return t2 && this._proxyTracerProvider.setDelegate(e2), t2;
        }
        getTracerProvider() {
          return E(eA) || this._proxyTracerProvider;
        }
        getTracer(e2, t2) {
          return this.getTracerProvider().getTracer(e2, t2);
        }
        disable() {
          C(eA, T.instance()), this._proxyTracerProvider = new ek();
        }
      }
      let eI = eN.getInstance(), eM = { context: A, diag: N, metrics: G, propagation: es, trace: eI };
      e.s(["default", 0, eM], 971766), e.i(971766);
      let ej = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }], eD = {};
      if ("u" > typeof console) for (let e2 of ["error", "warn", "info", "debug", "trace", "log"]) "function" == typeof console[e2] && (eD[e2] = console[e2]);
      (u = n || (n = {}))[u.INT = 0] = "INT", u[u.DOUBLE = 1] = "DOUBLE", (c = i || (i = {}))[c.NOT_RECORD = 0] = "NOT_RECORD", c[c.RECORD = 1] = "RECORD", c[c.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED", (d = a || (a = {}))[d.INTERNAL = 0] = "INTERNAL", d[d.SERVER = 1] = "SERVER", d[d.CLIENT = 2] = "CLIENT", d[d.PRODUCER = 3] = "PRODUCER", d[d.CONSUMER = 4] = "CONSUMER", (h = o || (o = {}))[h.UNSET = 0] = "UNSET", h[h.OK = 1] = "OK", h[h.ERROR = 2] = "ERROR";
      let eL = "[_0-9a-z-*/]", e$ = `[a-z]${eL}{0,255}`, eq = `[a-z0-9]${eL}{0,240}@[a-z]${eL}{0,13}`, eU = RegExp(`^(?:${e$}|${eq})$`), eH = /^[ -~]{0,255}[!-~]$/, eF = /,|=/;
      class eB {
        constructor(e2) {
          this._internalState = /* @__PURE__ */ new Map(), e2 && this._parse(e2);
        }
        set(e2, t2) {
          let r2 = this._clone();
          return r2._internalState.has(e2) && r2._internalState.delete(e2), r2._internalState.set(e2, t2), r2;
        }
        unset(e2) {
          let t2 = this._clone();
          return t2._internalState.delete(e2), t2;
        }
        get(e2) {
          return this._internalState.get(e2);
        }
        serialize() {
          return Array.from(this._internalState.keys()).reduceRight((e2, t2) => (e2.push(t2 + "=" + this.get(t2)), e2), []).join(",");
        }
        _parse(e2) {
          !(e2.length > 512) && (this._internalState = e2.split(",").reduceRight((e3, t2) => {
            let r2 = t2.trim(), n2 = r2.indexOf("=");
            if (-1 !== n2) {
              let i2 = r2.slice(0, n2), a2 = r2.slice(n2 + 1, t2.length);
              eU.test(i2) && eH.test(a2) && !eF.test(a2) && e3.set(i2, a2);
            }
            return e3;
          }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
        }
        _keys() {
          return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
          let e2 = new eB();
          return e2._internalState = new Map(this._internalState), e2;
        }
      }
      e.s(["DiagConsoleLogger", 0, class {
        constructor() {
          for (let e2 = 0; e2 < ej.length; e2++) this[ej[e2].n] = /* @__PURE__ */ function(e3) {
            return function(...t2) {
              let r2 = eD[e3];
              if ("function" != typeof r2 && (r2 = eD.log), "function" != typeof r2 && console && "function" != typeof (r2 = console[e3]) && (r2 = console.log), "function" == typeof r2) return r2.apply(console, t2);
            };
          }(ej[e2].c);
        }
      }, "DiagLogLevel", 0, t, "INVALID_SPANID", 0, el, "INVALID_SPAN_CONTEXT", 0, ec, "INVALID_TRACEID", 0, eu, "ProxyTracer", 0, eP, "ProxyTracerProvider", 0, ek, "ROOT_CONTEXT", 0, g, "SamplingDecision", 0, i, "SpanKind", 0, a, "SpanStatusCode", 0, o, "TraceFlags", 0, r, "ValueType", 0, n, "baggageEntryMetadataFromString", 0, function(e2) {
        return "string" != typeof e2 && (er.error(`Cannot create baggage metadata from unknown type: ${typeof e2}`), e2 = ""), { __TYPE__: et, toString: () => e2 };
      }, "context", 0, A, "createContextKey", 0, p, "createNoopMeter", 0, function() {
        return j;
      }, "createTraceState", 0, function(e2) {
        return new eB(e2);
      }, "default", 0, eM, "defaultTextMapGetter", 0, W, "defaultTextMapSetter", 0, V, "diag", 0, N, "isSpanContextValid", 0, eE, "isValidSpanId", 0, ex, "isValidTraceId", 0, e_, "metrics", 0, G, "propagation", 0, es, "trace", 0, eI], 949540);
    }, 924464, (e, t, r) => {
      (() => {
        "use strict";
        "u" > typeof __nccwpck_require__ && (__nccwpck_require__.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.94.2/node_modules/next/dist/compiled/cookie/");
        var e2, r2, n, i, a = {};
        a.parse = function(t2, r3) {
          if ("string" != typeof t2) throw TypeError("argument str must be a string");
          for (var i2 = {}, a2 = t2.split(n), o = (r3 || {}).decode || e2, s = 0; s < a2.length; s++) {
            var l = a2[s], u = l.indexOf("=");
            if (!(u < 0)) {
              var c = l.substr(0, u).trim(), d = l.substr(++u, l.length).trim();
              '"' == d[0] && (d = d.slice(1, -1)), void 0 == i2[c] && (i2[c] = function(e3, t3) {
                try {
                  return t3(e3);
                } catch (t4) {
                  return e3;
                }
              }(d, o));
            }
          }
          return i2;
        }, a.serialize = function(e3, t2, n2) {
          var a2 = n2 || {}, o = a2.encode || r2;
          if ("function" != typeof o) throw TypeError("option encode is invalid");
          if (!i.test(e3)) throw TypeError("argument name is invalid");
          var s = o(t2);
          if (s && !i.test(s)) throw TypeError("argument val is invalid");
          var l = e3 + "=" + s;
          if (null != a2.maxAge) {
            var u = a2.maxAge - 0;
            if (isNaN(u) || !isFinite(u)) throw TypeError("option maxAge is invalid");
            l += "; Max-Age=" + Math.floor(u);
          }
          if (a2.domain) {
            if (!i.test(a2.domain)) throw TypeError("option domain is invalid");
            l += "; Domain=" + a2.domain;
          }
          if (a2.path) {
            if (!i.test(a2.path)) throw TypeError("option path is invalid");
            l += "; Path=" + a2.path;
          }
          if (a2.expires) {
            if ("function" != typeof a2.expires.toUTCString) throw TypeError("option expires is invalid");
            l += "; Expires=" + a2.expires.toUTCString();
          }
          if (a2.httpOnly && (l += "; HttpOnly"), a2.secure && (l += "; Secure"), a2.sameSite) switch ("string" == typeof a2.sameSite ? a2.sameSite.toLowerCase() : a2.sameSite) {
            case true:
            case "strict":
              l += "; SameSite=Strict";
              break;
            case "lax":
              l += "; SameSite=Lax";
              break;
            case "none":
              l += "; SameSite=None";
              break;
            default:
              throw TypeError("option sameSite is invalid");
          }
          return l;
        }, e2 = decodeURIComponent, r2 = encodeURIComponent, n = /; */, i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, t.exports = a;
      })();
    }, 470154, (e, t, r) => {
      (() => {
        "use strict";
        let e2, r2, n, i, a;
        var o = { 993: (e3) => {
          var t2 = Object.prototype.hasOwnProperty, r3 = "~";
          function n2() {
          }
          function i2(e4, t3, r4) {
            this.fn = e4, this.context = t3, this.once = r4 || false;
          }
          function a2(e4, t3, n3, a3, o3) {
            if ("function" != typeof n3) throw TypeError("The listener must be a function");
            var s3 = new i2(n3, a3 || e4, o3), l2 = r3 ? r3 + t3 : t3;
            return e4._events[l2] ? e4._events[l2].fn ? e4._events[l2] = [e4._events[l2], s3] : e4._events[l2].push(s3) : (e4._events[l2] = s3, e4._eventsCount++), e4;
          }
          function o2(e4, t3) {
            0 == --e4._eventsCount ? e4._events = new n2() : delete e4._events[t3];
          }
          function s2() {
            this._events = new n2(), this._eventsCount = 0;
          }
          Object.create && (n2.prototype = /* @__PURE__ */ Object.create(null), new n2().__proto__ || (r3 = false)), s2.prototype.eventNames = function() {
            var e4, n3, i3 = [];
            if (0 === this._eventsCount) return i3;
            for (n3 in e4 = this._events) t2.call(e4, n3) && i3.push(r3 ? n3.slice(1) : n3);
            return Object.getOwnPropertySymbols ? i3.concat(Object.getOwnPropertySymbols(e4)) : i3;
          }, s2.prototype.listeners = function(e4) {
            var t3 = r3 ? r3 + e4 : e4, n3 = this._events[t3];
            if (!n3) return [];
            if (n3.fn) return [n3.fn];
            for (var i3 = 0, a3 = n3.length, o3 = Array(a3); i3 < a3; i3++) o3[i3] = n3[i3].fn;
            return o3;
          }, s2.prototype.listenerCount = function(e4) {
            var t3 = r3 ? r3 + e4 : e4, n3 = this._events[t3];
            return n3 ? n3.fn ? 1 : n3.length : 0;
          }, s2.prototype.emit = function(e4, t3, n3, i3, a3, o3) {
            var s3 = r3 ? r3 + e4 : e4;
            if (!this._events[s3]) return false;
            var l2, u2, c = this._events[s3], d = arguments.length;
            if (c.fn) {
              switch (c.once && this.removeListener(e4, c.fn, void 0, true), d) {
                case 1:
                  return c.fn.call(c.context), true;
                case 2:
                  return c.fn.call(c.context, t3), true;
                case 3:
                  return c.fn.call(c.context, t3, n3), true;
                case 4:
                  return c.fn.call(c.context, t3, n3, i3), true;
                case 5:
                  return c.fn.call(c.context, t3, n3, i3, a3), true;
                case 6:
                  return c.fn.call(c.context, t3, n3, i3, a3, o3), true;
              }
              for (u2 = 1, l2 = Array(d - 1); u2 < d; u2++) l2[u2 - 1] = arguments[u2];
              c.fn.apply(c.context, l2);
            } else {
              var h, p = c.length;
              for (u2 = 0; u2 < p; u2++) switch (c[u2].once && this.removeListener(e4, c[u2].fn, void 0, true), d) {
                case 1:
                  c[u2].fn.call(c[u2].context);
                  break;
                case 2:
                  c[u2].fn.call(c[u2].context, t3);
                  break;
                case 3:
                  c[u2].fn.call(c[u2].context, t3, n3);
                  break;
                case 4:
                  c[u2].fn.call(c[u2].context, t3, n3, i3);
                  break;
                default:
                  if (!l2) for (h = 1, l2 = Array(d - 1); h < d; h++) l2[h - 1] = arguments[h];
                  c[u2].fn.apply(c[u2].context, l2);
              }
            }
            return true;
          }, s2.prototype.on = function(e4, t3, r4) {
            return a2(this, e4, t3, r4, false);
          }, s2.prototype.once = function(e4, t3, r4) {
            return a2(this, e4, t3, r4, true);
          }, s2.prototype.removeListener = function(e4, t3, n3, i3) {
            var a3 = r3 ? r3 + e4 : e4;
            if (!this._events[a3]) return this;
            if (!t3) return o2(this, a3), this;
            var s3 = this._events[a3];
            if (s3.fn) s3.fn !== t3 || i3 && !s3.once || n3 && s3.context !== n3 || o2(this, a3);
            else {
              for (var l2 = 0, u2 = [], c = s3.length; l2 < c; l2++) (s3[l2].fn !== t3 || i3 && !s3[l2].once || n3 && s3[l2].context !== n3) && u2.push(s3[l2]);
              u2.length ? this._events[a3] = 1 === u2.length ? u2[0] : u2 : o2(this, a3);
            }
            return this;
          }, s2.prototype.removeAllListeners = function(e4) {
            var t3;
            return e4 ? (t3 = r3 ? r3 + e4 : e4, this._events[t3] && o2(this, t3)) : (this._events = new n2(), this._eventsCount = 0), this;
          }, s2.prototype.off = s2.prototype.removeListener, s2.prototype.addListener = s2.prototype.on, s2.prefixed = r3, s2.EventEmitter = s2, e3.exports = s2;
        }, 213: (e3) => {
          e3.exports = (e4, t2) => (t2 = t2 || (() => {
          }), e4.then((e5) => new Promise((e6) => {
            e6(t2());
          }).then(() => e5), (e5) => new Promise((e6) => {
            e6(t2());
          }).then(() => {
            throw e5;
          })));
        }, 574: (e3, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.default = function(e4, t3, r3) {
            let n2 = 0, i2 = e4.length;
            for (; i2 > 0; ) {
              let a2 = i2 / 2 | 0, o2 = n2 + a2;
              0 >= r3(e4[o2], t3) ? (n2 = ++o2, i2 -= a2 + 1) : i2 = a2;
            }
            return n2;
          };
        }, 821: (e3, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true });
          let n2 = r3(574);
          t2.default = class {
            constructor() {
              this._queue = [];
            }
            enqueue(e4, t3) {
              let r4 = { priority: (t3 = Object.assign({ priority: 0 }, t3)).priority, run: e4 };
              if (this.size && this._queue[this.size - 1].priority >= t3.priority) return void this._queue.push(r4);
              let i2 = n2.default(this._queue, r4, (e5, t4) => t4.priority - e5.priority);
              this._queue.splice(i2, 0, r4);
            }
            dequeue() {
              let e4 = this._queue.shift();
              return null == e4 ? void 0 : e4.run;
            }
            filter(e4) {
              return this._queue.filter((t3) => t3.priority === e4.priority).map((e5) => e5.run);
            }
            get size() {
              return this._queue.length;
            }
          };
        }, 816: (e3, t2, r3) => {
          let n2 = r3(213);
          class i2 extends Error {
            constructor(e4) {
              super(e4), this.name = "TimeoutError";
            }
          }
          let a2 = (e4, t3, r4) => new Promise((a3, o2) => {
            if ("number" != typeof t3 || t3 < 0) throw TypeError("Expected `milliseconds` to be a positive number");
            if (t3 === 1 / 0) return void a3(e4);
            let s2 = setTimeout(() => {
              if ("function" == typeof r4) {
                try {
                  a3(r4());
                } catch (e5) {
                  o2(e5);
                }
                return;
              }
              let n3 = "string" == typeof r4 ? r4 : `Promise timed out after ${t3} milliseconds`, s3 = r4 instanceof Error ? r4 : new i2(n3);
              "function" == typeof e4.cancel && e4.cancel(), o2(s3);
            }, t3);
            n2(e4.then(a3, o2), () => {
              clearTimeout(s2);
            });
          });
          e3.exports = a2, e3.exports.default = a2, e3.exports.TimeoutError = i2;
        } }, s = {};
        function l(e3) {
          var t2 = s[e3];
          if (void 0 !== t2) return t2.exports;
          var r3 = s[e3] = { exports: {} }, n2 = true;
          try {
            o[e3](r3, r3.exports, l), n2 = false;
          } finally {
            n2 && delete s[e3];
          }
          return r3.exports;
        }
        l.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.94.2/node_modules/next/dist/compiled/p-queue/";
        var u = {};
        Object.defineProperty(u, "__esModule", { value: true }), e2 = l(993), r2 = l(816), n = l(821), i = () => {
        }, a = new r2.TimeoutError(), u.default = class extends e2 {
          constructor(e3) {
            var t2, r3, a2, o2;
            if (super(), this._intervalCount = 0, this._intervalEnd = 0, this._pendingCount = 0, this._resolveEmpty = i, this._resolveIdle = i, !("number" == typeof (e3 = Object.assign({ carryoverConcurrencyCount: false, intervalCap: 1 / 0, interval: 0, concurrency: 1 / 0, autoStart: true, queueClass: n.default }, e3)).intervalCap && e3.intervalCap >= 1)) throw TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null != (r3 = null == (t2 = e3.intervalCap) ? void 0 : t2.toString()) ? r3 : ""}\` (${typeof e3.intervalCap})`);
            if (void 0 === e3.interval || !(Number.isFinite(e3.interval) && e3.interval >= 0)) throw TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null != (o2 = null == (a2 = e3.interval) ? void 0 : a2.toString()) ? o2 : ""}\` (${typeof e3.interval})`);
            this._carryoverConcurrencyCount = e3.carryoverConcurrencyCount, this._isIntervalIgnored = e3.intervalCap === 1 / 0 || 0 === e3.interval, this._intervalCap = e3.intervalCap, this._interval = e3.interval, this._queue = new e3.queueClass(), this._queueClass = e3.queueClass, this.concurrency = e3.concurrency, this._timeout = e3.timeout, this._throwOnTimeout = true === e3.throwOnTimeout, this._isPaused = false === e3.autoStart;
          }
          get _doesIntervalAllowAnother() {
            return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
          }
          get _doesConcurrentAllowAnother() {
            return this._pendingCount < this._concurrency;
          }
          _next() {
            this._pendingCount--, this._tryToStartAnother(), this.emit("next");
          }
          _resolvePromises() {
            this._resolveEmpty(), this._resolveEmpty = i, 0 === this._pendingCount && (this._resolveIdle(), this._resolveIdle = i, this.emit("idle"));
          }
          _onResumeInterval() {
            this._onInterval(), this._initializeIntervalIfNeeded(), this._timeoutId = void 0;
          }
          _isIntervalPaused() {
            let e3 = Date.now();
            if (void 0 === this._intervalId) {
              let t2 = this._intervalEnd - e3;
              if (!(t2 < 0)) return void 0 === this._timeoutId && (this._timeoutId = setTimeout(() => {
                this._onResumeInterval();
              }, t2)), true;
              this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
            }
            return false;
          }
          _tryToStartAnother() {
            if (0 === this._queue.size) return this._intervalId && clearInterval(this._intervalId), this._intervalId = void 0, this._resolvePromises(), false;
            if (!this._isPaused) {
              let e3 = !this._isIntervalPaused();
              if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                let t2 = this._queue.dequeue();
                return !!t2 && (this.emit("active"), t2(), e3 && this._initializeIntervalIfNeeded(), true);
              }
            }
            return false;
          }
          _initializeIntervalIfNeeded() {
            this._isIntervalIgnored || void 0 !== this._intervalId || (this._intervalId = setInterval(() => {
              this._onInterval();
            }, this._interval), this._intervalEnd = Date.now() + this._interval);
          }
          _onInterval() {
            0 === this._intervalCount && 0 === this._pendingCount && this._intervalId && (clearInterval(this._intervalId), this._intervalId = void 0), this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0, this._processQueue();
          }
          _processQueue() {
            for (; this._tryToStartAnother(); ) ;
          }
          get concurrency() {
            return this._concurrency;
          }
          set concurrency(e3) {
            if (!("number" == typeof e3 && e3 >= 1)) throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e3}\` (${typeof e3})`);
            this._concurrency = e3, this._processQueue();
          }
          async add(e3, t2 = {}) {
            return new Promise((n2, i2) => {
              let o2 = async () => {
                this._pendingCount++, this._intervalCount++;
                try {
                  let o3 = void 0 === this._timeout && void 0 === t2.timeout ? e3() : r2.default(Promise.resolve(e3()), void 0 === t2.timeout ? this._timeout : t2.timeout, () => {
                    (void 0 === t2.throwOnTimeout ? this._throwOnTimeout : t2.throwOnTimeout) && i2(a);
                  });
                  n2(await o3);
                } catch (e4) {
                  i2(e4);
                }
                this._next();
              };
              this._queue.enqueue(o2, t2), this._tryToStartAnother(), this.emit("add");
            });
          }
          async addAll(e3, t2) {
            return Promise.all(e3.map(async (e4) => this.add(e4, t2)));
          }
          start() {
            return this._isPaused && (this._isPaused = false, this._processQueue()), this;
          }
          pause() {
            this._isPaused = true;
          }
          clear() {
            this._queue = new this._queueClass();
          }
          async onEmpty() {
            if (0 !== this._queue.size) return new Promise((e3) => {
              let t2 = this._resolveEmpty;
              this._resolveEmpty = () => {
                t2(), e3();
              };
            });
          }
          async onIdle() {
            if (0 !== this._pendingCount || 0 !== this._queue.size) return new Promise((e3) => {
              let t2 = this._resolveIdle;
              this._resolveIdle = () => {
                t2(), e3();
              };
            });
          }
          get size() {
            return this._queue.size;
          }
          sizeBy(e3) {
            return this._queue.filter(e3).length;
          }
          get pending() {
            return this._pendingCount;
          }
          get isPaused() {
            return this._isPaused;
          }
          get timeout() {
            return this._timeout;
          }
          set timeout(e3) {
            this._timeout = e3;
          }
        }, t.exports = u;
      })();
    }, 164402, (e, t, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });
      var n = { getTestReqInfo: function() {
        return l;
      }, withRequest: function() {
        return s;
      } };
      for (var i in n) Object.defineProperty(r, i, { enumerable: true, get: n[i] });
      let a = new (e.r(478500)).AsyncLocalStorage();
      function o(e2, t2) {
        let r2 = t2.header(e2, "next-test-proxy-port");
        if (!r2) return;
        let n2 = t2.url(e2);
        return { url: n2, proxyPort: Number(r2), testData: t2.header(e2, "next-test-data") || "" };
      }
      function s(e2, t2, r2) {
        let n2 = o(e2, t2);
        return n2 ? a.run(n2, r2) : r2();
      }
      function l(e2, t2) {
        let r2 = a.getStore();
        return r2 || (e2 && t2 ? o(e2, t2) : void 0);
      }
    }, 581801, (e, t, r) => {
      "use strict";
      var n = e.i(951615);
      Object.defineProperty(r, "__esModule", { value: true });
      var i = { handleFetch: function() {
        return u;
      }, interceptFetch: function() {
        return c;
      }, reader: function() {
        return s;
      } };
      for (var a in i) Object.defineProperty(r, a, { enumerable: true, get: i[a] });
      let o = e.r(164402), s = { url: (e2) => e2.url, header: (e2, t2) => e2.headers.get(t2) };
      async function l(e2, t2) {
        let { url: r2, method: i2, headers: a2, body: o2, cache: s2, credentials: l2, integrity: u2, mode: c2, redirect: d, referrer: h, referrerPolicy: p } = t2;
        return { testData: e2, api: "fetch", request: { url: r2, method: i2, headers: [...Array.from(a2), ["next-test-stack", function() {
          let e3 = (Error().stack ?? "").split("\n");
          for (let t3 = 1; t3 < e3.length; t3++) if (e3[t3].length > 0) {
            e3 = e3.slice(t3);
            break;
          }
          return (e3 = (e3 = (e3 = e3.filter((e4) => !e4.includes("/next/dist/"))).slice(0, 5)).map((e4) => e4.replace("webpack-internal:///(rsc)/", "").trim())).join("    ");
        }()]], body: o2 ? n.Buffer.from(await t2.arrayBuffer()).toString("base64") : null, cache: s2, credentials: l2, integrity: u2, mode: c2, redirect: d, referrer: h, referrerPolicy: p } };
      }
      async function u(e2, t2) {
        let r2 = (0, o.getTestReqInfo)(t2, s);
        if (!r2) return e2(t2);
        let { testData: i2, proxyPort: a2 } = r2, u2 = await l(i2, t2), c2 = await e2(`http://localhost:${a2}`, { method: "POST", body: JSON.stringify(u2), next: { internal: true } });
        if (!c2.ok) throw Object.defineProperty(Error(`Proxy request failed: ${c2.status}`), "__NEXT_ERROR_CODE", { value: "E146", enumerable: false, configurable: true });
        let d = await c2.json(), { api: h } = d;
        switch (h) {
          case "continue":
            return e2(t2);
          case "abort":
          case "unhandled":
            throw Object.defineProperty(Error(`Proxy request aborted [${t2.method} ${t2.url}]`), "__NEXT_ERROR_CODE", { value: "E145", enumerable: false, configurable: true });
          case "fetch":
            return function(e3) {
              let { status: t3, headers: r3, body: i3 } = e3.response;
              return new Response(i3 ? n.Buffer.from(i3, "base64") : null, { status: t3, headers: new Headers(r3) });
            }(d);
          default:
            return h;
        }
      }
      function c(t2) {
        return e.g.fetch = function(e2, r2) {
          var n2;
          return (null == r2 || null == (n2 = r2.next) ? void 0 : n2.internal) ? t2(e2, r2) : u(t2, new Request(e2, r2));
        }, () => {
          e.g.fetch = t2;
        };
      }
    }, 285842, (e, t, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });
      var n = { interceptTestApis: function() {
        return s;
      }, wrapRequestHandler: function() {
        return l;
      } };
      for (var i in n) Object.defineProperty(r, i, { enumerable: true, get: n[i] });
      let a = e.r(164402), o = e.r(581801);
      function s() {
        return (0, o.interceptFetch)(e.g.fetch);
      }
      function l(e2) {
        return (t2, r2) => (0, a.withRequest)(t2, o.reader, () => e2(t2, r2));
      }
    }, 835452, (e, t, r) => {
      !function() {
        "use strict";
        var e2 = { 114: function(e3) {
          function t2(e4) {
            if ("string" != typeof e4) throw TypeError("Path must be a string. Received " + JSON.stringify(e4));
          }
          function r3(e4, t3) {
            for (var r4, n3 = "", i = 0, a = -1, o = 0, s = 0; s <= e4.length; ++s) {
              if (s < e4.length) r4 = e4.charCodeAt(s);
              else if (47 === r4) break;
              else r4 = 47;
              if (47 === r4) {
                if (a === s - 1 || 1 === o) ;
                else if (a !== s - 1 && 2 === o) {
                  if (n3.length < 2 || 2 !== i || 46 !== n3.charCodeAt(n3.length - 1) || 46 !== n3.charCodeAt(n3.length - 2)) {
                    if (n3.length > 2) {
                      var l = n3.lastIndexOf("/");
                      if (l !== n3.length - 1) {
                        -1 === l ? (n3 = "", i = 0) : i = (n3 = n3.slice(0, l)).length - 1 - n3.lastIndexOf("/"), a = s, o = 0;
                        continue;
                      }
                    } else if (2 === n3.length || 1 === n3.length) {
                      n3 = "", i = 0, a = s, o = 0;
                      continue;
                    }
                  }
                  t3 && (n3.length > 0 ? n3 += "/.." : n3 = "..", i = 2);
                } else n3.length > 0 ? n3 += "/" + e4.slice(a + 1, s) : n3 = e4.slice(a + 1, s), i = s - a - 1;
                a = s, o = 0;
              } else 46 === r4 && -1 !== o ? ++o : o = -1;
            }
            return n3;
          }
          var n2 = { resolve: function() {
            for (var e4, n3, i = "", a = false, o = arguments.length - 1; o >= -1 && !a; o--) o >= 0 ? n3 = arguments[o] : (void 0 === e4 && (e4 = ""), n3 = e4), t2(n3), 0 !== n3.length && (i = n3 + "/" + i, a = 47 === n3.charCodeAt(0));
            if (i = r3(i, !a), a) if (i.length > 0) return "/" + i;
            else return "/";
            return i.length > 0 ? i : ".";
          }, normalize: function(e4) {
            if (t2(e4), 0 === e4.length) return ".";
            var n3 = 47 === e4.charCodeAt(0), i = 47 === e4.charCodeAt(e4.length - 1);
            return (0 !== (e4 = r3(e4, !n3)).length || n3 || (e4 = "."), e4.length > 0 && i && (e4 += "/"), n3) ? "/" + e4 : e4;
          }, isAbsolute: function(e4) {
            return t2(e4), e4.length > 0 && 47 === e4.charCodeAt(0);
          }, join: function() {
            if (0 == arguments.length) return ".";
            for (var e4, r4 = 0; r4 < arguments.length; ++r4) {
              var i = arguments[r4];
              t2(i), i.length > 0 && (void 0 === e4 ? e4 = i : e4 += "/" + i);
            }
            return void 0 === e4 ? "." : n2.normalize(e4);
          }, relative: function(e4, r4) {
            if (t2(e4), t2(r4), e4 === r4 || (e4 = n2.resolve(e4)) === (r4 = n2.resolve(r4))) return "";
            for (var i = 1; i < e4.length && 47 === e4.charCodeAt(i); ++i) ;
            for (var a = e4.length, o = a - i, s = 1; s < r4.length && 47 === r4.charCodeAt(s); ++s) ;
            for (var l = r4.length - s, u = o < l ? o : l, c = -1, d = 0; d <= u; ++d) {
              if (d === u) {
                if (l > u) {
                  if (47 === r4.charCodeAt(s + d)) return r4.slice(s + d + 1);
                  else if (0 === d) return r4.slice(s + d);
                } else o > u && (47 === e4.charCodeAt(i + d) ? c = d : 0 === d && (c = 0));
                break;
              }
              var h = e4.charCodeAt(i + d);
              if (h !== r4.charCodeAt(s + d)) break;
              47 === h && (c = d);
            }
            var p = "";
            for (d = i + c + 1; d <= a; ++d) (d === a || 47 === e4.charCodeAt(d)) && (0 === p.length ? p += ".." : p += "/..");
            return p.length > 0 ? p + r4.slice(s + c) : (s += c, 47 === r4.charCodeAt(s) && ++s, r4.slice(s));
          }, _makeLong: function(e4) {
            return e4;
          }, dirname: function(e4) {
            if (t2(e4), 0 === e4.length) return ".";
            for (var r4 = e4.charCodeAt(0), n3 = 47 === r4, i = -1, a = true, o = e4.length - 1; o >= 1; --o) if (47 === (r4 = e4.charCodeAt(o))) {
              if (!a) {
                i = o;
                break;
              }
            } else a = false;
            return -1 === i ? n3 ? "/" : "." : n3 && 1 === i ? "//" : e4.slice(0, i);
          }, basename: function(e4, r4) {
            if (void 0 !== r4 && "string" != typeof r4) throw TypeError('"ext" argument must be a string');
            t2(e4);
            var n3, i = 0, a = -1, o = true;
            if (void 0 !== r4 && r4.length > 0 && r4.length <= e4.length) {
              if (r4.length === e4.length && r4 === e4) return "";
              var s = r4.length - 1, l = -1;
              for (n3 = e4.length - 1; n3 >= 0; --n3) {
                var u = e4.charCodeAt(n3);
                if (47 === u) {
                  if (!o) {
                    i = n3 + 1;
                    break;
                  }
                } else -1 === l && (o = false, l = n3 + 1), s >= 0 && (u === r4.charCodeAt(s) ? -1 == --s && (a = n3) : (s = -1, a = l));
              }
              return i === a ? a = l : -1 === a && (a = e4.length), e4.slice(i, a);
            }
            for (n3 = e4.length - 1; n3 >= 0; --n3) if (47 === e4.charCodeAt(n3)) {
              if (!o) {
                i = n3 + 1;
                break;
              }
            } else -1 === a && (o = false, a = n3 + 1);
            return -1 === a ? "" : e4.slice(i, a);
          }, extname: function(e4) {
            t2(e4);
            for (var r4 = -1, n3 = 0, i = -1, a = true, o = 0, s = e4.length - 1; s >= 0; --s) {
              var l = e4.charCodeAt(s);
              if (47 === l) {
                if (!a) {
                  n3 = s + 1;
                  break;
                }
                continue;
              }
              -1 === i && (a = false, i = s + 1), 46 === l ? -1 === r4 ? r4 = s : 1 !== o && (o = 1) : -1 !== r4 && (o = -1);
            }
            return -1 === r4 || -1 === i || 0 === o || 1 === o && r4 === i - 1 && r4 === n3 + 1 ? "" : e4.slice(r4, i);
          }, format: function(e4) {
            var t3, r4;
            if (null === e4 || "object" != typeof e4) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e4);
            return t3 = e4.dir || e4.root, r4 = e4.base || (e4.name || "") + (e4.ext || ""), t3 ? t3 === e4.root ? t3 + r4 : t3 + "/" + r4 : r4;
          }, parse: function(e4) {
            t2(e4);
            var r4, n3 = { root: "", dir: "", base: "", ext: "", name: "" };
            if (0 === e4.length) return n3;
            var i = e4.charCodeAt(0), a = 47 === i;
            a ? (n3.root = "/", r4 = 1) : r4 = 0;
            for (var o = -1, s = 0, l = -1, u = true, c = e4.length - 1, d = 0; c >= r4; --c) {
              if (47 === (i = e4.charCodeAt(c))) {
                if (!u) {
                  s = c + 1;
                  break;
                }
                continue;
              }
              -1 === l && (u = false, l = c + 1), 46 === i ? -1 === o ? o = c : 1 !== d && (d = 1) : -1 !== o && (d = -1);
            }
            return -1 === o || -1 === l || 0 === d || 1 === d && o === l - 1 && o === s + 1 ? -1 !== l && (0 === s && a ? n3.base = n3.name = e4.slice(1, l) : n3.base = n3.name = e4.slice(s, l)) : (0 === s && a ? (n3.name = e4.slice(1, o), n3.base = e4.slice(1, l)) : (n3.name = e4.slice(s, o), n3.base = e4.slice(s, l)), n3.ext = e4.slice(o, l)), s > 0 ? n3.dir = e4.slice(0, s - 1) : a && (n3.dir = "/"), n3;
          }, sep: "/", delimiter: ":", win32: null, posix: null };
          n2.posix = n2, e3.exports = n2;
        } }, r2 = {};
        function n(t2) {
          var i = r2[t2];
          if (void 0 !== i) return i.exports;
          var a = r2[t2] = { exports: {} }, o = true;
          try {
            e2[t2](a, a.exports, n), o = false;
          } finally {
            o && delete r2[t2];
          }
          return a.exports;
        }
        n.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.94.2/node_modules/next/dist/compiled/path-browserify/", t.exports = n(114);
      }();
    }, 835938, (e, t, r) => {
      t.exports = e.r(835452);
    }, 258538, (e, t, r) => {
      (() => {
        "use strict";
        "u" > typeof __nccwpck_require__ && (__nccwpck_require__.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.94.2/node_modules/next/dist/compiled/path-to-regexp/");
        var e2 = {};
        (() => {
          function t2(e3, t3) {
            void 0 === t3 && (t3 = {});
            for (var r3 = function(e4) {
              for (var t4 = [], r4 = 0; r4 < e4.length; ) {
                var n3 = e4[r4];
                if ("*" === n3 || "+" === n3 || "?" === n3) {
                  t4.push({ type: "MODIFIER", index: r4, value: e4[r4++] });
                  continue;
                }
                if ("\\" === n3) {
                  t4.push({ type: "ESCAPED_CHAR", index: r4++, value: e4[r4++] });
                  continue;
                }
                if ("{" === n3) {
                  t4.push({ type: "OPEN", index: r4, value: e4[r4++] });
                  continue;
                }
                if ("}" === n3) {
                  t4.push({ type: "CLOSE", index: r4, value: e4[r4++] });
                  continue;
                }
                if (":" === n3) {
                  for (var i2 = "", a3 = r4 + 1; a3 < e4.length; ) {
                    var o3 = e4.charCodeAt(a3);
                    if (o3 >= 48 && o3 <= 57 || o3 >= 65 && o3 <= 90 || o3 >= 97 && o3 <= 122 || 95 === o3) {
                      i2 += e4[a3++];
                      continue;
                    }
                    break;
                  }
                  if (!i2) throw TypeError("Missing parameter name at ".concat(r4));
                  t4.push({ type: "NAME", index: r4, value: i2 }), r4 = a3;
                  continue;
                }
                if ("(" === n3) {
                  var s3 = 1, l2 = "", a3 = r4 + 1;
                  if ("?" === e4[a3]) throw TypeError('Pattern cannot start with "?" at '.concat(a3));
                  for (; a3 < e4.length; ) {
                    if ("\\" === e4[a3]) {
                      l2 += e4[a3++] + e4[a3++];
                      continue;
                    }
                    if (")" === e4[a3]) {
                      if (0 == --s3) {
                        a3++;
                        break;
                      }
                    } else if ("(" === e4[a3] && (s3++, "?" !== e4[a3 + 1])) throw TypeError("Capturing groups are not allowed at ".concat(a3));
                    l2 += e4[a3++];
                  }
                  if (s3) throw TypeError("Unbalanced pattern at ".concat(r4));
                  if (!l2) throw TypeError("Missing pattern at ".concat(r4));
                  t4.push({ type: "PATTERN", index: r4, value: l2 }), r4 = a3;
                  continue;
                }
                t4.push({ type: "CHAR", index: r4, value: e4[r4++] });
              }
              return t4.push({ type: "END", index: r4, value: "" }), t4;
            }(e3), n2 = t3.prefixes, a2 = void 0 === n2 ? "./" : n2, o2 = t3.delimiter, s2 = void 0 === o2 ? "/#?" : o2, l = [], u = 0, c = 0, d = "", h = function(e4) {
              if (c < r3.length && r3[c].type === e4) return r3[c++].value;
            }, p = function(e4) {
              var t4 = h(e4);
              if (void 0 !== t4) return t4;
              var n3 = r3[c], i2 = n3.type, a3 = n3.index;
              throw TypeError("Unexpected ".concat(i2, " at ").concat(a3, ", expected ").concat(e4));
            }, f = function() {
              for (var e4, t4 = ""; e4 = h("CHAR") || h("ESCAPED_CHAR"); ) t4 += e4;
              return t4;
            }, g = function(e4) {
              for (var t4 = 0; t4 < s2.length; t4++) {
                var r4 = s2[t4];
                if (e4.indexOf(r4) > -1) return true;
              }
              return false;
            }, m = function(e4) {
              var t4 = l[l.length - 1], r4 = e4 || (t4 && "string" == typeof t4 ? t4 : "");
              if (t4 && !r4) throw TypeError('Must have text between two parameters, missing text after "'.concat(t4.name, '"'));
              return !r4 || g(r4) ? "[^".concat(i(s2), "]+?") : "(?:(?!".concat(i(r4), ")[^").concat(i(s2), "])+?");
            }; c < r3.length; ) {
              var v = h("CHAR"), b = h("NAME"), w = h("PATTERN");
              if (b || w) {
                var y = v || "";
                -1 === a2.indexOf(y) && (d += y, y = ""), d && (l.push(d), d = ""), l.push({ name: b || u++, prefix: y, suffix: "", pattern: w || m(y), modifier: h("MODIFIER") || "" });
                continue;
              }
              var _ = v || h("ESCAPED_CHAR");
              if (_) {
                d += _;
                continue;
              }
              if (d && (l.push(d), d = ""), h("OPEN")) {
                var y = f(), x = h("NAME") || "", E = h("PATTERN") || "", C = f();
                p("CLOSE"), l.push({ name: x || (E ? u++ : ""), pattern: x && !E ? m(y) : E, prefix: y, suffix: C, modifier: h("MODIFIER") || "" });
                continue;
              }
              p("END");
            }
            return l;
          }
          function r2(e3, t3) {
            void 0 === t3 && (t3 = {});
            var r3 = a(t3), n2 = t3.encode, i2 = void 0 === n2 ? function(e4) {
              return e4;
            } : n2, o2 = t3.validate, s2 = void 0 === o2 || o2, l = e3.map(function(e4) {
              if ("object" == typeof e4) return new RegExp("^(?:".concat(e4.pattern, ")$"), r3);
            });
            return function(t4) {
              for (var r4 = "", n3 = 0; n3 < e3.length; n3++) {
                var a2 = e3[n3];
                if ("string" == typeof a2) {
                  r4 += a2;
                  continue;
                }
                var o3 = t4 ? t4[a2.name] : void 0, u = "?" === a2.modifier || "*" === a2.modifier, c = "*" === a2.modifier || "+" === a2.modifier;
                if (Array.isArray(o3)) {
                  if (!c) throw TypeError('Expected "'.concat(a2.name, '" to not repeat, but got an array'));
                  if (0 === o3.length) {
                    if (u) continue;
                    throw TypeError('Expected "'.concat(a2.name, '" to not be empty'));
                  }
                  for (var d = 0; d < o3.length; d++) {
                    var h = i2(o3[d], a2);
                    if (s2 && !l[n3].test(h)) throw TypeError('Expected all "'.concat(a2.name, '" to match "').concat(a2.pattern, '", but got "').concat(h, '"'));
                    r4 += a2.prefix + h + a2.suffix;
                  }
                  continue;
                }
                if ("string" == typeof o3 || "number" == typeof o3) {
                  var h = i2(String(o3), a2);
                  if (s2 && !l[n3].test(h)) throw TypeError('Expected "'.concat(a2.name, '" to match "').concat(a2.pattern, '", but got "').concat(h, '"'));
                  r4 += a2.prefix + h + a2.suffix;
                  continue;
                }
                if (!u) {
                  var p = c ? "an array" : "a string";
                  throw TypeError('Expected "'.concat(a2.name, '" to be ').concat(p));
                }
              }
              return r4;
            };
          }
          function n(e3, t3, r3) {
            void 0 === r3 && (r3 = {});
            var n2 = r3.decode, i2 = void 0 === n2 ? function(e4) {
              return e4;
            } : n2;
            return function(r4) {
              var n3 = e3.exec(r4);
              if (!n3) return false;
              for (var a2 = n3[0], o2 = n3.index, s2 = /* @__PURE__ */ Object.create(null), l = 1; l < n3.length; l++) !function(e4) {
                if (void 0 !== n3[e4]) {
                  var r5 = t3[e4 - 1];
                  "*" === r5.modifier || "+" === r5.modifier ? s2[r5.name] = n3[e4].split(r5.prefix + r5.suffix).map(function(e5) {
                    return i2(e5, r5);
                  }) : s2[r5.name] = i2(n3[e4], r5);
                }
              }(l);
              return { path: a2, index: o2, params: s2 };
            };
          }
          function i(e3) {
            return e3.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
          }
          function a(e3) {
            return e3 && e3.sensitive ? "" : "i";
          }
          function o(e3, t3, r3) {
            void 0 === r3 && (r3 = {});
            for (var n2 = r3.strict, o2 = void 0 !== n2 && n2, s2 = r3.start, l = r3.end, u = r3.encode, c = void 0 === u ? function(e4) {
              return e4;
            } : u, d = r3.delimiter, h = r3.endsWith, p = "[".concat(i(void 0 === h ? "" : h), "]|$"), f = "[".concat(i(void 0 === d ? "/#?" : d), "]"), g = void 0 === s2 || s2 ? "^" : "", m = 0; m < e3.length; m++) {
              var v = e3[m];
              if ("string" == typeof v) g += i(c(v));
              else {
                var b = i(c(v.prefix)), w = i(c(v.suffix));
                if (v.pattern) if (t3 && t3.push(v), b || w) if ("+" === v.modifier || "*" === v.modifier) {
                  var y = "*" === v.modifier ? "?" : "";
                  g += "(?:".concat(b, "((?:").concat(v.pattern, ")(?:").concat(w).concat(b, "(?:").concat(v.pattern, "))*)").concat(w, ")").concat(y);
                } else g += "(?:".concat(b, "(").concat(v.pattern, ")").concat(w, ")").concat(v.modifier);
                else {
                  if ("+" === v.modifier || "*" === v.modifier) throw TypeError('Can not repeat "'.concat(v.name, '" without a prefix and suffix'));
                  g += "(".concat(v.pattern, ")").concat(v.modifier);
                }
                else g += "(?:".concat(b).concat(w, ")").concat(v.modifier);
              }
            }
            if (void 0 === l || l) o2 || (g += "".concat(f, "?")), g += r3.endsWith ? "(?=".concat(p, ")") : "$";
            else {
              var _ = e3[e3.length - 1], x = "string" == typeof _ ? f.indexOf(_[_.length - 1]) > -1 : void 0 === _;
              o2 || (g += "(?:".concat(f, "(?=").concat(p, "))?")), x || (g += "(?=".concat(f, "|").concat(p, ")"));
            }
            return new RegExp(g, a(r3));
          }
          function s(e3, r3, n2) {
            if (e3 instanceof RegExp) {
              var i2;
              if (!r3) return e3;
              for (var l = /\((?:\?<(.*?)>)?(?!\?)/g, u = 0, c = l.exec(e3.source); c; ) r3.push({ name: c[1] || u++, prefix: "", suffix: "", modifier: "", pattern: "" }), c = l.exec(e3.source);
              return e3;
            }
            return Array.isArray(e3) ? (i2 = e3.map(function(e4) {
              return s(e4, r3, n2).source;
            }), new RegExp("(?:".concat(i2.join("|"), ")"), a(n2))) : o(t2(e3, n2), r3, n2);
          }
          Object.defineProperty(e2, "__esModule", { value: true }), e2.pathToRegexp = e2.tokensToRegexp = e2.regexpToFunction = e2.match = e2.tokensToFunction = e2.compile = e2.parse = void 0, e2.parse = t2, e2.compile = function(e3, n2) {
            return r2(t2(e3, n2), n2);
          }, e2.tokensToFunction = r2, e2.match = function(e3, t3) {
            var r3 = [];
            return n(s(e3, r3, t3), r3, t3);
          }, e2.regexpToFunction = n, e2.tokensToRegexp = o, e2.pathToRegexp = s;
        })(), t.exports = e2;
      })();
    }, 571254, (e, t, r) => {
      var n = { 226: function(t2, r2) {
        !function(n2) {
          "use strict";
          var i2 = "function", a2 = "undefined", o = "object", s = "string", l = "major", u = "model", c = "name", d = "type", h = "vendor", p = "version", f = "architecture", g = "console", m = "mobile", v = "tablet", b = "smarttv", w = "wearable", y = "embedded", _ = "Amazon", x = "Apple", E = "ASUS", C = "BlackBerry", R = "Browser", S = "Chrome", T = "Firefox", P = "Google", O = "Huawei", k = "Microsoft", A = "Motorola", N = "Opera", I = "Samsung", M = "Sharp", j = "Sony", D = "Xiaomi", L = "Zebra", $ = "Facebook", q = "Chromium OS", U = "Mac OS", H = function(e2, t3) {
            var r3 = {};
            for (var n3 in e2) t3[n3] && t3[n3].length % 2 == 0 ? r3[n3] = t3[n3].concat(e2[n3]) : r3[n3] = e2[n3];
            return r3;
          }, F = function(e2) {
            for (var t3 = {}, r3 = 0; r3 < e2.length; r3++) t3[e2[r3].toUpperCase()] = e2[r3];
            return t3;
          }, B = function(e2, t3) {
            return typeof e2 === s && -1 !== z(t3).indexOf(z(e2));
          }, z = function(e2) {
            return e2.toLowerCase();
          }, X = function(e2, t3) {
            if (typeof e2 === s) return e2 = e2.replace(/^\s\s*/, ""), typeof t3 === a2 ? e2 : e2.substring(0, 350);
          }, G = function(e2, t3) {
            for (var r3, n3, a3, s2, l2, u2, c2 = 0; c2 < t3.length && !l2; ) {
              var d2 = t3[c2], h2 = t3[c2 + 1];
              for (r3 = n3 = 0; r3 < d2.length && !l2 && d2[r3]; ) if (l2 = d2[r3++].exec(e2)) for (a3 = 0; a3 < h2.length; a3++) u2 = l2[++n3], typeof (s2 = h2[a3]) === o && s2.length > 0 ? 2 === s2.length ? typeof s2[1] == i2 ? this[s2[0]] = s2[1].call(this, u2) : this[s2[0]] = s2[1] : 3 === s2.length ? typeof s2[1] !== i2 || s2[1].exec && s2[1].test ? this[s2[0]] = u2 ? u2.replace(s2[1], s2[2]) : void 0 : this[s2[0]] = u2 ? s2[1].call(this, u2, s2[2]) : void 0 : 4 === s2.length && (this[s2[0]] = u2 ? s2[3].call(this, u2.replace(s2[1], s2[2])) : void 0) : this[s2] = u2 || void 0;
              c2 += 2;
            }
          }, W = function(e2, t3) {
            for (var r3 in t3) if (typeof t3[r3] === o && t3[r3].length > 0) {
              for (var n3 = 0; n3 < t3[r3].length; n3++) if (B(t3[r3][n3], e2)) return "?" === r3 ? void 0 : r3;
            } else if (B(t3[r3], e2)) return "?" === r3 ? void 0 : r3;
            return e2;
          }, V = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, J = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [p, [c, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [p, [c, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [c, p], [/opios[\/ ]+([\w\.]+)/i], [p, [c, N + " Mini"]], [/\bopr\/([\w\.]+)/i], [p, [c, N]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [c, p], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [p, [c, "UC" + R]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [p, [c, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [p, [c, "WeChat"]], [/konqueror\/([\w\.]+)/i], [p, [c, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [p, [c, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [p, [c, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[c, /(.+)/, "$1 Secure " + R], p], [/\bfocus\/([\w\.]+)/i], [p, [c, T + " Focus"]], [/\bopt\/([\w\.]+)/i], [p, [c, N + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [p, [c, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [p, [c, "Dolphin"]], [/coast\/([\w\.]+)/i], [p, [c, N + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [p, [c, "MIUI " + R]], [/fxios\/([-\w\.]+)/i], [p, [c, T]], [/\bqihu|(qi?ho?o?|360)browser/i], [[c, "360 " + R]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[c, /(.+)/, "$1 " + R], p], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], p], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [c, p], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [c], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[c, $], p], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [c, p], [/\bgsa\/([\w\.]+) .*safari\//i], [p, [c, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [p, [c, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [p, [c, S + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[c, S + " WebView"], p], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [p, [c, "Android " + R]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [c, p], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [p, [c, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [p, c], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [c, [p, W, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [c, p], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[c, "Netscape"], p], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [p, [c, T + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [c, p], [/(cobalt)\/([\w\.]+)/i], [c, [p, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[f, "amd64"]], [/(ia32(?=;))/i], [[f, z]], [/((?:i[346]|x)86)[;\)]/i], [[f, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[f, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[f, "armhf"]], [/windows (ce|mobile); ppc;/i], [[f, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[f, /ower/, "", z]], [/(sun4\w)[;\)]/i], [[f, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[f, z]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [u, [h, I], [d, v]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [u, [h, I], [d, m]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [u, [h, x], [d, m]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [h, x], [d, v]], [/(macintosh);/i], [u, [h, x]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [u, [h, M], [d, m]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [u, [h, O], [d, v]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [u, [h, O], [d, m]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[u, /_/g, " "], [h, D], [d, m]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[u, /_/g, " "], [h, D], [d, v]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [u, [h, "OPPO"], [d, m]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [u, [h, "Vivo"], [d, m]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [u, [h, "Realme"], [d, m]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [u, [h, A], [d, m]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [u, [h, A], [d, v]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [u, [h, "LG"], [d, v]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [u, [h, "LG"], [d, m]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [u, [h, "Lenovo"], [d, v]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[u, /_/g, " "], [h, "Nokia"], [d, m]], [/(pixel c)\b/i], [u, [h, P], [d, v]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [u, [h, P], [d, m]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [h, j], [d, m]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[u, "Xperia Tablet"], [h, j], [d, v]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [u, [h, "OnePlus"], [d, m]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [u, [h, _], [d, v]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[u, /(.+)/g, "Fire Phone $1"], [h, _], [d, m]], [/(playbook);[-\w\),; ]+(rim)/i], [u, h, [d, v]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [u, [h, C], [d, m]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [u, [h, E], [d, v]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [u, [h, E], [d, m]], [/(nexus 9)/i], [u, [h, "HTC"], [d, v]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [u, /_/g, " "], [d, m]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [u, [h, "Acer"], [d, v]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [u, [h, "Meizu"], [d, m]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [h, u, [d, m]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, u, [d, v]], [/(surface duo)/i], [u, [h, k], [d, v]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [u, [h, "Fairphone"], [d, m]], [/(u304aa)/i], [u, [h, "AT&T"], [d, m]], [/\bsie-(\w*)/i], [u, [h, "Siemens"], [d, m]], [/\b(rct\w+) b/i], [u, [h, "RCA"], [d, v]], [/\b(venue[\d ]{2,7}) b/i], [u, [h, "Dell"], [d, v]], [/\b(q(?:mv|ta)\w+) b/i], [u, [h, "Verizon"], [d, v]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [u, [h, "Barnes & Noble"], [d, v]], [/\b(tm\d{3}\w+) b/i], [u, [h, "NuVision"], [d, v]], [/\b(k88) b/i], [u, [h, "ZTE"], [d, v]], [/\b(nx\d{3}j) b/i], [u, [h, "ZTE"], [d, m]], [/\b(gen\d{3}) b.+49h/i], [u, [h, "Swiss"], [d, m]], [/\b(zur\d{3}) b/i], [u, [h, "Swiss"], [d, v]], [/\b((zeki)?tb.*\b) b/i], [u, [h, "Zeki"], [d, v]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], u, [d, v]], [/\b(ns-?\w{0,9}) b/i], [u, [h, "Insignia"], [d, v]], [/\b((nxa|next)-?\w{0,9}) b/i], [u, [h, "NextBook"], [d, v]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], u, [d, m]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], u, [d, m]], [/\b(ph-1) /i], [u, [h, "Essential"], [d, m]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [u, [h, "Envizen"], [d, v]], [/\b(trio[-\w\. ]+) b/i], [u, [h, "MachSpeed"], [d, v]], [/\btu_(1491) b/i], [u, [h, "Rotor"], [d, v]], [/(shield[\w ]+) b/i], [u, [h, "Nvidia"], [d, v]], [/(sprint) (\w+)/i], [h, u, [d, m]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [h, k], [d, m]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [h, L], [d, v]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [h, L], [d, m]], [/smart-tv.+(samsung)/i], [h, [d, b]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [h, I], [d, b]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, "LG"], [d, b]], [/(apple) ?tv/i], [h, [u, x + " TV"], [d, b]], [/crkey/i], [[u, S + "cast"], [h, P], [d, b]], [/droid.+aft(\w)( bui|\))/i], [u, [h, _], [d, b]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [u, [h, M], [d, b]], [/(bravia[\w ]+)( bui|\))/i], [u, [h, j], [d, b]], [/(mitv-\w{5}) bui/i], [u, [h, D], [d, b]], [/Hbbtv.*(technisat) (.*);/i], [h, u, [d, b]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[h, X], [u, X], [d, b]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, b]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, u, [d, g]], [/droid.+; (shield) bui/i], [u, [h, "Nvidia"], [d, g]], [/(playstation [345portablevi]+)/i], [u, [h, j], [d, g]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [u, [h, k], [d, g]], [/((pebble))app/i], [h, u, [d, w]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [u, [h, x], [d, w]], [/droid.+; (glass) \d/i], [u, [h, P], [d, w]], [/droid.+; (wt63?0{2,3})\)/i], [u, [h, L], [d, w]], [/(quest( 2| pro)?)/i], [u, [h, $], [d, w]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [d, y]], [/(aeobc)\b/i], [u, [h, _], [d, y]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [u, [d, m]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [u, [d, v]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, v]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, m]], [/(android[-\w\. ]{0,9});.+buil/i], [u, [h, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [p, [c, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [p, [c, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [c, p], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [p, c]], os: [[/microsoft (windows) (vista|xp)/i], [c, p], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [c, [p, W, V]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[c, "Windows"], [p, W, V]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[p, /_/g, "."], [c, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[c, U], [p, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [p, c], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [c, p], [/\(bb(10);/i], [p, [c, C]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [p, [c, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [p, [c, T + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [p, [c, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [p, [c, "watchOS"]], [/crkey\/([\d\.]+)/i], [p, [c, S + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[c, q], p], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [c, p], [/(sunos) ?([\w\.\d]*)/i], [[c, "Solaris"], p], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [c, p]] }, K = function(e2, t3) {
            if (typeof e2 === o && (t3 = e2, e2 = void 0), !(this instanceof K)) return new K(e2, t3).getResult();
            var r3 = typeof n2 !== a2 && n2.navigator ? n2.navigator : void 0, g2 = e2 || (r3 && r3.userAgent ? r3.userAgent : ""), b2 = r3 && r3.userAgentData ? r3.userAgentData : void 0, w2 = t3 ? H(J, t3) : J, y2 = r3 && r3.userAgent == g2;
            return this.getBrowser = function() {
              var e3, t4 = {};
              return t4[c] = void 0, t4[p] = void 0, G.call(t4, g2, w2.browser), t4[l] = typeof (e3 = t4[p]) === s ? e3.replace(/[^\d\.]/g, "").split(".")[0] : void 0, y2 && r3 && r3.brave && typeof r3.brave.isBrave == i2 && (t4[c] = "Brave"), t4;
            }, this.getCPU = function() {
              var e3 = {};
              return e3[f] = void 0, G.call(e3, g2, w2.cpu), e3;
            }, this.getDevice = function() {
              var e3 = {};
              return e3[h] = void 0, e3[u] = void 0, e3[d] = void 0, G.call(e3, g2, w2.device), y2 && !e3[d] && b2 && b2.mobile && (e3[d] = m), y2 && "Macintosh" == e3[u] && r3 && typeof r3.standalone !== a2 && r3.maxTouchPoints && r3.maxTouchPoints > 2 && (e3[u] = "iPad", e3[d] = v), e3;
            }, this.getEngine = function() {
              var e3 = {};
              return e3[c] = void 0, e3[p] = void 0, G.call(e3, g2, w2.engine), e3;
            }, this.getOS = function() {
              var e3 = {};
              return e3[c] = void 0, e3[p] = void 0, G.call(e3, g2, w2.os), y2 && !e3[c] && b2 && "Unknown" != b2.platform && (e3[c] = b2.platform.replace(/chrome os/i, q).replace(/macos/i, U)), e3;
            }, this.getResult = function() {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
            }, this.getUA = function() {
              return g2;
            }, this.setUA = function(e3) {
              return g2 = typeof e3 === s && e3.length > 350 ? X(e3, 350) : e3, this;
            }, this.setUA(g2), this;
          };
          if (K.VERSION = "1.0.35", K.BROWSER = F([c, p, l]), K.CPU = F([f]), K.DEVICE = F([u, h, d, g, m, b, v, w, y]), K.ENGINE = K.OS = F([c, p]), typeof r2 !== a2) t2.exports && (r2 = t2.exports = K), r2.UAParser = K;
          else if (typeof define === i2 && define.amd) e.r, void 0 !== K && e.v(K);
          else typeof n2 !== a2 && (n2.UAParser = K);
          var Q = typeof n2 !== a2 && (n2.jQuery || n2.Zepto);
          if (Q && !Q.ua) {
            var Y = new K();
            Q.ua = Y.getResult(), Q.ua.get = function() {
              return Y.getUA();
            }, Q.ua.set = function(e2) {
              Y.setUA(e2);
              var t3 = Y.getResult();
              for (var r3 in t3) Q.ua[r3] = t3[r3];
            };
          }
        }(this);
      } }, i = {};
      function a(e2) {
        var t2 = i[e2];
        if (void 0 !== t2) return t2.exports;
        var r2 = i[e2] = { exports: {} }, o = true;
        try {
          n[e2].call(r2.exports, r2, r2.exports, a), o = false;
        } finally {
          o && delete i[e2];
        }
        return r2.exports;
      }
      a.ab = "/ROOT/node_modules/.pnpm/next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.94.2/node_modules/next/dist/compiled/ua-parser-js/", t.exports = a(226);
    }, 351916, (e, t, r) => {
      "use strict";
      var n = { H: null, A: null };
      function i(e2) {
        var t2 = "https://react.dev/errors/" + e2;
        if (1 < arguments.length) {
          t2 += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var r2 = 2; r2 < arguments.length; r2++) t2 += "&args[]=" + encodeURIComponent(arguments[r2]);
        }
        return "Minified React error #" + e2 + "; visit " + t2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var a = Array.isArray;
      function o() {
      }
      var s = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), v = Symbol.for("react.view_transition"), b = Symbol.iterator, w = Object.prototype.hasOwnProperty, y = Object.assign;
      function _(e2, t2, r2) {
        var n2 = r2.ref;
        return { $$typeof: s, type: e2, key: t2, ref: void 0 !== n2 ? n2 : null, props: r2 };
      }
      function x(e2) {
        return "object" == typeof e2 && null !== e2 && e2.$$typeof === s;
      }
      var E = /\/+/g;
      function C(e2, t2) {
        var r2, n2;
        return "object" == typeof e2 && null !== e2 && null != e2.key ? (r2 = "" + e2.key, n2 = { "=": "=0", ":": "=2" }, "$" + r2.replace(/[=:]/g, function(e3) {
          return n2[e3];
        })) : t2.toString(36);
      }
      function R(e2, t2, r2) {
        if (null == e2) return e2;
        var n2 = [], u2 = 0;
        return !function e3(t3, r3, n3, u3, c2) {
          var d2, h2, p2, f2 = typeof t3;
          ("undefined" === f2 || "boolean" === f2) && (t3 = null);
          var m2 = false;
          if (null === t3) m2 = true;
          else switch (f2) {
            case "bigint":
            case "string":
            case "number":
              m2 = true;
              break;
            case "object":
              switch (t3.$$typeof) {
                case s:
                case l:
                  m2 = true;
                  break;
                case g:
                  return e3((m2 = t3._init)(t3._payload), r3, n3, u3, c2);
              }
          }
          if (m2) return c2 = c2(t3), m2 = "" === u3 ? "." + C(t3, 0) : u3, a(c2) ? (n3 = "", null != m2 && (n3 = m2.replace(E, "$&/") + "/"), e3(c2, r3, n3, "", function(e4) {
            return e4;
          })) : null != c2 && (x(c2) && (d2 = c2, h2 = n3 + (null == c2.key || t3 && t3.key === c2.key ? "" : ("" + c2.key).replace(E, "$&/") + "/") + m2, c2 = _(d2.type, h2, d2.props)), r3.push(c2)), 1;
          m2 = 0;
          var v2 = "" === u3 ? "." : u3 + ":";
          if (a(t3)) for (var w2 = 0; w2 < t3.length; w2++) f2 = v2 + C(u3 = t3[w2], w2), m2 += e3(u3, r3, n3, f2, c2);
          else if ("function" == typeof (w2 = null === (p2 = t3) || "object" != typeof p2 ? null : "function" == typeof (p2 = b && p2[b] || p2["@@iterator"]) ? p2 : null)) for (t3 = w2.call(t3), w2 = 0; !(u3 = t3.next()).done; ) f2 = v2 + C(u3 = u3.value, w2++), m2 += e3(u3, r3, n3, f2, c2);
          else if ("object" === f2) {
            if ("function" == typeof t3.then) return e3(function(e4) {
              switch (e4.status) {
                case "fulfilled":
                  return e4.value;
                case "rejected":
                  throw e4.reason;
                default:
                  switch ("string" == typeof e4.status ? e4.then(o, o) : (e4.status = "pending", e4.then(function(t4) {
                    "pending" === e4.status && (e4.status = "fulfilled", e4.value = t4);
                  }, function(t4) {
                    "pending" === e4.status && (e4.status = "rejected", e4.reason = t4);
                  })), e4.status) {
                    case "fulfilled":
                      return e4.value;
                    case "rejected":
                      throw e4.reason;
                  }
              }
              throw e4;
            }(t3), r3, n3, u3, c2);
            throw Error(i(31, "[object Object]" === (r3 = String(t3)) ? "object with keys {" + Object.keys(t3).join(", ") + "}" : r3));
          }
          return m2;
        }(e2, n2, "", "", function(e3) {
          return t2.call(r2, e3, u2++);
        }), n2;
      }
      function S(e2) {
        if (-1 === e2._status) {
          var t2 = (0, e2._result)();
          t2.then(function(r2) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 1, e2._result = r2, void 0 === t2.status && (t2.status = "fulfilled", t2.value = r2));
          }, function(r2) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 2, e2._result = r2, void 0 === t2.status && (t2.status = "rejected", t2.reason = r2));
          }), -1 === e2._status && (e2._status = 0, e2._result = t2);
        }
        if (1 === e2._status) return e2._result.default;
        throw e2._result;
      }
      function T() {
        return /* @__PURE__ */ new WeakMap();
      }
      function P() {
        return { s: 0, v: void 0, o: null, p: null };
      }
      r.Activity = m, r.Children = { map: R, forEach: function(e2, t2, r2) {
        R(e2, function() {
          t2.apply(this, arguments);
        }, r2);
      }, count: function(e2) {
        var t2 = 0;
        return R(e2, function() {
          t2++;
        }), t2;
      }, toArray: function(e2) {
        return R(e2, function(e3) {
          return e3;
        }) || [];
      }, only: function(e2) {
        if (!x(e2)) throw Error(i(143));
        return e2;
      } }, r.Fragment = u, r.Profiler = d, r.StrictMode = c, r.Suspense = p, r.ViewTransition = v, r.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, r.cache = function(e2) {
        return function() {
          var t2 = n.A;
          if (!t2) return e2.apply(null, arguments);
          var r2 = t2.getCacheForType(T);
          void 0 === (t2 = r2.get(e2)) && (t2 = P(), r2.set(e2, t2)), r2 = 0;
          for (var i2 = arguments.length; r2 < i2; r2++) {
            var a2 = arguments[r2];
            if ("function" == typeof a2 || "object" == typeof a2 && null !== a2) {
              var o2 = t2.o;
              null === o2 && (t2.o = o2 = /* @__PURE__ */ new WeakMap()), void 0 === (t2 = o2.get(a2)) && (t2 = P(), o2.set(a2, t2));
            } else null === (o2 = t2.p) && (t2.p = o2 = /* @__PURE__ */ new Map()), void 0 === (t2 = o2.get(a2)) && (t2 = P(), o2.set(a2, t2));
          }
          if (1 === t2.s) return t2.v;
          if (2 === t2.s) throw t2.v;
          try {
            var s2 = e2.apply(null, arguments);
            return (r2 = t2).s = 1, r2.v = s2;
          } catch (e3) {
            throw (s2 = t2).s = 2, s2.v = e3, e3;
          }
        };
      }, r.cacheSignal = function() {
        var e2 = n.A;
        return e2 ? e2.cacheSignal() : null;
      }, r.captureOwnerStack = function() {
        return null;
      }, r.cloneElement = function(e2, t2, r2) {
        if (null == e2) throw Error(i(267, e2));
        var n2 = y({}, e2.props), a2 = e2.key;
        if (null != t2) for (o2 in void 0 !== t2.key && (a2 = "" + t2.key), t2) w.call(t2, o2) && "key" !== o2 && "__self" !== o2 && "__source" !== o2 && ("ref" !== o2 || void 0 !== t2.ref) && (n2[o2] = t2[o2]);
        var o2 = arguments.length - 2;
        if (1 === o2) n2.children = r2;
        else if (1 < o2) {
          for (var s2 = Array(o2), l2 = 0; l2 < o2; l2++) s2[l2] = arguments[l2 + 2];
          n2.children = s2;
        }
        return _(e2.type, a2, n2);
      }, r.createElement = function(e2, t2, r2) {
        var n2, i2 = {}, a2 = null;
        if (null != t2) for (n2 in void 0 !== t2.key && (a2 = "" + t2.key), t2) w.call(t2, n2) && "key" !== n2 && "__self" !== n2 && "__source" !== n2 && (i2[n2] = t2[n2]);
        var o2 = arguments.length - 2;
        if (1 === o2) i2.children = r2;
        else if (1 < o2) {
          for (var s2 = Array(o2), l2 = 0; l2 < o2; l2++) s2[l2] = arguments[l2 + 2];
          i2.children = s2;
        }
        if (e2 && e2.defaultProps) for (n2 in o2 = e2.defaultProps) void 0 === i2[n2] && (i2[n2] = o2[n2]);
        return _(e2, a2, i2);
      }, r.createRef = function() {
        return { current: null };
      }, r.forwardRef = function(e2) {
        return { $$typeof: h, render: e2 };
      }, r.isValidElement = x, r.lazy = function(e2) {
        return { $$typeof: g, _payload: { _status: -1, _result: e2 }, _init: S };
      }, r.memo = function(e2, t2) {
        return { $$typeof: f, type: e2, compare: void 0 === t2 ? null : t2 };
      }, r.use = function(e2) {
        return n.H.use(e2);
      }, r.useCallback = function(e2, t2) {
        return n.H.useCallback(e2, t2);
      }, r.useDebugValue = function() {
      }, r.useId = function() {
        return n.H.useId();
      }, r.useMemo = function(e2, t2) {
        return n.H.useMemo(e2, t2);
      }, r.version = "19.3.0-canary-3f0b9e61-20260317";
    }, 673677, (e, t, r) => {
      "use strict";
      t.exports = e.r(351916);
    }, 290578, (e) => {
      "use strict";
      let t, r, n;
      async function i() {
        return "_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && await _ENTRIES.middleware_instrumentation;
      }
      e.i(736411);
      let a = null;
      async function o() {
        if ("phase-production-build" === process.env.NEXT_PHASE) return;
        a || (a = i());
        let e10 = await a;
        if (null == e10 ? void 0 : e10.register) try {
          await e10.register();
        } catch (e11) {
          throw e11.message = `An error occurred while loading instrumentation hook: ${e11.message}`, e11;
        }
      }
      async function s(...e10) {
        let t10 = await i();
        try {
          var r2;
          await (null == t10 || null == (r2 = t10.onRequestError) ? void 0 : r2.call(t10, ...e10));
        } catch (e11) {
          console.error("Error in instrumentation.onRequestError:", e11);
        }
      }
      let l = null;
      function u() {
        return l || (l = o()), l;
      }
      function c(e10) {
        return `The edge runtime does not support Node.js '${e10}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      process !== e.g.process && (process.env = e.g.process.env, e.g.process = process);
      try {
        Object.defineProperty(globalThis, "__import_unsupported", { value: function(e10) {
          let t10 = new Proxy(function() {
          }, { get(t11, r2) {
            if ("then" === r2) return {};
            throw Object.defineProperty(Error(c(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          }, construct() {
            throw Object.defineProperty(Error(c(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          }, apply(r2, n2, i2) {
            if ("function" == typeof i2[0]) return i2[0](t10);
            throw Object.defineProperty(Error(c(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          } });
          return new Proxy({}, { get: () => t10 });
        }, enumerable: false, configurable: false });
      } catch {
      }
      u();
      class d extends Error {
        constructor({ page: e10 }) {
          super(`The middleware "${e10}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class h extends Error {
        constructor() {
          super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ");
        }
      }
      class p extends Error {
        constructor() {
          super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ");
        }
      }
      let f = "x-prerender-revalidate", g = ".meta", m = "x-next-cache-tags", v = "x-next-revalidated-tags", b = "_N_T_", w = { shared: "shared", reactServerComponents: "rsc", serverSideRendering: "ssr", actionBrowser: "action-browser", apiNode: "api-node", apiEdge: "api-edge", middleware: "middleware", instrument: "instrument", edgeAsset: "edge-asset", appPagesBrowser: "app-pages-browser", pagesDirBrowser: "pages-dir-browser", pagesDirEdge: "pages-dir-edge", pagesDirNode: "pages-dir-node" };
      function y(e10) {
        var t10, r2, n2, i2, a2, o2 = [], s2 = 0;
        function l2() {
          for (; s2 < e10.length && /\s/.test(e10.charAt(s2)); ) s2 += 1;
          return s2 < e10.length;
        }
        for (; s2 < e10.length; ) {
          for (t10 = s2, a2 = false; l2(); ) if ("," === (r2 = e10.charAt(s2))) {
            for (n2 = s2, s2 += 1, l2(), i2 = s2; s2 < e10.length && "=" !== (r2 = e10.charAt(s2)) && ";" !== r2 && "," !== r2; ) s2 += 1;
            s2 < e10.length && "=" === e10.charAt(s2) ? (a2 = true, s2 = i2, o2.push(e10.substring(t10, n2)), t10 = s2) : s2 = n2 + 1;
          } else s2 += 1;
          (!a2 || s2 >= e10.length) && o2.push(e10.substring(t10, e10.length));
        }
        return o2;
      }
      function _(e10) {
        let t10 = {}, r2 = [];
        if (e10) for (let [n2, i2] of e10.entries()) "set-cookie" === n2.toLowerCase() ? (r2.push(...y(i2)), t10[n2] = 1 === r2.length ? r2[0] : r2) : t10[n2] = i2;
        return t10;
      }
      function x(e10) {
        try {
          return String(new URL(String(e10)));
        } catch (t10) {
          throw Object.defineProperty(Error(`URL is malformed "${String(e10)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t10 }), "__NEXT_ERROR_CODE", { value: "E61", enumerable: false, configurable: true });
        }
      }
      ({ ...w, GROUP: { builtinReact: [w.reactServerComponents, w.actionBrowser], serverOnly: [w.reactServerComponents, w.actionBrowser, w.instrument, w.middleware], neutralTarget: [w.apiNode, w.apiEdge], clientOnly: [w.serverSideRendering, w.appPagesBrowser], bundled: [w.reactServerComponents, w.actionBrowser, w.serverSideRendering, w.appPagesBrowser, w.shared, w.instrument, w.middleware], appPages: [w.reactServerComponents, w.serverSideRendering, w.appPagesBrowser, w.actionBrowser] } });
      let E = Symbol("response"), C = Symbol("passThrough"), R = Symbol("waitUntil");
      class S {
        constructor(e10, t10) {
          this[C] = false, this[R] = t10 ? { kind: "external", function: t10 } : { kind: "internal", promises: [] };
        }
        respondWith(e10) {
          this[E] || (this[E] = Promise.resolve(e10));
        }
        passThroughOnException() {
          this[C] = true;
        }
        waitUntil(e10) {
          if ("external" === this[R].kind) return (0, this[R].function)(e10);
          this[R].promises.push(e10);
        }
      }
      class T extends S {
        constructor(e10) {
          var t10;
          super(e10.request, null == (t10 = e10.context) ? void 0 : t10.waitUntil), this.sourcePage = e10.page;
        }
        get request() {
          throw Object.defineProperty(new d({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        respondWith() {
          throw Object.defineProperty(new d({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
      }
      function P(e10) {
        return e10.replace(/\/$/, "") || "/";
      }
      function O(e10) {
        let t10 = e10.indexOf("#"), r2 = e10.indexOf("?"), n2 = r2 > -1 && (t10 < 0 || r2 < t10);
        return n2 || t10 > -1 ? { pathname: e10.substring(0, n2 ? r2 : t10), query: n2 ? e10.substring(r2, t10 > -1 ? t10 : void 0) : "", hash: t10 > -1 ? e10.slice(t10) : "" } : { pathname: e10, query: "", hash: "" };
      }
      function k(e10, t10) {
        if (!e10.startsWith("/") || !t10) return e10;
        let { pathname: r2, query: n2, hash: i2 } = O(e10);
        return `${t10}${r2}${n2}${i2}`;
      }
      function A(e10, t10) {
        if (!e10.startsWith("/") || !t10) return e10;
        let { pathname: r2, query: n2, hash: i2 } = O(e10);
        return `${r2}${t10}${n2}${i2}`;
      }
      function N(e10, t10) {
        if ("string" != typeof e10) return false;
        let { pathname: r2 } = O(e10);
        return r2 === t10 || r2.startsWith(t10 + "/");
      }
      let I = /* @__PURE__ */ new WeakMap();
      function M(e10, t10) {
        let r2;
        if (!t10) return { pathname: e10 };
        let n2 = I.get(t10);
        n2 || (n2 = t10.map((e11) => e11.toLowerCase()), I.set(t10, n2));
        let i2 = e10.split("/", 2);
        if (!i2[1]) return { pathname: e10 };
        let a2 = i2[1].toLowerCase(), o2 = n2.indexOf(a2);
        return o2 < 0 ? { pathname: e10 } : (r2 = t10[o2], { pathname: e10 = e10.slice(r2.length + 1) || "/", detectedLocale: r2 });
      }
      let j = /^(?:127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)$/;
      function D(e10, t10) {
        let r2 = new URL(String(e10), t10 && String(t10));
        return j.test(r2.hostname) && (r2.hostname = "localhost"), r2;
      }
      let L = Symbol("NextURLInternal");
      class $ {
        constructor(e10, t10, r2) {
          let n2, i2;
          "object" == typeof t10 && "pathname" in t10 || "string" == typeof t10 ? (n2 = t10, i2 = r2 || {}) : i2 = r2 || t10 || {}, this[L] = { url: D(e10, n2 ?? i2.base), options: i2, basePath: "" }, this.analyze();
        }
        analyze() {
          var e10, t10, r2, n2, i2;
          let a2 = function(e11, t11) {
            let { basePath: r3, i18n: n3, trailingSlash: i3 } = t11.nextConfig ?? {}, a3 = { pathname: e11, trailingSlash: "/" !== e11 ? e11.endsWith("/") : i3 };
            r3 && N(a3.pathname, r3) && (a3.pathname = function(e12, t12) {
              if (!N(e12, t12)) return e12;
              let r4 = e12.slice(t12.length);
              return r4.startsWith("/") ? r4 : `/${r4}`;
            }(a3.pathname, r3), a3.basePath = r3);
            let o3 = a3.pathname;
            if (a3.pathname.startsWith("/_next/data/") && a3.pathname.endsWith(".json")) {
              let e12 = a3.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
              a3.buildId = e12[0], o3 = "index" !== e12[1] ? `/${e12.slice(1).join("/")}` : "/", true === t11.parseData && (a3.pathname = o3);
            }
            if (n3) {
              let e12 = t11.i18nProvider ? t11.i18nProvider.analyze(a3.pathname) : M(a3.pathname, n3.locales);
              a3.locale = e12.detectedLocale, a3.pathname = e12.pathname ?? a3.pathname, !e12.detectedLocale && a3.buildId && (e12 = t11.i18nProvider ? t11.i18nProvider.analyze(o3) : M(o3, n3.locales)).detectedLocale && (a3.locale = e12.detectedLocale);
            }
            return a3;
          }(this[L].url.pathname, { nextConfig: this[L].options.nextConfig, parseData: true, i18nProvider: this[L].options.i18nProvider }), o2 = function(e11, t11) {
            let r3;
            if (t11?.host && !Array.isArray(t11.host)) r3 = t11.host.toString().split(":", 1)[0];
            else {
              if (!e11.hostname) return;
              r3 = e11.hostname;
            }
            return r3.toLowerCase();
          }(this[L].url, this[L].options.headers);
          this[L].domainLocale = this[L].options.i18nProvider ? this[L].options.i18nProvider.detectDomainLocale(o2) : function(e11, t11, r3) {
            if (e11) {
              for (let n3 of (r3 && (r3 = r3.toLowerCase()), e11)) if (t11 === n3.domain?.split(":", 1)[0].toLowerCase() || r3 === n3.defaultLocale.toLowerCase() || n3.locales?.some((e12) => e12.toLowerCase() === r3)) return n3;
            }
          }(null == (t10 = this[L].options.nextConfig) || null == (e10 = t10.i18n) ? void 0 : e10.domains, o2);
          let s2 = (null == (r2 = this[L].domainLocale) ? void 0 : r2.defaultLocale) || (null == (i2 = this[L].options.nextConfig) || null == (n2 = i2.i18n) ? void 0 : n2.defaultLocale);
          this[L].url.pathname = a2.pathname, this[L].defaultLocale = s2, this[L].basePath = a2.basePath ?? "", this[L].buildId = a2.buildId, this[L].locale = a2.locale ?? s2, this[L].trailingSlash = a2.trailingSlash;
        }
        formatPathname() {
          var e10;
          let t10;
          return t10 = function(e11, t11, r2, n2) {
            if (!t11 || t11 === r2) return e11;
            let i2 = e11.toLowerCase();
            return !n2 && (N(i2, "/api") || N(i2, `/${t11.toLowerCase()}`)) ? e11 : k(e11, `/${t11}`);
          }((e10 = { basePath: this[L].basePath, buildId: this[L].buildId, defaultLocale: this[L].options.forceLocale ? void 0 : this[L].defaultLocale, locale: this[L].locale, pathname: this[L].url.pathname, trailingSlash: this[L].trailingSlash }).pathname, e10.locale, e10.buildId ? void 0 : e10.defaultLocale, e10.ignorePrefix), (e10.buildId || !e10.trailingSlash) && (t10 = P(t10)), e10.buildId && (t10 = A(k(t10, `/_next/data/${e10.buildId}`), "/" === e10.pathname ? "index.json" : ".json")), t10 = k(t10, e10.basePath), !e10.buildId && e10.trailingSlash ? t10.endsWith("/") ? t10 : A(t10, "/") : P(t10);
        }
        formatSearch() {
          return this[L].url.search;
        }
        get buildId() {
          return this[L].buildId;
        }
        set buildId(e10) {
          this[L].buildId = e10;
        }
        get locale() {
          return this[L].locale ?? "";
        }
        set locale(e10) {
          var t10, r2;
          if (!this[L].locale || !(null == (r2 = this[L].options.nextConfig) || null == (t10 = r2.i18n) ? void 0 : t10.locales.includes(e10))) throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${e10}"`), "__NEXT_ERROR_CODE", { value: "E597", enumerable: false, configurable: true });
          this[L].locale = e10;
        }
        get defaultLocale() {
          return this[L].defaultLocale;
        }
        get domainLocale() {
          return this[L].domainLocale;
        }
        get searchParams() {
          return this[L].url.searchParams;
        }
        get host() {
          return this[L].url.host;
        }
        set host(e10) {
          this[L].url.host = e10;
        }
        get hostname() {
          return this[L].url.hostname;
        }
        set hostname(e10) {
          this[L].url.hostname = e10;
        }
        get port() {
          return this[L].url.port;
        }
        set port(e10) {
          this[L].url.port = e10;
        }
        get protocol() {
          return this[L].url.protocol;
        }
        set protocol(e10) {
          this[L].url.protocol = e10;
        }
        get href() {
          let e10 = this.formatPathname(), t10 = this.formatSearch();
          return `${this.protocol}//${this.host}${e10}${t10}${this.hash}`;
        }
        set href(e10) {
          this[L].url = D(e10), this.analyze();
        }
        get origin() {
          return this[L].url.origin;
        }
        get pathname() {
          return this[L].url.pathname;
        }
        set pathname(e10) {
          this[L].url.pathname = e10;
        }
        get hash() {
          return this[L].url.hash;
        }
        set hash(e10) {
          this[L].url.hash = e10;
        }
        get search() {
          return this[L].url.search;
        }
        set search(e10) {
          this[L].url.search = e10;
        }
        get password() {
          return this[L].url.password;
        }
        set password(e10) {
          this[L].url.password = e10;
        }
        get username() {
          return this[L].url.username;
        }
        set username(e10) {
          this[L].url.username = e10;
        }
        get basePath() {
          return this[L].basePath;
        }
        set basePath(e10) {
          this[L].basePath = e10.startsWith("/") ? e10 : `/${e10}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
        }
        clone() {
          return new $(String(this), this[L].options);
        }
      }
      var q, U, H, F, B, z, X, G, W, V, J, K, Q, Y, Z, ee = e.i(938123);
      let et = Symbol("internal request");
      class er extends Request {
        constructor(e10, t10 = {}) {
          const r2 = "string" != typeof e10 && "url" in e10 ? e10.url : String(e10);
          x(r2), e10 instanceof Request ? super(e10, t10) : super(r2, t10);
          const n2 = new $(r2, { headers: _(this.headers), nextConfig: t10.nextConfig });
          this[et] = { cookies: new ee.RequestCookies(this.headers), nextUrl: n2, url: n2.toString() };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
        }
        get cookies() {
          return this[et].cookies;
        }
        get nextUrl() {
          return this[et].nextUrl;
        }
        get page() {
          throw new h();
        }
        get ua() {
          throw new p();
        }
        get url() {
          return this[et].url;
        }
      }
      class en {
        static get(e10, t10, r2) {
          let n2 = Reflect.get(e10, t10, r2);
          return "function" == typeof n2 ? n2.bind(e10) : n2;
        }
        static set(e10, t10, r2, n2) {
          return Reflect.set(e10, t10, r2, n2);
        }
        static has(e10, t10) {
          return Reflect.has(e10, t10);
        }
        static deleteProperty(e10, t10) {
          return Reflect.deleteProperty(e10, t10);
        }
      }
      let ei = Symbol("internal response"), ea = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function eo(e10, t10) {
        var r2;
        if (null == e10 || null == (r2 = e10.request) ? void 0 : r2.headers) {
          if (!(e10.request.headers instanceof Headers)) throw Object.defineProperty(Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", { value: "E119", enumerable: false, configurable: true });
          let r3 = [];
          for (let [n2, i2] of e10.request.headers) t10.set("x-middleware-request-" + n2, i2), r3.push(n2);
          t10.set("x-middleware-override-headers", r3.join(","));
        }
      }
      class es extends Response {
        constructor(e10, t10 = {}) {
          super(e10, t10);
          const r2 = this.headers, n2 = new Proxy(new ee.ResponseCookies(r2), { get(e11, n3, i2) {
            switch (n3) {
              case "delete":
              case "set":
                return (...i3) => {
                  let a2 = Reflect.apply(e11[n3], e11, i3), o2 = new Headers(r2);
                  return a2 instanceof ee.ResponseCookies && r2.set("x-middleware-set-cookie", a2.getAll().map((e12) => (0, ee.stringifyCookie)(e12)).join(",")), eo(t10, o2), a2;
                };
              default:
                return en.get(e11, n3, i2);
            }
          } });
          this[ei] = { cookies: n2, url: t10.url ? new $(t10.url, { headers: _(r2), nextConfig: t10.nextConfig }) : void 0 };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
        }
        get cookies() {
          return this[ei].cookies;
        }
        static json(e10, t10) {
          let r2 = Response.json(e10, t10);
          return new es(r2.body, r2);
        }
        static redirect(e10, t10) {
          let r2 = "number" == typeof t10 ? t10 : (null == t10 ? void 0 : t10.status) ?? 307;
          if (!ea.has(r2)) throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", { value: "E529", enumerable: false, configurable: true });
          let n2 = "object" == typeof t10 ? t10 : {}, i2 = new Headers(null == n2 ? void 0 : n2.headers);
          return i2.set("Location", x(e10)), new es(null, { ...n2, headers: i2, status: r2 });
        }
        static rewrite(e10, t10) {
          let r2 = new Headers(null == t10 ? void 0 : t10.headers);
          return r2.set("x-middleware-rewrite", x(e10)), eo(t10, r2), new es(null, { ...t10, headers: r2 });
        }
        static next(e10) {
          let t10 = new Headers(null == e10 ? void 0 : e10.headers);
          return t10.set("x-middleware-next", "1"), eo(e10, t10), new es(null, { ...e10, headers: t10 });
        }
      }
      function el(e10, t10) {
        let r2 = "string" == typeof t10 ? new URL(t10) : t10, n2 = new URL(e10, t10), i2 = n2.origin === r2.origin;
        return { url: i2 ? n2.toString().slice(r2.origin.length) : n2.toString(), isRelative: i2 };
      }
      let eu = "next-router-prefetch", ec = ["rsc", "next-router-state-tree", eu, "next-hmr-refresh", "next-router-segment-prefetch"], ed = "_rsc";
      function eh(e10) {
        return e10.startsWith("/") ? e10 : `/${e10}`;
      }
      function ep(e10) {
        return eh(e10.split("/").reduce((e11, t10, r2, n2) => t10 ? "(" === t10[0] && t10.endsWith(")") || "@" === t10[0] || ("page" === t10 || "route" === t10) && r2 === n2.length - 1 ? e11 : `${e11}/${t10}` : e11, ""));
      }
      class ef extends Error {
        constructor() {
          super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
        }
        static callable() {
          throw new ef();
        }
      }
      class eg extends Headers {
        constructor(e10) {
          super(), this.headers = new Proxy(e10, { get(t10, r2, n2) {
            if ("symbol" == typeof r2) return en.get(t10, r2, n2);
            let i2 = r2.toLowerCase(), a2 = Object.keys(e10).find((e11) => e11.toLowerCase() === i2);
            if (void 0 !== a2) return en.get(t10, a2, n2);
          }, set(t10, r2, n2, i2) {
            if ("symbol" == typeof r2) return en.set(t10, r2, n2, i2);
            let a2 = r2.toLowerCase(), o2 = Object.keys(e10).find((e11) => e11.toLowerCase() === a2);
            return en.set(t10, o2 ?? r2, n2, i2);
          }, has(t10, r2) {
            if ("symbol" == typeof r2) return en.has(t10, r2);
            let n2 = r2.toLowerCase(), i2 = Object.keys(e10).find((e11) => e11.toLowerCase() === n2);
            return void 0 !== i2 && en.has(t10, i2);
          }, deleteProperty(t10, r2) {
            if ("symbol" == typeof r2) return en.deleteProperty(t10, r2);
            let n2 = r2.toLowerCase(), i2 = Object.keys(e10).find((e11) => e11.toLowerCase() === n2);
            return void 0 === i2 || en.deleteProperty(t10, i2);
          } });
        }
        static seal(e10) {
          return new Proxy(e10, { get(e11, t10, r2) {
            switch (t10) {
              case "append":
              case "delete":
              case "set":
                return ef.callable;
              default:
                return en.get(e11, t10, r2);
            }
          } });
        }
        merge(e10) {
          return Array.isArray(e10) ? e10.join(", ") : e10;
        }
        static from(e10) {
          return e10 instanceof Headers ? e10 : new eg(e10);
        }
        append(e10, t10) {
          let r2 = this.headers[e10];
          "string" == typeof r2 ? this.headers[e10] = [r2, t10] : Array.isArray(r2) ? r2.push(t10) : this.headers[e10] = t10;
        }
        delete(e10) {
          delete this.headers[e10];
        }
        get(e10) {
          let t10 = this.headers[e10];
          return void 0 !== t10 ? this.merge(t10) : null;
        }
        has(e10) {
          return void 0 !== this.headers[e10];
        }
        set(e10, t10) {
          this.headers[e10] = t10;
        }
        forEach(e10, t10) {
          for (let [r2, n2] of this.entries()) e10.call(t10, n2, r2, this);
        }
        *entries() {
          for (let e10 of Object.keys(this.headers)) {
            let t10 = e10.toLowerCase(), r2 = this.get(t10);
            yield [t10, r2];
          }
        }
        *keys() {
          for (let e10 of Object.keys(this.headers)) {
            let t10 = e10.toLowerCase();
            yield t10;
          }
        }
        *values() {
          for (let e10 of Object.keys(this.headers)) {
            let t10 = this.get(e10);
            yield t10;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
      let em = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", { value: "E504", enumerable: false, configurable: true });
      class ev {
        disable() {
          throw em;
        }
        getStore() {
        }
        run() {
          throw em;
        }
        exit() {
          throw em;
        }
        enterWith() {
          throw em;
        }
        static bind(e10) {
          return e10;
        }
      }
      let eb = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
      function ew() {
        return eb ? new eb() : new ev();
      }
      let ey = ew();
      class e_ extends Error {
        constructor() {
          super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
        }
        static callable() {
          throw new e_();
        }
      }
      class ex {
        static seal(e10) {
          return new Proxy(e10, { get(e11, t10, r2) {
            switch (t10) {
              case "clear":
              case "delete":
              case "set":
                return e_.callable;
              default:
                return en.get(e11, t10, r2);
            }
          } });
        }
      }
      let eE = Symbol.for("next.mutated.cookies");
      class eC {
        static wrap(e10, t10) {
          let r2 = new ee.ResponseCookies(new Headers());
          for (let t11 of e10.getAll()) r2.set(t11);
          let n2 = [], i2 = /* @__PURE__ */ new Set(), a2 = () => {
            let e11 = ey.getStore();
            if (e11 && (e11.pathWasRevalidated = 1), n2 = r2.getAll().filter((e12) => i2.has(e12.name)), t10) {
              let e12 = [];
              for (let t11 of n2) {
                let r3 = new ee.ResponseCookies(new Headers());
                r3.set(t11), e12.push(r3.toString());
              }
              t10(e12);
            }
          }, o2 = new Proxy(r2, { get(e11, t11, r3) {
            switch (t11) {
              case eE:
                return n2;
              case "delete":
                return function(...t12) {
                  i2.add("string" == typeof t12[0] ? t12[0] : t12[0].name);
                  try {
                    return e11.delete(...t12), o2;
                  } finally {
                    a2();
                  }
                };
              case "set":
                return function(...t12) {
                  i2.add("string" == typeof t12[0] ? t12[0] : t12[0].name);
                  try {
                    return e11.set(...t12), o2;
                  } finally {
                    a2();
                  }
                };
              default:
                return en.get(e11, t11, r3);
            }
          } });
          return o2;
        }
      }
      function eR(e10, t10) {
        if ("action" !== e10.phase) throw new e_();
      }
      var eS = ((q = eS || {}).handleRequest = "BaseServer.handleRequest", q.run = "BaseServer.run", q.pipe = "BaseServer.pipe", q.getStaticHTML = "BaseServer.getStaticHTML", q.render = "BaseServer.render", q.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents", q.renderToResponse = "BaseServer.renderToResponse", q.renderToHTML = "BaseServer.renderToHTML", q.renderError = "BaseServer.renderError", q.renderErrorToResponse = "BaseServer.renderErrorToResponse", q.renderErrorToHTML = "BaseServer.renderErrorToHTML", q.render404 = "BaseServer.render404", q), eT = ((U = eT || {}).loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents", U.loadComponents = "LoadComponents.loadComponents", U), eP = ((H = eP || {}).getRequestHandler = "NextServer.getRequestHandler", H.getRequestHandlerWithMetadata = "NextServer.getRequestHandlerWithMetadata", H.getServer = "NextServer.getServer", H.getServerRequestHandler = "NextServer.getServerRequestHandler", H.createServer = "createServer.createServer", H), eO = ((F = eO || {}).compression = "NextNodeServer.compression", F.getBuildId = "NextNodeServer.getBuildId", F.createComponentTree = "NextNodeServer.createComponentTree", F.clientComponentLoading = "NextNodeServer.clientComponentLoading", F.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule", F.generateStaticRoutes = "NextNodeServer.generateStaticRoutes", F.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes", F.generatePublicRoutes = "NextNodeServer.generatePublicRoutes", F.generateImageRoutes = "NextNodeServer.generateImageRoutes.route", F.sendRenderResult = "NextNodeServer.sendRenderResult", F.proxyRequest = "NextNodeServer.proxyRequest", F.runApi = "NextNodeServer.runApi", F.render = "NextNodeServer.render", F.renderHTML = "NextNodeServer.renderHTML", F.imageOptimizer = "NextNodeServer.imageOptimizer", F.getPagePath = "NextNodeServer.getPagePath", F.getRoutesManifest = "NextNodeServer.getRoutesManifest", F.findPageComponents = "NextNodeServer.findPageComponents", F.getFontManifest = "NextNodeServer.getFontManifest", F.getServerComponentManifest = "NextNodeServer.getServerComponentManifest", F.getRequestHandler = "NextNodeServer.getRequestHandler", F.renderToHTML = "NextNodeServer.renderToHTML", F.renderError = "NextNodeServer.renderError", F.renderErrorToHTML = "NextNodeServer.renderErrorToHTML", F.render404 = "NextNodeServer.render404", F.startResponse = "NextNodeServer.startResponse", F.route = "route", F.onProxyReq = "onProxyReq", F.apiResolver = "apiResolver", F.internalFetch = "internalFetch", F), ek = ((B = ek || {}).startServer = "startServer.startServer", B), eA = ((z = eA || {}).getServerSideProps = "Render.getServerSideProps", z.getStaticProps = "Render.getStaticProps", z.renderToString = "Render.renderToString", z.renderDocument = "Render.renderDocument", z.createBodyResult = "Render.createBodyResult", z), eN = ((X = eN || {}).renderToString = "AppRender.renderToString", X.renderToReadableStream = "AppRender.renderToReadableStream", X.getBodyResult = "AppRender.getBodyResult", X.fetch = "AppRender.fetch", X), eI = ((G = eI || {}).executeRoute = "Router.executeRoute", G), eM = ((W = eM || {}).runHandler = "Node.runHandler", W), ej = ((V = ej || {}).runHandler = "AppRouteRouteHandlers.runHandler", V), eD = ((J = eD || {}).generateMetadata = "ResolveMetadata.generateMetadata", J.generateViewport = "ResolveMetadata.generateViewport", J), eL = ((K = eL || {}).execute = "Middleware.execute", K);
      let e$ = /* @__PURE__ */ new Set(["Middleware.execute", "BaseServer.handleRequest", "Render.getServerSideProps", "Render.getStaticProps", "AppRender.fetch", "AppRender.getBodyResult", "Render.renderDocument", "Node.runHandler", "AppRouteRouteHandlers.runHandler", "ResolveMetadata.generateMetadata", "ResolveMetadata.generateViewport", "NextNodeServer.createComponentTree", "NextNodeServer.findPageComponents", "NextNodeServer.getLayoutOrPageModule", "NextNodeServer.startResponse", "NextNodeServer.clientComponentLoading"]), eq = /* @__PURE__ */ new Set(["NextNodeServer.findPageComponents", "NextNodeServer.createComponentTree", "NextNodeServer.clientComponentLoading"]);
      function eU(e10) {
        return null !== e10 && "object" == typeof e10 && "then" in e10 && "function" == typeof e10.then;
      }
      let eH = process.env.NEXT_OTEL_PERFORMANCE_PREFIX, { context: eF, propagation: eB, trace: ez, SpanStatusCode: eX, SpanKind: eG, ROOT_CONTEXT: eW } = t = e.r(949540);
      class eV extends Error {
        constructor(e10, t10) {
          super(), this.bubble = e10, this.result = t10;
        }
      }
      let eJ = (e10, t10) => {
        "object" == typeof t10 && null !== t10 && t10 instanceof eV && t10.bubble ? e10.setAttribute("next.bubble", true) : (t10 && (e10.recordException(t10), e10.setAttribute("error.type", t10.name)), e10.setStatus({ code: eX.ERROR, message: null == t10 ? void 0 : t10.message })), e10.end();
      }, eK = /* @__PURE__ */ new Map(), eQ = t.createContextKey("next.rootSpanId"), eY = 0, eZ = { set(e10, t10, r2) {
        e10.push({ key: t10, value: r2 });
      } }, e0 = (n = new class e {
        getTracerInstance() {
          return ez.getTracer("next.js", "0.0.1");
        }
        getContext() {
          return eF;
        }
        getTracePropagationData() {
          let e10 = eF.active(), t10 = [];
          return eB.inject(e10, t10, eZ), t10;
        }
        getActiveScopeSpan() {
          return ez.getSpan(null == eF ? void 0 : eF.active());
        }
        withPropagatedContext(e10, t10, r2, n2 = false) {
          let i2 = eF.active();
          if (n2) {
            let n3 = eB.extract(eW, e10, r2);
            if (ez.getSpanContext(n3)) return eF.with(n3, t10);
            let a3 = eB.extract(i2, e10, r2);
            return eF.with(a3, t10);
          }
          if (ez.getSpanContext(i2)) return t10();
          let a2 = eB.extract(i2, e10, r2);
          return eF.with(a2, t10);
        }
        trace(...e10) {
          let [t10, r2, n2] = e10, { fn: i2, options: a2 } = "function" == typeof r2 ? { fn: r2, options: {} } : { fn: n2, options: { ...r2 } }, o2 = a2.spanName ?? t10;
          if (!e$.has(t10) && "1" !== process.env.NEXT_OTEL_VERBOSE || a2.hideSpan) return i2();
          let s2 = this.getSpanContext((null == a2 ? void 0 : a2.parentSpan) ?? this.getActiveScopeSpan());
          s2 || (s2 = (null == eF ? void 0 : eF.active()) ?? eW);
          let l2 = s2.getValue(eQ), u2 = "number" != typeof l2 || !eK.has(l2), c2 = eY++;
          return a2.attributes = { "next.span_name": o2, "next.span_type": t10, ...a2.attributes }, eF.with(s2.setValue(eQ, c2), () => this.getTracerInstance().startActiveSpan(o2, a2, (e11) => {
            let r3;
            eH && t10 && eq.has(t10) && (r3 = "performance" in globalThis && "measure" in performance ? globalThis.performance.now() : void 0);
            let n3 = false, o3 = () => {
              !n3 && (n3 = true, eK.delete(c2), r3 && performance.measure(`${eH}:next-${(t10.split(".").pop() || "").replace(/[A-Z]/g, (e12) => "-" + e12.toLowerCase())}`, { start: r3, end: performance.now() }));
            };
            if (u2 && eK.set(c2, new Map(Object.entries(a2.attributes ?? {}))), i2.length > 1) try {
              return i2(e11, (t11) => eJ(e11, t11));
            } catch (t11) {
              throw eJ(e11, t11), t11;
            } finally {
              o3();
            }
            try {
              let t11 = i2(e11);
              if (eU(t11)) return t11.then((t12) => (e11.end(), t12)).catch((t12) => {
                throw eJ(e11, t12), t12;
              }).finally(o3);
              return e11.end(), o3(), t11;
            } catch (t11) {
              throw eJ(e11, t11), o3(), t11;
            }
          }));
        }
        wrap(...e10) {
          let t10 = this, [r2, n2, i2] = 3 === e10.length ? e10 : [e10[0], {}, e10[1]];
          return e$.has(r2) || "1" === process.env.NEXT_OTEL_VERBOSE ? function() {
            let e11 = n2;
            "function" == typeof e11 && "function" == typeof i2 && (e11 = e11.apply(this, arguments));
            let a2 = arguments.length - 1, o2 = arguments[a2];
            if ("function" != typeof o2) return t10.trace(r2, e11, () => i2.apply(this, arguments));
            {
              let n3 = t10.getContext().bind(eF.active(), o2);
              return t10.trace(r2, e11, (e12, t11) => (arguments[a2] = function(e13) {
                return null == t11 || t11(e13), n3.apply(this, arguments);
              }, i2.apply(this, arguments)));
            }
          } : i2;
        }
        startSpan(...e10) {
          let [t10, r2] = e10, n2 = this.getSpanContext((null == r2 ? void 0 : r2.parentSpan) ?? this.getActiveScopeSpan());
          return this.getTracerInstance().startSpan(t10, r2, n2);
        }
        getSpanContext(e10) {
          return e10 ? ez.setSpan(eF.active(), e10) : void 0;
        }
        getRootSpanAttributes() {
          let e10 = eF.active().getValue(eQ);
          return eK.get(e10);
        }
        setRootSpanAttribute(e10, t10) {
          let r2 = eF.active().getValue(eQ), n2 = eK.get(r2);
          n2 && !n2.has(e10) && n2.set(e10, t10);
        }
        withSpan(e10, t10) {
          let r2 = ez.setSpan(eF.active(), e10);
          return eF.with(r2, t10);
        }
      }(), () => n), e1 = "__prerender_bypass";
      Symbol("__next_preview_data"), Symbol(e1);
      class e2 {
        constructor(e10, t10, r2, n2) {
          var i2;
          const a2 = e10 && function(e11, t11) {
            let r3 = eg.from(e11.headers);
            return { isOnDemandRevalidate: r3.get(f) === t11.previewModeId, revalidateOnlyGenerated: r3.has("x-prerender-revalidate-if-generated") };
          }(t10, e10).isOnDemandRevalidate, o2 = null == (i2 = r2.get(e1)) ? void 0 : i2.value;
          this._isEnabled = !!(!a2 && o2 && e10 && o2 === e10.previewModeId), this._previewModeId = null == e10 ? void 0 : e10.previewModeId, this._mutableCookies = n2;
        }
        get isEnabled() {
          return this._isEnabled;
        }
        enable() {
          if (!this._previewModeId) throw Object.defineProperty(Error("Invariant: previewProps missing previewModeId this should never happen"), "__NEXT_ERROR_CODE", { value: "E93", enumerable: false, configurable: true });
          this._mutableCookies.set({ name: e1, value: this._previewModeId, httpOnly: true, sameSite: "none", secure: true, path: "/" }), this._isEnabled = true;
        }
        disable() {
          this._mutableCookies.set({ name: e1, value: "", httpOnly: true, sameSite: "none", secure: true, path: "/", expires: /* @__PURE__ */ new Date(0) }), this._isEnabled = false;
        }
      }
      function e4(e10, t10) {
        if ("x-middleware-set-cookie" in e10.headers && "string" == typeof e10.headers["x-middleware-set-cookie"]) {
          let r2 = e10.headers["x-middleware-set-cookie"], n2 = new Headers();
          for (let e11 of y(r2)) n2.append("set-cookie", e11);
          for (let e11 of new ee.ResponseCookies(n2).getAll()) t10.set(e11);
        }
      }
      let e3 = ew();
      function e9(e10) {
        switch (e10.type) {
          case "prerender":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-client":
          case "validation-client":
            return e10.prerenderResumeDataCache;
          case "request":
            if (e10.prerenderResumeDataCache) return e10.prerenderResumeDataCache;
          case "prerender-legacy":
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "generate-static-params":
            return null;
          default:
            return e10;
        }
      }
      var e6 = e.i(470154);
      class e5 extends Error {
        constructor(e10, t10) {
          super(`Invariant: ${e10.endsWith(".") ? e10 : e10 + "."} This is a bug in Next.js.`, t10), this.name = "InvariantError";
        }
      }
      var e7 = e.i(951615);
      process.env.NEXT_PRIVATE_DEBUG_CACHE, Symbol.for("@next/cache-handlers");
      let e8 = Symbol.for("@next/cache-handlers-map"), te = Symbol.for("@next/cache-handlers-set"), tt = globalThis;
      function tr() {
        if (tt[e8]) return tt[e8].entries();
      }
      async function tn(e10, t10) {
        if (!e10) return t10();
        let r2 = ti(e10);
        try {
          return await t10();
        } finally {
          var n2, i2, a2, o2;
          let t11, s2, l2, u2, c2 = (n2 = r2, i2 = ti(e10), t11 = new Set(n2.pendingRevalidatedTags.map((e11) => {
            let t12 = "object" == typeof e11.profile ? JSON.stringify(e11.profile) : e11.profile || "";
            return `${e11.tag}:${t12}`;
          })), s2 = new Set(n2.pendingRevalidateWrites), { pendingRevalidatedTags: i2.pendingRevalidatedTags.filter((e11) => {
            let r3 = "object" == typeof e11.profile ? JSON.stringify(e11.profile) : e11.profile || "";
            return !t11.has(`${e11.tag}:${r3}`);
          }), pendingRevalidates: Object.fromEntries(Object.entries(i2.pendingRevalidates).filter(([e11]) => !(e11 in n2.pendingRevalidates))), pendingRevalidateWrites: i2.pendingRevalidateWrites.filter((e11) => !s2.has(e11)) });
          await (a2 = e10, l2 = [], (u2 = (null == (o2 = c2) ? void 0 : o2.pendingRevalidatedTags) ?? a2.pendingRevalidatedTags ?? []).length > 0 && l2.push(ta(u2, a2.incrementalCache, a2)), l2.push(...Object.values((null == o2 ? void 0 : o2.pendingRevalidates) ?? a2.pendingRevalidates ?? {})), l2.push(...(null == o2 ? void 0 : o2.pendingRevalidateWrites) ?? a2.pendingRevalidateWrites ?? []), 0 !== l2.length && Promise.all(l2).then(() => void 0));
        }
      }
      function ti(e10) {
        return { pendingRevalidatedTags: e10.pendingRevalidatedTags ? [...e10.pendingRevalidatedTags] : [], pendingRevalidates: { ...e10.pendingRevalidates }, pendingRevalidateWrites: e10.pendingRevalidateWrites ? [...e10.pendingRevalidateWrites] : [] };
      }
      async function ta(e10, t10, r2) {
        if (0 === e10.length) return;
        let n2 = function() {
          if (tt[te]) return tt[te].values();
        }(), i2 = [], a2 = /* @__PURE__ */ new Map();
        for (let t11 of e10) {
          let e11, r3 = t11.profile;
          for (let [t12] of a2) if ("string" == typeof t12 && "string" == typeof r3 && t12 === r3 || "object" == typeof t12 && "object" == typeof r3 && JSON.stringify(t12) === JSON.stringify(r3) || t12 === r3) {
            e11 = t12;
            break;
          }
          let n3 = e11 || r3;
          a2.has(n3) || a2.set(n3, []), a2.get(n3).push(t11.tag);
        }
        for (let [e11, s2] of a2) {
          let a3;
          if (e11) {
            let t11;
            if ("object" == typeof e11) t11 = e11;
            else if ("string" == typeof e11) {
              var o2;
              if (!(t11 = null == r2 || null == (o2 = r2.cacheLifeProfiles) ? void 0 : o2[e11])) throw Object.defineProperty(Error(`Invalid profile provided "${e11}" must be configured under cacheLife in next.config or be "max"`), "__NEXT_ERROR_CODE", { value: "E873", enumerable: false, configurable: true });
            }
            t11 && (a3 = { expire: t11.expire });
          }
          for (let t11 of n2 || []) e11 ? i2.push(null == t11.updateTags ? void 0 : t11.updateTags.call(t11, s2, a3)) : i2.push(null == t11.updateTags ? void 0 : t11.updateTags.call(t11, s2));
          t10 && i2.push(t10.revalidateTag(s2, a3));
        }
        await Promise.all(i2);
      }
      let to = ew();
      class ts {
        constructor({ waitUntil: e10, onClose: t10, onTaskError: r2 }) {
          this.workUnitStores = /* @__PURE__ */ new Set(), this.waitUntil = e10, this.onClose = t10, this.onTaskError = r2, this.callbackQueue = new e6.default(), this.callbackQueue.pause();
        }
        after(e10) {
          if (eU(e10)) this.waitUntil || tl(), this.waitUntil(e10.catch((e11) => this.reportTaskError("promise", e11)));
          else if ("function" == typeof e10) this.addCallback(e10);
          else throw Object.defineProperty(Error("`after()`: Argument must be a promise or a function"), "__NEXT_ERROR_CODE", { value: "E50", enumerable: false, configurable: true });
        }
        addCallback(e10) {
          var t10;
          this.waitUntil || tl();
          let r2 = e3.getStore();
          r2 && this.workUnitStores.add(r2);
          let n2 = to.getStore(), i2 = n2 ? n2.rootTaskSpawnPhase : null == r2 ? void 0 : r2.phase;
          this.runCallbacksOnClosePromise || (this.runCallbacksOnClosePromise = this.runCallbacksOnClose(), this.waitUntil(this.runCallbacksOnClosePromise));
          let a2 = (t10 = async () => {
            try {
              await to.run({ rootTaskSpawnPhase: i2 }, () => e10());
            } catch (e11) {
              this.reportTaskError("function", e11);
            }
          }, eb ? eb.bind(t10) : ev.bind(t10));
          this.callbackQueue.add(a2);
        }
        async runCallbacksOnClose() {
          return await new Promise((e10) => this.onClose(e10)), this.runCallbacks();
        }
        async runCallbacks() {
          if (0 === this.callbackQueue.size) return;
          for (let e11 of this.workUnitStores) e11.phase = "after";
          let e10 = ey.getStore();
          if (!e10) throw Object.defineProperty(new e5("Missing workStore in AfterContext.runCallbacks"), "__NEXT_ERROR_CODE", { value: "E547", enumerable: false, configurable: true });
          return tn(e10, () => (this.callbackQueue.start(), this.callbackQueue.onIdle()));
        }
        reportTaskError(e10, t10) {
          if (console.error("promise" === e10 ? "A promise passed to `after()` rejected:" : "An error occurred in a function passed to `after()`:", t10), this.onTaskError) try {
            null == this.onTaskError || this.onTaskError.call(this, t10);
          } catch (e11) {
            console.error(Object.defineProperty(new e5("`onTaskError` threw while handling an error thrown from an `after` task", { cause: e11 }), "__NEXT_ERROR_CODE", { value: "E569", enumerable: false, configurable: true }));
          }
        }
      }
      function tl() {
        throw Object.defineProperty(Error("`after()` will not work correctly, because `waitUntil` is not available in the current environment."), "__NEXT_ERROR_CODE", { value: "E91", enumerable: false, configurable: true });
      }
      function tu(e10) {
        let t10, r2 = { then: (n2, i2) => (t10 || (t10 = Promise.resolve(e10())), t10.then((e11) => {
          r2.value = e11;
        }).catch(() => {
        }), t10.then(n2, i2)) };
        return r2;
      }
      class tc {
        onClose(e10) {
          if (this.isClosed) throw Object.defineProperty(Error("Cannot subscribe to a closed CloseController"), "__NEXT_ERROR_CODE", { value: "E365", enumerable: false, configurable: true });
          this.target.addEventListener("close", e10), this.listeners++;
        }
        dispatchClose() {
          if (this.isClosed) throw Object.defineProperty(Error("Cannot close a CloseController multiple times"), "__NEXT_ERROR_CODE", { value: "E229", enumerable: false, configurable: true });
          this.listeners > 0 && this.target.dispatchEvent(new Event("close")), this.isClosed = true;
        }
        constructor() {
          this.target = new EventTarget(), this.listeners = 0, this.isClosed = false;
        }
      }
      function td() {
        return { previewModeId: process.env.__NEXT_PREVIEW_MODE_ID || "", previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "", previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "" };
      }
      let th = Symbol.for("@next/request-context");
      async function tp(e10, t10, r2) {
        let n2 = /* @__PURE__ */ new Set();
        for (let t11 of ((e11) => {
          let t12 = ["/layout"];
          if (e11.startsWith("/")) {
            let r3 = e11.split("/");
            for (let e12 = 1; e12 < r3.length + 1; e12++) {
              let n3 = r3.slice(0, e12).join("/");
              n3 && (n3.endsWith("/page") || n3.endsWith("/route") || (n3 = `${n3}${!n3.endsWith("/") ? "/" : ""}layout`), t12.push(n3));
            }
          }
          return t12;
        })(e10)) t11 = `${b}${t11}`, n2.add(t11);
        if (t10 && (!r2 || 0 === r2.size)) {
          let e11 = `${b}${t10}`;
          n2.add(e11);
        }
        n2.has(`${b}/`) && n2.add(`${b}/index`), n2.has(`${b}/index`) && n2.add(`${b}/`);
        let i2 = Array.from(n2);
        return { tags: i2, expirationsByCacheKind: function(e11) {
          let t11 = /* @__PURE__ */ new Map(), r3 = tr();
          if (r3) for (let [n3, i3] of r3) "getExpiration" in i3 && t11.set(n3, tu(async () => i3.getExpiration(e11)));
          return t11;
        }(i2) };
      }
      let tf = Symbol.for("NextInternalRequestMeta");
      class tg extends er {
        constructor(e10) {
          super(e10.input, e10.init), this.sourcePage = e10.page;
        }
        get request() {
          throw Object.defineProperty(new d({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        respondWith() {
          throw Object.defineProperty(new d({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        waitUntil() {
          throw Object.defineProperty(new d({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
      }
      let tm = { keys: (e10) => Array.from(e10.keys()), get: (e10, t10) => e10.get(t10) ?? void 0 }, tv = (e10, t10) => e0().withPropagatedContext(e10.headers, t10, tm), tb = false;
      async function tw(t10) {
        var r2, n2, i2, a2, o2;
        let s2, l2, c2, d2, h2;
        !function() {
          if (!tb && (tb = true, "true" === process.env.NEXT_PRIVATE_TEST_PROXY)) {
            let { interceptTestApis: t11, wrapRequestHandler: r3 } = e.r(285842);
            t11(), tv = r3(tv);
          }
        }(), await u();
        let p2 = void 0 !== globalThis.__BUILD_MANIFEST;
        t10.request.url = t10.request.url.replace(/\.rsc($|\?)/, "$1");
        let f2 = t10.bypassNextUrl ? new URL(t10.request.url) : new $(t10.request.url, { headers: t10.request.headers, nextConfig: t10.request.nextConfig });
        for (let e10 of [...f2.searchParams.keys()]) {
          let t11 = f2.searchParams.getAll(e10), r3 = function(e11) {
            for (let t12 of ["nxtP", "nxtI"]) if (e11 !== t12 && e11.startsWith(t12)) return e11.substring(t12.length);
            return null;
          }(e10);
          if (r3) {
            for (let e11 of (f2.searchParams.delete(r3), t11)) f2.searchParams.append(r3, e11);
            f2.searchParams.delete(e10);
          }
        }
        let g2 = process.env.__NEXT_BUILD_ID || "";
        "buildId" in f2 && (g2 = f2.buildId || "", f2.buildId = "");
        let m2 = function(e10) {
          let t11 = new Headers();
          for (let [r3, n3] of Object.entries(e10)) for (let e11 of Array.isArray(n3) ? n3 : [n3]) void 0 !== e11 && ("number" == typeof e11 && (e11 = e11.toString()), t11.append(r3, e11));
          return t11;
        }(t10.request.headers), v2 = m2.has("x-nextjs-data"), b2 = "1" === m2.get("rsc");
        v2 && "/index" === f2.pathname && (f2.pathname = "/");
        let w2 = /* @__PURE__ */ new Map();
        if (!p2) for (let e10 of ec) {
          let t11 = m2.get(e10);
          null !== t11 && (w2.set(e10, t11), m2.delete(e10));
        }
        let y2 = f2.searchParams.get(ed), _2 = new tg({ page: t10.page, input: ((d2 = (c2 = "string" == typeof f2) ? new URL(f2) : f2).searchParams.delete(ed), c2 ? d2.toString() : d2).toString(), init: { body: t10.request.body, headers: m2, method: t10.request.method, nextConfig: t10.request.nextConfig, signal: t10.request.signal } });
        t10.request.requestMeta && (o2 = t10.request.requestMeta, _2[tf] = o2), v2 && Object.defineProperty(_2, "__isData", { enumerable: false, value: true }), !globalThis.__incrementalCacheShared && t10.IncrementalCache && (globalThis.__incrementalCache = new t10.IncrementalCache({ CurCacheHandler: t10.incrementalCacheHandler, minimalMode: true, fetchCacheKeyPrefix: "", dev: false, requestHeaders: t10.request.headers, getPrerenderManifest: () => ({ version: -1, routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: td() }) }));
        let x2 = t10.request.waitUntil ?? (null == (r2 = null == (h2 = globalThis[th]) ? void 0 : h2.get()) ? void 0 : r2.waitUntil), E2 = new T({ request: _2, page: t10.page, context: x2 ? { waitUntil: x2 } : void 0 });
        if ((s2 = await tv(_2, () => {
          if ("/middleware" === t10.page || "/src/middleware" === t10.page || "/proxy" === t10.page || "/src/proxy" === t10.page) {
            let e10 = E2.waitUntil.bind(E2), r3 = new tc();
            return e0().trace(eL.execute, { spanName: `middleware ${_2.method}`, attributes: { "http.target": _2.nextUrl.pathname, "http.method": _2.method } }, async () => {
              try {
                var n3, i3, a3, o3, s3, u2;
                let c3 = td(), d3 = await tp("/", _2.nextUrl.pathname, null), h3 = (s3 = _2.nextUrl, u2 = (e11) => {
                  l2 = e11;
                }, function(e11, t11, r4, n4, i4, a4, o4, s4, l3, u3) {
                  function c4(e12) {
                    r4 && r4.setHeader("Set-Cookie", e12);
                  }
                  let d4 = {};
                  return { type: "request", phase: e11, implicitTags: a4, url: { pathname: n4.pathname, search: n4.search ?? "" }, rootParams: i4, get headers() {
                    return d4.headers || (d4.headers = function(e12) {
                      let t12 = eg.from(e12);
                      for (let e13 of ec) t12.delete(e13);
                      return eg.seal(t12);
                    }(t11.headers)), d4.headers;
                  }, get cookies() {
                    if (!d4.cookies) {
                      let e12 = new ee.RequestCookies(eg.from(t11.headers));
                      e4(t11, e12), d4.cookies = ex.seal(e12);
                    }
                    return d4.cookies;
                  }, set cookies(value) {
                    d4.cookies = value;
                  }, get mutableCookies() {
                    if (!d4.mutableCookies) {
                      var h4, p4;
                      let e12, n5 = (h4 = t11.headers, p4 = o4 || (r4 ? c4 : void 0), e12 = new ee.RequestCookies(eg.from(h4)), eC.wrap(e12, p4));
                      e4(t11, n5), d4.mutableCookies = n5;
                    }
                    return d4.mutableCookies;
                  }, get userspaceMutableCookies() {
                    if (!d4.userspaceMutableCookies) {
                      var f3;
                      let e12;
                      f3 = this, d4.userspaceMutableCookies = e12 = new Proxy(f3.mutableCookies, { get(t12, r5, n5) {
                        switch (r5) {
                          case "delete":
                            return function(...r6) {
                              return eR(f3, "cookies().delete"), t12.delete(...r6), e12;
                            };
                          case "set":
                            return function(...r6) {
                              return eR(f3, "cookies().set"), t12.set(...r6), e12;
                            };
                          default:
                            return en.get(t12, r5, n5);
                        }
                      } });
                    }
                    return d4.userspaceMutableCookies;
                  }, get draftMode() {
                    return d4.draftMode || (d4.draftMode = new e2(s4, t11, this.cookies, this.mutableCookies)), d4.draftMode;
                  }, renderResumeDataCache: null, isHmrRefresh: l3, serverComponentsHmrCache: u3 || globalThis.__serverComponentsHmrCache, fallbackParams: null };
                }("action", _2, void 0, s3, {}, d3, u2, c3, false, void 0)), p3 = function({ page: e11, renderOpts: t11, isPrefetchRequest: r4, buildId: n4, deploymentId: i4, previouslyRevalidatedTags: a4, nonce: o4 }) {
                  let s4 = !t11.shouldWaitOnAllReady && !t11.supportsDynamicResponse && !t11.isDraftMode && !t11.isPossibleServerAction, l3 = s4 && (!!process.env.NEXT_DEBUG_BUILD || "1" === process.env.NEXT_SSG_FETCH_METRICS), u3 = { isStaticGeneration: s4, page: e11, route: ep(e11), incrementalCache: t11.incrementalCache || globalThis.__incrementalCache, cacheLifeProfiles: t11.cacheLifeProfiles, isBuildTimePrerendering: t11.isBuildTimePrerendering, fetchCache: t11.fetchCache, isOnDemandRevalidate: t11.isOnDemandRevalidate, isDraftMode: t11.isDraftMode, isPrefetchRequest: r4, buildId: n4, deploymentId: i4, reactLoadableManifest: (null == t11 ? void 0 : t11.reactLoadableManifest) || {}, assetPrefix: (null == t11 ? void 0 : t11.assetPrefix) || "", nonce: o4, afterContext: function(e12) {
                    let { waitUntil: t12, onClose: r5, onAfterTaskError: n5 } = e12;
                    return new ts({ waitUntil: t12, onClose: r5, onTaskError: n5 });
                  }(t11), cacheComponentsEnabled: t11.cacheComponents, previouslyRevalidatedTags: a4, refreshTagsByCacheKind: function() {
                    let e12 = /* @__PURE__ */ new Map(), t12 = tr();
                    if (t12) for (let [r5, n5] of t12) "refreshTags" in n5 && e12.set(r5, tu(async () => n5.refreshTags()));
                    return e12;
                  }(), runInCleanSnapshot: eb ? eb.snapshot() : function(e12, ...t12) {
                    return e12(...t12);
                  }, shouldTrackFetchMetrics: l3, reactServerErrorsByDigest: /* @__PURE__ */ new Map() };
                  return t11.store = u3, u3;
                }({ page: "/", renderOpts: { cacheLifeProfiles: null == (i3 = t10.request.nextConfig) || null == (n3 = i3.experimental) ? void 0 : n3.cacheLife, cacheComponents: false, experimental: { isRoutePPREnabled: false, authInterrupts: !!(null == (o3 = t10.request.nextConfig) || null == (a3 = o3.experimental) ? void 0 : a3.authInterrupts) }, supportsDynamicResponse: true, waitUntil: e10, onClose: r3.onClose.bind(r3), onAfterTaskError: void 0 }, isPrefetchRequest: "1" === _2.headers.get(eu), buildId: g2 ?? "", deploymentId: false, previouslyRevalidatedTags: [] });
                return await ey.run(p3, () => e3.run(h3, t10.handler, _2, E2));
              } finally {
                setTimeout(() => {
                  r3.dispatchClose();
                }, 0);
              }
            });
          }
          return t10.handler(_2, E2);
        })) && !(s2 instanceof Response)) throw Object.defineProperty(TypeError("Expected an instance of Response to be returned"), "__NEXT_ERROR_CODE", { value: "E567", enumerable: false, configurable: true });
        s2 && l2 && s2.headers.set("set-cookie", l2);
        let C2 = null == s2 ? void 0 : s2.headers.get("x-middleware-rewrite");
        if (s2 && C2 && (b2 || !p2)) {
          let e10 = new $(C2, { forceLocale: true, headers: t10.request.headers, nextConfig: t10.request.nextConfig });
          p2 || e10.host !== _2.nextUrl.host || (e10.buildId = g2 || e10.buildId, s2.headers.set("x-middleware-rewrite", String(e10)));
          let { url: r3, isRelative: o3 } = el(e10.toString(), f2.toString());
          !p2 && v2 && s2.headers.set("x-nextjs-rewrite", r3);
          let l3 = !o3 && (null == (a2 = t10.request.nextConfig) || null == (i2 = a2.experimental) || null == (n2 = i2.clientParamParsingOrigins) ? void 0 : n2.some((t11) => new RegExp(t11).test(e10.origin)));
          b2 && (o3 || l3) && (f2.pathname !== e10.pathname && s2.headers.set("x-nextjs-rewritten-path", e10.pathname), f2.search !== e10.search && s2.headers.set("x-nextjs-rewritten-query", e10.search.slice(1)));
        }
        if (s2 && C2 && b2 && y2) {
          let e10 = new URL(C2);
          e10.searchParams.has(ed) || (e10.searchParams.set(ed, y2), s2.headers.set("x-middleware-rewrite", e10.toString()));
        }
        let S2 = null == s2 ? void 0 : s2.headers.get("Location");
        if (s2 && S2 && !p2) {
          let e10 = new $(S2, { forceLocale: false, headers: t10.request.headers, nextConfig: t10.request.nextConfig });
          s2 = new Response(s2.body, s2), e10.host === f2.host && (e10.buildId = g2 || e10.buildId, s2.headers.set("Location", el(e10, f2).url)), v2 && (s2.headers.delete("Location"), s2.headers.set("x-nextjs-redirect", el(e10.toString(), f2.toString()).url));
        }
        let P2 = s2 || es.next(), O2 = P2.headers.get("x-middleware-override-headers"), k2 = [];
        if (O2) {
          for (let [e10, t11] of w2) P2.headers.set(`x-middleware-request-${e10}`, t11), k2.push(e10);
          k2.length > 0 && P2.headers.set("x-middleware-override-headers", O2 + "," + k2.join(","));
        }
        return { response: P2, waitUntil: ("internal" === E2[R].kind ? Promise.all(E2[R].promises).then(() => {
        }) : void 0) ?? Promise.resolve(), fetchMetrics: _2.fetchMetrics };
      }
      class ty {
        constructor() {
          let e10, t10;
          this.promise = new Promise((r2, n2) => {
            e10 = r2, t10 = n2;
          }), this.resolve = e10, this.reject = t10;
        }
      }
      class t_ {
        constructor(e10, t10, r2) {
          this.prev = null, this.next = null, this.key = e10, this.data = t10, this.size = r2;
        }
      }
      class tx {
        constructor() {
          this.prev = null, this.next = null;
        }
      }
      class tE {
        constructor(e10, t10, r2) {
          this.cache = /* @__PURE__ */ new Map(), this.totalSize = 0, this.maxSize = e10, this.calculateSize = t10, this.onEvict = r2, this.head = new tx(), this.tail = new tx(), this.head.next = this.tail, this.tail.prev = this.head;
        }
        addToHead(e10) {
          e10.prev = this.head, e10.next = this.head.next, this.head.next.prev = e10, this.head.next = e10;
        }
        removeNode(e10) {
          e10.prev.next = e10.next, e10.next.prev = e10.prev;
        }
        moveToHead(e10) {
          this.removeNode(e10), this.addToHead(e10);
        }
        removeTail() {
          let e10 = this.tail.prev;
          return this.removeNode(e10), e10;
        }
        set(e10, t10) {
          let r2 = (null == this.calculateSize ? void 0 : this.calculateSize.call(this, t10)) ?? 1;
          if (r2 <= 0) throw Object.defineProperty(Error(`LRUCache: calculateSize returned ${r2}, but size must be > 0. Items with size 0 would never be evicted, causing unbounded cache growth.`), "__NEXT_ERROR_CODE", { value: "E1045", enumerable: false, configurable: true });
          if (r2 > this.maxSize) return console.warn("Single item size exceeds maxSize"), false;
          let n2 = this.cache.get(e10);
          if (n2) n2.data = t10, this.totalSize = this.totalSize - n2.size + r2, n2.size = r2, this.moveToHead(n2);
          else {
            let n3 = new t_(e10, t10, r2);
            this.cache.set(e10, n3), this.addToHead(n3), this.totalSize += r2;
          }
          for (; this.totalSize > this.maxSize && this.cache.size > 0; ) {
            let e11 = this.removeTail();
            this.cache.delete(e11.key), this.totalSize -= e11.size, null == this.onEvict || this.onEvict.call(this, e11.key, e11.data);
          }
          return true;
        }
        has(e10) {
          return this.cache.has(e10);
        }
        get(e10) {
          let t10 = this.cache.get(e10);
          if (t10) return this.moveToHead(t10), t10.data;
        }
        *[Symbol.iterator]() {
          let e10 = this.head.next;
          for (; e10 && e10 !== this.tail; ) {
            let t10 = e10;
            yield [t10.key, t10.data], e10 = e10.next;
          }
        }
        remove(e10) {
          let t10 = this.cache.get(e10);
          t10 && (this.removeNode(t10), this.cache.delete(e10), this.totalSize -= t10.size);
        }
        get size() {
          return this.cache.size;
        }
        get currentSize() {
          return this.totalSize;
        }
      }
      let { env: tC, stdout: tR } = (null == (Z = globalThis) ? void 0 : Z.process) ?? {}, tS = tC && !tC.NO_COLOR && (tC.FORCE_COLOR || (null == tR ? void 0 : tR.isTTY) && !tC.CI && "dumb" !== tC.TERM), tT = (e10, t10, r2, n2) => {
        let i2 = e10.substring(0, n2) + r2, a2 = e10.substring(n2 + t10.length), o2 = a2.indexOf(t10);
        return ~o2 ? i2 + tT(a2, t10, r2, o2) : i2 + a2;
      }, tP = (e10, t10, r2 = e10) => tS ? (n2) => {
        let i2 = "" + n2, a2 = i2.indexOf(t10, e10.length);
        return ~a2 ? e10 + tT(i2, t10, r2, a2) + t10 : e10 + i2 + t10;
      } : String, tO = tP("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m");
      tP("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"), tP("\x1B[3m", "\x1B[23m"), tP("\x1B[4m", "\x1B[24m"), tP("\x1B[7m", "\x1B[27m"), tP("\x1B[8m", "\x1B[28m"), tP("\x1B[9m", "\x1B[29m"), tP("\x1B[30m", "\x1B[39m");
      let tk = tP("\x1B[31m", "\x1B[39m"), tA = tP("\x1B[32m", "\x1B[39m"), tN = tP("\x1B[33m", "\x1B[39m");
      tP("\x1B[34m", "\x1B[39m");
      let tI = tP("\x1B[35m", "\x1B[39m");
      tP("\x1B[38;2;173;127;168m", "\x1B[39m"), tP("\x1B[36m", "\x1B[39m");
      let tM = tP("\x1B[37m", "\x1B[39m");
      tP("\x1B[90m", "\x1B[39m"), tP("\x1B[40m", "\x1B[49m"), tP("\x1B[41m", "\x1B[49m"), tP("\x1B[42m", "\x1B[49m"), tP("\x1B[43m", "\x1B[49m"), tP("\x1B[44m", "\x1B[49m"), tP("\x1B[45m", "\x1B[49m"), tP("\x1B[46m", "\x1B[49m"), tP("\x1B[47m", "\x1B[49m"), tM(tO("\u25CB")), tk(tO("\u2A2F")), tN(tO("\u26A0")), tM(tO(" ")), tA(tO("\u2713")), tI(tO("\xBB")), new tE(1e4, (e10) => e10.length), new tE(1e4, (e10) => e10.length);
      var tj = ((Q = {}).APP_PAGE = "APP_PAGE", Q.APP_ROUTE = "APP_ROUTE", Q.PAGES = "PAGES", Q.FETCH = "FETCH", Q.REDIRECT = "REDIRECT", Q.IMAGE = "IMAGE", Q), tD = ((Y = {}).APP_PAGE = "APP_PAGE", Y.APP_ROUTE = "APP_ROUTE", Y.PAGES = "PAGES", Y.FETCH = "FETCH", Y.IMAGE = "IMAGE", Y);
      function tL() {
      }
      new TextEncoder();
      let t$ = new TextEncoder();
      function tq(e10) {
        return new ReadableStream({ start(t10) {
          t10.enqueue(t$.encode(e10)), t10.close();
        } });
      }
      function tU(e10) {
        return new ReadableStream({ start(t10) {
          t10.enqueue(e10), t10.close();
        } });
      }
      async function tH(e10, t10) {
        let r2 = new TextDecoder("utf-8", { fatal: true }), n2 = "";
        for await (let i2 of e10) {
          if (null == t10 ? void 0 : t10.aborted) return n2;
          n2 += r2.decode(i2, { stream: true });
        }
        return n2 + r2.decode();
      }
      let tF = "ResponseAborted";
      class tB extends Error {
        constructor(...e10) {
          super(...e10), this.name = tF;
        }
      }
      let tz = 0, tX = 0, tG = 0;
      function tW(e10) {
        return (null == e10 ? void 0 : e10.name) === "AbortError" || (null == e10 ? void 0 : e10.name) === tF;
      }
      async function tV(e10, t10, r2) {
        try {
          let n2, { errored: i2, destroyed: a2 } = t10;
          if (i2 || a2) return;
          let o2 = (n2 = new AbortController(), t10.once("close", () => {
            t10.writableFinished || n2.abort(new tB());
          }), n2), s2 = function(e11, t11) {
            let r3 = false, n3 = new ty();
            function i3() {
              n3.resolve();
            }
            e11.on("drain", i3), e11.once("close", () => {
              e11.off("drain", i3), n3.resolve();
            });
            let a3 = new ty();
            return e11.once("finish", () => {
              a3.resolve();
            }), new WritableStream({ write: async (t12) => {
              if (!r3) {
                if (r3 = true, "performance" in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                  let e12 = function(e13 = {}) {
                    let t13 = 0 === tz ? void 0 : { clientComponentLoadStart: tz, clientComponentLoadTimes: tX, clientComponentLoadCount: tG };
                    return e13.reset && (tz = 0, tX = 0, tG = 0), t13;
                  }();
                  e12 && performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, { start: e12.clientComponentLoadStart, end: e12.clientComponentLoadStart + e12.clientComponentLoadTimes });
                }
                e11.flushHeaders(), e0().trace(eO.startResponse, { spanName: "start response" }, () => void 0);
              }
              try {
                let r4 = e11.write(t12);
                "flush" in e11 && "function" == typeof e11.flush && e11.flush(), r4 || (await n3.promise, n3 = new ty());
              } catch (t13) {
                throw e11.end(), Object.defineProperty(Error("failed to write chunk to response", { cause: t13 }), "__NEXT_ERROR_CODE", { value: "E321", enumerable: false, configurable: true });
              }
            }, abort: (t12) => {
              e11.writableFinished || e11.destroy(t12);
            }, close: async () => {
              if (t11 && await t11, !e11.writableFinished) return e11.end(), a3.promise;
            } });
          }(t10, r2);
          await e10.pipeTo(s2, { signal: o2.signal });
        } catch (e11) {
          if (tW(e11)) return;
          throw Object.defineProperty(Error("failed to pipe response", { cause: e11 }), "__NEXT_ERROR_CODE", { value: "E180", enumerable: false, configurable: true });
        }
      }
      class tJ {
        static #e = this.EMPTY = new tJ(null, { metadata: {}, contentType: null });
        static fromStatic(e10, t10) {
          return new tJ(e10, { metadata: {}, contentType: t10 });
        }
        constructor(e10, { contentType: t10, waitUntil: r2, metadata: n2 }) {
          this.response = e10, this.contentType = t10, this.metadata = n2, this.waitUntil = r2;
        }
        assignMetadata(e10) {
          Object.assign(this.metadata, e10);
        }
        get isNull() {
          return null === this.response;
        }
        get isDynamic() {
          return "string" != typeof this.response;
        }
        toUnchunkedString(e10 = false) {
          if (null === this.response) return "";
          if ("string" != typeof this.response) {
            if (!e10) throw Object.defineProperty(new e5("dynamic responses cannot be unchunked. This is a bug in Next.js"), "__NEXT_ERROR_CODE", { value: "E732", enumerable: false, configurable: true });
            return tH(this.readable);
          }
          return this.response;
        }
        get readable() {
          return null === this.response ? new ReadableStream({ start(e10) {
            e10.close();
          } }) : "string" == typeof this.response ? tq(this.response) : e7.Buffer.isBuffer(this.response) ? tU(this.response) : Array.isArray(this.response) ? function(...e10) {
            if (0 === e10.length) return new ReadableStream({ start(e11) {
              e11.close();
            } });
            if (1 === e10.length) return e10[0];
            let { readable: t10, writable: r2 } = new TransformStream(), n2 = e10[0].pipeTo(r2, { preventClose: true }), i2 = 1;
            for (; i2 < e10.length - 1; i2++) {
              let t11 = e10[i2];
              n2 = n2.then(() => t11.pipeTo(r2, { preventClose: true }));
            }
            let a2 = e10[i2];
            return (n2 = n2.then(() => a2.pipeTo(r2))).catch(tL), t10;
          }(...this.response) : this.response;
        }
        coerce() {
          return null === this.response ? [] : "string" == typeof this.response ? [tq(this.response)] : Array.isArray(this.response) ? this.response : e7.Buffer.isBuffer(this.response) ? [tU(this.response)] : [this.response];
        }
        pipeThrough(e10) {
          this.response = this.readable.pipeThrough(e10);
        }
        unshift(e10) {
          this.response = this.coerce(), this.response.unshift(e10);
        }
        push(e10) {
          this.response = this.coerce(), this.response.push(e10);
        }
        async pipeTo(e10) {
          try {
            await this.readable.pipeTo(e10, { preventClose: true }), this.waitUntil && await this.waitUntil, await e10.close();
          } catch (t10) {
            if (tW(t10)) return void await e10.abort(t10);
            throw t10;
          }
        }
        async pipeToNodeResponse(e10) {
          await tV(this.readable, e10, this.waitUntil);
        }
      }
      function tK(e10, t10) {
        if (!e10) return t10;
        let r2 = parseInt(e10, 10);
        return Number.isFinite(r2) && r2 > 0 ? r2 : t10;
      }
      tK(process.env.NEXT_PRIVATE_RESPONSE_CACHE_TTL, 1e4), tK(process.env.NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE, 150);
      var tQ = e.i(835938);
      let tY = /* @__PURE__ */ new Map(), tZ = (e10, t10) => {
        for (let r2 of e10) {
          let e11 = tY.get(r2), n2 = null == e11 ? void 0 : e11.expired;
          if ("number" == typeof n2 && n2 <= Date.now() && n2 > t10) return true;
        }
        return false;
      }, t0 = (e10, t10) => {
        for (let r2 of e10) {
          let e11 = tY.get(r2), n2 = (null == e11 ? void 0 : e11.stale) ?? 0;
          if ("number" == typeof n2 && n2 > t10) return true;
        }
        return false;
      };
      class t1 {
        constructor(e10) {
          this.fs = e10, this.tasks = [];
        }
        findOrCreateTask(e10) {
          for (let t11 of this.tasks) if (t11[0] === e10) return t11;
          let t10 = this.fs.mkdir(e10);
          t10.catch(() => {
          });
          let r2 = [e10, t10, []];
          return this.tasks.push(r2), r2;
        }
        append(e10, t10) {
          let r2 = this.findOrCreateTask(tQ.default.dirname(e10)), n2 = r2[1].then(() => this.fs.writeFile(e10, t10));
          n2.catch(() => {
          }), r2[2].push(n2);
        }
        wait() {
          return Promise.all(this.tasks.flatMap((e10) => e10[2]));
        }
      }
      function t2(e10) {
        return (null == e10 ? void 0 : e10.length) || 0;
      }
      class t4 {
        static #e = this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        constructor(e10) {
          this.fs = e10.fs, this.flushToDisk = e10.flushToDisk, this.serverDistDir = e10.serverDistDir, this.revalidatedTags = e10.revalidatedTags, e10.maxMemoryCacheSize ? t4.memoryCache ? t4.debug && console.log("FileSystemCache: memory store already initialized") : (t4.debug && console.log("FileSystemCache: using memory store for fetch cache"), t4.memoryCache = function(e11) {
            return r || (r = new tE(e11, function({ value: e12 }) {
              var t10, r2;
              if (!e12) return 25;
              if (e12.kind === tj.REDIRECT) return JSON.stringify(e12.props).length;
              if (e12.kind === tj.IMAGE) throw Object.defineProperty(Error("invariant image should not be incremental-cache"), "__NEXT_ERROR_CODE", { value: "E501", enumerable: false, configurable: true });
              if (e12.kind === tj.FETCH) return JSON.stringify(e12.data || "").length;
              if (e12.kind === tj.APP_ROUTE) return e12.body.length;
              return e12.kind === tj.APP_PAGE ? Math.max(1, e12.html.length + t2(e12.rscData) + ((null == (r2 = e12.postponed) ? void 0 : r2.length) || 0) + function(e13) {
                if (!e13) return 0;
                let t11 = 0;
                for (let [r3, n2] of e13) t11 += r3.length + t2(n2);
                return t11;
              }(e12.segmentData)) : e12.html.length + ((null == (t10 = JSON.stringify(e12.pageData)) ? void 0 : t10.length) || 0);
            })), r;
          }(e10.maxMemoryCacheSize)) : t4.debug && console.log("FileSystemCache: not using memory store for fetch cache");
        }
        resetRequestCache() {
        }
        async revalidateTag(e10, t10) {
          if (e10 = "string" == typeof e10 ? [e10] : e10, t4.debug && console.log("FileSystemCache: revalidateTag", e10, t10), 0 === e10.length) return;
          let r2 = Date.now();
          for (let n2 of e10) {
            let e11 = tY.get(n2) || {};
            if (t10) {
              let i2 = { ...e11 };
              i2.stale = r2, void 0 !== t10.expire && (i2.expired = r2 + 1e3 * t10.expire), tY.set(n2, i2);
            } else tY.set(n2, { ...e11, expired: r2 });
          }
        }
        async get(...e10) {
          var t10, r2, n2, i2, a2, o2;
          let [s2, l2] = e10, { kind: u2 } = l2, c2 = null == (t10 = t4.memoryCache) ? void 0 : t10.get(s2);
          if (t4.debug && (u2 === tD.FETCH ? console.log("FileSystemCache: get", s2, l2.tags, u2, !!c2) : console.log("FileSystemCache: get", s2, u2, !!c2)), (null == c2 || null == (r2 = c2.value) ? void 0 : r2.kind) === tj.APP_PAGE || (null == c2 || null == (n2 = c2.value) ? void 0 : n2.kind) === tj.APP_ROUTE || (null == c2 || null == (i2 = c2.value) ? void 0 : i2.kind) === tj.PAGES) {
            let e11 = null == (o2 = c2.value.headers) ? void 0 : o2[m];
            if ("string" == typeof e11) {
              let t11 = e11.split(",");
              if (t11.length > 0 && tZ(t11, c2.lastModified)) return t4.debug && console.log("FileSystemCache: expired tags", t11), null;
            }
          } else if ((null == c2 || null == (a2 = c2.value) ? void 0 : a2.kind) === tj.FETCH) {
            let e11 = l2.kind === tD.FETCH ? [...l2.tags || [], ...l2.softTags || []] : [];
            if (e11.some((e12) => this.revalidatedTags.includes(e12))) return t4.debug && console.log("FileSystemCache: was revalidated", e11), null;
            if (tZ(e11, c2.lastModified)) return t4.debug && console.log("FileSystemCache: expired tags", e11), null;
          }
          return c2 ?? null;
        }
        async set(e10, t10, r2) {
          var n2;
          if (null == (n2 = t4.memoryCache) || n2.set(e10, { value: t10, lastModified: Date.now() }), t4.debug && console.log("FileSystemCache: set", e10), !this.flushToDisk || !t10) return;
          let i2 = new t1(this.fs);
          if (t10.kind === tj.APP_ROUTE) {
            let r3 = this.getFilePath(`${e10}.body`, tD.APP_ROUTE);
            i2.append(r3, t10.body);
            let n3 = { headers: t10.headers, status: t10.status, postponed: void 0, segmentPaths: void 0, prefetchHints: void 0 };
            i2.append(r3.replace(/\.body$/, g), JSON.stringify(n3, null, 2));
          } else if (t10.kind === tj.PAGES || t10.kind === tj.APP_PAGE) {
            let n3 = t10.kind === tj.APP_PAGE, a2 = this.getFilePath(`${e10}.html`, n3 ? tD.APP_PAGE : tD.PAGES);
            if (i2.append(a2, t10.html), r2.fetchCache || r2.isFallback || r2.isRoutePPREnabled || i2.append(this.getFilePath(`${e10}${n3 ? ".rsc" : ".json"}`, n3 ? tD.APP_PAGE : tD.PAGES), n3 ? t10.rscData : JSON.stringify(t10.pageData)), (null == t10 ? void 0 : t10.kind) === tj.APP_PAGE) {
              let e11;
              if (t10.segmentData) {
                e11 = [];
                let r4 = a2.replace(/\.html$/, ".segments");
                for (let [n4, a3] of t10.segmentData) {
                  e11.push(n4);
                  let t11 = r4 + n4 + ".segment.rsc";
                  i2.append(t11, a3);
                }
              }
              let r3 = { headers: t10.headers, status: t10.status, postponed: t10.postponed, segmentPaths: e11, prefetchHints: void 0 };
              i2.append(a2.replace(/\.html$/, g), JSON.stringify(r3));
            }
          } else if (t10.kind === tj.FETCH) {
            let n3 = this.getFilePath(e10, tD.FETCH);
            i2.append(n3, JSON.stringify({ ...t10, tags: r2.fetchCache ? r2.tags : [] }));
          }
          await i2.wait();
        }
        getFilePath(e10, t10) {
          switch (t10) {
            case tD.FETCH:
              return tQ.default.join(this.serverDistDir, "..", "cache", "fetch-cache", e10);
            case tD.PAGES:
              return tQ.default.join(this.serverDistDir, "pages", e10);
            case tD.IMAGE:
            case tD.APP_PAGE:
            case tD.APP_ROUTE:
              return tQ.default.join(this.serverDistDir, "app", e10);
            default:
              throw Object.defineProperty(Error(`Unexpected file path kind: ${t10}`), "__NEXT_ERROR_CODE", { value: "E479", enumerable: false, configurable: true });
          }
        }
      }
      let t3 = ["(..)(..)", "(.)", "(..)", "(...)"], t9 = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/, t6 = /\/\[[^/]+\](?=\/|$)/;
      function t5(e10) {
        return e10.replace(/(?:\/index)?\/?$/, "") || "/";
      }
      class t7 {
        static #e = this.cacheControls = /* @__PURE__ */ new Map();
        constructor(e10) {
          this.prerenderManifest = e10;
        }
        get(e10) {
          let t10 = t7.cacheControls.get(e10);
          if (t10) return t10;
          let r2 = this.prerenderManifest.routes[e10];
          if (r2) {
            let { initialRevalidateSeconds: e11, initialExpireSeconds: t11 } = r2;
            if (void 0 !== e11) return { revalidate: e11, expire: t11 };
          }
          let n2 = this.prerenderManifest.dynamicRoutes[e10];
          if (n2) {
            let { fallbackRevalidate: e11, fallbackExpire: t11 } = n2;
            if (void 0 !== e11) return { revalidate: e11, expire: t11 };
          }
        }
        set(e10, t10) {
          t7.cacheControls.set(e10, t10);
        }
        clear() {
          t7.cacheControls.clear();
        }
      }
      e.i(258538);
      class t8 {
        static #e = this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        constructor({ fs: e10, dev: t10, flushToDisk: r2, minimalMode: n2, serverDistDir: i2, requestHeaders: a2, maxMemoryCacheSize: o2, getPrerenderManifest: s2, fetchCacheKeyPrefix: l2, CurCacheHandler: u2, allowedRevalidateHeaderKeys: c2 }) {
          var d2, h2, p2, g2;
          this.locks = /* @__PURE__ */ new Map(), this.hasCustomCacheHandler = !!u2;
          const m2 = Symbol.for("@next/cache-handlers"), b2 = globalThis;
          if (u2) t8.debug && console.log("IncrementalCache: using custom cache handler", u2.name);
          else {
            const t11 = b2[m2];
            (null == t11 ? void 0 : t11.FetchCache) ? (u2 = t11.FetchCache, t8.debug && console.log("IncrementalCache: using global FetchCache cache handler")) : e10 && i2 && (t8.debug && console.log("IncrementalCache: using filesystem cache handler"), u2 = t4);
          }
          process.env.__NEXT_TEST_MAX_ISR_CACHE && (o2 = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10)), this.dev = t10, this.disableForTestmode = "true" === process.env.NEXT_PRIVATE_TEST_PROXY, this.minimalMode = n2, this.requestHeaders = a2, this.allowedRevalidateHeaderKeys = c2, this.prerenderManifest = s2(), this.cacheControls = new t7(this.prerenderManifest), this.fetchCacheKeyPrefix = l2;
          let w2 = [];
          a2[f] === (null == (h2 = this.prerenderManifest) || null == (d2 = h2.preview) ? void 0 : d2.previewModeId) && (this.isOnDemandRevalidate = true), n2 && (w2 = this.revalidatedTags = function(e11, t11) {
            return "string" == typeof e11[v] && e11["x-next-revalidate-tag-token"] === t11 ? e11[v].split(",") : [];
          }(a2, null == (g2 = this.prerenderManifest) || null == (p2 = g2.preview) ? void 0 : p2.previewModeId)), u2 && (this.cacheHandler = new u2({ dev: t10, fs: e10, flushToDisk: r2, serverDistDir: i2, revalidatedTags: w2, maxMemoryCacheSize: o2, _requestHeaders: a2, fetchCacheKeyPrefix: l2 }));
        }
        calculateRevalidate(e10, t10, r2, n2) {
          if (r2) return Math.floor(performance.timeOrigin + performance.now() - 1e3);
          let i2 = this.cacheControls.get(t5(e10)), a2 = i2 ? i2.revalidate : !n2 && 1;
          return "number" == typeof a2 ? 1e3 * a2 + t10 : a2;
        }
        _getPathname(e10, t10) {
          return t10 ? e10 : /^\/index(\/|$)/.test(e10) && !function(e11, t11 = true) {
            return (void 0 !== e11.split("/").find((e12) => t3.find((t12) => e12.startsWith(t12))) && (e11 = function(e12) {
              let t12, r2, n2;
              for (let i2 of e12.split("/")) if (r2 = t3.find((e13) => i2.startsWith(e13))) {
                [t12, n2] = e12.split(r2, 2);
                break;
              }
              if (!t12 || !r2 || !n2) throw Object.defineProperty(Error(`Invalid interception route: ${e12}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", { value: "E269", enumerable: false, configurable: true });
              switch (t12 = ep(t12), r2) {
                case "(.)":
                  n2 = "/" === t12 ? `/${n2}` : t12 + "/" + n2;
                  break;
                case "(..)":
                  if ("/" === t12) throw Object.defineProperty(Error(`Invalid interception route: ${e12}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", { value: "E207", enumerable: false, configurable: true });
                  n2 = t12.split("/").slice(0, -1).concat(n2).join("/");
                  break;
                case "(...)":
                  n2 = "/" + n2;
                  break;
                case "(..)(..)":
                  let i2 = t12.split("/");
                  if (i2.length <= 2) throw Object.defineProperty(Error(`Invalid interception route: ${e12}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", { value: "E486", enumerable: false, configurable: true });
                  n2 = i2.slice(0, -2).concat(n2).join("/");
                  break;
                default:
                  throw Object.defineProperty(Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", { value: "E112", enumerable: false, configurable: true });
              }
              return { interceptingRoute: t12, interceptedRoute: n2 };
            }(e11).interceptedRoute), t11) ? t6.test(e11) : t9.test(e11);
          }(e10) ? `/index${e10}` : "/" === e10 ? "/index" : eh(e10);
        }
        resetRequestCache() {
          var e10, t10;
          null == (t10 = this.cacheHandler) || null == (e10 = t10.resetRequestCache) || e10.call(t10);
        }
        async lock(e10) {
          for (; ; ) {
            let t11 = this.locks.get(e10);
            if (t8.debug && console.log("IncrementalCache: lock get", e10, !!t11), !t11) break;
            await t11;
          }
          let { resolve: t10, promise: r2 } = new ty();
          return t8.debug && console.log("IncrementalCache: successfully locked", e10), this.locks.set(e10, r2), () => {
            t10(), this.locks.delete(e10);
          };
        }
        async revalidateTag(e10, t10) {
          var r2;
          return null == (r2 = this.cacheHandler) ? void 0 : r2.revalidateTag(e10, t10);
        }
        async generateCacheKey(e10, t10 = {}) {
          let r2 = [], n2 = new TextEncoder(), i2 = new TextDecoder();
          if (t10.body) if (t10.body instanceof Uint8Array) r2.push(i2.decode(t10.body)), t10._ogBody = t10.body;
          else if ("function" == typeof t10.body.getReader) {
            let e11 = t10.body, a3 = [];
            try {
              await e11.pipeTo(new WritableStream({ write(e12) {
                "string" == typeof e12 ? (a3.push(n2.encode(e12)), r2.push(e12)) : (a3.push(e12), r2.push(i2.decode(e12, { stream: true })));
              } })), r2.push(i2.decode());
              let o3 = a3.reduce((e12, t11) => e12 + t11.length, 0), s3 = new Uint8Array(o3), l2 = 0;
              for (let e12 of a3) s3.set(e12, l2), l2 += e12.length;
              t10._ogBody = s3;
            } catch (e12) {
              console.error("Problem reading body", e12);
            }
          } else if ("function" == typeof t10.body.keys) {
            let e11 = t10.body;
            for (let n3 of (t10._ogBody = t10.body, /* @__PURE__ */ new Set([...e11.keys()]))) {
              let t11 = e11.getAll(n3);
              r2.push(`${n3}=${(await Promise.all(t11.map(async (e12) => "string" == typeof e12 ? e12 : await e12.text()))).join(",")}`);
            }
          } else if ("function" == typeof t10.body.arrayBuffer) {
            let e11 = t10.body, n3 = await e11.arrayBuffer();
            r2.push(await e11.text()), t10._ogBody = new Blob([n3], { type: e11.type });
          } else "string" == typeof t10.body && (r2.push(t10.body), t10._ogBody = t10.body);
          let a2 = "function" == typeof (t10.headers || {}).keys ? Object.fromEntries(t10.headers) : Object.assign({}, t10.headers);
          "traceparent" in a2 && delete a2.traceparent, "tracestate" in a2 && delete a2.tracestate;
          let o2 = JSON.stringify(["v3", this.fetchCacheKeyPrefix || "", e10, t10.method, a2, t10.mode, t10.redirect, t10.credentials, t10.referrer, t10.referrerPolicy, t10.integrity, t10.cache, r2]);
          {
            var s2;
            let e11 = n2.encode(o2);
            return s2 = await crypto.subtle.digest("SHA-256", e11), Array.prototype.map.call(new Uint8Array(s2), (e12) => e12.toString(16).padStart(2, "0")).join("");
          }
        }
        async get(e10, t10) {
          var r2, n2, i2, a2, o2, s2, l2;
          let u2, c2;
          if (t10.kind === tD.FETCH) {
            let r3 = e3.getStore(), n3 = r3 ? function(e11) {
              switch (e11.type) {
                case "request":
                case "prerender":
                case "prerender-runtime":
                case "prerender-client":
                case "validation-client":
                  if (e11.renderResumeDataCache) return e11.renderResumeDataCache;
                case "prerender-ppr":
                  return e11.prerenderResumeDataCache ?? null;
                case "cache":
                case "private-cache":
                case "unstable-cache":
                case "prerender-legacy":
                case "generate-static-params":
                  return null;
                default:
                  return e11;
              }
            }(r3) : null;
            if (n3) {
              let r4 = n3.fetch.get(e10);
              if ((null == r4 ? void 0 : r4.kind) === tj.FETCH) {
                let n4 = ey.getStore();
                if (![...t10.tags || [], ...t10.softTags || []].some((e11) => {
                  var t11, r5;
                  return (null == (t11 = this.revalidatedTags) ? void 0 : t11.includes(e11)) || (null == n4 || null == (r5 = n4.pendingRevalidatedTags) ? void 0 : r5.some((t12) => t12.tag === e11));
                })) return t8.debug && console.log("IncrementalCache: rdc:hit", e10), { isStale: false, value: r4 };
                t8.debug && console.log("IncrementalCache: rdc:revalidated-tag", e10);
              } else t8.debug && console.log("IncrementalCache: rdc:miss", e10);
            } else t8.debug && console.log("IncrementalCache: rdc:no-resume-data");
          }
          if (this.disableForTestmode || this.dev && (t10.kind !== tD.FETCH || "no-cache" === this.requestHeaders["cache-control"])) return null;
          e10 = this._getPathname(e10, t10.kind === tD.FETCH);
          let d2 = await (null == (r2 = this.cacheHandler) ? void 0 : r2.get(e10, t10));
          if (t10.kind === tD.FETCH) {
            if (!d2) return null;
            if ((null == (i2 = d2.value) ? void 0 : i2.kind) !== tj.FETCH) throw Object.defineProperty(new e5(`Expected cached value for cache key ${JSON.stringify(e10)} to be a "FETCH" kind, got ${JSON.stringify(null == (a2 = d2.value) ? void 0 : a2.kind)} instead.`), "__NEXT_ERROR_CODE", { value: "E653", enumerable: false, configurable: true });
            let r3 = ey.getStore(), n3 = [...t10.tags || [], ...t10.softTags || []];
            if (n3.some((e11) => {
              var t11, n4;
              return (null == (t11 = this.revalidatedTags) ? void 0 : t11.includes(e11)) || (null == r3 || null == (n4 = r3.pendingRevalidatedTags) ? void 0 : n4.some((t12) => t12.tag === e11));
            })) return t8.debug && console.log("IncrementalCache: expired tag", e10), null;
            let o3 = e3.getStore();
            if (o3) {
              let t11 = e9(o3);
              t11 && (t8.debug && console.log("IncrementalCache: rdc:set", e10), t11.fetch.set(e10, d2.value));
            }
            let s3 = t10.revalidate || d2.value.revalidate, l3 = (performance.timeOrigin + performance.now() - (d2.lastModified || 0)) / 1e3 > s3, u3 = d2.value.data;
            return tZ(n3, d2.lastModified) ? null : (t0(n3, d2.lastModified) && (l3 = true), { isStale: l3, value: { kind: tj.FETCH, data: u3, revalidate: s3 } });
          }
          if ((null == d2 || null == (n2 = d2.value) ? void 0 : n2.kind) === tj.FETCH) throw Object.defineProperty(new e5(`Expected cached value for cache key ${JSON.stringify(e10)} not to be a ${JSON.stringify(t10.kind)} kind, got "FETCH" instead.`), "__NEXT_ERROR_CODE", { value: "E652", enumerable: false, configurable: true });
          let h2 = null, { isFallback: p2 } = t10, f2 = this.cacheControls.get(t5(e10));
          if ((null == d2 ? void 0 : d2.lastModified) === -1) u2 = -1, c2 = -31536e6;
          else {
            let r3 = performance.timeOrigin + performance.now(), n3 = (null == d2 ? void 0 : d2.lastModified) || r3;
            if (void 0 === (u2 = false !== (c2 = this.calculateRevalidate(e10, n3, this.dev ?? false, t10.isFallback)) && c2 < r3 || void 0) && ((null == d2 || null == (o2 = d2.value) ? void 0 : o2.kind) === tj.APP_PAGE || (null == d2 || null == (s2 = d2.value) ? void 0 : s2.kind) === tj.APP_ROUTE)) {
              let e11 = null == (l2 = d2.value.headers) ? void 0 : l2[m];
              if ("string" == typeof e11) {
                let t11 = e11.split(",");
                t11.length > 0 && (tZ(t11, n3) ? u2 = -1 : t0(t11, n3) && (u2 = true));
              }
            }
          }
          return d2 && (h2 = { isStale: u2, cacheControl: f2, revalidateAfter: c2, value: d2.value, isFallback: p2 }), !d2 && this.prerenderManifest.notFoundRoutes.includes(e10) && (h2 = { isStale: u2, value: null, cacheControl: f2, revalidateAfter: c2, isFallback: p2 }, this.set(e10, h2.value, { ...t10, cacheControl: f2 })), h2;
        }
        async set(e10, t10, r2) {
          if ((null == t10 ? void 0 : t10.kind) === tj.FETCH) {
            let r3 = e3.getStore(), n3 = r3 ? e9(r3) : null;
            n3 && (t8.debug && console.log("IncrementalCache: rdc:set", e10), n3.fetch.set(e10, t10));
          }
          if (this.disableForTestmode || this.dev && !r2.fetchCache) return;
          e10 = this._getPathname(e10, r2.fetchCache);
          let n2 = JSON.stringify(t10).length;
          if (r2.fetchCache && n2 > 2097152 && !this.hasCustomCacheHandler && !r2.isImplicitBuildTimeCache) {
            let t11 = `Failed to set Next.js data cache for ${r2.fetchUrl || e10}, items over 2MB can not be cached (${n2} bytes)`;
            if (this.dev) throw Object.defineProperty(Error(t11), "__NEXT_ERROR_CODE", { value: "E1003", enumerable: false, configurable: true });
            console.warn(t11);
            return;
          }
          try {
            var i2;
            !r2.fetchCache && r2.cacheControl && this.cacheControls.set(t5(e10), r2.cacheControl), await (null == (i2 = this.cacheHandler) ? void 0 : i2.set(e10, t10, r2));
          } catch (t11) {
            console.warn("Failed to update prerender cache for", e10, t11);
          }
        }
      }
      if (e.i(571254), e.i(673677).default.unstable_postpone, false === ("Route %%% needs to bail out of prerendering at this point because it used ^^^. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error".includes("needs to bail out of prerendering at this point because it used") && "Route %%% needs to bail out of prerendering at this point because it used ^^^. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error".includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error"))) throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", { value: "E296", enumerable: false, configurable: true });
      RegExp("\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at __next_root_layout_boundary__ \\([^\\n]*\\)"), RegExp("\\n\\s+at __next_metadata_boundary__[\\n\\s]"), RegExp("\\n\\s+at __next_viewport_boundary__[\\n\\s]"), RegExp("\\n\\s+at __next_outlet_boundary__[\\n\\s]"), RegExp("\\n\\s+at __next_instant_validation_boundary__[\\n\\s]");
      let re = process.env.NEXT_PUBLIC_ROOT_DOMAIN;
      async function rt(e10) {
        let t10 = e10.nextUrl, r2 = e10.headers.get("host").replace(RegExp(".dev.glow:3000$"), `.${re}`), n2 = new URL("", e10.url);
        return r2 === re ? rr(e10, t10.pathname, n2) : (n2.pathname = `/${r2}/unknown`, es.rewrite(n2));
      }
      async function rr(e10, t10, r2) {
        let n2 = e10.nextUrl.searchParams.toString();
        return "/" === t10 ? es.next() : (r2.pathname = `/${e10.headers.get("host")}${t10}`, r2.search = n2, es.rewrite(r2));
      }
      e.s(["config", 0, { matcher: ["/((?!api/|_next/|i/|_static/|_vercel|edit|invite|new|new-api|assets|[\\w-]+\\.\\w+).*)"] }, "default", 0, rt], 841945);
      let rn = { ...e.i(841945) }, ri = "/middleware", ra = rn.middleware || rn.default;
      if ("function" != typeof ra) throw new class extends Error {
        constructor(e10) {
          super(e10), this.stack = "";
        }
      }(`The Middleware file "${ri}" must export a function named \`middleware\` or a default function.`);
      let ro = (e10) => tw({ ...e10, IncrementalCache: t8, incrementalCacheHandler: null, page: ri, handler: async (...e11) => {
        try {
          return await ra(...e11);
        } catch (i2) {
          let t10 = e11[0], r2 = new URL(t10.url), n2 = r2.pathname + r2.search;
          throw await s(i2, { path: n2, method: t10.method, headers: Object.fromEntries(t10.headers.entries()) }, { routerKind: "Pages Router", routePath: "/proxy", routeType: "proxy", revalidateReason: void 0 }), i2;
        }
      } });
      async function rs(e10, t10) {
        let r2 = await ro({ request: { url: e10.url, method: e10.method, headers: _(e10.headers), nextConfig: { basePath: "", i18n: "", trailingSlash: false, experimental: { cacheLife: { default: { stale: 300, revalidate: 900, expire: 4294967294 }, seconds: { stale: 30, revalidate: 1, expire: 60 }, minutes: { stale: 300, revalidate: 60, expire: 3600 }, hours: { stale: 300, revalidate: 3600, expire: 86400 }, days: { stale: 300, revalidate: 86400, expire: 604800 }, weeks: { stale: 300, revalidate: 604800, expire: 2592e3 }, max: { stale: 300, revalidate: 2592e3, expire: 31536e3 } }, authInterrupts: false, clientParamParsingOrigins: [] } }, page: { name: ri }, body: "GET" !== e10.method && "HEAD" !== e10.method ? e10.body ?? void 0 : void 0, waitUntil: t10.waitUntil, requestMeta: t10.requestMeta, signal: t10.signal || new AbortController().signal } });
        return null == t10.waitUntil || t10.waitUntil.call(t10, r2.waitUntil), r2.response;
      }
      e.s(["default", 0, ro, "handler", 0, rs], 290578);
    }]);
  }
});

// .next/server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_10mb5bl.js
var require_y_next_dist_esm_build_templates_edge_wrapper_10mb5bl = __commonJS({
  ".next/server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_10mb5bl.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/126y_next_dist_esm_build_templates_edge-wrapper_10mb5bl.js", { otherChunks: ["chunks/[root-of-the-server]__0u.y4l9._.js", "chunks/node_modules__pnpm_0_hdeb6._.js"], runtimeModuleIds: [816476] }]), (() => {
      let e;
      if (!Array.isArray(globalThis.TURBOPACK)) return;
      let t = ["NEXT_DEPLOYMENT_ID", "NEXT_CLIENT_ASSET_SUFFIX"];
      var r, n = ((r = n || {})[r.Runtime = 0] = "Runtime", r[r.Parent = 1] = "Parent", r[r.Update = 2] = "Update", r);
      let o = /* @__PURE__ */ new WeakMap();
      function u(e2, t2) {
        this.m = e2, this.e = t2;
      }
      let l = u.prototype, i = Object.prototype.hasOwnProperty, a = "u" > typeof Symbol && Symbol.toStringTag;
      function s(e2, t2, r2) {
        i.call(e2, t2) || Object.defineProperty(e2, t2, r2);
      }
      function c(e2, t2) {
        let r2 = e2[t2];
        return r2 || (r2 = f(t2), e2[t2] = r2), r2;
      }
      function f(e2) {
        return { exports: {}, error: void 0, id: e2, namespaceObject: void 0 };
      }
      function h(e2, t2) {
        s(e2, "__esModule", { value: true }), a && s(e2, a, { value: "Module" });
        let r2 = 0;
        for (; r2 < t2.length; ) {
          let n2 = t2[r2++], o2 = t2[r2++];
          if ("number" == typeof o2) if (0 === o2) s(e2, n2, { value: t2[r2++], enumerable: true, writable: false });
          else throw Error(`unexpected tag: ${o2}`);
          else "function" == typeof t2[r2] ? s(e2, n2, { get: o2, set: t2[r2++], enumerable: true }) : s(e2, n2, { get: o2, enumerable: true });
        }
        Object.seal(e2);
      }
      function d(e2, t2) {
        (null != t2 ? c(this.c, t2) : this.m).exports = e2;
      }
      l.s = function(e2, t2) {
        let r2, n2;
        null != t2 ? n2 = (r2 = c(this.c, t2)).exports : (r2 = this.m, n2 = this.e), r2.namespaceObject = n2, h(n2, e2);
      }, l.j = function(e2, t2) {
        var r2, n2;
        let u2, l2, a2;
        null != t2 ? l2 = (u2 = c(this.c, t2)).exports : (u2 = this.m, l2 = this.e);
        let s2 = (r2 = u2, n2 = l2, (a2 = o.get(r2)) || (o.set(r2, a2 = []), r2.exports = r2.namespaceObject = new Proxy(n2, { get(e3, t3) {
          if (i.call(e3, t3) || "default" === t3 || "__esModule" === t3) return Reflect.get(e3, t3);
          for (let e4 of a2) {
            let r3 = Reflect.get(e4, t3);
            if (void 0 !== r3) return r3;
          }
        }, ownKeys(e3) {
          let t3 = Reflect.ownKeys(e3);
          for (let e4 of a2) for (let r3 of Reflect.ownKeys(e4)) "default" === r3 || t3.includes(r3) || t3.push(r3);
          return t3;
        } })), a2);
        "object" == typeof e2 && null !== e2 && s2.push(e2);
      }, l.v = d, l.n = function(e2, t2) {
        let r2;
        (r2 = null != t2 ? c(this.c, t2) : this.m).exports = r2.namespaceObject = e2;
      };
      let p = Object.getPrototypeOf ? (e2) => Object.getPrototypeOf(e2) : (e2) => e2.__proto__, m = [null, p({}), p([]), p(p)];
      function b(e2, t2, r2) {
        let n2 = [], o2 = -1;
        for (let t3 = e2; ("object" == typeof t3 || "function" == typeof t3) && !m.includes(t3); t3 = p(t3)) for (let r3 of Object.getOwnPropertyNames(t3)) n2.push(r3, /* @__PURE__ */ function(e3, t4) {
          return () => e3[t4];
        }(e2, r3)), -1 === o2 && "default" === r3 && (o2 = n2.length - 1);
        return r2 && o2 >= 0 || (o2 >= 0 ? n2.splice(o2, 1, 0, e2) : n2.push("default", 0, e2)), h(t2, n2), t2;
      }
      function y(e2) {
        return "function" == typeof e2 ? function(...t2) {
          return e2.apply(this, t2);
        } : /* @__PURE__ */ Object.create(null);
      }
      function g(e2) {
        let t2 = K(e2, this.m);
        if (t2.namespaceObject) return t2.namespaceObject;
        let r2 = t2.exports;
        return t2.namespaceObject = b(r2, y(r2), r2 && r2.__esModule);
      }
      function w(e2) {
        let t2 = e2.indexOf("#");
        -1 !== t2 && (e2 = e2.substring(0, t2));
        let r2 = e2.indexOf("?");
        return -1 !== r2 && (e2 = e2.substring(0, r2)), e2;
      }
      function O(e2) {
        return "string" == typeof e2 ? e2 : e2.path;
      }
      function _() {
        let e2, t2;
        return { promise: new Promise((r2, n2) => {
          t2 = n2, e2 = r2;
        }), resolve: e2, reject: t2 };
      }
      l.i = g, l.A = function(e2) {
        return this.r(e2)(g.bind(this));
      }, l.t = "function" == typeof __require ? __require : function() {
        throw Error("Unexpected use of runtime require");
      }, l.r = function(e2) {
        return K(e2, this.m).exports;
      }, l.f = function(e2) {
        function t2(t3) {
          if (t3 = w(t3), i.call(e2, t3)) return e2[t3].module();
          let r2 = Error(`Cannot find module '${t3}'`);
          throw r2.code = "MODULE_NOT_FOUND", r2;
        }
        return t2.keys = () => Object.keys(e2), t2.resolve = (t3) => {
          if (t3 = w(t3), i.call(e2, t3)) return e2[t3].id();
          let r2 = Error(`Cannot find module '${t3}'`);
          throw r2.code = "MODULE_NOT_FOUND", r2;
        }, t2.import = async (e3) => await t2(e3), t2;
      };
      let k = Symbol("turbopack queues"), j = Symbol("turbopack exports"), C = Symbol("turbopack error");
      function P(e2) {
        e2 && 1 !== e2.status && (e2.status = 1, e2.forEach((e3) => e3.queueCount--), e2.forEach((e3) => e3.queueCount-- ? e3.queueCount++ : e3()));
      }
      l.a = function(e2, t2) {
        let r2 = this.m, n2 = t2 ? Object.assign([], { status: -1 }) : void 0, o2 = /* @__PURE__ */ new Set(), { resolve: u2, reject: l2, promise: i2 } = _(), a2 = Object.assign(i2, { [j]: r2.exports, [k]: (e3) => {
          n2 && e3(n2), o2.forEach(e3), a2.catch(() => {
          });
        } }), s2 = { get: () => a2, set(e3) {
          e3 !== a2 && (a2[j] = e3);
        } };
        Object.defineProperty(r2, "exports", s2), Object.defineProperty(r2, "namespaceObject", s2), e2(function(e3) {
          let t3 = e3.map((e4) => {
            if (null !== e4 && "object" == typeof e4) {
              if (k in e4) return e4;
              if (null != e4 && "object" == typeof e4 && "then" in e4 && "function" == typeof e4.then) {
                let t4 = Object.assign([], { status: 0 }), r4 = { [j]: {}, [k]: (e5) => e5(t4) };
                return e4.then((e5) => {
                  r4[j] = e5, P(t4);
                }, (e5) => {
                  r4[C] = e5, P(t4);
                }), r4;
              }
            }
            return { [j]: e4, [k]: () => {
            } };
          }), r3 = () => t3.map((e4) => {
            if (e4[C]) throw e4[C];
            return e4[j];
          }), { promise: u3, resolve: l3 } = _(), i3 = Object.assign(() => l3(r3), { queueCount: 0 });
          function a3(e4) {
            e4 !== n2 && !o2.has(e4) && (o2.add(e4), e4 && 0 === e4.status && (i3.queueCount++, e4.push(i3)));
          }
          return t3.map((e4) => e4[k](a3)), i3.queueCount ? u3 : r3();
        }, function(e3) {
          e3 ? l2(a2[C] = e3) : u2(a2[j]), P(n2);
        }), n2 && -1 === n2.status && (n2.status = 0);
      };
      let v = function(e2) {
        let t2 = new URL(e2, "x:/"), r2 = {};
        for (let e3 in t2) r2[e3] = t2[e3];
        for (let t3 in r2.href = e2, r2.pathname = e2.replace(/[?#].*/, ""), r2.origin = r2.protocol = "", r2.toString = r2.toJSON = (...t4) => e2, r2) Object.defineProperty(this, t3, { enumerable: true, configurable: true, value: r2[t3] });
      };
      function E(e2, t2) {
        throw Error(`Invariant: ${t2(e2)}`);
      }
      v.prototype = URL.prototype, l.U = v, l.z = function(e2) {
        throw Error("dynamic usage of require is not supported");
      }, l.g = globalThis;
      let U = u.prototype, R = /* @__PURE__ */ new Map();
      l.M = R;
      let M = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
      async function x(e2, t2, r2) {
        let n2;
        if ("string" == typeof r2) return A(e2, t2, q(r2));
        let o2 = r2.included || [], u2 = o2.map((e3) => !!R.has(e3) || M.get(e3));
        if (u2.length > 0 && u2.every((e3) => e3)) return void await Promise.all(u2);
        let l2 = r2.moduleChunks || [], i2 = l2.map((e3) => $.get(e3)).filter((e3) => e3);
        if (i2.length > 0) {
          if (i2.length === l2.length) return void await Promise.all(i2);
          let r3 = /* @__PURE__ */ new Set();
          for (let e3 of l2) $.has(e3) || r3.add(e3);
          for (let n3 of r3) {
            let r4 = A(e2, t2, q(n3));
            $.set(n3, r4), i2.push(r4);
          }
          n2 = Promise.all(i2);
        } else {
          for (let o3 of (n2 = A(e2, t2, q(r2.path)), l2)) $.has(o3) || $.set(o3, n2);
        }
        for (let e3 of o2) M.has(e3) || M.set(e3, n2);
        await n2;
      }
      U.l = function(e2) {
        return x(n.Parent, this.m.id, e2);
      };
      let T = Promise.resolve(void 0), S = /* @__PURE__ */ new WeakMap();
      function A(t2, r2, o2) {
        let u2 = e.loadChunkCached(t2, o2), l2 = S.get(u2);
        if (void 0 === l2) {
          let e2 = S.set.bind(S, u2, T);
          l2 = u2.then(e2).catch((e3) => {
            let u3;
            switch (t2) {
              case n.Runtime:
                u3 = `as a runtime dependency of chunk ${r2}`;
                break;
              case n.Parent:
                u3 = `from module ${r2}`;
                break;
              case n.Update:
                u3 = "from an HMR update";
                break;
              default:
                E(t2, (e4) => `Unknown source type: ${e4}`);
            }
            let l3 = Error(`Failed to load chunk ${o2} ${u3}${e3 ? `: ${e3}` : ""}`, e3 ? { cause: e3 } : void 0);
            throw l3.name = "ChunkLoadError", l3;
          }), S.set(u2, l2);
        }
        return l2;
      }
      function q(e2) {
        return `${e2.split("/").map((e3) => encodeURIComponent(e3)).join("/")}`;
      }
      U.L = function(e2) {
        return A(n.Parent, this.m.id, e2);
      }, U.R = function(e2) {
        let t2 = this.r(e2);
        return t2?.default ?? t2;
      }, U.P = function(e2) {
        return `/ROOT/${e2 ?? ""}`;
      }, U.q = function(e2, t2) {
        d.call(this, `${e2}`, t2);
      }, U.b = function(e2, r2, n2, o2) {
        let u2 = "SharedWorker" === e2.name, l2 = [n2.map((e3) => q(e3)).reverse(), ""];
        for (let e3 of t) l2.push(globalThis[e3]);
        let i2 = new URL(q(r2), location.origin), a2 = JSON.stringify(l2);
        return u2 ? i2.searchParams.set("params", a2) : i2.hash = "#params=" + encodeURIComponent(a2), new e2(i2, o2 ? { ...o2, type: void 0 } : void 0);
      };
      let N = /\.js(?:\?[^#]*)?(?:#.*)?$/;
      l.w = function(t2, r2, o2) {
        return e.loadWebAssembly(n.Parent, this.m.id, t2, r2, o2);
      }, l.u = function(t2, r2) {
        return e.loadWebAssemblyModule(n.Parent, this.m.id, t2, r2);
      };
      let I = {};
      l.c = I;
      let K = (e2, t2) => {
        let r2 = I[e2];
        if (r2) {
          if (r2.error) throw r2.error;
          return r2;
        }
        return L(e2, n.Parent, t2.id);
      };
      function L(e2, t2, r2) {
        let n2 = R.get(e2);
        if ("function" != typeof n2) throw Error(function(e3, t3, r3) {
          let n3;
          switch (t3) {
            case 0:
              n3 = `as a runtime entry of chunk ${r3}`;
              break;
            case 1:
              n3 = `because it was required from module ${r3}`;
              break;
            case 2:
              n3 = "because of an HMR update";
              break;
            default:
              E(t3, (e4) => `Unknown source type: ${e4}`);
          }
          return `Module ${e3} was instantiated ${n3}, but the module factory is not available.`;
        }(e2, t2, r2));
        let o2 = f(e2), l2 = o2.exports;
        I[e2] = o2;
        let i2 = new u(o2, l2);
        try {
          n2(i2, o2, l2);
        } catch (e3) {
          throw o2.error = e3, e3;
        }
        return o2.namespaceObject && o2.exports !== o2.namespaceObject && b(o2.exports, o2.namespaceObject), o2;
      }
      function W(t2) {
        let r2, n2 = function(e2) {
          if ("string" == typeof e2) return e2;
          if (e2) return { src: e2.getAttribute("src") };
          if ("u" > typeof TURBOPACK_NEXT_CHUNK_URLS) return { src: TURBOPACK_NEXT_CHUNK_URLS.pop() };
          throw Error("chunk path empty but not in a worker");
        }(t2[0]);
        return 2 === t2.length ? r2 = t2[1] : (r2 = void 0, !function(e2, t3) {
          let r3 = 1;
          for (; r3 < e2.length; ) {
            let n3, o2 = r3 + 1;
            for (; o2 < e2.length && "function" != typeof e2[o2]; ) o2++;
            if (o2 === e2.length) throw Error("malformed chunk format, expected a factory function");
            let u2 = e2[o2];
            for (let u3 = r3; u3 < o2; u3++) {
              let r4 = e2[u3], o3 = t3.get(r4);
              if (o3) {
                n3 = o3;
                break;
              }
            }
            let l2 = n3 ?? u2, i2 = false;
            for (let n4 = r3; n4 < o2; n4++) {
              let r4 = e2[n4];
              t3.has(r4) || (i2 || (l2 === u2 && Object.defineProperty(u2, "name", { value: "module evaluation" }), i2 = true), t3.set(r4, l2));
            }
            r3 = o2 + 1;
          }
        }(t2, R)), e.registerChunk(n2, r2);
      }
      function B(e2, t2, r2 = false) {
        let n2;
        try {
          n2 = t2();
        } catch (t3) {
          throw Error(`Failed to load external module ${e2}: ${t3}`);
        }
        return !r2 || n2.__esModule ? n2 : b(n2, y(n2), true);
      }
      l.y = async function(e2) {
        let t2;
        try {
          t2 = await import(e2);
        } catch (t3) {
          throw Error(`Failed to load external module ${e2}: ${t3}`);
        }
        return t2 && t2.__esModule && t2.default && "default" in t2.default ? b(t2.default, y(t2), true) : t2;
      }, B.resolve = (e2, t2) => __require.resolve(e2, t2), l.x = B, e = { registerChunk(e2, t2) {
        let r2 = function(e3) {
          if ("string" == typeof e3) return e3;
          let t3 = decodeURIComponent(e3.src.replace(/[?#].*$/, ""));
          return t3.startsWith("") ? t3.slice(0) : t3;
        }(e2);
        F.add(r2), function(e3) {
          let t3 = D.get(e3);
          if (null != t3) {
            for (let r3 of t3) r3.requiredChunks.delete(e3), 0 === r3.requiredChunks.size && X(r3.runtimeModuleIds, r3.chunkPath);
            D.delete(e3);
          }
        }(r2), null != t2 && (0 === t2.otherChunks.length ? X(t2.runtimeModuleIds, r2) : function(e3, t3, r3) {
          let n2 = /* @__PURE__ */ new Set(), o2 = { runtimeModuleIds: r3, chunkPath: e3, requiredChunks: n2 };
          for (let e4 of t3) {
            let t4 = O(e4);
            if (F.has(t4)) continue;
            n2.add(t4);
            let r4 = D.get(t4);
            null == r4 && (r4 = /* @__PURE__ */ new Set(), D.set(t4, r4)), r4.add(o2);
          }
          0 === o2.requiredChunks.size && X(o2.runtimeModuleIds, o2.chunkPath);
        }(r2, t2.otherChunks.filter((e3) => {
          var t3;
          return t3 = O(e3), N.test(t3);
        }), t2.runtimeModuleIds));
      }, loadChunkCached(e2, t2) {
        throw Error("chunk loading is not supported");
      }, async loadWebAssembly(e2, t2, r2, n2, o2) {
        let u2 = await H(r2, n2);
        return await WebAssembly.instantiate(u2, o2);
      }, loadWebAssemblyModule: async (e2, t2, r2, n2) => H(r2, n2) };
      let F = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map();
      function X(e2, t2) {
        for (let r2 of e2) !function(e3, t3) {
          let r3 = I[t3];
          if (r3) {
            if (r3.error) throw r3.error;
            return;
          }
          L(t3, n.Runtime, e3);
        }(t2, r2);
      }
      async function H(e2, t2) {
        let r2;
        try {
          r2 = t2();
        } catch (e3) {
        }
        if (!r2) throw Error(`dynamically loading WebAssembly is not supported in this runtime as global was not injected for chunk '${e2}'`);
        return r2;
      }
      let z = globalThis.TURBOPACK;
      globalThis.TURBOPACK = { push: W }, z.forEach(W);
    })();
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js
var edgeFunctionHandler_exports = {};
__export(edgeFunctionHandler_exports, {
  default: () => edgeFunctionHandler
});
async function edgeFunctionHandler(request) {
  const path3 = new URL(request.url).pathname;
  const routes = globalThis._ROUTES;
  const correspondingRoute = routes.find((route) => route.regex.some((r) => new RegExp(r).test(path3)));
  if (!correspondingRoute) {
    throw new Error(`No route found for ${request.url}`);
  }
  const entry = await self._ENTRIES[`middleware_${correspondingRoute.name}`];
  const result = await entry.default({
    page: correspondingRoute.page,
    request: {
      ...request,
      page: {
        name: correspondingRoute.name
      }
    }
  });
  globalThis.__openNextAls.getStore()?.pendingPromiseRunner.add(result.waitUntil);
  const response = result.response;
  return response;
}
var init_edgeFunctionHandler = __esm({
  "../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js"() {
    globalThis._ENTRIES = {};
    globalThis.self = globalThis;
    globalThis._ROUTES = [{ "name": "middleware", "page": "/", "regex": ["^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api\\/|_next\\/|i\\/|_static\\/|_vercel|edit|invite|new|new-api|assets|[\\w-]+\\.\\w+).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$"] }];
    require_root_of_the_server_0jv_o14();
    require_q_rmu9();
    require_node_modules_pnpm_0cze60p();
    require_y_next_dist_esm_build_templates_edge_wrapper_0gxqhyr();
    require_root_of_the_server_0u_y4l9();
    require_node_modules_pnpm_0_hdeb6();
    require_y_next_dist_esm_build_templates_edge_wrapper_10mb5bl();
  }
});

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/promise.js
init_logger();

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/requestCache.js
var RequestCache = class {
  _caches = /* @__PURE__ */ new Map();
  /**
   * Returns the Map registered under `key`.
   * If no Map exists yet for that key, a new empty Map is created, stored, and returned.
   * Repeated calls with the same key always return the **same** Map instance.
   */
  getOrCreate(key) {
    let cache = this._caches.get(key);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      this._caches.set(key, cache);
    }
    return cache;
  }
};

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/promise.js
var DetachedPromise = class {
  resolve;
  reject;
  promise;
  constructor() {
    let resolve;
    let reject;
    this.promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this.resolve = resolve;
    this.reject = reject;
  }
};
var DetachedPromiseRunner = class {
  promises = [];
  withResolvers() {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    return detachedPromise;
  }
  add(promise) {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    promise.then(detachedPromise.resolve, detachedPromise.reject);
  }
  async await() {
    debug(`Awaiting ${this.promises.length} detached promises`);
    const results = await Promise.allSettled(this.promises.map((p) => p.promise));
    const rejectedPromises = results.filter((r) => r.status === "rejected");
    rejectedPromises.forEach((r) => {
      error(r.reason);
    });
  }
};
async function awaitAllDetachedPromise() {
  const store = globalThis.__openNextAls.getStore();
  const promisesToAwait = store?.pendingPromiseRunner.await() ?? Promise.resolve();
  if (store?.waitUntil) {
    store.waitUntil(promisesToAwait);
    return;
  }
  await promisesToAwait;
}
function provideNextAfterProvider() {
  const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for("@next/request-context");
  const VERCEL_REQUEST_CONTEXT_SYMBOL = Symbol.for("@vercel/request-context");
  const store = globalThis.__openNextAls.getStore();
  const waitUntil = store?.waitUntil ?? ((promise) => store?.pendingPromiseRunner.add(promise));
  const nextAfterContext = {
    get: () => ({
      waitUntil
    })
  };
  globalThis[NEXT_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  if (process.env.EMULATE_VERCEL_REQUEST_CONTEXT) {
    globalThis[VERCEL_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  }
}
function runWithOpenNextRequestContext({ isISRRevalidation, waitUntil, requestId = Math.random().toString(36) }, fn) {
  return globalThis.__openNextAls.run({
    requestId,
    pendingPromiseRunner: new DetachedPromiseRunner(),
    isISRRevalidation,
    waitUntil,
    writtenTags: /* @__PURE__ */ new Set(),
    requestCache: new RequestCache()
  }, async () => {
    provideNextAfterProvider();
    let result;
    try {
      result = await fn();
    } finally {
      await awaitAllDetachedPromise();
    }
    return result;
  });
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/adapters/middleware.js
init_logger();

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
init_logger();

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/resolve.js
async function resolveConverter(converter2) {
  if (typeof converter2 === "function") {
    return converter2();
  }
  const m_1 = await Promise.resolve().then(() => (init_edge(), edge_exports));
  return m_1.default;
}
async function resolveWrapper(wrapper) {
  if (typeof wrapper === "function") {
    return wrapper();
  }
  const m_1 = await Promise.resolve().then(() => (init_cloudflare_edge(), cloudflare_edge_exports));
  return m_1.default;
}
async function resolveOriginResolver(originResolver) {
  if (typeof originResolver === "function") {
    return originResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_pattern_env(), pattern_env_exports));
  return m_1.default;
}
async function resolveAssetResolver(assetResolver) {
  if (typeof assetResolver === "function") {
    return assetResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_dummy(), dummy_exports));
  return m_1.default;
}
async function resolveProxyRequest(proxyRequest) {
  if (typeof proxyRequest === "function") {
    return proxyRequest();
  }
  const m_1 = await Promise.resolve().then(() => (init_fetch(), fetch_exports));
  return m_1.default;
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
async function createGenericHandler(handler3) {
  const config = await import("./open-next.config.mjs").then((m) => m.default);
  globalThis.openNextConfig = config;
  const handlerConfig = config[handler3.type];
  const override = handlerConfig && "override" in handlerConfig ? handlerConfig.override : void 0;
  const converter2 = await resolveConverter(override?.converter);
  const { name, wrapper } = await resolveWrapper(override?.wrapper);
  debug("Using wrapper", name);
  return wrapper(handler3.handler, converter2);
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/util.js
import crypto2 from "node:crypto";
import { parse as parseQs, stringify as stringifyQs } from "node:querystring";

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/adapters/config/index.js
init_logger();
import path from "node:path";
globalThis.__dirname ??= "";
var NEXT_DIR = path.join(__dirname, ".next");
var OPEN_NEXT_DIR = path.join(__dirname, ".open-next");
debug({ NEXT_DIR, OPEN_NEXT_DIR });
var NextConfig = { "env": {}, "webpack": null, "typescript": { "ignoreBuildErrors": false }, "typedRoutes": false, "distDir": ".next", "cleanDistDir": true, "assetPrefix": "", "cacheMaxMemorySize": 52428800, "configOrigin": "next.config.ts", "useFileSystemPublicRoutes": true, "generateEtags": true, "pageExtensions": ["js", "jsx", "mdx", "ts", "tsx"], "poweredByHeader": true, "compress": true, "images": { "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840], "imageSizes": [32, 48, 64, 96, 128, 256, 384], "path": "/_next/image", "loader": "default", "loaderFile": "", "domains": [], "disableStaticImages": false, "minimumCacheTTL": 14400, "formats": ["image/webp"], "maximumRedirects": 3, "maximumResponseBody": 5e7, "dangerouslyAllowLocalIP": false, "dangerouslyAllowSVG": false, "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;", "contentDispositionType": "attachment", "localPatterns": [{ "pathname": "**", "search": "" }], "remotePatterns": [{ "protocol": "https", "hostname": "cdn.dev.glow.as", "port": "" }, { "protocol": "https", "hostname": "cdn.glow.as", "port": "" }, { "protocol": "https", "hostname": "cdn.dev.lin.ky", "port": "" }, { "protocol": "https", "hostname": "cdn.lin.ky", "port": "" }, { "protocol": "https", "hostname": "*.r2.dev", "port": "" }, { "protocol": "https", "hostname": "*.itsabhinaba.in", "port": "" }], "qualities": [75], "unoptimized": false, "customCacheHandler": false }, "devIndicators": { "position": "bottom-left" }, "onDemandEntries": { "maxInactiveAge": 6e4, "pagesBufferLength": 5 }, "basePath": "", "sassOptions": { "silenceDeprecations": ["legacy-js-api"] }, "trailingSlash": false, "i18n": null, "productionBrowserSourceMaps": false, "excludeDefaultMomentLocales": true, "reactProductionProfiling": false, "reactStrictMode": null, "reactMaxHeadersLength": 6e3, "httpAgentOptions": { "keepAlive": true }, "logging": { "serverFunctions": true, "fetches": { "fullUrl": true, "hmrRefreshes": true }, "browserToTerminal": "warn" }, "compiler": {}, "expireTime": 31536e3, "staticPageGenerationTimeout": 60, "output": "standalone", "modularizeImports": { "@mui/icons-material": { "transform": "@mui/icons-material/{{member}}" }, "lodash": { "transform": "lodash/{{member}}" } }, "outputFileTracingRoot": "C:\\Users\\abhin\\Downloads\\Programming\\linky-opensource", "cacheComponents": false, "cacheLife": { "default": { "stale": 300, "revalidate": 900, "expire": 4294967294 }, "seconds": { "stale": 30, "revalidate": 1, "expire": 60 }, "minutes": { "stale": 300, "revalidate": 60, "expire": 3600 }, "hours": { "stale": 300, "revalidate": 3600, "expire": 86400 }, "days": { "stale": 300, "revalidate": 86400, "expire": 604800 }, "weeks": { "stale": 300, "revalidate": 604800, "expire": 2592e3 }, "max": { "stale": 300, "revalidate": 2592e3, "expire": 31536e3 } }, "cacheHandlers": {}, "experimental": { "appNewScrollHandler": false, "useSkewCookie": false, "cssChunking": true, "multiZoneDraftMode": false, "appNavFailHandling": false, "prerenderEarlyExit": true, "serverMinification": true, "linkNoTouchStart": false, "caseSensitiveRoutes": false, "cachedNavigations": false, "partialFallbacks": false, "dynamicOnHover": false, "varyParams": false, "prefetchInlining": false, "preloadEntriesOnStart": true, "clientRouterFilter": true, "clientRouterFilterRedirects": false, "fetchCacheKeyPrefix": "", "proxyPrefetch": "flexible", "optimisticClientCache": true, "manualClientBasePath": false, "cpus": 11, "memoryBasedWorkersCount": false, "imgOptConcurrency": null, "imgOptTimeoutInSeconds": 7, "imgOptMaxInputPixels": 268402689, "imgOptSequentialRead": null, "imgOptSkipMetadata": null, "isrFlushToDisk": true, "workerThreads": false, "optimizeCss": false, "nextScriptWorkers": false, "scrollRestoration": false, "externalDir": false, "disableOptimizedLoading": false, "gzipSize": true, "craCompat": false, "esmExternals": true, "fullySpecified": false, "swcTraceProfiling": false, "forceSwcTransforms": false, "largePageDataBytes": 128e3, "typedEnv": false, "parallelServerCompiles": false, "parallelServerBuildTraces": false, "ppr": false, "authInterrupts": false, "webpackMemoryOptimizations": false, "optimizeServerReact": true, "strictRouteTypes": false, "viewTransition": false, "removeUncaughtErrorAndRejectionListeners": false, "validateRSCRequestHeaders": false, "staleTimes": { "dynamic": 0, "static": 300 }, "reactDebugChannel": true, "serverComponentsHmrCache": true, "staticGenerationMaxConcurrency": 8, "staticGenerationMinPagesPerWorker": 25, "transitionIndicator": false, "gestureTransition": false, "inlineCss": false, "useCache": false, "globalNotFound": false, "browserDebugInfoInTerminal": "warn", "lockDistDir": true, "proxyClientMaxBodySize": 10485760, "hideLogsAfterAbort": false, "mcpServer": true, "turbopackFileSystemCacheForDev": true, "turbopackFileSystemCacheForBuild": false, "turbopackInferModuleSideEffects": true, "turbopackPluginRuntimeStrategy": "childProcesses", "optimizePackageImports": ["lucide-react", "date-fns", "lodash-es", "ramda", "antd", "react-bootstrap", "ahooks", "@ant-design/icons", "@headlessui/react", "@headlessui-float/react", "@heroicons/react/20/solid", "@heroicons/react/24/solid", "@heroicons/react/24/outline", "@visx/visx", "@tremor/react", "rxjs", "@mui/material", "@mui/icons-material", "recharts", "react-use", "effect", "@effect/schema", "@effect/platform", "@effect/platform-node", "@effect/platform-browser", "@effect/platform-bun", "@effect/sql", "@effect/sql-mssql", "@effect/sql-mysql2", "@effect/sql-pg", "@effect/sql-sqlite-node", "@effect/sql-sqlite-bun", "@effect/sql-sqlite-wasm", "@effect/sql-sqlite-react-native", "@effect/rpc", "@effect/rpc-http", "@effect/typeclass", "@effect/experimental", "@effect/opentelemetry", "@material-ui/core", "@material-ui/icons", "@tabler/icons-react", "mui-core", "react-icons/ai", "react-icons/bi", "react-icons/bs", "react-icons/cg", "react-icons/ci", "react-icons/di", "react-icons/fa", "react-icons/fa6", "react-icons/fc", "react-icons/fi", "react-icons/gi", "react-icons/go", "react-icons/gr", "react-icons/hi", "react-icons/hi2", "react-icons/im", "react-icons/io", "react-icons/io5", "react-icons/lia", "react-icons/lib", "react-icons/lu", "react-icons/md", "react-icons/pi", "react-icons/ri", "react-icons/rx", "react-icons/si", "react-icons/sl", "react-icons/tb", "react-icons/tfi", "react-icons/ti", "react-icons/vsc", "react-icons/wi"], "trustHostHeader": false, "isExperimentalCompile": false }, "htmlLimitedBots": "[\\w-]+-Google|Google-[\\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight", "bundlePagesRouterDependencies": false, "configFileName": "next.config.ts", "transpilePackages": ["@trylinky/ui", "@trylinky/common"], "serverExternalPackages": ["@prisma/client", ".prisma/client", "@prisma/adapter-d1", "@prisma/adapter-better-sqlite3", "better-sqlite3"], "turbopack": { "root": "C:\\Users\\abhin\\Downloads\\Programming\\linky-opensource" }, "distDirRoot": ".next", "_originalRewrites": { "beforeFiles": [], "afterFiles": [{ "source": "/", "destination": "http://localhost:3000/i" }, { "source": "/sitemap.xml", "destination": "http://localhost:3000/i/sitemap.xml" }, { "source": "/i/:path*", "destination": "http://localhost:3000/i/:path*" }], "fallback": [] }, "_originalRedirects": [{ "source": "/i/learn/what-is-glow", "destination": "/i/learn/what-is-linky", "permanent": true }, { "source": "/i/learn/is-glow-free", "destination": "/i/learn/is-linky-free", "permanent": true }] };
var BuildId = "cP6_7D476Mr4rK8oaGMn_";
var RoutesManifest = { "basePath": "", "rewrites": { "beforeFiles": [], "afterFiles": [{ "source": "/", "destination": "http://localhost:3000/i", "regex": "^/(?:/)?$" }, { "source": "/sitemap.xml", "destination": "http://localhost:3000/i/sitemap.xml", "regex": "^/sitemap\\.xml(?:/)?$" }, { "source": "/i/:path*", "destination": "http://localhost:3000/i/:path*", "regex": "^/i(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))?(?:/)?$" }], "fallback": [] }, "redirects": [{ "source": "/:path+/", "destination": "/:path+", "internal": true, "priority": true, "statusCode": 308, "regex": "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$" }, { "source": "/i/learn/what-is-glow", "destination": "/i/learn/what-is-linky", "statusCode": 308, "regex": "^(?!/_next)/i/learn/what-is-glow(?:/)?$" }, { "source": "/i/learn/is-glow-free", "destination": "/i/learn/is-linky-free", "statusCode": 308, "regex": "^(?!/_next)/i/learn/is-glow-free(?:/)?$" }], "routes": { "static": [{ "page": "/_global-error", "regex": "^/_global\\-error(?:/)?$", "routeKeys": {}, "namedRegex": "^/_global\\-error(?:/)?$" }, { "page": "/_not-found", "regex": "^/_not\\-found(?:/)?$", "routeKeys": {}, "namedRegex": "^/_not\\-found(?:/)?$" }, { "page": "/api/test-user-private-login", "regex": "^/api/test\\-user\\-private\\-login(?:/)?$", "routeKeys": {}, "namedRegex": "^/api/test\\-user\\-private\\-login(?:/)?$" }, { "page": "/api/user/location", "regex": "^/api/user/location(?:/)?$", "routeKeys": {}, "namedRegex": "^/api/user/location(?:/)?$" }, { "page": "/edit", "regex": "^/edit(?:/)?$", "routeKeys": {}, "namedRegex": "^/edit(?:/)?$" }, { "page": "/favicon.ico", "regex": "^/favicon\\.ico(?:/)?$", "routeKeys": {}, "namedRegex": "^/favicon\\.ico(?:/)?$" }, { "page": "/new", "regex": "^/new(?:/)?$", "routeKeys": {}, "namedRegex": "^/new(?:/)?$" }, { "page": "/robots.txt", "regex": "^/robots\\.txt(?:/)?$", "routeKeys": {}, "namedRegex": "^/robots\\.txt(?:/)?$" }], "dynamic": [{ "page": "/api/pages/[pageSlug]/opengraph-image", "regex": "^/api/pages/([^/]+?)/opengraph\\-image(?:/)?$", "routeKeys": { "nxtPpageSlug": "nxtPpageSlug" }, "namedRegex": "^/api/pages/(?<nxtPpageSlug>[^/]+?)/opengraph\\-image(?:/)?$" }, { "page": "/invite/[inviteId]", "regex": "^/invite/([^/]+?)(?:/)?$", "routeKeys": { "nxtPinviteId": "nxtPinviteId" }, "namedRegex": "^/invite/(?<nxtPinviteId>[^/]+?)(?:/)?$" }, { "page": "/[domain]/[slug]", "regex": "^/([^/]+?)/([^/]+?)(?:/)?$", "routeKeys": { "nxtPdomain": "nxtPdomain", "nxtPslug": "nxtPslug" }, "namedRegex": "^/(?<nxtPdomain>[^/]+?)/(?<nxtPslug>[^/]+?)(?:/)?$" }, { "page": "/[domain]/[slug]/opengraph-image", "regex": "^/([^/]+?)/([^/]+?)/opengraph\\-image(?:/)?$", "routeKeys": { "nxtPdomain": "nxtPdomain", "nxtPslug": "nxtPslug" }, "namedRegex": "^/(?<nxtPdomain>[^/]+?)/(?<nxtPslug>[^/]+?)/opengraph\\-image(?:/)?$" }], "data": { "static": [], "dynamic": [] } }, "locales": [] };
var ConfigHeaders = [];
var PrerenderManifest = { "version": 4, "routes": { "/_global-error": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/_global-error", "dataRoute": "/_global-error.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/favicon.ico": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico" }, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/favicon.ico", "dataRoute": null, "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/robots.txt": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "text/plain", "x-next-cache-tags": "_N_T_/layout,_N_T_/robots.txt/layout,_N_T_/robots.txt/route,_N_T_/robots.txt" }, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/robots.txt", "dataRoute": null, "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] } }, "dynamicRoutes": {}, "notFoundRoutes": [], "preview": { "previewModeId": "9db36bbe96d4e8c23841edc1305aac1e", "previewModeSigningKey": "c223346c03a3f653abfce8394817d2db72301a2678e0881bb95a5482d55cbd8e", "previewModeEncryptionKey": "fec2e0acd7d288caf27870479bef79402176c60900b5f758faf5df89ebc62073" } };
var MiddlewareManifest = { "version": 3, "middleware": { "/": { "files": ["server/edge/chunks/[root-of-the-server]__0jv-o14._.js", "server/edge/chunks/_0q~rmu9._.js", "server/edge/chunks/node_modules__pnpm_0cze60p._.js", "server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_0gxqhyr.js", "server/edge/chunks/[root-of-the-server]__0u.y4l9._.js", "server/edge/chunks/node_modules__pnpm_0_hdeb6._.js", "server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_10mb5bl.js"], "name": "middleware", "page": "/", "entrypoint": "server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_10mb5bl.js", "matchers": [{ "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api\\/|_next\\/|i\\/|_static\\/|_vercel|edit|invite|new|new-api|assets|[\\w-]+\\.\\w+).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$", "originalSource": "/((?!api/|_next/|i/|_static/|_vercel|edit|invite|new|new-api|assets|[\\w-]+\\.\\w+).*)" }], "wasm": [], "assets": [], "env": { "__NEXT_BUILD_ID": "cP6_7D476Mr4rK8oaGMn_", "NEXT_SERVER_ACTIONS_ENCRYPTION_KEY": "9CpzdlDR2rMN84sJ8n4syba0u2z8yyyk6w/KSAViMWA=", "__NEXT_PREVIEW_MODE_ID": "9db36bbe96d4e8c23841edc1305aac1e", "__NEXT_PREVIEW_MODE_ENCRYPTION_KEY": "fec2e0acd7d288caf27870479bef79402176c60900b5f758faf5df89ebc62073", "__NEXT_PREVIEW_MODE_SIGNING_KEY": "c223346c03a3f653abfce8394817d2db72301a2678e0881bb95a5482d55cbd8e" } } }, "sortedMiddleware": ["/"], "functions": { "/[domain]/[slug]/opengraph-image/route": { "files": ["server/edge/chunks/[root-of-the-server]__0jv-o14._.js", "server/edge/chunks/_0q~rmu9._.js", "server/edge/chunks/node_modules__pnpm_0cze60p._.js", "server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_0gxqhyr.js", "server/middleware-build-manifest.js", "server/interception-route-rewrite-manifest.js", "required-server-files.js", "server/server-reference-manifest.js", "server/app/[domain]/[slug]/opengraph-image/route_client-reference-manifest.js", "server/edge/chunks/09cj__next-internal_server_app_[domain]_[slug]_opengraph-image_route_actions_056bq4h.js", "server/edge/chunks/[root-of-the-server]__0jpaw0q._.js", "server/edge/chunks/_0rcm3_p._.js", "server/edge/chunks/0e89_next_dist_compiled_@vercel_og_11ug55_._.js", "server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_0zr7fyf.js"], "name": "app/[domain]/[slug]/opengraph-image/route", "page": "/[domain]/[slug]/opengraph-image/route", "entrypoint": "server/edge/chunks/126y_next_dist_esm_build_templates_edge-wrapper_0zr7fyf.js", "matchers": [{ "regexp": "^/(?P<nxtPdomain>[^/]+?)/(?P<nxtPslug>[^/]+?)/opengraph-image(?:/)?$", "originalSource": "/[domain]/[slug]/opengraph-image" }], "wasm": [{ "name": "wasm_10a187050363648b49a36c79d5266d2c", "filePath": "server/edge/chunks/0e89_next_dist_compiled_@vercel_og_yoga_0656eb_.wasm" }, { "name": "wasm_151b7f7b511bd6dda63695d2c75c87a3", "filePath": "server/edge/chunks/0e89_next_dist_compiled_@vercel_og_resvg_0656eb_.wasm" }], "assets": [{ "name": "server/edge/assets/SaansHeavy.0o7nyw9vlkrbw.ttf", "filePath": "server/edge/assets/SaansHeavy.0o7nyw9vlkrbw.ttf" }, { "name": "server/edge/assets/SaansRegular.002llja0mohcl.ttf", "filePath": "server/edge/assets/SaansRegular.002llja0mohcl.ttf" }, { "name": "server/edge/assets/Geist-Regular.01xk7kbsv57y-.ttf", "filePath": "server/edge/assets/Geist-Regular.01xk7kbsv57y-.ttf" }], "env": { "__NEXT_BUILD_ID": "cP6_7D476Mr4rK8oaGMn_", "NEXT_SERVER_ACTIONS_ENCRYPTION_KEY": "9CpzdlDR2rMN84sJ8n4syba0u2z8yyyk6w/KSAViMWA=", "__NEXT_PREVIEW_MODE_ID": "9db36bbe96d4e8c23841edc1305aac1e", "__NEXT_PREVIEW_MODE_ENCRYPTION_KEY": "fec2e0acd7d288caf27870479bef79402176c60900b5f758faf5df89ebc62073", "__NEXT_PREVIEW_MODE_SIGNING_KEY": "c223346c03a3f653abfce8394817d2db72301a2678e0881bb95a5482d55cbd8e" } } } };
var AppPathRoutesManifest = { "/[domain]/[slug]/opengraph-image/route": "/[domain]/[slug]/opengraph-image", "/[domain]/[slug]/page": "/[domain]/[slug]", "/_global-error/page": "/_global-error", "/_not-found/page": "/_not-found", "/api/pages/[pageSlug]/opengraph-image/route": "/api/pages/[pageSlug]/opengraph-image", "/api/test-user-private-login/page": "/api/test-user-private-login", "/api/user/location/route": "/api/user/location", "/edit/route": "/edit", "/favicon.ico/route": "/favicon.ico", "/invite/[inviteId]/page": "/invite/[inviteId]", "/new/page": "/new", "/robots.txt/route": "/robots.txt" };
var FunctionsConfigManifest = { "version": 1, "functions": { "/[domain]/[slug]/opengraph-image": {} } };
var PagesManifest = { "/500": "pages/500.html" };
process.env.NEXT_BUILD_ID = BuildId;
process.env.OPEN_NEXT_BUILD_ID = NextConfig.deploymentId ?? BuildId;
process.env.NEXT_PREVIEW_MODE_ID = PrerenderManifest?.preview?.previewModeId;

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/http/openNextResponse.js
init_logger();
init_util();
import { Transform } from "node:stream";

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/util.js
init_util();
init_logger();
import { ReadableStream as ReadableStream3 } from "node:stream/web";

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/binary.js
var commonBinaryMimeTypes = /* @__PURE__ */ new Set([
  "application/octet-stream",
  // Docs
  "application/epub+zip",
  "application/msword",
  "application/pdf",
  "application/rtf",
  "application/vnd.amazon.ebook",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // Fonts
  "font/otf",
  "font/woff",
  "font/woff2",
  // Images
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "image/vnd.microsoft.icon",
  "image/webp",
  // Audio
  "audio/3gpp",
  "audio/aac",
  "audio/basic",
  "audio/flac",
  "audio/mpeg",
  "audio/ogg",
  "audio/wavaudio/webm",
  "audio/x-aiff",
  "audio/x-midi",
  "audio/x-wav",
  // Video
  "video/3gpp",
  "video/mp2t",
  "video/mpeg",
  "video/ogg",
  "video/quicktime",
  "video/webm",
  "video/x-msvideo",
  // Archives
  "application/java-archive",
  "application/vnd.apple.installer+xml",
  "application/x-7z-compressed",
  "application/x-apple-diskimage",
  "application/x-bzip",
  "application/x-bzip2",
  "application/x-gzip",
  "application/x-java-archive",
  "application/x-rar-compressed",
  "application/x-tar",
  "application/x-zip",
  "application/zip",
  // Serialized data
  "application/x-protobuf"
]);
function isBinaryContentType(contentType) {
  if (!contentType)
    return false;
  const value = contentType.split(";")[0];
  return commonBinaryMimeTypes.has(value);
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
init_stream();
init_logger();

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/i18n/accept-header.js
function parse(raw, preferences, options) {
  const lowers = /* @__PURE__ */ new Map();
  const header = raw.replace(/[ \t]/g, "");
  if (preferences) {
    let pos = 0;
    for (const preference of preferences) {
      const lower = preference.toLowerCase();
      lowers.set(lower, { orig: preference, pos: pos++ });
      if (options.prefixMatch) {
        const parts2 = lower.split("-");
        while (parts2.pop(), parts2.length > 0) {
          const joined = parts2.join("-");
          if (!lowers.has(joined)) {
            lowers.set(joined, { orig: preference, pos: pos++ });
          }
        }
      }
    }
  }
  const parts = header.split(",");
  const selections = [];
  const map = /* @__PURE__ */ new Set();
  for (let i = 0; i < parts.length; ++i) {
    const part = parts[i];
    if (!part) {
      continue;
    }
    const params = part.split(";");
    if (params.length > 2) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const token = params[0].toLowerCase();
    if (!token) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const selection = { token, pos: i, q: 1 };
    if (preferences && lowers.has(token)) {
      selection.pref = lowers.get(token).pos;
    }
    map.add(selection.token);
    if (params.length === 2) {
      const q = params[1];
      const [key, value] = q.split("=");
      if (!value || key !== "q" && key !== "Q") {
        throw new Error(`Invalid ${options.type} header`);
      }
      const score = Number.parseFloat(value);
      if (score === 0) {
        continue;
      }
      if (Number.isFinite(score) && score <= 1 && score >= 1e-3) {
        selection.q = score;
      }
    }
    selections.push(selection);
  }
  selections.sort((a, b) => {
    if (b.q !== a.q) {
      return b.q - a.q;
    }
    if (b.pref !== a.pref) {
      if (a.pref === void 0) {
        return 1;
      }
      if (b.pref === void 0) {
        return -1;
      }
      return a.pref - b.pref;
    }
    return a.pos - b.pos;
  });
  const values = selections.map((selection) => selection.token);
  if (!preferences || !preferences.length) {
    return values;
  }
  const preferred = [];
  for (const selection of values) {
    if (selection === "*") {
      for (const [preference, value] of lowers) {
        if (!map.has(preference)) {
          preferred.push(value.orig);
        }
      }
    } else {
      const lower = selection.toLowerCase();
      if (lowers.has(lower)) {
        preferred.push(lowers.get(lower).orig);
      }
    }
  }
  return preferred;
}
function acceptLanguage(header = "", preferences) {
  return parse(header, preferences, {
    type: "accept-language",
    prefixMatch: true
  })[0] || void 0;
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
function isLocalizedPath(path3) {
  return NextConfig.i18n?.locales.includes(path3.split("/")[1].toLowerCase()) ?? false;
}
function getLocaleFromCookie(cookies) {
  const i18n = NextConfig.i18n;
  const nextLocale = cookies.NEXT_LOCALE?.toLowerCase();
  return nextLocale ? i18n?.locales.find((locale) => nextLocale === locale.toLowerCase()) : void 0;
}
function detectDomainLocale({ hostname, detectedLocale }) {
  const i18n = NextConfig.i18n;
  const domains = i18n?.domains;
  if (!domains) {
    return;
  }
  const lowercasedLocale = detectedLocale?.toLowerCase();
  for (const domain of domains) {
    const domainHostname = domain.domain.split(":", 1)[0].toLowerCase();
    if (hostname === domainHostname || lowercasedLocale === domain.defaultLocale.toLowerCase() || domain.locales?.some((locale) => lowercasedLocale === locale.toLowerCase())) {
      return domain;
    }
  }
}
function detectLocale(internalEvent, i18n) {
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  if (i18n.localeDetection === false) {
    return domainLocale?.defaultLocale ?? i18n.defaultLocale;
  }
  const cookiesLocale = getLocaleFromCookie(internalEvent.cookies);
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  debug({
    cookiesLocale,
    preferredLocale,
    defaultLocale: i18n.defaultLocale,
    domainLocale
  });
  return domainLocale?.defaultLocale ?? cookiesLocale ?? preferredLocale ?? i18n.defaultLocale;
}
function localizePath(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n) {
    return internalEvent.rawPath;
  }
  if (isLocalizedPath(internalEvent.rawPath)) {
    return internalEvent.rawPath;
  }
  const detectedLocale = detectLocale(internalEvent, i18n);
  return `/${detectedLocale}${internalEvent.rawPath}`;
}
function handleLocaleRedirect(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n || i18n.localeDetection === false || internalEvent.rawPath !== "/") {
    return false;
  }
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  const detectedLocale = detectLocale(internalEvent, i18n);
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  const preferredDomain = detectDomainLocale({
    detectedLocale: preferredLocale
  });
  if (domainLocale && preferredDomain) {
    const isPDomain = preferredDomain.domain === domainLocale.domain;
    const isPLocale = preferredDomain.defaultLocale === preferredLocale;
    if (!isPDomain || !isPLocale) {
      const scheme = `http${preferredDomain.http ? "" : "s"}`;
      const rlocale = isPLocale ? "" : preferredLocale;
      return {
        type: "core",
        statusCode: 307,
        headers: {
          Location: `${scheme}://${preferredDomain.domain}/${rlocale}`
        },
        body: emptyReadableStream(),
        isBase64Encoded: false
      };
    }
  }
  const defaultLocale = domainLocale?.defaultLocale ?? i18n.defaultLocale;
  if (detectedLocale.toLowerCase() !== defaultLocale.toLowerCase()) {
    const nextUrl = constructNextUrl(internalEvent.url, `/${detectedLocale}${NextConfig.trailingSlash ? "/" : ""}`);
    const queryString = convertToQueryString(internalEvent.query);
    return {
      type: "core",
      statusCode: 307,
      headers: {
        Location: `${nextUrl}${queryString}`
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/queue.js
function generateShardId(rawPath, maxConcurrency, prefix) {
  let a = cyrb128(rawPath);
  let t = a += 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  const randomFloat = ((t ^ t >>> 14) >>> 0) / 4294967296;
  const randomInt = Math.floor(randomFloat * maxConcurrency);
  return `${prefix}-${randomInt}`;
}
function generateMessageGroupId(rawPath) {
  const maxConcurrency = Number.parseInt(process.env.MAX_REVALIDATE_CONCURRENCY ?? "10");
  return generateShardId(rawPath, maxConcurrency, "revalidate");
}
function cyrb128(str) {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ h1 >>> 18, 597399067);
  h2 = Math.imul(h4 ^ h2 >>> 22, 2869860233);
  h3 = Math.imul(h1 ^ h3 >>> 17, 951274213);
  h4 = Math.imul(h2 ^ h4 >>> 19, 2716044179);
  h1 ^= h2 ^ h3 ^ h4, h2 ^= h1, h3 ^= h1, h4 ^= h1;
  return h1 >>> 0;
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/util.js
function isExternal(url, host) {
  if (!url)
    return false;
  const pattern = /^https?:\/\//;
  if (!pattern.test(url))
    return false;
  if (host) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.host !== host;
    } catch {
      return !url.includes(host);
    }
  }
  return true;
}
function convertFromQueryString(query) {
  if (query === "")
    return {};
  const queryParts = query.split("&");
  return getQueryFromIterator(queryParts.map((p) => {
    const [key, value] = p.split("=");
    return [key, value];
  }));
}
function getUrlParts(url, isExternal2) {
  if (!isExternal2) {
    const regex2 = /\/([^?]*)\??(.*)/;
    const match3 = url.match(regex2);
    return {
      hostname: "",
      pathname: match3?.[1] ? `/${match3[1]}` : url,
      protocol: "",
      queryString: match3?.[2] ?? ""
    };
  }
  const regex = /^(https?:)\/\/?([^\/\s]+)(\/[^?]*)?(\?.*)?/;
  const match2 = url.match(regex);
  if (!match2) {
    throw new Error(`Invalid external URL: ${url}`);
  }
  return {
    protocol: match2[1] ?? "https:",
    hostname: match2[2],
    pathname: match2[3] ?? "",
    queryString: match2[4]?.slice(1) ?? ""
  };
}
function constructNextUrl(baseUrl, path3) {
  const nextBasePath = NextConfig.basePath ?? "";
  const url = new URL(`${nextBasePath}${path3}`, baseUrl);
  return url.href;
}
function convertToQueryString(query) {
  const queryStrings = [];
  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((entry) => queryStrings.push(`${key}=${entry}`));
    } else {
      queryStrings.push(`${key}=${value}`);
    }
  });
  return queryStrings.length > 0 ? `?${queryStrings.join("&")}` : "";
}
function getMiddlewareMatch(middlewareManifest2, functionsManifest) {
  if (functionsManifest?.functions?.["/_middleware"]) {
    return functionsManifest.functions["/_middleware"].matchers?.map(({ regexp }) => new RegExp(regexp)) ?? [/.*/];
  }
  const rootMiddleware = middlewareManifest2.middleware["/"];
  if (!rootMiddleware?.matchers)
    return [];
  return rootMiddleware.matchers.map(({ regexp }) => new RegExp(regexp));
}
function escapeRegex(str, { isPath } = {}) {
  const result = str.replaceAll("(.)", "_\xB51_").replaceAll("(..)", "_\xB52_").replaceAll("(...)", "_\xB53_");
  return isPath ? result : result.replaceAll("+", "_\xB54_");
}
function unescapeRegex(str) {
  return str.replaceAll("_\xB51_", "(.)").replaceAll("_\xB52_", "(..)").replaceAll("_\xB53_", "(...)").replaceAll("_\xB54_", "+");
}
function convertBodyToReadableStream(method, body) {
  if (method === "GET" || method === "HEAD")
    return void 0;
  if (!body)
    return void 0;
  return new ReadableStream3({
    start(controller) {
      controller.enqueue(body);
      controller.close();
    }
  });
}
var CommonHeaders;
(function(CommonHeaders2) {
  CommonHeaders2["CACHE_CONTROL"] = "cache-control";
  CommonHeaders2["NEXT_CACHE"] = "x-nextjs-cache";
})(CommonHeaders || (CommonHeaders = {}));
function normalizeLocationHeader(location2, baseUrl, encodeQuery = false) {
  if (!URL.canParse(location2)) {
    return location2;
  }
  const locationURL = new URL(location2);
  const origin = new URL(baseUrl).origin;
  let search = locationURL.search;
  if (encodeQuery && search) {
    search = `?${stringifyQs(parseQs(search.slice(1)))}`;
  }
  const href = `${locationURL.origin}${locationURL.pathname}${search}${locationURL.hash}`;
  if (locationURL.origin === origin) {
    return href.slice(origin.length);
  }
  return href;
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routingHandler.js
init_logger();

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
import { createHash } from "node:crypto";
init_stream();

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/cache.js
init_logger();

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/semver.js
function compareSemver(v1, operator, v2) {
  let versionDiff = 0;
  if (v1 === "latest") {
    versionDiff = 1;
  } else {
    if (/^[^\d]/.test(v1)) {
      v1 = v1.substring(1);
    }
    if (/^[^\d]/.test(v2)) {
      v2 = v2.substring(1);
    }
    const [major1, minor1 = 0, patch1 = 0] = v1.split(".").map(Number);
    const [major2, minor2 = 0, patch2 = 0] = v2.split(".").map(Number);
    if (Number.isNaN(major1) || Number.isNaN(major2)) {
      throw new Error("The major version is required.");
    }
    if (major1 !== major2) {
      versionDiff = major1 - major2;
    } else if (minor1 !== minor2) {
      versionDiff = minor1 - minor2;
    } else if (patch1 !== patch2) {
      versionDiff = patch1 - patch2;
    }
  }
  switch (operator) {
    case "=":
      return versionDiff === 0;
    case ">=":
      return versionDiff >= 0;
    case "<=":
      return versionDiff <= 0;
    case ">":
      return versionDiff > 0;
    case "<":
      return versionDiff < 0;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/cache.js
async function isStale(key, tags, lastModified) {
  if (!compareSemver(globalThis.nextVersion, ">=", "16.0.0")) {
    return false;
  }
  if (globalThis.openNextConfig.dangerous?.disableTagCache) {
    return false;
  }
  if (globalThis.tagCache.mode === "nextMode") {
    return tags.length === 0 ? false : await globalThis.tagCache.isStale?.(tags, lastModified) ?? false;
  }
  return await globalThis.tagCache.isStale?.(key, lastModified) ?? false;
}
async function hasBeenRevalidated(key, tags, cacheEntry) {
  if (globalThis.openNextConfig.dangerous?.disableTagCache) {
    return false;
  }
  const value = cacheEntry.value;
  if (!value) {
    return true;
  }
  if ("type" in cacheEntry && cacheEntry.type === "page") {
    return false;
  }
  const lastModified = cacheEntry.lastModified ?? Date.now();
  if (globalThis.tagCache.mode === "nextMode") {
    return tags.length === 0 ? false : await globalThis.tagCache.hasBeenRevalidated(tags, lastModified);
  }
  const _lastModified = await globalThis.tagCache.getLastModified(key, lastModified);
  return _lastModified === -1;
}
function getTagsFromValue(value) {
  if (!value) {
    return [];
  }
  try {
    const cacheTags = value.meta?.headers?.["x-next-cache-tags"]?.split(",") ?? [];
    delete value.meta?.headers?.["x-next-cache-tags"];
    return cacheTags;
  } catch (e) {
    return [];
  }
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
init_logger();
var CACHE_ONE_YEAR = 60 * 60 * 24 * 365;
var CACHE_ONE_MONTH = 60 * 60 * 24 * 30;
var VARY_HEADER = "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Next-Url";
var NEXT_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
var NEXT_PRERENDER_HEADER = "x-nextjs-prerender";
var NEXT_POSTPONED_HEADER = "x-nextjs-postponed";
async function computeCacheControl(path3, body, host, revalidate, lastModified, isStaleFromTagCache = false) {
  let finalRevalidate = CACHE_ONE_YEAR;
  const existingRoute = Object.entries(PrerenderManifest?.routes ?? {}).find((p) => p[0] === path3)?.[1];
  if (revalidate === void 0 && existingRoute) {
    finalRevalidate = existingRoute.initialRevalidateSeconds === false ? CACHE_ONE_YEAR : existingRoute.initialRevalidateSeconds;
  } else if (revalidate !== void 0) {
    finalRevalidate = revalidate === false ? CACHE_ONE_YEAR : revalidate;
  }
  const age = Math.round((Date.now() - (lastModified ?? 0)) / 1e3);
  const hash = (str) => createHash("md5").update(str).digest("hex");
  const etag = hash(body);
  if (revalidate === 0) {
    return {
      "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "x-opennext-cache": "ERROR",
      etag
    };
  }
  const isSSG = finalRevalidate === CACHE_ONE_YEAR;
  const remainingTtl = Math.max(finalRevalidate - age, 1);
  const isStaleFromTime = !isSSG && remainingTtl === 1;
  const isStale2 = isStaleFromTime || isStaleFromTagCache;
  if (!isSSG || isStaleFromTagCache) {
    const sMaxAge = isStaleFromTagCache ? 1 : remainingTtl;
    debug("sMaxAge", {
      finalRevalidate,
      age,
      lastModified,
      revalidate,
      isStaleFromTagCache
    });
    if (isStale2) {
      let url = NextConfig.trailingSlash ? `${path3}/` : path3;
      if (NextConfig.basePath) {
        url = `${NextConfig.basePath}${url}`;
      }
      await globalThis.queue.send({
        MessageBody: {
          host,
          url,
          eTag: etag,
          lastModified: lastModified ?? Date.now()
        },
        MessageDeduplicationId: hash(`${path3}-${lastModified}-${etag}`),
        MessageGroupId: generateMessageGroupId(path3)
      });
    }
    return {
      "cache-control": `s-maxage=${sMaxAge}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
      "x-opennext-cache": isStale2 ? "STALE" : "HIT",
      etag
    };
  }
  return {
    "cache-control": `s-maxage=${CACHE_ONE_YEAR}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
    "x-opennext-cache": "HIT",
    etag
  };
}
function getBodyForAppRouter(event, cachedValue) {
  if (cachedValue.type !== "app") {
    throw new Error("getBodyForAppRouter called with non-app cache value");
  }
  try {
    const segmentHeader = `${event.headers[NEXT_SEGMENT_PREFETCH_HEADER]}`;
    const isSegmentResponse = Boolean(segmentHeader) && segmentHeader in (cachedValue.segmentData || {}) && !NextConfig.experimental?.prefetchInlining;
    const body = isSegmentResponse ? cachedValue.segmentData[segmentHeader] : cachedValue.rsc;
    return {
      body,
      additionalHeaders: isSegmentResponse ? { [NEXT_PRERENDER_HEADER]: "1", [NEXT_POSTPONED_HEADER]: "2" } : {}
    };
  } catch (e) {
    error("Error while getting body for app router from cache:", e);
    return { body: cachedValue.rsc, additionalHeaders: {} };
  }
}
async function generateResult(event, localizedPath, cachedValue, lastModified, isStaleFromTagCache = false) {
  debug("Returning result from experimental cache");
  let body = "";
  let type = "application/octet-stream";
  let isDataRequest = false;
  let additionalHeaders = {};
  if (cachedValue.type === "app") {
    isDataRequest = event.headers.rsc === "1";
    if (isDataRequest) {
      const { body: appRouterBody, additionalHeaders: appHeaders } = getBodyForAppRouter(event, cachedValue);
      body = appRouterBody;
      additionalHeaders = appHeaders;
    } else {
      body = cachedValue.html;
    }
    type = isDataRequest ? "text/x-component" : "text/html; charset=utf-8";
  } else if (cachedValue.type === "page") {
    isDataRequest = Boolean(event.query.__nextDataReq);
    body = isDataRequest ? JSON.stringify(cachedValue.json) : cachedValue.html;
    type = isDataRequest ? "application/json" : "text/html; charset=utf-8";
  } else {
    throw new Error("generateResult called with unsupported cache value type, only 'app' and 'page' are supported");
  }
  const cacheControl = await computeCacheControl(localizedPath, body, event.headers.host, cachedValue.revalidate, lastModified, isStaleFromTagCache);
  return {
    type: "core",
    // Sometimes other status codes can be cached, like 404. For these cases, we should return the correct status code
    // Also set the status code to the rewriteStatusCode if defined
    // This can happen in handleMiddleware in routingHandler.
    // `NextResponse.rewrite(url, { status: xxx})
    // The rewrite status code should take precedence over the cached one
    statusCode: event.rewriteStatusCode ?? cachedValue.meta?.status ?? 200,
    body: toReadableStream(body, false),
    isBase64Encoded: false,
    headers: {
      ...cacheControl,
      "content-type": type,
      ...cachedValue.meta?.headers,
      vary: VARY_HEADER,
      ...additionalHeaders
    }
  };
}
function escapePathDelimiters(segment, escapeEncoded) {
  return segment.replace(new RegExp(`([/#?]${escapeEncoded ? "|%(2f|23|3f|5c)" : ""})`, "gi"), (char) => encodeURIComponent(char));
}
function decodePathParams(pathname) {
  return pathname.split("/").map((segment) => {
    try {
      return escapePathDelimiters(decodeURIComponent(segment), true);
    } catch (e) {
      return segment;
    }
  }).join("/");
}
async function cacheInterceptor(event) {
  if (Boolean(event.headers["next-action"]) || Boolean(event.headers["x-prerender-revalidate"]))
    return event;
  const cookies = event.headers.cookie || "";
  const hasPreviewData = cookies.includes("__prerender_bypass") || cookies.includes("__next_preview_data");
  if (hasPreviewData) {
    debug("Preview mode detected, passing through to handler");
    return event;
  }
  let localizedPath = localizePath(event);
  if (NextConfig.basePath) {
    localizedPath = localizedPath.replace(NextConfig.basePath, "");
  }
  localizedPath = localizedPath.replace(/\/$/, "");
  localizedPath = decodePathParams(localizedPath);
  debug("Checking cache for", localizedPath, PrerenderManifest);
  const isISR = Object.keys(PrerenderManifest?.routes ?? {}).includes(localizedPath ?? "/") || Object.values(PrerenderManifest?.dynamicRoutes ?? {}).some((dr) => new RegExp(dr.routeRegex).test(localizedPath));
  debug("isISR", isISR);
  if (isISR) {
    try {
      const cachedData = await globalThis.incrementalCache.get(localizedPath ?? "/index");
      debug("cached data in interceptor", cachedData);
      if (!cachedData?.value) {
        return event;
      }
      const tags = getTagsFromValue(cachedData.value);
      if (cachedData.value?.type === "app" || cachedData.value?.type === "route") {
        const _hasBeenRevalidated = cachedData.shouldBypassTagCache ? false : await hasBeenRevalidated(localizedPath, tags, cachedData);
        if (_hasBeenRevalidated) {
          return event;
        }
      }
      const _isStale = cachedData.shouldBypassTagCache ? false : await isStale(localizedPath, tags, cachedData.lastModified ?? Date.now());
      const host = event.headers.host;
      switch (cachedData?.value?.type) {
        case "app":
        case "page":
          return generateResult(event, localizedPath, cachedData.value, cachedData.lastModified, _isStale);
        case "redirect": {
          const cacheControl = await computeCacheControl(localizedPath, "", host, cachedData.value.revalidate, cachedData.lastModified, _isStale);
          return {
            type: "core",
            statusCode: cachedData.value.meta?.status ?? 307,
            body: emptyReadableStream(),
            headers: {
              ...cachedData.value.meta?.headers ?? {},
              ...cacheControl
            },
            isBase64Encoded: false
          };
        }
        case "route": {
          const cacheControl = await computeCacheControl(localizedPath, cachedData.value.body, host, cachedData.value.revalidate, cachedData.lastModified, _isStale);
          const isBinary = isBinaryContentType(String(cachedData.value.meta?.headers?.["content-type"]));
          return {
            type: "core",
            statusCode: event.rewriteStatusCode ?? cachedData.value.meta?.status ?? 200,
            body: toReadableStream(cachedData.value.body, isBinary),
            headers: {
              ...cacheControl,
              ...cachedData.value.meta?.headers,
              vary: VARY_HEADER
            },
            isBase64Encoded: isBinary
          };
        }
        default:
          return event;
      }
    } catch (e) {
      debug("Error while fetching cache", e);
      return event;
    }
  }
  return event;
}

// ../../node_modules/.pnpm/path-to-regexp@6.3.0/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path3 = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  var isSafe = function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  };
  var safePattern = function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path3 += prefix;
        prefix = "";
      }
      if (path3) {
        result.push(path3);
        path3 = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path3 += value;
      continue;
    }
    if (path3) {
      result.push(path3);
      path3 = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path3 = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path3 += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path3 += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path3 += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path3;
  };
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path3 = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path: path3, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path3, keys) {
  if (!keys)
    return path3;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path3.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path3.source);
  }
  return path3;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path3) {
    return pathToRegexp(path3, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path3, keys, options) {
  return tokensToRegexp(parse2(path3, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path3, keys, options) {
  if (path3 instanceof RegExp)
    return regexpToRegexp(path3, keys);
  if (Array.isArray(path3))
    return arrayToRegexp(path3, keys, options);
  return stringToRegexp(path3, keys, options);
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/utils/normalize-path.js
import path2 from "node:path";
function normalizeRepeatedSlashes(url) {
  const urlNoQuery = url.host + url.pathname;
  return `${url.protocol}//${urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/")}${url.search}`;
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/matcher.js
init_stream();
init_logger();

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/routeMatcher.js
var optionalLocalePrefixRegex = `^/(?:${RoutesManifest.locales.map((locale) => `${locale}/?`).join("|")})?`;
var optionalBasepathPrefixRegex = RoutesManifest.basePath ? `^${RoutesManifest.basePath}/?` : "^/";
var optionalPrefix = optionalLocalePrefixRegex.replace("^/", optionalBasepathPrefixRegex);
function routeMatcher(routeDefinitions) {
  const regexp = routeDefinitions.map((route) => ({
    page: route.page,
    regexp: new RegExp(route.regex.replace("^/", optionalPrefix))
  }));
  const appPathsSet = /* @__PURE__ */ new Set();
  const routePathsSet = /* @__PURE__ */ new Set();
  for (const [k, v] of Object.entries(AppPathRoutesManifest)) {
    if (k.endsWith("page")) {
      appPathsSet.add(v);
    } else if (k.endsWith("route")) {
      routePathsSet.add(v);
    }
  }
  return function matchRoute(path3) {
    const foundRoutes = regexp.filter((route) => route.regexp.test(path3));
    return foundRoutes.map((foundRoute) => {
      let routeType = "page";
      if (appPathsSet.has(foundRoute.page)) {
        routeType = "app";
      } else if (routePathsSet.has(foundRoute.page)) {
        routeType = "route";
      }
      return {
        route: foundRoute.page,
        type: routeType
      };
    });
  };
}
var staticRouteMatcher = routeMatcher([
  ...RoutesManifest.routes.static,
  ...getStaticAPIRoutes()
]);
var dynamicRouteMatcher = routeMatcher(RoutesManifest.routes.dynamic);
function getStaticAPIRoutes() {
  const createRouteDefinition = (route) => ({
    page: route,
    regex: `^${route}(?:/)?$`
  });
  const dynamicRoutePages = new Set(RoutesManifest.routes.dynamic.map(({ page }) => page));
  const pagesStaticAPIRoutes = Object.keys(PagesManifest).filter((route) => route.startsWith("/api/") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  const appPathsStaticAPIRoutes = Object.values(AppPathRoutesManifest).filter((route) => (route.startsWith("/api/") || route === "/api") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  return [...pagesStaticAPIRoutes, ...appPathsStaticAPIRoutes];
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/matcher.js
var routeHasMatcher = (headers, cookies, query) => (redirect) => {
  switch (redirect.type) {
    case "header":
      return !!headers?.[redirect.key.toLowerCase()] && new RegExp(redirect.value ?? "").test(headers[redirect.key.toLowerCase()] ?? "");
    case "cookie":
      return !!cookies?.[redirect.key] && new RegExp(redirect.value ?? "").test(cookies[redirect.key] ?? "");
    case "query":
      return query[redirect.key] && Array.isArray(redirect.value) ? redirect.value.reduce((prev, current) => prev || new RegExp(current).test(query[redirect.key]), false) : new RegExp(redirect.value ?? "").test(query[redirect.key] ?? "");
    case "host":
      return headers?.host !== "" && new RegExp(redirect.value ?? "").test(headers.host);
    default:
      return false;
  }
};
function checkHas(matcher, has, inverted = false) {
  return has ? has.reduce((acc, cur) => {
    if (acc === false)
      return false;
    return inverted ? !matcher(cur) : matcher(cur);
  }, true) : true;
}
var getParamsFromSource = (source) => (value) => {
  debug("value", value);
  const _match = source(value);
  return _match ? _match.params : {};
};
var computeParamHas = (headers, cookies, query) => (has) => {
  if (!has.value)
    return {};
  const matcher = new RegExp(`^${has.value}$`);
  const fromSource = (value) => {
    const matches = value.match(matcher);
    return matches?.groups ?? {};
  };
  switch (has.type) {
    case "header":
      return fromSource(headers[has.key.toLowerCase()] ?? "");
    case "cookie":
      return fromSource(cookies[has.key] ?? "");
    case "query":
      return Array.isArray(query[has.key]) ? fromSource(query[has.key].join(",")) : fromSource(query[has.key] ?? "");
    case "host":
      return fromSource(headers.host ?? "");
  }
};
function convertMatch(match2, toDestination, destination) {
  if (!match2) {
    return destination;
  }
  const { params } = match2;
  const isUsingParams = Object.keys(params).length > 0;
  return isUsingParams ? toDestination(params) : destination;
}
function getNextConfigHeaders(event, configHeaders) {
  if (!configHeaders) {
    return {};
  }
  const matcher = routeHasMatcher(event.headers, event.cookies, event.query);
  const requestHeaders = {};
  const localizedRawPath = localizePath(event);
  for (const { headers, has, missing, regex, source, locale } of configHeaders) {
    const path3 = locale === false ? event.rawPath : localizedRawPath;
    if (new RegExp(regex).test(path3) && checkHas(matcher, has) && checkHas(matcher, missing, true)) {
      const fromSource = match(source);
      const _match = fromSource(path3);
      headers.forEach((h) => {
        try {
          const key = convertMatch(_match, compile(h.key), h.key);
          const value = convertMatch(_match, compile(h.value), h.value);
          requestHeaders[key] = value;
        } catch {
          debug(`Error matching header ${h.key} with value ${h.value}`);
          requestHeaders[h.key] = h.value;
        }
      });
    }
  }
  return requestHeaders;
}
function handleRewrites(event, rewrites) {
  const { rawPath, headers, query, cookies, url } = event;
  const localizedRawPath = localizePath(event);
  const matcher = routeHasMatcher(headers, cookies, query);
  const computeHas = computeParamHas(headers, cookies, query);
  const rewrite = rewrites.find((route) => {
    const path3 = route.locale === false ? rawPath : localizedRawPath;
    return new RegExp(route.regex).test(path3) && checkHas(matcher, route.has) && checkHas(matcher, route.missing, true);
  });
  let finalQuery = query;
  let rewrittenUrl = url;
  const isExternalRewrite = isExternal(rewrite?.destination);
  debug("isExternalRewrite", isExternalRewrite);
  if (rewrite) {
    const { pathname, protocol, hostname, queryString } = getUrlParts(rewrite.destination, isExternalRewrite);
    const pathToUse = rewrite.locale === false ? rawPath : localizedRawPath;
    debug("urlParts", { pathname, protocol, hostname, queryString });
    const toDestinationPath = compile(escapeRegex(pathname, { isPath: true }));
    const toDestinationHost = compile(escapeRegex(hostname));
    const toDestinationQuery = compile(escapeRegex(queryString));
    const params = {
      // params for the source
      ...getParamsFromSource(match(escapeRegex(rewrite.source, { isPath: true })))(pathToUse),
      // params for the has
      ...rewrite.has?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {}),
      // params for the missing
      ...rewrite.missing?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {})
    };
    const isUsingParams = Object.keys(params).length > 0;
    let rewrittenQuery = queryString;
    let rewrittenHost = hostname;
    let rewrittenPath = pathname;
    if (isUsingParams) {
      rewrittenPath = unescapeRegex(toDestinationPath(params));
      rewrittenHost = unescapeRegex(toDestinationHost(params));
      rewrittenQuery = unescapeRegex(toDestinationQuery(params));
    }
    if (NextConfig.i18n && !isExternalRewrite) {
      const strippedPathLocale = rewrittenPath.replace(new RegExp(`^/(${NextConfig.i18n.locales.join("|")})`), "");
      if (strippedPathLocale.startsWith("/api/")) {
        rewrittenPath = strippedPathLocale;
      }
    }
    rewrittenUrl = isExternalRewrite ? `${protocol}//${rewrittenHost}${rewrittenPath}` : new URL(rewrittenPath, event.url).href;
    finalQuery = {
      ...query,
      ...convertFromQueryString(rewrittenQuery)
    };
    rewrittenUrl += convertToQueryString(finalQuery);
    debug("rewrittenUrl", { rewrittenUrl, finalQuery, isUsingParams });
  }
  return {
    internalEvent: {
      ...event,
      query: finalQuery,
      rawPath: new URL(rewrittenUrl).pathname,
      url: rewrittenUrl
    },
    __rewrite: rewrite,
    isExternalRewrite
  };
}
function handleRepeatedSlashRedirect(event) {
  if (event.rawPath.match(/(\\|\/\/)/)) {
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: normalizeRepeatedSlashes(new URL(event.url))
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}
function handleTrailingSlashRedirect(event) {
  const url = new URL(event.rawPath, "http://localhost");
  if (
    // Someone is trying to redirect to a different origin, let's not do that
    url.host !== "localhost" || NextConfig.skipTrailingSlashRedirect || // We should not apply trailing slash redirect to API routes
    event.rawPath.startsWith("/api/")
  ) {
    return false;
  }
  const emptyBody = emptyReadableStream();
  if (NextConfig.trailingSlash && !(event.query.__nextDataReq === "1") && !event.rawPath.endsWith("/") && !event.rawPath.match(/[\w-]+\.[\w]+$/g)) {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0]}/${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  if (!NextConfig.trailingSlash && event.rawPath.endsWith("/") && event.rawPath !== "/") {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0].replace(/\/$/, "")}${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  return false;
}
function handleRedirects(event, redirects) {
  const repeatedSlashRedirect = handleRepeatedSlashRedirect(event);
  if (repeatedSlashRedirect)
    return repeatedSlashRedirect;
  const trailingSlashRedirect = handleTrailingSlashRedirect(event);
  if (trailingSlashRedirect)
    return trailingSlashRedirect;
  const localeRedirect = handleLocaleRedirect(event);
  if (localeRedirect)
    return localeRedirect;
  const { internalEvent, __rewrite } = handleRewrites(event, redirects.filter((r) => !r.internal));
  if (__rewrite && !__rewrite.internal) {
    return {
      type: event.type,
      statusCode: __rewrite.statusCode ?? 308,
      headers: {
        Location: internalEvent.url
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
}
function fixDataPage(internalEvent, buildId) {
  const { rawPath, query } = internalEvent;
  const basePath = NextConfig.basePath ?? "";
  const dataPattern = `${basePath}/_next/data/${buildId}`;
  if (rawPath.startsWith("/_next/data") && !rawPath.startsWith(dataPattern)) {
    return {
      type: internalEvent.type,
      statusCode: 404,
      body: toReadableStream("{}"),
      headers: {
        "Content-Type": "application/json"
      },
      isBase64Encoded: false
    };
  }
  if (rawPath.startsWith(dataPattern) && rawPath.endsWith(".json")) {
    const newPath = `${basePath}${rawPath.slice(dataPattern.length, -".json".length).replace(/^\/index$/, "/")}`;
    query.__nextDataReq = "1";
    return {
      ...internalEvent,
      rawPath: newPath,
      query,
      url: new URL(`${newPath}${convertToQueryString(query)}`, internalEvent.url).href
    };
  }
  return internalEvent;
}
function handleFallbackFalse(internalEvent, prerenderManifest) {
  const { rawPath } = internalEvent;
  const { dynamicRoutes = {}, routes = {} } = prerenderManifest ?? {};
  const prerenderedFallbackRoutes = Object.entries(dynamicRoutes).filter(([, { fallback }]) => fallback === false);
  const routeFallback = prerenderedFallbackRoutes.some(([, { routeRegex }]) => {
    const routeRegexExp = new RegExp(routeRegex);
    return routeRegexExp.test(rawPath);
  });
  const locales = NextConfig.i18n?.locales;
  const routesAlreadyHaveLocale = locales?.includes(rawPath.split("/")[1]) || // If we don't use locales, we don't need to add the default locale
  locales === void 0;
  let localizedPath = routesAlreadyHaveLocale ? rawPath : `/${NextConfig.i18n?.defaultLocale}${rawPath}`;
  if (
    // Not if localizedPath is "/" tho, because that would not make it find `isPregenerated` below since it would be try to match an empty string.
    localizedPath !== "/" && NextConfig.trailingSlash && localizedPath.endsWith("/")
  ) {
    localizedPath = localizedPath.slice(0, -1);
  }
  const matchedStaticRoute = staticRouteMatcher(localizedPath);
  const prerenderedFallbackRoutesName = prerenderedFallbackRoutes.map(([name]) => name);
  const matchedDynamicRoute = dynamicRouteMatcher(localizedPath).filter(({ route }) => !prerenderedFallbackRoutesName.includes(route));
  const isPregenerated = Object.keys(routes).includes(localizedPath);
  if (routeFallback && !isPregenerated && matchedStaticRoute.length === 0 && matchedDynamicRoute.length === 0) {
    return {
      event: {
        ...internalEvent,
        rawPath: "/404",
        url: constructNextUrl(internalEvent.url, "/404"),
        headers: {
          ...internalEvent.headers,
          "x-invoke-status": "404"
        }
      },
      isISR: false
    };
  }
  return {
    event: internalEvent,
    isISR: routeFallback || isPregenerated
  };
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routing/middleware.js
init_stream();
init_utils();
var middlewareManifest = MiddlewareManifest;
var functionsConfigManifest = FunctionsConfigManifest;
var middleMatch = getMiddlewareMatch(middlewareManifest, functionsConfigManifest);
var REDIRECTS = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function defaultMiddlewareLoader() {
  return Promise.resolve().then(() => (init_edgeFunctionHandler(), edgeFunctionHandler_exports));
}
async function handleMiddleware(internalEvent, initialSearch, middlewareLoader = defaultMiddlewareLoader) {
  const headers = internalEvent.headers;
  if (headers["x-isr"] && headers["x-prerender-revalidate"] === PrerenderManifest?.preview?.previewModeId)
    return internalEvent;
  const normalizedPath = localizePath(internalEvent);
  const hasMatch = middleMatch.some((r) => r.test(normalizedPath));
  if (!hasMatch)
    return internalEvent;
  const initialUrl = new URL(normalizedPath, internalEvent.url);
  initialUrl.search = initialSearch;
  const url = initialUrl.href;
  const middleware = await middlewareLoader();
  const result = await middleware.default({
    // `geo` is pre Next 15.
    geo: {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: decodeURIComponent(headers["x-open-next-city"]),
      country: headers["x-open-next-country"],
      region: headers["x-open-next-region"],
      latitude: headers["x-open-next-latitude"],
      longitude: headers["x-open-next-longitude"]
    },
    headers,
    method: internalEvent.method || "GET",
    nextConfig: {
      basePath: NextConfig.basePath,
      i18n: NextConfig.i18n,
      trailingSlash: NextConfig.trailingSlash
    },
    url,
    body: convertBodyToReadableStream(internalEvent.method, internalEvent.body)
  });
  const statusCode = result.status;
  const responseHeaders = result.headers;
  const reqHeaders = {};
  const resHeaders = {};
  const filteredHeaders = [
    "x-middleware-override-headers",
    "x-middleware-next",
    "x-middleware-rewrite",
    // We need to drop `content-encoding` because it will be decoded
    "content-encoding"
  ];
  const xMiddlewareKey = "x-middleware-request-";
  responseHeaders.forEach((value, key) => {
    if (key.startsWith(xMiddlewareKey)) {
      const k = key.substring(xMiddlewareKey.length);
      reqHeaders[k] = value;
    } else {
      if (filteredHeaders.includes(key.toLowerCase()))
        return;
      if (key.toLowerCase() === "set-cookie") {
        resHeaders[key] = resHeaders[key] ? [...resHeaders[key], value] : [value];
      } else if (REDIRECTS.has(statusCode) && key.toLowerCase() === "location") {
        resHeaders[key] = normalizeLocationHeader(value, internalEvent.url);
      } else {
        resHeaders[key] = value;
      }
    }
  });
  const rewriteUrl = responseHeaders.get("x-middleware-rewrite");
  let isExternalRewrite = false;
  let middlewareQuery = internalEvent.query;
  let newUrl = internalEvent.url;
  if (rewriteUrl) {
    newUrl = rewriteUrl;
    if (isExternal(newUrl, internalEvent.headers.host)) {
      isExternalRewrite = true;
    } else {
      const rewriteUrlObject = new URL(rewriteUrl);
      middlewareQuery = getQueryFromSearchParams(rewriteUrlObject.searchParams);
      if ("__nextDataReq" in internalEvent.query) {
        middlewareQuery.__nextDataReq = internalEvent.query.__nextDataReq;
      }
    }
  }
  if (!rewriteUrl && !responseHeaders.get("x-middleware-next")) {
    const body = result.body ?? emptyReadableStream();
    return {
      type: internalEvent.type,
      statusCode,
      headers: resHeaders,
      body,
      isBase64Encoded: false
    };
  }
  return {
    responseHeaders: resHeaders,
    url: newUrl,
    rawPath: new URL(newUrl).pathname,
    type: internalEvent.type,
    headers: { ...internalEvent.headers, ...reqHeaders },
    body: internalEvent.body,
    method: internalEvent.method,
    query: middlewareQuery,
    cookies: internalEvent.cookies,
    remoteAddress: internalEvent.remoteAddress,
    isExternalRewrite,
    rewriteStatusCode: rewriteUrl && !isExternalRewrite ? statusCode : void 0
  };
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/core/routingHandler.js
var MIDDLEWARE_HEADER_PREFIX = "x-middleware-response-";
var MIDDLEWARE_HEADER_PREFIX_LEN = MIDDLEWARE_HEADER_PREFIX.length;
var INTERNAL_HEADER_PREFIX = "x-opennext-";
var INTERNAL_HEADER_INITIAL_URL = `${INTERNAL_HEADER_PREFIX}initial-url`;
var INTERNAL_HEADER_LOCALE = `${INTERNAL_HEADER_PREFIX}locale`;
var INTERNAL_HEADER_RESOLVED_ROUTES = `${INTERNAL_HEADER_PREFIX}resolved-routes`;
var INTERNAL_HEADER_REWRITE_STATUS_CODE = `${INTERNAL_HEADER_PREFIX}rewrite-status-code`;
var INTERNAL_EVENT_REQUEST_ID = `${INTERNAL_HEADER_PREFIX}request-id`;
var geoHeaderToNextHeader = {
  "x-open-next-city": "x-vercel-ip-city",
  "x-open-next-country": "x-vercel-ip-country",
  "x-open-next-region": "x-vercel-ip-country-region",
  "x-open-next-latitude": "x-vercel-ip-latitude",
  "x-open-next-longitude": "x-vercel-ip-longitude"
};
var NEXT_INTERNAL_HEADERS = [
  "x-middleware-rewrite",
  "x-middleware-redirect",
  "x-middleware-set-cookie",
  "x-middleware-skip",
  "x-middleware-override-headers",
  "x-middleware-next",
  "x-now-route-matches",
  "x-matched-path",
  "x-nextjs-data",
  "x-next-resume-state-length"
];
function applyMiddlewareHeaders(eventOrResult, middlewareHeaders) {
  const isResult = isInternalResult(eventOrResult);
  const headers = eventOrResult.headers;
  const keyPrefix = isResult ? "" : MIDDLEWARE_HEADER_PREFIX;
  Object.entries(middlewareHeaders).forEach(([key, value]) => {
    if (value) {
      headers[keyPrefix + key] = Array.isArray(value) ? value.join(",") : value;
    }
  });
}
async function routingHandler(event, { assetResolver }) {
  try {
    for (const [openNextGeoName, nextGeoName] of Object.entries(geoHeaderToNextHeader)) {
      const value = event.headers[openNextGeoName];
      if (value) {
        event.headers[nextGeoName] = value;
      }
    }
    for (const key of Object.keys(event.headers)) {
      const lowerCaseKey = key.toLowerCase();
      if (lowerCaseKey.startsWith(INTERNAL_HEADER_PREFIX) || lowerCaseKey.startsWith(MIDDLEWARE_HEADER_PREFIX) || NEXT_INTERNAL_HEADERS.includes(lowerCaseKey)) {
        delete event.headers[key];
      }
    }
    let headers = getNextConfigHeaders(event, ConfigHeaders);
    let eventOrResult = fixDataPage(event, BuildId);
    if (isInternalResult(eventOrResult)) {
      return eventOrResult;
    }
    const redirect = handleRedirects(eventOrResult, RoutesManifest.redirects);
    if (redirect) {
      redirect.headers.Location = normalizeLocationHeader(redirect.headers.Location, event.url, true);
      debug("redirect", redirect);
      return redirect;
    }
    const middlewareEventOrResult = await handleMiddleware(
      eventOrResult,
      // We need to pass the initial search without any decoding
      // TODO: we'd need to refactor InternalEvent to include the initial querystring directly
      // Should be done in another PR because it is a breaking change
      new URL(event.url).search
    );
    if (isInternalResult(middlewareEventOrResult)) {
      return middlewareEventOrResult;
    }
    const middlewareHeadersPrioritized = globalThis.openNextConfig.dangerous?.middlewareHeadersOverrideNextConfigHeaders ?? false;
    if (middlewareHeadersPrioritized) {
      headers = {
        ...headers,
        ...middlewareEventOrResult.responseHeaders
      };
    } else {
      headers = {
        ...middlewareEventOrResult.responseHeaders,
        ...headers
      };
    }
    let isExternalRewrite = middlewareEventOrResult.isExternalRewrite ?? false;
    eventOrResult = middlewareEventOrResult;
    if (!isExternalRewrite) {
      const beforeRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.beforeFiles);
      eventOrResult = beforeRewrite.internalEvent;
      isExternalRewrite = beforeRewrite.isExternalRewrite;
      if (!isExternalRewrite) {
        const assetResult = await assetResolver?.maybeGetAssetResult?.(eventOrResult);
        if (assetResult) {
          applyMiddlewareHeaders(assetResult, headers);
          return assetResult;
        }
      }
    }
    const foundStaticRoute = staticRouteMatcher(eventOrResult.rawPath);
    const isStaticRoute = !isExternalRewrite && foundStaticRoute.length > 0;
    if (!(isStaticRoute || isExternalRewrite)) {
      const afterRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.afterFiles);
      eventOrResult = afterRewrite.internalEvent;
      isExternalRewrite = afterRewrite.isExternalRewrite;
    }
    let isISR = false;
    if (!isExternalRewrite) {
      const fallbackResult = handleFallbackFalse(eventOrResult, PrerenderManifest);
      eventOrResult = fallbackResult.event;
      isISR = fallbackResult.isISR;
    }
    const foundDynamicRoute = dynamicRouteMatcher(eventOrResult.rawPath);
    const isDynamicRoute = !isExternalRewrite && foundDynamicRoute.length > 0;
    if (!(isDynamicRoute || isStaticRoute || isExternalRewrite)) {
      const fallbackRewrites = handleRewrites(eventOrResult, RoutesManifest.rewrites.fallback);
      eventOrResult = fallbackRewrites.internalEvent;
      isExternalRewrite = fallbackRewrites.isExternalRewrite;
    }
    const isNextImageRoute = eventOrResult.rawPath.startsWith("/_next/image");
    const isRouteFoundBeforeAllRewrites = isStaticRoute || isDynamicRoute || isExternalRewrite;
    if (!(isRouteFoundBeforeAllRewrites || isNextImageRoute || // We need to check again once all rewrites have been applied
    staticRouteMatcher(eventOrResult.rawPath).length > 0 || dynamicRouteMatcher(eventOrResult.rawPath).length > 0)) {
      eventOrResult = {
        ...eventOrResult,
        rawPath: "/404",
        url: constructNextUrl(eventOrResult.url, "/404"),
        headers: {
          ...eventOrResult.headers,
          "x-middleware-response-cache-control": "private, no-cache, no-store, max-age=0, must-revalidate"
        }
      };
    }
    if (globalThis.openNextConfig.dangerous?.enableCacheInterception && !isInternalResult(eventOrResult)) {
      debug("Cache interception enabled");
      eventOrResult = await cacheInterceptor(eventOrResult);
      if (isInternalResult(eventOrResult)) {
        applyMiddlewareHeaders(eventOrResult, headers);
        return eventOrResult;
      }
    }
    applyMiddlewareHeaders(eventOrResult, headers);
    const resolvedRoutes = [
      ...foundStaticRoute,
      ...foundDynamicRoute
    ];
    debug("resolvedRoutes", resolvedRoutes);
    return {
      internalEvent: eventOrResult,
      isExternalRewrite,
      origin: false,
      isISR,
      resolvedRoutes,
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(eventOrResult, NextConfig.i18n) : void 0,
      rewriteStatusCode: middlewareEventOrResult.rewriteStatusCode
    };
  } catch (e) {
    error("Error in routingHandler", e);
    return {
      internalEvent: {
        type: "core",
        method: "GET",
        rawPath: "/500",
        url: constructNextUrl(event.url, "/500"),
        headers: {
          ...event.headers
        },
        query: event.query,
        cookies: event.cookies,
        remoteAddress: event.remoteAddress
      },
      isExternalRewrite: false,
      origin: false,
      isISR: false,
      resolvedRoutes: [],
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(event, NextConfig.i18n) : void 0
    };
  }
}
function isInternalResult(eventOrResult) {
  return eventOrResult != null && "statusCode" in eventOrResult;
}

// ../../node_modules/.pnpm/@opennextjs+aws@4.0.2_next@16.2.6_@babel+core@7.28.5_@opentelemetry+api@1.9.1_react-dom@19.0._t32vb7w422hcstl62dlmkqxygu/node_modules/@opennextjs/aws/dist/adapters/middleware.js
globalThis.internalFetch = fetch;
globalThis.__openNextAls = new AsyncLocalStorage();
var defaultHandler = async (internalEvent, options) => {
  const middlewareConfig = globalThis.openNextConfig.middleware;
  const originResolver = await resolveOriginResolver(middlewareConfig?.originResolver);
  const externalRequestProxy = await resolveProxyRequest(middlewareConfig?.override?.proxyExternalRequest);
  const assetResolver = await resolveAssetResolver(middlewareConfig?.assetResolver);
  const requestId = Math.random().toString(36);
  return runWithOpenNextRequestContext({
    isISRRevalidation: internalEvent.headers["x-isr"] === "1",
    waitUntil: options?.waitUntil,
    requestId
  }, async () => {
    const result = await routingHandler(internalEvent, { assetResolver });
    if ("internalEvent" in result) {
      debug("Middleware intercepted event", internalEvent);
      if (!result.isExternalRewrite) {
        const origin = await originResolver.resolve(result.internalEvent.rawPath);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_HEADER_INITIAL_URL]: internalEvent.url,
              [INTERNAL_HEADER_RESOLVED_ROUTES]: JSON.stringify(result.resolvedRoutes),
              [INTERNAL_EVENT_REQUEST_ID]: requestId,
              [INTERNAL_HEADER_REWRITE_STATUS_CODE]: String(result.rewriteStatusCode)
            }
          },
          isExternalRewrite: result.isExternalRewrite,
          origin,
          isISR: result.isISR,
          initialURL: result.initialURL,
          resolvedRoutes: result.resolvedRoutes
        };
      }
      try {
        return externalRequestProxy.proxy(result.internalEvent);
      } catch (e) {
        error("External request failed.", e);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_EVENT_REQUEST_ID]: requestId
            },
            rawPath: "/500",
            url: constructNextUrl(result.internalEvent.url, "/500"),
            method: "GET"
          },
          // On error we need to rewrite to the 500 page which is an internal rewrite
          isExternalRewrite: false,
          origin: false,
          isISR: result.isISR,
          initialURL: result.internalEvent.url,
          resolvedRoutes: [{ route: "/500", type: "page" }]
        };
      }
    }
    if (process.env.OPEN_NEXT_REQUEST_ID_HEADER || globalThis.openNextDebug) {
      result.headers[INTERNAL_EVENT_REQUEST_ID] = requestId;
    }
    debug("Middleware response", result);
    return result;
  });
};
var handler2 = await createGenericHandler({
  handler: defaultHandler,
  type: "middleware"
});
var middleware_default = {
  fetch: handler2
};
export {
  middleware_default as default,
  handler2 as handler
};
