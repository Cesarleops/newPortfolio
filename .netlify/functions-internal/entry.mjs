import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.9092f334.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.f6baa18a.mjs');
const _page1  = () => import('./chunks/experience@_@astro.1853a11a.mjs');
const _page2  = () => import('./chunks/projects@_@astro.9f4a8f81.mjs');
const _page3  = () => import('./chunks/about@_@astro.232e2ff8.mjs');
const _page4  = () => import('./chunks/home@_@astro.7c6ae72e.mjs');
const _page5  = () => import('./chunks/_project_@_@astro.2aa96dbd.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/experience.astro", _page1],["src/pages/projects.astro", _page2],["src/pages/about.astro", _page3],["src/pages/home.astro", _page4],["src/pages/[project].astro", _page5]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const a=()=>!!document.startViewTransition,i=async t=>{const e=await(await fetch(t)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);return o},r=()=>{a()&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await i(n.pathname);document.startViewTransition(()=>{document.body.innerHTML=e,document.documentElement.scrollTop=0})}})})};r();\n"}],"styles":[{"type":"external","src":"/_astro/_project_.0dc1c3b6.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const a=()=>!!document.startViewTransition,i=async t=>{const e=await(await fetch(t)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);return o},r=()=>{a()&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await i(n.pathname);document.startViewTransition(()=>{document.body.innerHTML=e,document.documentElement.scrollTop=0})}})})};r();\n"}],"styles":[{"type":"external","src":"/_astro/_project_.0dc1c3b6.css"}],"routeData":{"route":"/experience","type":"page","pattern":"^\\/experience\\/?$","segments":[[{"content":"experience","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experience.astro","pathname":"/experience","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const a=()=>!!document.startViewTransition,i=async t=>{const e=await(await fetch(t)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);return o},r=()=>{a()&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await i(n.pathname);document.startViewTransition(()=>{document.body.innerHTML=e,document.documentElement.scrollTop=0})}})})};r();\n"}],"styles":[{"type":"external","src":"/_astro/_project_.0dc1c3b6.css"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const a=()=>!!document.startViewTransition,i=async t=>{const e=await(await fetch(t)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);return o},r=()=>{a()&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await i(n.pathname);document.startViewTransition(()=>{document.body.innerHTML=e,document.documentElement.scrollTop=0})}})})};r();\n"}],"styles":[{"type":"external","src":"/_astro/_project_.0dc1c3b6.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const a=()=>!!document.startViewTransition,i=async t=>{const e=await(await fetch(t)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);return o},r=()=>{a()&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await i(n.pathname);document.startViewTransition(()=>{document.body.innerHTML=e,document.documentElement.scrollTop=0})}})})};r();\n"}],"styles":[{"type":"external","src":"/_astro/_project_.0dc1c3b6.css"}],"routeData":{"route":"/home","type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const a=()=>!!document.startViewTransition,i=async t=>{const e=await(await fetch(t)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);return o},r=()=>{a()&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await i(n.pathname);document.startViewTransition(()=>{document.body.innerHTML=e,document.documentElement.scrollTop=0})}})})};r();\n"}],"styles":[{"type":"external","src":"/_astro/_project_.0dc1c3b6.css"}],"routeData":{"route":"/[project]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"project","dynamic":true,"spread":false}]],"params":["project"],"component":"src/pages/[project].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/[project].astro",{"propagation":"none","containsHead":true}],["/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/experience.astro",{"propagation":"none","containsHead":true}],["/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/home.astro",{"propagation":"none","containsHead":true}],["/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about.astro.d1b7319a.mjs","/src/pages/experience.astro":"chunks/pages/experience.astro.f9028c47.mjs","/src/pages/home.astro":"chunks/pages/home.astro.5f0f2923.mjs","/src/pages/index.astro":"chunks/pages/index.astro.6a78639f.mjs","/src/pages/projects.astro":"chunks/pages/projects.astro.25e9a755.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.f6baa18a.mjs","\u0000@astro-page:src/pages/experience@_@astro":"chunks/experience@_@astro.1853a11a.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects@_@astro.9f4a8f81.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about@_@astro.232e2ff8.mjs","\u0000@astro-page:src/pages/home@_@astro":"chunks/home@_@astro.7c6ae72e.mjs","\u0000@astro-page:src/pages/[project]@_@astro":"chunks/_project_@_@astro.2aa96dbd.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.5b11af0b.js","@astrojs/react/client.js":"_astro/client.c67de31f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/noirprolight.3c9ef459.otf","/_astro/noirpro.b012d851.otf","/_astro/_project_.0dc1c3b6.css","/car.svg","/favicon.svg","/_astro/client.c67de31f.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
